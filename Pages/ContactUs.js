/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
const ContactUs: () => React$Node = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../img/fit-logo-Recovered.png')}
      />

      <View style={styles.SectionStyleSegemntView}>
        <View style={styles.viewback}>
          <Text style={styles.header}>CONTACT INFORMATION</Text>

          <View style={styles.SectionStyleCardioBack}>
            <Image
              source={require('../img/pin.png')}
              style={styles.CardioTopImage}
            />
            <Text style={styles.CardioheadingText}>Address</Text>

            <Text style={styles.AddressheadingText}>
              42 Anand nagar gawali palasia,Mhow
            </Text>
          </View>

          <View style={styles.SectionStyleCardioMiddle}>
            <Image
              source={require('../img/phone-(2).png')}
              style={styles.CardioBottomimg}
            />
            <Text style={styles.CardioheadingText}>Contact</Text>

            <Text style={styles.ContactheadingText}>9713821060</Text>
          </View>

          <View style={styles.SectionStyleCardioBOttom}>
            <Image
              source={require('../img/email-(1).png')}
              style={styles.CardioBottomimg}
            />
            <Text style={styles.CardioheadingText}>Mail</Text>

            <Text style={styles.MailheadingText}>khusheelverma@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2e3337',
  },
  tinyLogo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginTop: 80,
  },
  SectionStyleSegemntView: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 380,
    alignSelf: 'flex-start',
    marginTop: 40,
    margin: 10,
  },
  viewback: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor:'#3c4145',
    height:360,
    margin:10,
    width:60,
    borderRadius:5
  },
  header : {
    fontSize : 20,
    color : '#cc8d1e',
    alignSelf: 'center',
    margin:0,
    fontWeight:'bold',
    marginTop:20,
  },
  SectionStyleCardioBack: {
    flexDirection: 'row',
    width : 150,

    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 40,
    alignSelf:'flex-start',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    left:20,
    top:30
  },
  CardioTopImage: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000000',
    height : 32,
    width:22,
    top:10,
    left:10

  },
  AddressheadingText: {
    fontSize: 16,
    fontWeight: '800',
    color:'white',
    width:280,
    alignSelf:'flex-start',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    top:42,
    left:-18
  },

  ContactheadingText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
    width: 280,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: 42,
    left: -10,
  },
  CardioBottomimg: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000000',
    height : "76%",
    width:"20%",
    top:10,
    left:10

  },
  SectionStyleCardioBOttom: {
    flexDirection: 'row',
    width : 150,

    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 40,
    alignSelf:'flex-start',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    left:20,
    top:140
  },
  MailheadingText: {
    fontSize: 16,
    fontWeight: '800',
    color:'white',
    width:280,
    alignSelf:'flex-start',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    top:42,
    left:24
  },
  SectionStyleCardioMiddle: {
    flexDirection: 'row',
    width: 150,

    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 40,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    left: 20,
    top: 80,
  },

});
export default ContactUs;
// https://reactnative.dev/docs/layout-props#left,
