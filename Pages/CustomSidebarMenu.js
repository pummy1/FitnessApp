/*Example to Dynamically Change Drawer/Sidebar Options in React Navigation Drawer */
/* https://aboutreact.com/dynamically-change-sidebar-options/ */

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
const CustomSidebarMenu = (props) => {
  let [loginAs, setLoginAs] = useState('');

  useEffect(() => {
    setLoginAs(props.navigation.getParam('login', 'defaultValue'));
  }, []);
  // let items = [
  //   {
  //     navOptionThumb: 'camera',
  //     navOptionName: 'Home',
  //     screenToNavigate: 'First',
  //   },
  //   {
  //     navOptionThumb: 'image',
  //     navOptionName: 'About Us',
  //     screenToNavigate: 'Second',
  //   },
  //   {
  //     navOptionThumb: 'camera',
  //     navOptionName: 'Profile',
  //     screenToNavigate: 'Profile',
  //   },
  //   {
  //     navOptionThumb: 'image',
  //     navOptionName: 'Contact Us',
  //     screenToNavigate: 'Second',
  //   },
  //   {
  //     navOptionThumb: 'image',
  //     navOptionName: 'Share',
  //     screenToNavigate: 'Third',
  //   },
  // ];

  //Setting up the Main Top Large Image of the Custom Sidebar
  // this.proileImage ='../img/Recovered.png';
  //Array of the sidebar navigation option with icon and screen to navigate
  //This screens can be any screen defined in Drawer Navigator in App.js
  //You can find the Icons from here https://material.io/tools/icons/
  let items = [
    {
      navOptionThumb: 'camera',
      navOptionName: 'Home',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionThumb: 'image',
      navOptionName: 'About Us',
      screenToNavigate: 'SettingsScreen',
    },
    {
      navOptionThumb: 'image',
      navOptionName: 'Profile',
      screenToNavigate: 'ChangeOptionGuest',
    },
    {
      navOptionThumb: 'camera',
      navOptionName: 'Contact Us',
      screenToNavigate: 'ChangeOptionGuest',
    },
    {
      navOptionThumb: 'image',
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == 'logout') {
      props.navigation.toggleDrawer();
      props.navigation.navigate('LoginScreen');
    } else if (screenToNavigate == 'ChangeOptionGuest') {
      props.navigation.toggleDrawer();
      setLoginAs('guest');
    } else if (screenToNavigate == 'ChangeOptionUser') {
      props.navigation.toggleDrawer();
      setLoginAs('user');
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '20%',
          backgroundColor: '#3b4145',
          alignItems: 'center',
        }}>
        <Image
          source={require('../img/Recovered.png')}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
      </View>
      {/* <View style={stylesSidebar.profileHeaderLine} /> */}
      {/* <View style={{width: '100%', flex: 1}}>
        {itemsUser.map((item, key) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
              backgroundColor:
                global.currentScreenIndex === item.screenToNavigate
                  ? '#f9a616'
                  : '#ffffff',
            }}
            key={key}
            onStartShouldSetResponder={() =>
              handleClick(key, item.screenToNavigate)
            }>
            <View style={{marginRight: 10, marginLeft: 20}}>
              <Icon name={item.navOptionThumb} size={25} color="#3b4145" />
            </View>
            <Text style={{fontSize: 15, color: 'white'}}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View> */}

      <ScrollView>
        <View style={styles.sideMenuContainer}>
          {/*Setting up Navigation Options from option array using loop*/}
          <View style={{width: '100%'}}>
            {items.map((item, key) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor:
                    global.currentScreenIndex === item.screenToNavigate
                      ? '#f9a616'
                      : '#ffffff',
                }}
                key={key}
                onStartShouldSetResponder={() =>
                  handleClick(key, item.screenToNavigate)
                }>
                <View style={{marginRight: 10, marginLeft: 20}}>
                  <Icon name={item.navOptionThumb} size={25} color="#3b4145" />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    color:
                      global.currentScreenIndex === key ? '#ffffff' : '#3b4145',
                  }}>
                  {item.navOptionName}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <Text style={styles.textSt}>Logout</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  sideMenuProfileIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#f9a616',
    alignItems: 'center',
  },
  textSt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

// const stylesSidebar = StyleSheet.create({
//   sideMenuContainer: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#307ecc',
//     paddingTop: 40,
//     color: 'white',
//   },
//   profileHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#307ecc',
//     padding: 15,
//     textAlign: 'center',
//   },
//   profileHeaderPicCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 60 / 2,
//     color: 'white',
//     backgroundColor: '#ffffff',
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileHeaderText: {
//     color: 'white',
//     alignSelf: 'center',
//     paddingHorizontal: 10,
//     fontWeight: 'bold',
//   },
//   profileHeaderLine: {
//     height: 1,
//     marginHorizontal: 20,
//     backgroundColor: '#e2e2e2',
//     marginTop: 15,
//     marginBottom: 10,
//   },
//   sideMenuProfileIcon: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//   },
// });
export default CustomSidebarMenu;
