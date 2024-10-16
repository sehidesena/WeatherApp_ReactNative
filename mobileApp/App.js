import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Alert, ImageBackground, Text } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import styles from './styles/styles';
import * as Notifications from 'expo-notifications';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [forecastData, setForecastData] = useState(null);
    const [isNotificationScheduled, setIsNotificationScheduled] = useState(false); // Bildirim durumu

    // Hava durumu verilerini almak için API çağrısı
    const fetchForecastData = async () => {
        try {
            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;

            // Axios ile API çağrısı
            const response = await axios({
                method: 'get',
                url: `http://192.168.0.120:5000/forecast/${latitude}/${longitude}`,
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data; 
        } catch (error) {
            console.error('Weather data error:', error.message);
            return null;
        }
    };

    const scheduleNotification = async (temperature) => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Hourly Weather Update",
                body: `Current Temperature: ${temperature}°C`,
                sound: true,
            },
            trigger: { seconds: 3600, repeats: true }, 
        });

        console.log('Notification sent successfully.');
        setIsNotificationScheduled(true); 
    };

    useEffect(() => {
        const requestPermissions = async () => {
            const { status } = await Notifications.getPermissionsAsync();
            if (status !== 'granted') {
                const { status: newStatus } = await Notifications.requestPermissionsAsync();
                if (newStatus !== 'granted') {
                    Alert.alert('Notification permission denied!');
                }
            }
        };

        const startBackgroundTask = async () => {
            const data = await fetchForecastData();
            if (data && !isNotificationScheduled) {
                const currentTemperature = data.currentWeather.temperature;
                await scheduleNotification(currentTemperature); 
            }
        };

        requestPermissions();
        startBackgroundTask();

        return () => {
            // Temizleme işlemleri 
        };
    }, [isNotificationScheduled]); // isNotificationScheduled değiştiğinde effect yeniden çalışır

    useEffect(() => {
        const getLocationAndFetchForecast = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert('Location information could not be retrieved!');
                    setLoading(false);
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const { latitude, longitude } = location.coords;

                const data = await fetchForecastData(latitude, longitude);
                setForecastData(data);
                setLoading(false);
            } catch (error) {
                console.error('Location errors:', error);
                setLoading(false);
            }
        };

        getLocationAndFetchForecast();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

    if (!forecastData) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>	No data retrieved.</Text>
            </View>
        );
    }

    return (
        <ImageBackground source={require('./deneme.jpg')} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.overlay} />
            <CurrentWeather weather={forecastData.currentWeather} />
            <HourlyForecast hourlyData={forecastData.hourly} />
            <DailyForecast dailyData={forecastData.daily} />
        </ImageBackground>
    );
};

export default App;
