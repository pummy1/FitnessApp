/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {apiConfig} from './config';
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
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
// import { RadioButton } from 'react-native-paper';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';

import Toast from 'react-native-simple-toast';
const FirstStepSig: () => React$Node = ({navigation}) => {
  let [Username, setUsername] = useState('');
  let [Userpassword, setUserpassword] = useState('');
  let [UserConfirmpassword, setUserConfirmpassword] = useState('');

  const handleSubmitPress = () => {
    if (!Username) {
      Toast.show('Please fill Email');
      return;
    }
    if (!Userpassword) {
      Toast.show('Please fill Password');
      return;
    }
    if (!UserConfirmpassword) {
      Toast.show('Please fill Confirn Password');
      return;
    }

    if (
      Username != null &&
      Userpassword != null &&
      UserConfirmpassword != null
    ) {
      if (Userpassword != UserConfirmpassword) {
        Toast.show('Password And Confirm Password not matched');
        return;
      } else {
        let data = new FormData();
        data.append('email', Username);
        data.append('password', Userpassword);

        //POST request
        fetch(apiConfig.baseUrl + 'signup_one_1.php', {
          method: 'POST', //Request Type
          body: data, //post body
          headers: {
            //Header Defination
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((response) => response.json())
          //If response is in json then in success
          .then((responseJson) => {
            if (responseJson.status == 'true') {
              AsyncStorage.setItem('signup_user_id', responseJson.user_id);
              Toast.show('Success');
              navigation.navigate('SecondStepSig');
            } else {
              navigation.navigate('SignupFirstScreen');
              Toast.show('Something Went Wrong');
            }

            console.log(responseJson);
          })
          //If response is not in json then in error
          .catch((error) => {
            // alert(JSON.stringify(error));
            console.error(error);
            Toast.show('Something Went Wrong');
          });
      }
    } else {
      Toast.show('Something Went Wrong');
    }
  };
  return (
    <>
      <StatusBar barStyle="default" />

      <View style={styles.container}>
        <ImageBackground source={require('../img/1.jpg')} style={styles.image}>
          <Image
            source={require('../img/fit-logo-Recovered.png')}
            style={styles.tinyLogo}
          />
          <Text style={styles.header}>Signup to stay fit</Text>
          <Text style={styles.headerbar}>
            Save Money With Club Membership Card
          </Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'android' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.SectionStyleUsername} accessible={true}>
              <Image
                source={require('../img/email.png')}
                style={styles.imageStyle}
              />

              <TextInput
                accessible={true}
                accessibilityLabel="email"
                style={styles.textinput}
                placeholder="SignupEmail"
                placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'}
                onChangeText={(Username) => setUsername(Username)}
              />
            </View>

            <View style={styles.SectionStyle} accessible={true}>
              <Image
                source={require('../img/password-(1).png')}
                style={styles.imageStyle}
              />

              <TextInput
                accessible={true}
                accessibilityLabel="password"
                style={styles.textinput}
                secureTextEntry={true}
                placeholder="SignupPassword"
                onChangeText={(Userpassword) => setUserpassword(Userpassword)}
                placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'}
              />
            </View>

            <View style={styles.SectionStyle} accessible={true}>
              <Image
                source={require('../img/password.png')}
                style={styles.imageStyle}
              />

              <TextInput
                accessibilityLabel="confirmpassword"
                style={styles.textinput}
                secureTextEntry={true}
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'}
                onChangeText={(UserConfirmpassword) =>
                  setUserConfirmpassword(UserConfirmpassword)
                }
              />
            </View>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Signup"
              style={styles.buttoncontainer}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.headerbarButon}>Sign up</Text>
            </TouchableOpacity>

            {/*<View style={styles.socialbottom}>*/}
            {/*  <TouchableOpacity style={styles.btnLeft}>*/}
            {/*    <Image*/}
            {/*      source={require('../img/facebook.png')}*/}
            {/*      style={styles.img}*/}
            {/*    />*/}
            {/*  </TouchableOpacity>*/}
            {/*  <TouchableOpacity style={styles.btn}>*/}
            {/*    <Image*/}
            {/*      source={require('../img/twitter.png')}*/}
            {/*      style={styles.img}*/}
            {/*    />*/}
            {/*  </TouchableOpacity>*/}

            {/*  <TouchableOpacity style={styles.btnRight}>*/}
            {/*    <Image*/}
            {/*      source={require('../img/google-plus.png')}*/}
            {/*      style={styles.img}*/}
            {/*    />*/}
            {/*  </TouchableOpacity>*/}
            {/*</View>*/}

            <View style={styles.bottom}>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Login"
                style={styles.buttoncontainerSignIn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.headerbarButonSignIn}>
                  You have an account ? Login Now
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 130,
    height: 40,
    alignSelf: 'center',
    marginTop: 60,
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    // marginBottom: 40,
    color: '#595856',
  },
  header: {
    fontSize: 20,
    color: '#f9a717',
    alignSelf: 'center',
    marginTop: 50,
  },
  headerbar: {
    fontSize: 10,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 10,
  },
  headerbarButon: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  textinput: {
    alignSelf: 'center',
    height: 40,
    width: 300,
    paddingLeft: 40,
    marginBottom: 20,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  buttoncontainer: {
    height: 46,
    width: 250,
    borderRadius: 46,
    backgroundColor: '#f9a717',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    alignSelf: 'center',
    height: 80,
    width: 300,
  },
  inputStyle: {
    flex: 1,
  },
  SectionStyleUsername: {
    flexDirection: 'row',
    width: 350,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 40,
    alignSelf: 'center',
    marginTop: 40,

    margin: 10,
  },
  SectionStyle: {
    flexDirection: 'row',
    width: 350,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 40,
    alignSelf: 'center',
    marginTop: 20,

    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    left: 30,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  // buttoncontainerForget : {
  //     height : 40,
  //     width : 250,
  //     borderRadius : 40,
  //     backgroundColor : '#00000000',
  //     paddingVertical: 10,
  //     justifyContent: 'center',
  //     alignSelf : 'center',
  //     marginTop: 0,
  // },
  // headerbarButonForgot : {
  //     fontSize : 13,
  //     color : '#fff',
  //     alignSelf: 'center',
  // },
  buttoncontainerSignIn: {
    height: 40,
    width: 250,
    borderRadius: 40,
    backgroundColor: '#00000000',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    // marginBottom: 70,
    marginTop: 40,
  },
  headerbarButonSignIn: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: '#00000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageClass: {
    width: 24,
    alignSelf: 'center',
    alignItems: 'center',
    height: 24,
  },
  socialcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  img: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 36,
    width: 36,
  },
  btn: {
    flex: 1,
    height: 24,
    width: 24,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  btnLeft: {
    flex: 1,
    height: 24,
    width: 24,
    left: 85,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  btnRight: {
    flex: 1,
    height: 24,
    width: 24,
    left: -85,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  socialbottom: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'flex-end',
    marginBottom: -110,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 70,
  },
});
export default FirstStepSig;
