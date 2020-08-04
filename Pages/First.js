/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import { StackActions, createAppContainer } from "react-navigation";

const First: () => React$Node = ({navigation}) => {
  // export default class First extends React.Component {
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
          <View style={styles.button}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Getstarted"
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('LoginScreen')}
              // onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.TextStyle}> GET STARTED </Text>
            </TouchableOpacity>
          </View>
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
  button: {
    // flex: 2,
    // justifyContent: 'flex-end',
    // marginBottom: 0,
  },
  SubmitButtonStyle: {
    justifyContent: 'flex-end',
    marginTop: 390,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 40,
    marginRight: 40,
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
export default First;
