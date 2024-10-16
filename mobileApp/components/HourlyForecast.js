// components/HourlyForecast.js
import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import styles from '../styles/styles';

const HourlyForecast = ({ hourlyData }) => {
    return (
        <FlatList
            data={hourlyData}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                const iconUrl = `https://openweathermap.org/img/wn/${item.icon}@2x.png` ;

                return(
                <View style={styles.hourlyItem}>
                    <Text style={styles.hourlyTime}>{item.time.split(' ')[1].substring(0, 5)}</Text>
                    <Image source={{ uri: iconUrl }} style={styles.hourlyWeatherIcon} />
                    <Text style={styles.hourlyTemp}>{item.temperature}°C</Text>
                </View>
                );
            }}
            style={styles.hourlyList}
        />
    );
};

export default HourlyForecast;
