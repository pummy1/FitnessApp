/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {apiConfig} from './config';
import React , { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
const Login: () => React$Node = ({ navigation }) => {
    let [userEmail, setUserEmail] = useState('');
    let [userPassword, setUserPassword] = useState('');
    const handleSubmitPressLogin = async () => {
    // const handleSubmitPressLogin = () => {
        if (!userEmail) {
            alert('Please fill Email');
            return;
        }
        if (!userPassword) {
            alert('Please fill Password');
            return;
        }

            if (userEmail != null && userPassword != null) {
                let data = new FormData();
                data.append('email', userEmail);
                data.append('password', userPassword);

                //POST request
                fetch(apiConfig.baseUrl+ 'login.php',
                    {
                        method: 'POST', //Request Type
                        body: data, //post body
                        headers: {
                            //Header Defination
                            Accept: 'application/json',
                            'Content-Type': 'multipart/form-data',
                        },
                    },
                )
                    .then(response => response.json())
                    .then(responseJson => {

                        // alert(JSON.stringify("id"+responseJson.data['id']));
                        // AsyncStorage.setItem(STORAGE_KEY, 'pummy');
                        if(responseJson.status=="true"){

                                AsyncStorage.setItem('id', responseJson.data['id'])
                                alert('Data successfully saved'+responseJson.data['id']);
                                navigation.navigate('Homeredir');

                            // console.log(AsyncStorage.getItem('user_id'));

                        }
                        else{
                            navigation.navigate('Login');
                            alert('Email and Password not matched');
                        }

                    })
                    //If response is not in json then in error
                    .catch(error => {
                        alert(JSON.stringify(error));
                        console.error(error);
                    });
            }
//                    // AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
    };
    return (
        <>
            <StatusBar barStyle="default"/>
            <ImageBackground
                source={require('../img/3.jpg')}
                style={{
                    flex: 1,
                }}>
                <KeyboardAwareScrollView  enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}>
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
                               secureTextEntry={true}
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
                        onPress={handleSubmitPressLogin}>
                        <Text style={styles.TextStyle}> LOG IN </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                                      onPress={() => navigation.navigate('Forget')}>
                        <Text style = {styles.fd}>Forgot Password ?</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.buttoncontainerSignIn}>
                    <TouchableOpacity
                                      onPress={() => navigation.navigate('FirstStepSig')}>
                        <Text style = {styles.signin}>Dont have account ? Sign in Now</Text>
                    </TouchableOpacity>

                </View>
                </KeyboardAwareScrollView>
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
    },
    buttoncontainerSignIn:{
        marginBottom:20
    }

});
export default Login;
