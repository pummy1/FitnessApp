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
import FlipToggle from 'react-native-flip-toggle-button'
const  ThirdStepSig: () => React$Node = () => {
// export default class First extends React.Component {

  return (
      <>
        <StatusBar barStyle="default"/>
        <ImageBackground
            source={require('../img/4.jpg')}
            style={{
              flex: 1,
            }}>

          <Image source={require('../img/fit-logo-Recovered.png')}
                 style={styles.logo}>
          </Image>

          <View style = {styles.inputContainer}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "WEIGHT"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
            />
          </View>
          <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "HEIGHT"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
            />
          </View>
          <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "ADDRESS"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
            />
          </View>
            <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "COUNTRY"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
            />
            </View>
            <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "PIN CODE"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
            />
            </View>
            <View style = {styles.inputContainer2}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "STATE"
                       placeholderTextColor = "#fff"
                       autoCapitalize = "none"
            />
          </View>
            <View>
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}>
              <Text style={styles.TextStyle}> SUBMIT </Text>
            </TouchableOpacity>
          </View>
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
    marginLeft:40,
    marginRight:40,
    backgroundColor:'#F9A717',
    borderRadius:50,
    borderWidth: 1,
    borderColor: '#F9A717'
  },
  TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:17
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

});
// export default ThirdStepSig;
