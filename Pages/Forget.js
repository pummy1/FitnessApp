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
// import FlipToggle from 'react-native-flip-toggle-button';
import {apiConfig} from './config';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
const Forget: () => React$Node = ({navigation}) => {
  // export default class First extends React.Component {
  let [userEmail, setUserEmail] = useState('');
  const handleSubmitPressforget = async () => {
    // const handleSubmitPressLogin = () => {
    if (!userEmail) {
      Toast.show('Please fill Email');
      return;
    }

    if (userEmail != null) {
      let data = new FormData();
      data.append('email', userEmail);

      //POST request
      fetch(apiConfig.baseUrl + 'forget_pass.php', {
        method: 'POST', //Request Type
        body: data, //post body
        headers: {
          //Header Defination
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == 'true') {
            Toast.show('Otp ' + responseJson.password);
            // alert('Plz check mail for password');
            navigation.navigate('login');
          } else {
            Toast.show('Something went to Wrong');
            navigation.navigate('Forget');
            // alert('Something went to Wrong');
          }
        })
        //If response is not in json then in error
        .catch((error) => {
          Toast.show('Something went to Wrong');
          // alert(JSON.stringify(error));
          console.error(error);
        });
    }
  };
  return (
    <>
      <StatusBar barStyle="default" />
      <ImageBackground
        source={require('../img/4.jpg')}
        style={{
          flex: 1,
        }}>
        <Image
          source={require('../img/fit-logo-Recovered.png')}
          style={styles.logo}
        />

        <View style={styles.inputContainer}>
          <TextInput
            accessible={true}
            accessibilityLabel="email"
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="@Email"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
          />
        </View>
        <View>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Submit"
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitPressforget}>
            <Text style={styles.TextStyle}> SUBMIT </Text>
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

  SubmitButtonStyle: {
    marginTop: 280,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#F9A717',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#F9A717',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    marginLeft: 75,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 375,
    borderColor: '#fff',
    borderWidth: 0,
    borderStyle: 'solid',
    color: '#fff',
    fontSize: 25,
    marginLeft: 15,
  },
  inputContainer: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    height: 50,
    width: 375,
    marginTop: 100,
    marginLeft: 15,
  },
});
export default Forget;
