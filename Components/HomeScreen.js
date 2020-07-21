import React from 'react';
import {View} from 'react-native';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
<<<<<<< HEAD
import App from './App';
const HomeScreen: () => React$Node = () => {
// export default class HomeScreen extends React.Component {
  // render() {
=======

export default class HomeScreen extends React.Component {
  render() {
>>>>>>> 019eba049187263faf13bed233c0f090d47172a4
    //width of child is 110
    return (
      <View>
        <Screen5 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
      </View>
    );
<<<<<<< HEAD
  // }
}
export default HomeScreen;
=======
  }
}
>>>>>>> 019eba049187263faf13bed233c0f090d47172a4
