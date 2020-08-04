/*Example to Dynamically Change Drawer/Sidebar Options in React Navigation Drawer */
/* https://aboutreact.com/dynamically-change-sidebar-options/ */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="default" />

      <ImageBackground
        source={require('../img/fdgh.jpg')}
        style={{
          flex: 1,
        }}>
        <Image
          source={require('../img/fit-logo-Recovered.png')}
          style={styles.logo}
        />
        <View>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('LoginScreen')}
            // onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.TextStyle}> GET STARTED </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container: {
    color: 'white',
  },
  SubmitButtonStyle: {
    marginTop: 430,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 40,
    marginRight: 40,
    // backgroundColor:'#00BCD4',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  logo: {
    marginLeft: 108,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SettingsScreen;
