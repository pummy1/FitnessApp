/*Example of Navigation Drawer with Sectioned Menu*/
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class NotificationAlert extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
            <Text style={{fontSize: 23}}> Screen 3 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
