/*Example to Dynamically Change Drawer/Sidebar Options in React Navigation Drawer */
/* https://aboutreact.com/dynamically-change-sidebar-options/ */

import React from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
const HomeScreen = ({navigation}) => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.box1} activeOpacity={0.5}>
              <Text style={styles.textstl}>CHEST & ARMS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.box} activeOpacity={0.5}>
              <Image source={require('../img/next.png')} style={styles.next} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.headingstl2}>CHOOSE YOUR STYLE</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={[styles.box2, styles.border21]}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('ClassicScreen')}>
              <Text style={styles.textstl2}>Classic</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={styles.box2}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('AthleteScreen')}>
              <Text style={styles.textstl2}>Athlete</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={[styles.box2, styles.border23]}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('LeanxScreen')}>
              <Text style={styles.textstl2}>Lean-X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={[styles.box2, styles.border24]}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('CrosshredScreen')}>
              <Text style={styles.textstl2}>Crossshred</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={styles.box2}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('ToneScreen')}>
              <Text style={styles.textstl2}>Tone</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={[styles.box2, styles.border26]}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('BulkScreen')}>
              <Text style={styles.textstl2}>Bulk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.headingstl3}>CHOOSE YOUR DURATION</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={[styles.box3, styles.border31]}
              activeOpacity={0.5}>
              <Text style={styles.textstl3}>Mini</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper3}>
            <TouchableOpacity style={styles.box3} activeOpacity={0.5}>
              <Text style={styles.textstl3}>Regular</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={[styles.box3, styles.border33]}
              activeOpacity={0.5}>
              <Text style={styles.textstl3}>Badass</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.headingstl4}>PREVIEW</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={[styles.box4, styles.border41]}
              activeOpacity={0.5}>
              <Image
                source={require('../img/Bench.png')}
                style={[styles.next4, styles.border41]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapper3}>
            <TouchableOpacity
              style={[styles.box14, styles.border42]}
              activeOpacity={0.5}>
              <Text style={styles.textstl4}>Isometric Hold to Bench Press</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e3337',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 4,
  },
  box: {
    width: 50,
    height: 80,
    backgroundColor: '#3b4145',
    marginLeft: 200,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  box1: {
    width: 320,
    height: 80,
    marginLeft: 20,
    backgroundColor: '#3b4145',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wrapper: {
    marginVertical: 1,
  },
  textstl: {
    fontFamily: 'Open Sans',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 20,
  },
  headingstl: {
    fontWeight: 'bold',
    backgroundColor: '#2e3337',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  next: {
    height: 20,
    width: 20,
    marginTop: 30,
    marginLeft: 5,
  },
  box2: {
    width: 125,
    height: 100,
    backgroundColor: '#3b4145',
  },
  border21: {
    borderTopLeftRadius: 20,
  },
  border23: {
    borderTopRightRadius: 20,
  },
  border24: {
    borderBottomLeftRadius: 20,
  },
  border26: {
    borderBottomRightRadius: 20,
  },
  wrapper2: {
    marginVertical: 1,
    alignItems: 'center',
  },
  textstl2: {
    fontFamily: 'Arial',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 30,
  },
  headingstl2: {
    letterSpacing: 1,
    fontFamily: 'Open Sans',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    backgroundColor: '#2e3337',
    color: '#b0b0b0',
  },
  box3: {
    width: 125,
    height: 100,
    backgroundColor: '#3b4145',
  },
  border31: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  border33: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapper3: {
    alignItems: 'center',
  },
  textstl3: {
    fontFamily: 'Arial',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 30,
  },
  headingstl3: {
    letterSpacing: 1,
    fontFamily: 'Open Sans',
    backgroundColor: '#2e3337',
    color: '#b0b0b0',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 8,
    fontSize: 18,
  },
  box4: {
    width: 140,
    height: 100,
    marginLeft: 20,
    backgroundColor: '#3b4145',
  },
  box14: {
    width: 270,
    height: 100,
    marginLeft: 120,
    backgroundColor: '#3b4145',
  },
  border41: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  border42: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  textstl4: {
    fontFamily: 'Arial',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 30,
  },
  headingstl4: {
    letterSpacing: 1,
    fontFamily: 'Open Sans',
    backgroundColor: '#2e3337',
    color: '#b0b0b0',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
  },
  next4: {
    height: 100,
    width: 120,
  },
});
export default HomeScreen;
