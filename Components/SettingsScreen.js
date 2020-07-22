import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Contacts from './contacts';
import Services from './config';

export default class SettingsScreen extends React.Component {
  state = {
    contacts: []
  }
  url = Services.apiConfig.baseUrl;
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }
  // render() {
  //   return (
  //     <Contacts contacts={this.state.contacts} />
  //   );
  // }












  getDataUsingGet() {
    //GET request 
    fetch(this.url + 'get.php', {
      method: 'GET',
      //Request Type
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        //Success
        // this.setState({ contacts: responseJson });
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  getDataUsingPost() {
    //POST json 
    let data = new FormData();
    data.append('mobile', '9770472208');
    data.append('email', 'zanjoio7@gamial.com');

    //POST request 
    fetch(this.url + 'signup_one_1.php', {
      method: 'POST', //Request Type
      body: data, //post body
      headers: {
        //Header Defination
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => response.json())
      //If response is in json then in success
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Contacts contacts={this.state.contacts} />
        {/*Running GET Request*/}
        <Button title='Get Data Using GET' onPress={this.getDataUsingGet} />
        {/*Running POST Request*/}

        <Button title='Get Data Using POST' onPress={this.getDataUsingPost} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10
  }
});