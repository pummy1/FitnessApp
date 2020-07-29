/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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
import CheckBox from '@react-native-community/checkbox';
import RadioButton from '../Components/RadioButton';
import Toast from 'react-native-simple-toast';

const Terms: () => React$Node = ({navigation}) => {
// export default class First extends React.Component {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    // const [checked, setChecked] = React.useState('first');
    const [terms, settermscondition] = useState(true);
    const [gettc, setTerms] = useState('true');
    // const termsRadioHandler = () => {
    //     if(terms){
    //         settermscondition(true);
    //         setTerms('true');
    //     }
    //     console.log(gettc);
    // }
    const handleSubmitPressterms = async () => {
        console.log(toggleCheckBox);
        if(toggleCheckBox==true){
            Toast.show('Successfully Registered');
            navigation.navigate('Login');
        }
        else{
            Toast.show('Please Accept Terms & Condition');
            navigation.navigate('Terms');
        }

    }
    return (
        <>
            <StatusBar barStyle="default"/>
            <ImageBackground
                source={require('../img/2.jpg')}
                style={{
                    flex: 1,
                }}>

                <Image source={require('../img/fit-logo-Recovered.png')}
                       style={styles.logo}>
                </Image>
                <View>
                    <Text style = {styles.text}>Terms And Conditions</Text>

                </View>

                <View style = {styles.checkbox}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        tintColors={{ true: '#fff', false: 'white' }}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    {/*<RadioButton checked={terms} onPress={termsRadioHandler} />*/}
                    {/*<View>*/}
                        <Text style = {styles.termscondition}>I confirm that</Text>
                    {/*</View>*/}
                </View>

                <View>
                    <Text style = {styles.loginsubtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                </View>
                <View>
                    <Text style = {styles.signin}>By Clicking Accept below</Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={handleSubmitPressterms}>
                        <Text style={styles.TextStyle}> ACCEPT </Text>
                    </TouchableOpacity>
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

    text:{
        color:'#F9A717',
        marginLeft:110,
        fontSize:20,
        marginTop:40

    },
    loginsubtext:{
        color:'#fff',
        marginLeft:30,
        fontSize:15,
        marginTop:40,
        alignItems:'flex-start'
    },
    checkbox:{
        color:'#fff',
        marginLeft:20,
        fontSize:15,
        marginTop:40,
        // marginRight: 10
    },
    // checkbox1:{
    //     marginTop:20
    // },
    signin:{
        color:'#fff',
        marginLeft:30,
        fontSize:15,
        marginTop:30,
        alignItems:'flex-start'
    },
    termscondition:{
        color:'#fff',
        marginLeft:50,
        fontSize:15,
        marginTop:-27,
        alignItems:'flex-start'
    }


});
export default Terms;
