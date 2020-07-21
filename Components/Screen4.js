/*Example of Navigation Drawer with Sectioned Menu*/
import React, { Component } from 'react';
//import react in our code.
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
// import all basic components

export default class Screen4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 110
    };
  }

  render() {
    //width of child is 110
    const width = `${100 / parseInt(this.state.width / 110)}%`;
    return (
      <ScrollView>
        <View>
          <Text style={styles.headingstl}>Preview</Text>
        </View>
        <View style={styles.container} onLayout={this.onLayout.bind(this)}>
          <View style={[styles.wrapper, { width: width }]}>
            <View style={styles.box}>
              <Image source={require('../img/Bench.png')} style={styles.next} />
            </View>
          </View>
          <View style={[styles.wrapper, { width: width }]}>
            <View style={styles.box1}>
              <Text style={styles.textstl}>Isometric Hold to Bench Press</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
  onLayout(e) {
    if (this.state.width !== e.nativeEvent.layout.width) {
      this.setState({
        width: e.nativeEvent.layout.width
      })
    }
  }
}

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
    width: 140,
    height: 100,
    backgroundColor: '#3b4145',
  },
  box1: {
    width: 270,
    height: 100,
    backgroundColor: '#3b4145',
  },
  wrapper: {
    marginVertical: 1,
  },
  textstl: {

    fontFamily: 'Arial',
    color: '#ffffff',
    textAlign: 'center',
    fontSize:18,
    paddingTop: 30,
  },
  headingstl: {
    fontWeight: 'bold',

    fontFamily: 'Open Sans',
    backgroundColor: '#2e3337',
    color: '#b0b0b0',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 22,
  },
  next: {
    height: 100,
    width: 120,
  }
});