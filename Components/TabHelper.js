import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
  Button,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
const HomeStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  },
);

const SettingsStack = createStackNavigator(
  {
    Settings: {screen: SettingsScreen},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  },
);


const TabScreen = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Settings: {screen: SettingsStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return (
            <View>
              <TouchableOpacity>
                {/*Donute Button Image */}
                <Image
                  source={require('../img/logo1.png')}
                  style={styles.homeicon}
                />
              </TouchableOpacity>
            </View>
          );
        }
        else if (routeName === 'Settings') {
          return (
            <View>
              <TouchableOpacity>
                {/*Donute Button Image */}
                <Image
                  source={require('../img/logo2.png')}
                  style={styles.settingicon}
                />
              </TouchableOpacity>
            </View>
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  },
);

const styles = StyleSheet.create({
  drawericon: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  homeicon: {
    width: 20,
    height: 25,
    position: 'relative',
    marginLeft: 10,
  },
  settingicon: {
    width: 20,
    height: 25,
    position: 'relative',
    marginLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  backgc: {
    backgroundColor: '#f9a616',
  }
});
export default createAppContainer(TabScreen);
