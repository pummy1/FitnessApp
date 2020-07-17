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
    ImageBackground, TouchableOpacity,
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
import Screen3 from './Screen3';
import HomeScreen from './HomeScreen';
import Forget from './Forget';
import Login from './Login';
import Homeredir from './Homeredir';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import FirstStepSig from './FirstStepSig';
import First from './First';
import SideMenu from './SideMenu';
const NavigationDrawerStructure = (props)=> {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={()=> toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
            </TouchableOpacity>
        </View>
    );
}

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Get';

    switch (routeName) {
        case 'HomeScreen':
            return 'Home';
        case 'ExploreScreen':
            return 'Explore';
        case 'BottomTabStack':
            return 'Home';
    }
}

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            {/*<NavigationContainer>*/}
            {/*    <Drawer.Navigator*/}
            {/*        drawerContentOptions={{*/}
            {/*            activeTintColor: '#e91e63',*/}
            {/*            itemStyle: { marginVertical: 5 },*/}
            {/*        }}>*/}
            {/*        <Drawer.Screen*/}
            {/*            name="Get"*/}
            {/*            options={{ drawerLabel: 'Home Screen Option' }}*/}
            {/*            component={First} />*/}

            {/*    </Drawer.Navigator>*/}
            {/*</NavigationContainer>*/}
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
