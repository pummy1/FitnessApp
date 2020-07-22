/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './Components/App';
import First from './Components/First';
import Homeold from './Components/Homeold';
import createAppContainer from './Components/App';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => createAppContainer);
