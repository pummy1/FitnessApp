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
    ImageBackground
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstStepSig from './FirstStepSig';
import First from './First';
import Login from './Login';

const Stack = createStackNavigator();
const App: () => React$Node = () => {

    return (

        <>
            <StatusBar barStyle="dark-content" />

            <NavigationContainer>
                <Stack.Navigator initialRouteName="Get"  screenOptions={{
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
