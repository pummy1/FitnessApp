import React, {useState} from 'react';

import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';

const AboutUs: () => React$Node = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Us</Text>

      <View style={styles.SectionStyleSegemntView}>
        <View style={styles.viewback}>
          <Text style={styles.AddressheadingText}>
            FItTread provides a 24/7 Fitness fatiiity to residents of
            Martinsville and Henry county, as well as surrounding areas to help
            people reach and maintain their goals. We tomoine different types
            ofﬁtness equipment to meet different ﬁtness needs and levels
          </Text>

          <Text style={styles.AddressheadingText}>
            At F|tTread you'll find all the latest strength and cardio equipment
            along with a energetic group exercise program that inciudes POUND,
            Zumba, Kickboxing, Boottamp, Muscle Building and many other cardlo
            classes. You'H find a supportive environment with all kinds of
            people who are working just as hard as you to meet theirgoals
          </Text>

          <Text style={styles.AddressheadingText}>
            our staff, Trainers & Group exercise instructors are committed to
            offering our members a great ﬁtness experience. whether you're a mom
            looking to get batk into shape, a marathon runner trying to shave a
            few minutes off your personal pest or just trying to stay healthy we
            would love to help you realize your potential and meet your goalsll
          </Text>

          <Image
            style={styles.tinyLogo}
            source={require('../img/fit-logo-Recovered.png')}
          />
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
  header : {
    fontSize : 20,
    color : 'white',
    alignSelf: 'center',
    margin:0,
    fontWeight:'bold',
    marginTop:20,

  },
  SectionStyleSegemntView: {
    flexDirection: 'row',
    justifyContent:'center',
    borderRadius:6,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 380,
    alignSelf:'flex-start',
    marginTop: 40,
    margin:10,


  },
  viewback: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor:'#24272c',
    height:460,
    margin:10,
    width:60,
    borderColor:'yellow',
    borderWidth:1,
    borderRadius:5


  },
  AddressheadingText: {
    fontSize: 12,
    fontWeight: '800',
    color:'white',
    width:330,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    top:18,
    left:0,
    margin:6
  },
  tinyLogo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginTop: 80,

  },
});
export default AboutUs;
// https://reactnative.dev/docs/layout-props#left,
