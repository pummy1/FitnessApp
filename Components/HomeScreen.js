import React from 'react';
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
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import { useNavigation } from '@react-navigation/native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 110
        };
    }
    classiclick = () => {
        alert("yes");
        this.props.navigation.navigate('Classic');
    }
    render() {
        const width = `${100 / parseInt(this.state.width / 110)}%`;
        return (
            <ScrollView>
                <View>
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
                </View>
                <View>
                    <View>
                        <Text style={styles.headingstl2}>Choose Your Style</Text>
                    </View>
                    <View style={styles.container} onLayout={this.onLayout.bind(this)}>
                        <TouchableOpacity activeOpacity={0.5}
                                          onPress={(this.classiclick)}
                        >
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box2}>
                                    <Text style={styles.textstl2}>Classic</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box2}>
                                    <Text style={styles.textstl2}>Athlete</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box2}>
                                    <Text style={styles.textstl2}>Lean-X</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box2}>
                                    <Text style={styles.textstl2}>Crossshred</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box2}>
                                    <Text style={styles.textstl2}>Tone</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box2}>
                                    <Text style={styles.textstl2}>Bulk</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.headingstl3}>Choose Your Style</Text>
                    </View>
                    <View style={styles.container} onLayout={this.onLayout.bind(this)}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box3}>
                                    <Text style={styles.textstl3}>Classic</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box3}>
                                    <Text style={styles.textstl3}>Athlete</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box3}>
                                    <Text style={styles.textstl3}>Lean-X</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box3}>
                                    <Text style={styles.textstl3}>Mini</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box3}>
                                    <Text style={styles.textstl3}>Regular</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box3}>
                                    <Text style={styles.textstl3}>Badass</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.headingstl}>Preview</Text>
                    </View>
                    <View style={styles.container} onLayout={this.onLayout.bind(this)}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box4}>
                                    <Image
                                        source={require('../img/Bench.png')}
                                        style={styles.next4}
                                    />
                                </View>
                            </View>
                            <View style={[styles.wrapper3, { width: width }]}>
                                <View style={styles.box14}>
                                    <Text style={styles.textstl4}>
                                        Isometric Hold to Bench Press
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
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
    // render() {
    //     //width of child is 110
    //     return (
    //         <View>
    //             <Screen5 />
    //             <Screen2 />
    //             <Screen3 />
    //             <Screen4 />
    //         </View>
    //     );
    //
    // }
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
        fontFamily: 'Open Sans',
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
    },
    box2: {
        width: 130,
        height: 100,
        backgroundColor: '#3b4145',
    },
    wrapper2: {
        marginVertical: 1,
        alignItems: 'center',
    },
    textstl2: {
        fontFamily: 'Arial',
        color: '#fff',
        textAlign: 'center',
        paddingTop: 30,
    },
    headingstl2: {
        fontWeight: 'bold',

        fontFamily: 'Open Sans',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 22,
        backgroundColor: '#2e3337',
        color: '#b0b0b0',
    },
    box3: {
        width: 130,
        height: 100,
        backgroundColor: '#3b4145',
    },
    wrapper3: {
        marginVertical: 1,
        alignItems: 'center',
    },
    textstl3: {

        fontFamily: 'Arial',
        color: '#fff',
        textAlign: 'center',
        paddingTop: 30,
    },
    headingstl3: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        backgroundColor: '#2e3337',
        color: '#b0b0b0',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 22,
    },
    box4: {
        width: 140,
        height: 100,
        backgroundColor: '#3b4145',
    },
    box14: {
        width: 270,
        height: 100,
        backgroundColor: '#3b4145',
    },
    textstl4: {

        fontFamily: 'Arial',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 30,
    },
    headingstl4: {
        fontWeight: 'bold',

        fontFamily: 'Open Sans',
        backgroundColor: '#2e3337',
        color: '#b0b0b0',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 22,
    },
    next4: {
        height: 100,
        width: 120,
    }
});