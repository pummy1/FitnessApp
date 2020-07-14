/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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

const Login: () => props = () => {
    let [userEmail, setUserEmail] = useState('');
    let [userPassword, setUserPassword] = useState('');
    const handleSubmitPress = () => {
        if (!userEmail) {
            alert('Please fill Email');
            return;
        }
        if (!userPassword) {
            alert('Please fill Password');
            return;
        }
        let dataToSend = { user_email: userEmail, user_password: userPassword };
        let formBody = [];
        for (let key in dataToSend) {
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('https://aboutreact.herokuapp.com/login.php', {
            method: 'POST',
            body: formBody,
            headers: {
                //Header Defination
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
        }).then(response => response.json())
            .then(responseJson => {
                //Hide Loader
                //setLoading(false);
                console.log(responseJson);
                // If server response message same as Data Matched
                if (responseJson.status == 1) {
                    AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
                    console.log(responseJson.data[0].user_id);
                    props.navigation.navigate('DrawerNavigationRoutes');
                } else {
                   // setErrortext('Please check your email id or password');
                    console.log('Please check your email id or password');
                }
            })
            .catch(error => {
                //Hide Loader
                //setLoading(false);
                console.error(error);
            });
    };
    return (
        <>
            <StatusBar barStyle="default"/>
            <ImageBackground
                source={require('../img/3.jpg')}
                style={{
                    flex: 1,
                }}>

                <Image source={require('../img/fit-logo-Recovered.png')}
                       style={styles.logo}>
                </Image>
                <View>
                    <Text style = {styles.text}>Login to stay fit</Text>

                </View>
                <View>
                    <Text style = {styles.loginsubtext}>Save Money with club membership card</Text>
                </View>
                <View style = {styles.inputContainer}>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "EMAIL"
                               placeholderTextColor = "#fff"
                               autoCapitalize = "none"
                               onChangeText={UserEmail => setUserEmail(UserEmail)}
                    />
                </View>
                <View style = {styles.inputContainer2}>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "PASSWORD"
                               placeholderTextColor = "#fff"
                               autoCapitalize = "none"
                               onChangeText={UserPassword => setUserPassword(UserPassword)}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={handleSubmitPress}>
                        <Text style={styles.TextStyle}> LOG IN </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style = {styles.fd}>Forgot Password ?</Text>
                </View>
                <View>
                    <Text style = {styles.signin}>Dont have account ? Sign in Now</Text>
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
        marginTop:70,
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
        marginLeft: 130,
        marginTop: 100,
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
        marginTop:40,
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
    text:{
        color:'#ecc40c',
        marginLeft:145,
        fontSize:20,
        marginTop:40

    },
    loginsubtext:{
        color:'#fff',
        marginLeft:80,
        fontSize:15,
        marginTop:5
    },
    signin:{
        color:'#fff',
        marginLeft:100,
        fontSize:15,
        marginTop:50
    },
    fd:{
        color:'#fff',
        marginLeft:142,
        fontSize:15,
        marginTop:10
    }

});
export default Login;
