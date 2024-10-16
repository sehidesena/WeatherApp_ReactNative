import { AppRegistry } from 'react-native';
import App from './App'; // App.js dosyasından gelen App bileşeni
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
