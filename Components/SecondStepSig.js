/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
  } from "react-native";
import DatePicker from 'react-native-datepicker';

const image = { };
const SecondStepSig: () => React$Node = () =>
    {

        return (
            <View style={styles.container}>

                <ImageBackground  source={require('../img/1.jpg')} style={styles.image}>

                    <KeyboardAwareScrollView  enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}>

                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/fit-logo-Recovered.png')}
                        />

                        <View style={styles.SectionStyleUsername}>
                            <TextInput  style={styles.textinput} placeholder="Firstname" placeholderTextColor="#fff" underlineColorAndroid={'transparent'} />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput  style={styles.textinput} placeholder="Lastname" placeholderTextColor="#fff" underlineColorAndroid={'transparent'} />
                        </View>

                        {/*<View style={styles.SectionStyle}>*/}
                        {/*    <TextInput  style={styles.textinput} placeholder="Date Of Birth" placeholderTextColor="#fff" underlineColorAndroid={'transparent'} />*/}
                        {/*</View>*/}
                        <View style={styles.SectionStyle}>
                            <TextInput  style={styles.textinput} placeholder="Gender" placeholderTextColor="#fff" underlineColorAndroid={'transparent'} />
                            <View style={styles.socialbottom}>
                                <View style={styles.socialbottomMaleView}>
                                    <TouchableOpacity style={styles.btnLeft}>
                                        <Image source={require('../img/Rounded.png')}  style={styles.img}/>
                                    </TouchableOpacity>
                                    <Text style={styles.header}>Male</Text>
                                </View>
                                <View style={styles.socialbottomFemaleView}>
                                    <TouchableOpacity style={styles.btn}>
                                        <Image source={require('../img/Rounded.png')}  style={styles.img}/>
                                    </TouchableOpacity>

                                    <Text style={styles.headertwo}>Female</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.SectionStyle}>
                            <DatePicker
                                style={{width: 200}}
                                date={"2016-05-15"}
                                mode="date"
                                format="YYYY-MM-DD"
                                minDate="2016-05-01"
                                maxDate="2016-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                placeholder="Date Of Birth" placeholderTextColor="#fff" underlineColorAndroid={'transparent'}
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                // onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput  style={styles.textinput} placeholder="Mobile No." placeholderTextColor="#fff" underlineColorAndroid={'transparent'} />
                        </View>
                    </KeyboardAwareScrollView>
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.Bottombtn} >
                            <Image source={require('../img/arrow1.png')}  style={styles.Bottomimg}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
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
        marginTop: 80,

    },
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#595856'
    },
    header : {
        fontSize : 13,
        color : 'white',
        alignSelf: 'flex-start',
        marginTop: 0,
        marginLeft:-110

    },
    headertwo : {
        fontSize : 13,
        color : 'white',
        alignSelf: 'flex-start',
        marginTop: 0,
        marginLeft:-130

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
        width : 350,
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

    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
        alignSelf : 'center',
        height : 110,
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
        marginTop: 70,
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
    buttoncontainerForget : {
        height : 40,
        width : 250,
        borderRadius : 40,
        backgroundColor : '#00000000',
        paddingVertical: 10,
        justifyContent: 'center',
        alignSelf : 'center',
        marginTop: 0,
    },
    headerbarButonForgot : {
        fontSize : 13,
        color : '#fff',
        alignSelf: 'center',


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
        fontSize : 13,
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
            // Setting up image width.
            width: 24,
            alignSelf : 'center',
            alignItems : 'center',
            // Setting up image height.
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
        height : 18,
        width:18
    },
    Bottomimg: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height : 50,
        width:50,
        marginTop:20
    },
    btn: {
        flex: 1,
        height:24,
        width:24,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginLeft:-40,
        marginTop:-20
    },
    Bottombtn: {
        flex: 1,
        height:36,
        width:36,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop:-30
    },
    btnLeft: {
        flex: 1,
        height:18,
        width:18,
        left : 0,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop:-20
    },
    btnRight: {
        flex: 1,
        height:18,
        width:18,
        left : -85,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    bottomButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        bottom: 10,

    },
    viewback: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        height:60

    },
    socialbottom: {
        flex: 1,
        flexDirection: 'row',

        justifyContent: 'center',

        marginLeft:-200,

        marginTop: -60
    },
    socialbottomMaleView: {
        flex: 1,
        flexDirection: 'row',

        justifyContent: 'center',
        marginBottom: 60,
        marginLeft:-80
    },
    socialbottomFemaleView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 60,
        marginLeft:-80,
    },
    bottom: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50
    },

});
export default SecondStepSig;