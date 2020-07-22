import React from 'react';
import {View} from 'react-native';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';


export default class HomeScreen extends React.Component {
  render() {
    //width of child is 110
    return (
      <View>
        <Screen5 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
      </View>
    );

  }
}
