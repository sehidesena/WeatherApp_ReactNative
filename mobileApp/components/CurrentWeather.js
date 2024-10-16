import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';


const CurrentWeather = ({ weather }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${weather["icon"]}@2x.png`;


    return (
        <View style={styles.currentWeatherContainer}>
            <View style={styles.weatherInfoContainer}>
                <Text style={styles.temperatureText}>{weather["temperature"]}°C</Text>
                <Image source={{ uri: iconUrl }} style={styles.weatherIcon}/> 
            </View>
            <Text style={styles.descriptionText}>{<Icon name="map-pin" size={24} color={"#fff"} />}  {weather["city"] }  {weather["country_code"]}</Text>
        </View>
    );
};

export default CurrentWeather;
