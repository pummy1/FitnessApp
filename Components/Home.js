/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
    ImageBackground
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FlipToggle from 'react-native-flip-toggle-button'
// const Home: () => React$Node = () => {
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitch1On: true,
            isSwitch2On: true,
            isSwitch3On: true,
            isSwitch4On: true,
            isSwitch5On: true,
            isSwitch6On: true,
            isSwitch7On: true,
        };
    }

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content"/>

                <ImageBackground
                    source={require('../img/Layer-0.jpg')}
                    style={{
                        flex: 1,
                    }}>
                    <FlipToggle
                        value={this.state.isSwitch1On}
                        buttonWidth={250}
                        buttonHeight={50}
                        buttonRadius={50}
                        sliderWidth={125}
                        sliderHeight={40}
                        sliderRadius={50}
                        onLabel={'On'}
                        offLabel={'Off'}
                        labelStyle={{color: 'black'}}
                        onToggle={(newState) => console.log(`toggle is ${this.state.isActive ? `on` : `off`}`)}
                        onToggleLongPress={() => console.log('toggle long pressed!')}
                    />
                    <ImageBackground
                        source={require('../img/Rounded-Rectangle-2-copy-2.png')}
                        style={{
                            flex: 1,
                            height:100,
                            width:350,
                            padding:30
                        }}
                    >
                        <View>
                            <Text style={styles.container}>CHEST And ARMS</Text>
                        </View>
                    </ImageBackground>

                </ImageBackground>


            </>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    container:{
        color:'white'
    }

});
// export default Home;
