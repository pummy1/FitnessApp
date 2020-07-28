/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import SecondStepSig from './SecondStepSig';
import HomeScreen from './HomeScreen';
import Forget from './Forget';
import Login from './Login';
import FirstStepSig from './FirstStepSig';
import ThirdStepSig from './ThirdStepSig';
import Terms from './Terms';
import Classic from './Classic';
import Bulk from './Bulk';
import Tone from './Tone';
import Crosshred from './Crossshred';
import Leanx from './Leanx';
import Athlete from './Athlete';
import Profile from './Profile';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SideMenu from './SideMenu';
import First from './First';
import Homeredir from './Homeredir';
const Stack = createStackNavigator();
const App: () => React$Node = () => {

  return (

    <>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Get" screenOptions={{
          headerShown: false
        }}>
              <Stack.Screen
              name="Get"
              component={First}
              />
              <Stack.Screen
              name="Login"
              component={Login}
              />
              <Stack.Screen
              name="FirstStepSig"
              component={FirstStepSig}
              />
              <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              />
              <Stack.Screen name="Forget"
              component={Forget}
              />
              <Stack.Screen
              name="Homeredir"
              component={Homeredir}
              />
              <Stack.Screen name="SecondStepSig"
                            component={SecondStepSig}
                            />
            <Stack.Screen name="ThirdStepSig"
                          component={ThirdStepSig}
            />
            <Stack.Screen name="Terms"
                          component={Terms}
            />
            <Stack.Screen name="Classic"
                          component={Classic}
            />
            <Stack.Screen name="Bulk"
                          component={Bulk}
            />
            <Stack.Screen name="Tone"
                          component={Tone}
            />
            <Stack.Screen name="Crosshred"
                          component={Crosshred}
            />
            <Stack.Screen name="Leanx"
                          component={Leanx}
            />
            <Stack.Screen name="Athlete"
                          component={Athlete}
            />
            <Stack.Screen name="Profile"
                          component={Profile}
            />


        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 0,
    borderStyle: 'solid',
  },
});
export default App;