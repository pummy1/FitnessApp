
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
export default class SideMenu extends Component {

  constructor() {

    super();
    this.items = [
      {
        navOptionThumb: 'camera',
        navOptionName: 'Home',
        screenToNavigate: 'First',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'About Us',
        screenToNavigate: 'Second',
      },
      {
        navOptionThumb: 'camera',
        navOptionName: 'Profile',
        screenToNavigate: 'Profile',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'Contact Us',
        screenToNavigate: 'Second',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'Share',
        screenToNavigate: 'Third',
      },
    ];
  }

    loginclick = () => {
    alert("Are you sure ?");
      AsyncStorage.clear(); // to clear the token
    this.props.navigation.navigate('Login');
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/*Top Large Image */}
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
        <ScrollView>
          <View style={styles.sideMenuContainer}>
            
            {/*Setting up Navigation Options from option array using loop*/}
            <View style={{width: '100%'}}>
              {this.items.map((item, key) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor:
                      global.currentScreenIndex === key ? '#f9a616' : '#ffffff',
                  }}
                  key={key}>
                  <View style={{marginRight: 10, marginLeft: 20}}>
                    <Icon
                      name={item.navOptionThumb}
                      size={25}
                      color="#3b4145"
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 15,
                      color:
                        global.currentScreenIndex === key ? '#ffffff' : '#3b4145',
                    }}
                    onPress={() => {
                      global.currentScreenIndex = key;
                      this.props.navigation.navigate(item.screenToNavigate);
                    }}>
                    {item.navOptionName}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>


          <TouchableOpacity onPress={(this.loginclick)}>
            <View style={styles.footerContainer}>
          <Text style={styles.textSt}>Logout</Text>

        </View>
          </TouchableOpacity>
      </View>
    );
  }
}

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
    fontSize:20,
  },
});
