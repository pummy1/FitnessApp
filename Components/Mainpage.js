/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
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

//Import React Navigation
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

//Import all the screens
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Profile from './Profile';
//Import custom Drawer / sidebar
import SideMenu from './SideMenu';
import Classic from './Classic';
//Import custom Drawer / sidebar
import NotificationAlert from './NotificationAlert';

//Navigation Drawer Structure for all screen

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../img/drawer.png')}
                        style={styles.drawericon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../img/notification.png')}
                        style={styles.notification}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the First Option will be indexed here
    First: {
        screen: Screen1,
        navigationOptions: ({ navigation }) => ({
            title: 'GYM',
            headerLeft: () => (
                <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
                backgroundColor: '#f9a616',
            },
            headerTintColor: '#fff',
        }),
    },
});

//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Second Option will be indexed here
    Second: {
        screen: Screen2,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 2',
            headerLeft: () => (
                <NavigationDrawerStructure navigationProps={navigation} />
            ),

            headerStyle: {
                backgroundColor: '#f9a616',
            },
            headerTintColor: '#fff',
        }),
    },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Third Option will be indexed here
    Third: {
        screen: Screen3,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 3',
            headerLeft: () => (
                <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});
const Screen4_StackNavigator = createStackNavigator({
    //All the screen from the Third Option will be indexed here
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerLeft: () => (
                <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

//Drawer Navigator for the Navigation Drawer / Sidebar
const Drawer = createDrawerNavigator(
    {
        //Drawer Optons and indexing
        NavScreen1: { screen: FirstActivity_StackNavigator },
        NavScreen2: { screen: Screen2_StackNavigator },
        NavScreen3: { screen: Screen3_StackNavigator },
        NavScreen4: { screen: Screen4_StackNavigator },
    },
    {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width - 120,
    },
);

const styles = StyleSheet.create({
    drawericon: {
        width: 25,
        height: 25,
        marginLeft: 5,
    },
    notification: {
        width: 20,
        height: 25,
        position: 'relative',
        marginLeft: 340,
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
});

export default createAppContainer(Drawer);
