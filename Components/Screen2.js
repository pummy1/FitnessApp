/*Example of Navigation Drawer with Sectioned Menu*/
import React, {Component} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
// import all basic components
// const Screen2: () => React$Node = ({ navigation }) => {
export default class Screen2 extends Component {

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
          <Text style={styles.headingstl}>Choose Your Style</Text>
        </View>
        <View style={styles.container} onLayout={this.onLayout.bind(this)}>
          <TouchableOpacity activeOpacity={0.5}
         >
            <View style={[styles.wrapper, {width: width}]}>
              <View style={styles.box}>
                <Text style={styles.textstl}>Classic</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={[styles.wrapper, {width: width}]}>
              <View style={styles.box}>
                <Text style={styles.textstl}>Athlete</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={[styles.wrapper, {width: width}]}>
              <View style={styles.box}>
                <Text style={styles.textstl}>Lean-X</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={[styles.wrapper, {width: width}]}>
              <View style={styles.box}>
                <Text style={styles.textstl}>Crossshred</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={[styles.wrapper, {width: width}]}>
              <View style={styles.box}>
                <Text style={styles.textstl}>Tone</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={[styles.wrapper, {width: width}]}>
              <View style={styles.box}>
                <Text style={styles.textstl}>Bulk</Text>
              </View>
            </View>
          </TouchableOpacity>
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
    width: 130,
    height: 100,
    backgroundColor: '#3b4145',
  },
  wrapper: {
    marginVertical: 1,
    alignItems: 'center',
  },
  textstl: {
    fontFamily: 'Arial',
    color: '#fff',
    textAlign: 'center',
    paddingTop: 30,
  },
  headingstl: {
    fontWeight: 'bold',

    fontFamily: 'Open Sans',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 22,
    backgroundColor: '#2e3337',
    color: '#b0b0b0',
  },
});