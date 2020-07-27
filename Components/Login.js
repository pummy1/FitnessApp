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
    ImageBackground, TouchableOpacity,KeyboardAvoidingView
} from 'react-native';
import Toast from 'react-native-simple-toast';

const Login: () => React$Node = ({ navigation }) => {
    let [userEmail, setUserEmail] = useState('');
    let [userPassword, setUserPassword] = useState('');
    const handleSubmitPressLogin = async () => {
    // const handleSubmitPressLogin = () => {
        if (!userEmail) {
            Toast.show('Please fill Email');
            return;
        }
        if (!userPassword) {
            Toast.show('Please fill Password');
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
                        if(responseJson.status=="true"){
                            Toast.show('Successfully Login');
                                AsyncStorage.setItem('id', responseJson.data['id']);
                            AsyncStorage.setItem('Name', responseJson.data['id']);
                            AsyncStorage.setItem('BMI', responseJson.data['id']);
                                navigation.navigate('Homeredir');
                                // navigation.navigate('Profile');
                        }
                        else{
                            Toast.show('Email and Password not matched');
                            navigation.navigate('Login');
                        }
                    })
                    //If response is not in json then in error
                    .catch(error => {
                        Toast.show('Something Went Wrong');
                        alert(JSON.stringify(error));
                        console.error(error);
                    });
            }
    };
    return (
        <>
            <StatusBar barStyle="default" />

            <View style={styles.container}>
                <ImageBackground
                    source={require('../img/3.jpg')}
                    style={styles.image}>
                    <Image
                        source={require('../img/fit-logo-Recovered.png')}
                        style={styles.tinyLogo}
                    />
                    <Text style={styles.header}>Login to stay fit</Text>
                    <Text style={styles.headerbar}>
                        Save Money with club membership card
                    </Text>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == 'android' ? 'padding' : 'height'}
                        style={styles.container}>
                        <View style={styles.SectionStyleUsername}>
                            <Image
                                source={require('../img/email.png')}
                                style={styles.imageStyle}
                            />

                            <TextInput
                                style={styles.textinput}
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                underlineColorAndroid={'transparent'}
                                onChangeText={UserEmail => setUserEmail(UserEmail)}
                            />
                        </View>

                        <View style={styles.SectionStyle}>
                            <Image
                                source={require('../img/password-(1).png')}
                                style={styles.imageStyle}
                            />

                            <TextInput
                                style={styles.textinput}
                                secureTextEntry={true}
                                placeholder="Password"
                                onChangeText={UserPassword => setUserPassword(UserPassword)}
                                placeholderTextColor="#fff"
                                underlineColorAndroid={'transparent'}
                            />
                        </View>


                        <TouchableOpacity
                            style={styles.buttoncontainer}
                            activeOpacity={0.5}
                            onPress={handleSubmitPressLogin}>
                            <Text style={styles.headerbarButon}>Log In</Text>
                        </TouchableOpacity>

                        {/*<View style={styles.socialbottom}>*/}
                        {/*  <TouchableOpacity style={styles.btnLeft}>*/}
                        {/*    <Image*/}
                        {/*      source={require('../img/facebook.png')}*/}
                        {/*      style={styles.img}*/}
                        {/*    />*/}
                        {/*  </TouchableOpacity>*/}
                        {/*  <TouchableOpacity style={styles.btn}>*/}
                        {/*    <Image*/}
                        {/*      source={require('../img/twitter.png')}*/}
                        {/*      style={styles.img}*/}
                        {/*    />*/}
                        {/*  </TouchableOpacity>*/}

                        {/*  <TouchableOpacity style={styles.btnRight}>*/}
                        {/*    <Image*/}
                        {/*      source={require('../img/google-plus.png')}*/}
                        {/*      style={styles.img}*/}
                        {/*    />*/}
                        {/*  </TouchableOpacity>*/}
                        {/*</View>*/}
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Forget')}>
                                <Text style = {styles.fd}>Forgot Password ?</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity
                                style={styles.buttoncontainerSignIn}
                                onPress={() => navigation.navigate('FirstStepSig')}>
                                <Text style={styles.headerbarButonSignIn}>
                                    Dont have account ? Sign in Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },
    tinyLogo: {
        width: 130,
        height: 40,
        alignSelf: 'center',
        marginTop: 60,

    },
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#595856'
    },
    header : {
        fontSize : 20,
        color : '#f9a717',
        alignSelf: 'center',
        marginTop: 50,

    },
    headerbar : {
        fontSize : 10,
        color : '#fff',
        alignSelf: 'center',
        marginTop: 10,

    },
    headerbarButon : {
        fontSize : 18,
        color : '#fff',
        alignSelf: 'center',


    },
    textinput : {
        alignSelf : 'center',
        height : 40,
        width : 300,
        paddingLeft : 40,
        marginBottom: 20,
        color : '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth : 1,
        marginTop: 20,

    },
    buttoncontainer : {
        height : 46,
        width : 250,
        borderRadius : 46,
        backgroundColor : '#f9a717',
        paddingVertical: 10,
        justifyContent: 'center',
        alignSelf : 'center',
        marginTop: 25,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
        alignSelf : 'center',
        height : 80,
        width : 300,
    },
    inputStyle: {
        flex: 1,
    },
    SectionStyleUsername: {
        flexDirection: 'row',
        width : 350,
        backgroundColor: '#00000000',
        borderColor: '#00000000',
        height: 40,
        alignSelf:'center',
        marginTop: 40,


        margin: 10,
    },
    SectionStyle: {
        flexDirection: 'row',
        width : 350,
        backgroundColor: '#00000000',
        borderColor: '#00000000',
        height: 40,
        alignSelf:'center',
        marginTop: 20,


        margin: 10,
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        left : 30,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    // buttoncontainerForget : {
    //     height : 40,
    //     width : 250,
    //     borderRadius : 40,
    //     backgroundColor : '#00000000',
    //     paddingVertical: 10,
    //     justifyContent: 'center',
    //     alignSelf : 'center',
    //     marginTop: 0,
    // },
    // headerbarButonForgot : {
    //     fontSize : 13,
    //     color : '#fff',
    //     alignSelf: 'center',
    // },
    fd:{
        color:'#fff',
        justifyContent: 'center',
        alignSelf: 'center',
        // marginLeft:142,
        fontSize:15,
        marginTop:10
    },
    buttoncontainerSignIn : {
        height : 40,
        width : 250,
        borderRadius : 40,
        backgroundColor : '#00000000',
        paddingVertical: 10,
        justifyContent: 'center',
        alignSelf : 'center',
        marginBottom: 0,
    },
    headerbarButonSignIn : {
        fontSize : 15,
        color : '#fff',
        alignSelf: 'center',


    },
    MainContainer:
        {
            flex: 1,
            backgroundColor : '#00000000',
            justifyContent: 'center',
            alignItems: 'center',
        },
    ImageClass:
        {
            width: 24,
            alignSelf : 'center',
            alignItems : 'center',
            height: 24,

        },
    socialcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    img: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height : 36,
        width:36
    },
    btn: {
        flex: 1,
        height:24,
        width:24,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    btnLeft: {
        flex: 1,
        height:24,
        width:24,
        left : 85,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    btnRight: {
        flex: 1,
        height:24,
        width:24,
        left : -85,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    socialbottom: {
        flex: 1,
        flexDirection: 'row',

        justifyContent: 'flex-end',
        marginBottom: -110,
    },
    bottom: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: -50
    },



});
export default Login;
