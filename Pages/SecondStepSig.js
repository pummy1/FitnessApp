/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {apiConfig} from './config';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RadioButton from '../Pages/RadioButton';
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  CheckBox,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

const image = {};
const SecondStepSig: () => React$Node = ({navigation}) => {
  const [gender, setGender] = useState('male');
  const [femaleCheck, setFemaleCheck] = useState(false);
  const [maleCheck, setMaleCheck] = useState(true);

  let [Fname, setFname] = useState('');
  let [Lname, setLname] = useState('');
  let [Dob, setDob] = useState('');
  let [Mob, setMob] = useState('');

  const maleRadioHandler = () => {
    if (femaleCheck) {
      setFemaleCheck(false);
      setMaleCheck(true);
      setGender('male');
    } else {
      setMaleCheck(true);
      setGender('male');
    }
  };
  const femaleRadioHandler = () => {
    if (maleCheck) {
      setMaleCheck(false);
      setFemaleCheck(true);
      setGender('female');
    } else {
      setFemaleCheck(true);
      setGender('female');
    }
  };

  const handleSubmitPress = async () => {
    if (!Fname) {
      Toast.show('Please fill First Name');
      return;
    }
    if (!Lname) {
      Toast.show('Please fill Last Name');
      return;
    }
    if (!Dob) {
      Toast.show('Please fill DOB');
      return;
    }
    if (!Mob) {
      Toast.show('Please fill mobile');
      return;
    }
    if (!gender) {
      Toast.show('Please fill gender');
      return;
    }
    if (
      Fname != null &&
      Lname != null &&
      Dob != null &&
      Mob != null &&
      gender != null
    ) {
      AsyncStorage.getItem('signup_user_id').then((user_id) => {
        let user_save_id = user_id;
        let data = new FormData();
        data.append('first_name', Fname);
        data.append('last_name', Lname);
        data.append('dob', Dob);
        data.append('mobile', Mob);
        data.append('gender', gender);
        data.append('user_id', user_save_id);

        //POST request
        fetch(apiConfig.baseUrl + 'signup_two_2.php', {
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
              Toast.show('Success');
              navigation.navigate('ThirdStepSig');
            } else {
              navigation.navigate('SecondStepSig');
              Toast.show('Something Went Wrong');
            }
          })
          //If response is not in json then in error
          .catch((error) => {
            // alert(JSON.stringify(error));
            Toast.show('Something Went Wrong');
            console.error(error);
          });
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../img/1.jpg')} style={styles.image}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraHeight={130}
          extraScrollHeight={130}>
          <Image
            style={styles.tinyLogo}
            source={require('../img/fit-logo-Recovered.png')}
          />

          <View style={styles.SectionStyleUsername} accessible={true}>
            <TextInput
              accessibilityLabel="Fname"
              style={styles.textinput}
              placeholder="FIRSTNAME"
              onChangeText={(Fname) => setFname(Fname)}
              placeholderTextColor="#fff"
              underlineColorAndroid={'transparent'}
            />
          </View>
          <View style={styles.SectionStyle} accessible={true}>
            <TextInput
              accessibilityLabel="Lname"
              style={styles.textinput}
              placeholder="LASTNAME"
              placeholderTextColor="#fff"
              onChangeText={(Lname) => setLname(Lname)}
              underlineColorAndroid={'transparent'}
            />
          </View>
          <View style={styles.SectionStyle} accessible={true}>
            <TextInput
              accessibilityLabel="Dob"
              style={styles.textinput}
              placeholder="DATE OF BIRTH"
              placeholderTextColor="#fff"
              onChangeText={(Dob) => setDob(Dob)}
              underlineColorAndroid={'transparent'}
            />
          </View>
          {/*<View style={styles.SectionStyle}>*/}
          {/*    <TextInput  style={styles.textinput} placeholder="Date Of Birth" placeholderTextColor="#fff" underlineColorAndroid={'transparent'} />*/}
          {/*</View>*/}

          <View style={styles.SectionStyle} accessible={true}>
            <TextInput
              accessibilityLabel="mobile"
              style={styles.textinput}
              placeholder="Mobile No."
              placeholderTextColor="#fff"
              onChangeText={(Mob) => setMob(Mob)}
              underlineColorAndroid={'transparent'}
            />
          </View>
          <View
            accessible={true}
            style={{
              ...styles.blockContainer,
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 15,
              paddingHorizontal: 10,
              backgroundColor: '#00000000',
            }}>
            {/*<View style={styles.blockContainer}>*/}
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>Gender :</Text>
            </View>
          </View>
          <View
            style={{
              ...styles.blockContainerCheckbox,
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 15,
              paddingHorizontal: 10,
              backgroundColor: '#00000000',
            }}>
            <Text style={styles.radioText}>Male: </Text>
            <RadioButton
              accessible={true}
              onPress={maleRadioHandler}
              checked={maleCheck}
              accessibilityLabel="male"
            />
            <Text style={styles.radioText}> Female: </Text>
            <RadioButton
              accessible={true}
              checked={femaleCheck}
              onPress={femaleRadioHandler}
              accessibilityLabel="female"
            />
          </View>
          {/*<View style={styles.bottom}>*/}
          {/*  <TouchableOpacity*/}
          {/*    style={styles.Bottombtn}*/}
          {/*    onPress={handleSubmitPress}>*/}
          {/*    <Image*/}
          {/*      source={require('../img/arrow1.png')}*/}
          {/*      style={styles.Bottomimg}*/}
          {/*    />*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}
          <View>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="SignupSecond"
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Image
                source={require('../img/arrow1.png')}
                style={styles.TextStyle}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
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
    marginTop: 80,
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    marginBottom: 10,
    color: '#595856',
  },
  header: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'flex-start',
    marginTop: 0,
    marginLeft: -110,
  },
  headertwo: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'flex-start',
    marginTop: 0,
    marginLeft: -130,
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
    width: 350,
    paddingLeft: 40,
    marginBottom: 20,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    marginTop: 20,
    borderWidth: 0,
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

  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    alignSelf: 'center',
    height: 110,
    width: 300,
  },
  inputStyle: {
    flex: 1,
  },
  SectionStyleUsername: {
    flexDirection: 'row',
    width: 350,
    // backgroundColor: '#00000000',
    // borderColor: '#00000000',
    height: 40,
    alignSelf: 'center',
    marginTop: 50,

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
  buttoncontainerForget: {
    height: 40,
    width: 250,
    borderRadius: 40,
    backgroundColor: '#00000000',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 0,
  },
  headerbarButonForgot: {
    fontSize: 13,
    color: '#fff',
    alignSelf: 'center',
  },
  buttoncontainerSignIn: {
    height: 40,
    width: 250,
    borderRadius: 40,
    backgroundColor: '#00000000',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 0,
  },
  headerbarButonSignIn: {
    fontSize: 13,
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
    // Setting up image width.
    width: 24,
    alignSelf: 'center',
    alignItems: 'center',
    // Setting up image height.
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
    height: 18,
    width: 18,
  },
  Bottomimg: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
    marginTop: 20,
  },
  btn: {
    flex: 1,
    height: 24,
    width: 24,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginLeft: -40,
    marginTop: -20,
  },
  Bottombtn: {
    // flex: 1,
    height: 36,
    width: 36,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: 50,
    paddingTop: 15,
    paddingBottom: 15,
  },
  btnLeft: {
    flex: 1,
    height: 18,
    width: 18,
    left: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: -20,
  },
  btnRight: {
    flex: 1,
    height: 18,
    width: 18,
    left: -85,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  bottomButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    bottom: 10,
  },
  viewback: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    height: 60,
  },
  socialbottom: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'center',

    marginLeft: -200,

    marginTop: -60,
  },
  socialbottomMaleView: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'center',
    marginBottom: 60,
    marginLeft: -80,
  },
  socialbottomFemaleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 60,
    marginLeft: -80,
  },
  bottom: {
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
  blockContainer: {
    backgroundColor: '#000',
    width: '97%',
    marginLeft: 60,
    elevation: 3,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  blockContainerCheckbox: {
    backgroundColor: '#000',
    width: '97%',
    marginLeft: 60,
    elevation: 3,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // text: {
  //     fontSize: 18,
  //
  // },
  radioText: {
    marginHorizontal: 5,
    fontSize: 15,
    color: 'white',
  },
  containernew: {
    flex: 1,
    paddingTop: 65,
  },
  labelInput: {
    color: '#673AB7',
  },
  formInput: {
    borderBottomWidth: 1.5,
    marginLeft: 20,
    borderColor: '#333',
  },
  input: {
    borderWidth: 0,
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    // marginLeft:40,
    // marginRight:40,
    alignSelf: 'center',
  },
  TextStyle: {
    // textAlign:'center',
    // fontWeight:'bold',
    // fontSize:17
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
});

export default SecondStepSig;
