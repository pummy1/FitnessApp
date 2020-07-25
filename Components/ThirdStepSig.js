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
  ImageBackground, TouchableOpacity,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-simple-toast';

import FlipToggle from 'react-native-flip-toggle-button'
import {apiConfig} from './config';
import AsyncStorage from '@react-native-community/async-storage';
const  ThirdStepSig: () => React$Node = ({ navigation }) => {
// export default class First extends React.Component {
  let [Weight, setWeight] = useState('');
  let [Height, setHeight] = useState('');
  let [Address, setAddress] = useState('');
  let [Country, setCountry] = useState('');
  let [Pincode, setPincode] = useState('');
  let [State, setState] = useState('');

  const handleSubmitPressSetpThree = () => {
    if (!Weight) {
      Toast.show('Please fill Weight');
      return;
    }
    if (!Height) {
      Toast.show('Please fill Height');
      return;
    }
    if(!Address){
      Toast.show('Please fill Address');
      return;
    }
    if(!Country){
      Toast.show('Please fill Country');
      return;
    }
    if(!Pincode){
      Toast.show('Please fill First Pincode');
      return;
    }
    if(!State){
      Toast.show('Please fill First State');
      return;
    }
    if (Height != null && Weight != null && Address != null && Country != null && Pincode != null && State != null) {
      let data = new FormData();
      AsyncStorage.getItem("signup_user_id").then((user_id) => {
        // this.setState({"signup_user_id": user_id});

        let user_save_id=user_id;
      data.append('user_id', user_save_id);
      data.append('weight', Weight);
      data.append('height', Height);
      data.append('address', Address);
      data.append('country', Country);
      data.append('pin_code', Pincode);
      data.append('state', State);

      //POST request
      fetch(apiConfig.baseUrl+ 'signup_three_3.php',
          {
            method: 'POST', //Request Type
            body: data, //post body
            headers: {
              //Header Defination
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
          },
      )
          .then(response => response.json())
          //If response is in json then in success
          .then(responseJson => {
            if(responseJson.status=="true"){
              Toast.show('Success');
              navigation.navigate('Terms');
            }
            else{
              Toast.show('Something Went Wrong');
              navigation.navigate('ThirdStepSig');
              // alert('Something Went Wrong');
            }

            console.log(responseJson);
          })
          //If response is not in json then in error
          .catch(error => {
            Toast.show('Something Went Wrong');
            // alert(JSON.stringify(error));
            console.error(error);
          });
      })
    }
  }
  return (
      <>
        <StatusBar barStyle="default"/>
        <ImageBackground
            source={require('../img/4.jpg')}
            style={{
              flex: 1,
            }}>
          <KeyboardAwareScrollView  enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}>

          <Image source={require('../img/fit-logo-Recovered.png')}
                 style={styles.logo}>
          </Image>

          <View style = {styles.inputContainer}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "WEIGHT"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
                       onChangeText={Weight => setWeight(Weight)}
            />
          </View>
          <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "HEIGHT"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
                       onChangeText={Height => setHeight(Height)}
            />
          </View>
          <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "ADDRESS"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
                       onChangeText={Address => setAddress(Address)}
            />
          </View>
            <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "COUNTRY"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
                       onChangeText={Country => setCountry(Country)}
            />
            </View>
            <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "PIN CODE"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
                       onChangeText={Pincode => setPincode(Pincode)}
            />
            </View>
            <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "STATE"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
                       onChangeText={State => setState(State)}
            />
          </View>
            <View>
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={handleSubmitPressSetpThree}>
              <Image source={require('../img/arrow1.png')}  style={styles.TextStyle}/>
            </TouchableOpacity>
            </View>

          </KeyboardAwareScrollView>

        </ImageBackground>
      </>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  SubmitButtonStyle: {
    marginTop:50,
    paddingTop:15,
    paddingBottom:15,
    // marginLeft:40,
    // marginRight:40,
    alignSelf: 'center',
  },
  TextStyle:{
    // textAlign:'center',
    // fontWeight:'bold',
    // fontSize:17
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height : 50,
    width:50,
    alignSelf: 'center',
  },
  logo:{
    marginLeft: 108,
    marginTop: 40,
    alignItems: 'center',
    justifyContent:'center',

  },
  input: {
    height: 50,
    width:375,
    borderColor: '#fff',
    borderWidth: 0,
    borderStyle: 'solid',
    color: '#fff',
    fontSize: 15,
    marginLeft:15,
  },
  inputContainer:{
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    height: 50,
    width: 375,
    marginTop:30,
    marginLeft:15
  },
  inputContainer2:{
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    height: 50,
    width: 375,
    marginTop:10,
    marginLeft:15
  },
  Bottomimg: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height : 50,
    width:50,
    // marginTop:40
  },
  Bottombtn: {
    flex: 1,
    height:36,
    width:36,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop:30
  },
  bottom: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    // bottom: 0,
    // marginTop:1000
  },

});
export default ThirdStepSig;
