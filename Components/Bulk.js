/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from "react";
import VideoPlayer from 'react-native-video-player';

import {  StyleSheet, Text, View,Button
    , Image, TouchableOpacity } from "react-native";
import {apiConfig} from './config';

const Bulk: () => React$Node = ({navigation}) =>
{
    return(
        <View style={styles.container}>
            <VideoPlayer
                video={{ uri: apiConfig.baseUrlVideo+'Andrei-Deiu-Motivation-2020-Alan-Walker-Alone-YouTube.mp4' }}
                videoWidth={1600}
                videoHeight={1400}
                thumbnail={require('../img/fit-logo-Recovered.png')}
            />
            <View style={styles.SectionStyle}>
                <Text style={styles.headingText}>TIP FROM ADAM</Text>
                <Text style={styles.headingTextSub}>Keep your elbow pinned to your side to keep this focused in your shoulder.</Text>
            </View>
            <View style={styles.SectionStyleWeightLog}>
                <Text style={styles.headingTextWeight}>Log Weight</Text>
                <TouchableOpacity style={styles.btn}>
                    <Image source={require('../img/processed.jpeg')}  style={styles.img}/>
                </TouchableOpacity>
            </View>
            <View style={styles.SectionStyleWeightLogCircle}>
                <Text style={styles.headingTextValueWeight}>12</Text>
                <Text style={styles.headingTextWeight}>Each Weight</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:"#2e3337"
    },
    SectionStyle: {
        flexDirection: 'column',
        width : 350,
        borderRadius:6,
        backgroundColor: '#3c4145',
        borderColor: '#00000000',
        height: 80,
        alignSelf:'center',
        marginTop: 20,
        margin: 10,
    },
    SectionStyleWeightLog: {
        flexDirection: 'row',
        width : 120,
        borderRadius:6,
        backgroundColor: '#00000000',
        borderColor: '#00000000',
        height: 40,
        alignSelf:'center',
        top: -20,
        margin: 10,
    },
    SectionStyleWeightLogCircle: {
        flexDirection: 'column',
        width : 100,
        borderRadius:50,
        backgroundColor: '#3c4145',
        borderColor: 'white',
        borderWidth:2,
        height: 100,
        alignSelf:'center',
        top: 0,
        margin: 6,
    },
    img: {
        flex: 1,
        position: 'absolute',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        height : 16,
        width:16,
        left:10
    },

    btn: {
        flex: 1,
        height:10,
        width:10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginLeft:0,
        marginTop:0
    },
    headingText: {
        fontSize: 16,
        fontWeight: '400',
        color:'#c68618',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:6
    },
    headingTextWeight: {
        fontSize: 13,
        fontWeight: '100',
        color:'white',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:0
    },
    headingTextValueWeight: {
        fontSize: 26,
        fontWeight: '100',
        color:'white',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:6
    },
    headingTextSub: {
        fontSize: 13,
        fontWeight: '400',
        color:'white',
        margin:8,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:6,
        left:12
    },
});
export default Bulk;