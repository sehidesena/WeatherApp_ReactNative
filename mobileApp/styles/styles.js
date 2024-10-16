import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101820',
        paddingTop: Constants.statusBarHeight,
    },

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(16, 24, 32, 0.7)', 
    },

    currentWeatherContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.08)', 
        borderRadius: 15,
        padding: 65,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        marginTop:35,
    },
    weatherInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    temperatureText: {
        fontSize: 40, 
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20,
    },
    weatherIcon: {
        width: 65,
        height: 65,
        resizeMode: 'contain',
    },
    descriptionText: {
        fontSize: 16, 
        fontWeight: '500',
        color: '#FFFFFF',
        marginTop: 15,
        textTransform: 'capitalize',
    },
 
    hourlyItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.12)', 
        padding: 8,
        borderRadius: 10,
        marginHorizontal: 9,
        alignItems: 'center',
        width: 80, 
        height:110,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        marginTop:35,
    },
    hourlyTime: {
        fontSize: 15, 
        color: '#ffffff',
        marginTop:5,
        marginBottom: 3,
    },
    hourlyTemp: {
        fontSize: 15,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    hourlyWeatherIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginBottom: 5, 
    },
    dailyList: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#2E2E2E',
        marginTop:30,
        marginBottom:25,
    },
    dailyItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.10)', 
        padding: 12,
        marginVertical: 6,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dailyWeatherIcon: {
        width: 30,
        height: 30,
        marginRight: 50,
    },
    dailyTextContainer: {
   marginRight:15,
    },
    dailyDate: {
        fontSize: 14, 
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    dailyTemp: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft:50 ,
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18, 
        color: '#FF6347',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});