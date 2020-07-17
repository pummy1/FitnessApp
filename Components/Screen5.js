import React, { Component} from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    Image,
    TouchableOpacity,
    YellowBox,
    Dimensions,
    Button,
    SafeAreaView,
    ScrollView,
} from 'react-native';

export default class Screen5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 110
        };
    }

    render() {
        const width = `${100 / parseInt(this.state.width / 110)}%`;
        return (
            <ScrollView>
                <View style={styles.container} onLayout={this.onLayout.bind(this)}>
                    <View style={[styles.wrapper, { width: width }]}>
                        <View style={styles.box1}>
                            <Text style={styles.textstl}>CHEST & ARMS</Text>
                        </View>
                    </View>
                    <View style={[styles.wrapper, styles.wrapper1, { width: width }]}>
                        <View style={styles.box}>
                            <Image source={require('../img/next.png')} style={styles.next} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
    onLayout(e) {
        if (this.state.width !== e.nativeEvent.layout.width) {
            this.setState({
                width: e.nativeEvent.layout.width
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e3337',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 4,
    },
    box: {
        width: 50,
        height: 80,
        backgroundColor: '#3b4145',
        marginLeft: 200,
    },
    box1: {
        width: 320,
        height: 80,
        marginLeft: 20,
        backgroundColor: '#3b4145',
    },
    wrapper: {
        marginVertical: 1,
    },
    textstl: {
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 20,
    },
    headingstl: {
        fontWeight: 'bold',
        backgroundColor: '#2e3337',
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    next: {
        height: 30,
        width: 30,
        textAlign: "center",
        marginTop: 20,
        marginLeft: 5,
    }
});