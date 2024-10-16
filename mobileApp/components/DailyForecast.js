// components/DailyForecast.js
import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import styles from '../styles/styles';

const DailyForecast = ({ dailyData }) => {

    const isToday = (dateString) => {
        const today = new Date();
        const date = new Date(dateString);
        return today.toDateString() === date.toDateString();
    };
    return (
        <FlatList
            data={dailyData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                const date = new Date(item.date);
                const dayName = isToday(item.date) ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'long' });
                const iconUrl = `https://openweathermap.org/img/wn/${item.icon}@2x.png` ;


                return (
                    <View style={styles.dailyItem}>
                        <Text style={styles.dailyDate}>{dayName}</Text>
                        <Image source={{ uri: iconUrl }} style={styles.dailyWeatherIcon} />
                        <View style= {styles.dailyTextContainer}>
                        <Text style={styles.dailyTemp}>
                            {item.temperature}°C - {item.description}
                        </Text>
                        </View>
                    </View>
                  );
                }}
            style={styles.dailyList}
        />
    );
};

export default DailyForecast;
