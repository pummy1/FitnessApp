/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import ProgressCircle from 'react-native-progress-circle';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Animated,
  TouchableWithoutFeedback,
  CheckBox,
  ScrollView,
} from 'react-native';
import App from './App';
import AsyncStorage from '@react-native-community/async-storage';
import {apiConfig} from './config';

// export default class Profile extends React.Component ({navigation}) {
// const Profile: () => React$Node = () => {
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: '',
      dataSource: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('id').then((user_id) => {
      let user_save_id = user_id;
      console.log(user_save_id);
      // alert(user_save_id);
      return fetch(apiConfig.baseUrl + 'profile.php?user_id=' + user_save_id)
        .then((response) => response.json())
        .then((responseJson) => {
          this.data = responseJson.name;
          this.setState({
            dataSource: responseJson,
            // hits: responseJson.hits['first_name'],
          });
          // alert(responseJson);
          // console.log(this.data );
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         width: 110
  //     };
  //         AsyncStorage.getItem("Name").then((Name) =>
  //         {
  // alert(Name);
  // this.data=Name;
  // this.state = { data: Name() }
  // alert(this.data);
  // let user_save_id = user_id;
  // this.setState({
  //     data: Name,
  //     // pin:user_id,
  // })
  //             })
  // }

  render() {
    // const items = this.data;

    // const {hits} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.SectionStyleWeightLog}>
            <ImageBackground
              source={require('../img/Rounded-Rectangle-21.jpg')}
              style={styles.image}>
              <View style={styles.SectionStyleWeightLogback}>
                <View style={styles.SectionStyleProgress}>
                  <Text style={styles.headingTextname}>{this.data}</Text>
                  <View style={styles.SectionStyleAdvance}>
                    <Image
                      source={require('../img/gym-(3).png')}
                      style={styles.AdvanceBottomimg}
                    />
                    <Text style={styles.AdvancedheadingText}>Advanced</Text>
                  </View>
                </View>
                <View style={styles.SectionStyleProgressCircleView}>
                  <ProgressCircle
                    percent={75}
                    radius={60}
                    borderWidth={10}
                    borderRadius={5}
                    left={100}
                    color="#cc8d1e"
                    shadowColor="#323231"
                    bgColor="#3c4145"
                    TouchableOpacity={5}>
                    <Text
                      style={{
                        fontSize: 18,
                        backgroundColor: '#00000000',
                        color: 'white',
                      }}>
                      {'30 %'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        backgroundColor: '#00000000',
                        color: 'white',
                      }}>
                      {'of goals'}
                    </Text>
                  </ProgressCircle>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.SectionStyleSegemntView}>
            <View style={styles.viewback}>
              <View style={styles.SectionStyleSubView}>
                <Text
                  style={{
                    fontSize: 16,
                    backgroundColor: '#00000000',
                    color: 'white',
                  }}>
                  {'24 %'}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    backgroundColor: '#00000000',
                    color: 'white',
                  }}>
                  {'Body Full'}
                </Text>
              </View>
            </View>
            <View style={styles.viewbackMiddle}>
              <View style={styles.SectionStyleSubView}>
                <Text
                  style={{
                    fontSize: 16,
                    backgroundColor: '#00000000',
                    color: 'white',
                  }}>
                  {'72 Kg'}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    backgroundColor: '#00000000',
                    color: 'white',
                  }}>
                  {'Weight'}
                </Text>
              </View>
            </View>
            <View style={styles.viewback}>
              <View style={styles.SectionStyleSubView}>
                <Text
                  style={{
                    fontSize: 16,
                    backgroundColor: '#00000000',
                    color: 'white',
                  }}>
                  {'186 cm'}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    backgroundColor: '#00000000',
                    color: 'white',
                  }}>
                  {'Height'}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.headingTextMiddle}>
            You Made a Great Progress !
          </Text>
          <Text style={styles.headingTextMiddle}>Dont Give Up !</Text>
          <View style={styles.viewBottomback}>
            <View style={styles.viewBottomSubViewback}>
              <View style={styles.SectionStyleCardioBack}>
                <Image
                  source={require('../img/home-run.png')}
                  style={styles.CardioBottomimg}
                />
                <Text style={styles.CardioheadingText}>Cardio</Text>
              </View>
              <View style={styles.SectionStyleCardioCornerSide}>
                <Text style={styles.CardioheadingTextCorner}>
                  141 min/161 min
                </Text>
              </View>
            </View>

            <View style={styles.example}>
              <ProgressBar
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                color={'#cc8d1e'}
                width={'100%'}
              />
            </View>

            <View style={styles.viewBottomSubViewback}>
              <View style={styles.SectionStyleCardioBack}>
                <Image
                  source={require('../img/weight-(1).png')}
                  style={styles.CardioBottomimg}
                />
                <Text style={styles.CardioheadingText}>Weights</Text>
              </View>

              <View style={styles.SectionStyleCardioCornerSide}>
                <Text style={styles.CardioheadingTextCorner}>
                  141 min/161 min
                </Text>
              </View>
            </View>

            <View style={styles.example}>
              <ProgressBar
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
                color={'#cc8d1e'}
                width={'100%'}
              />
            </View>
          </View>

          {/*<TouchableOpacity style={styles.Bottombtn}*/}
          {/*                  onPress={handleSubmitPressLogin}>*/}

          {/*    <Text style={styles.headingText}>BACK</Text>*/}

          {/*</TouchableOpacity>*/}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2e3337',
  },
  progressBar: {
    height: 5,
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    bottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'flex-start',
    height: 245,
  },
  example: {
    height: 6,
    width: '95%',
    backgroundColor: '#00000000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    bottom: 10,
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
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
    color: '#595856',
  },
  header: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'center',
    margin: 100,
    marginLeft: -200,
    marginTop: 80,
    left: -30,
  },
  headertwo: {
    fontSize: 13,
    color: 'white',
    alignSelf: 'flex-start',
    marginTop: 0,
    marginLeft: -130,
  },
  headerbar: {
    fontSize: 10,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 10,
  },
  headerbarButon: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
  textinput: {
    alignSelf: 'center',
    height: 40,
    width: 350,
    paddingLeft: 40,
    marginBottom: 20,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  buttoncontainer: {
    height: 46,
    width: 250,
    borderRadius: 46,
    backgroundColor: '#f9a717',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    alignSelf: 'center',
    height: 110,
    width: 300,
  },
  inputStyle: {
    flex: 1,
  },
  SectionStyleUsername: {
    flexDirection: 'row',
    width: 350,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 40,
    alignSelf: 'center',
    marginTop: 50,

    margin: 10,
  },
  SectionStyle: {
    flexDirection: 'row',
    width: 412,
    borderRadius: 6,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 80,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 0,

    margin: 0,
  },
  SectionStyleSegemntView: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 130,
    alignSelf: 'flex-start',
    // justifyContent:'flex-start',
    marginTop: 0,
    margin: 10,
  },
  SectionStyleSegemntViewBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'black',
    borderColor: '#00000000',
    height: 130,
    alignSelf: 'flex-start',
    // justifyContent:'flex-start',
    marginTop: 0,
    margin: 10,
  },
  SectionStyleProgress: {
    flexDirection: 'column',
    width: 230,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 150,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 50,
    margin: 0,
  },
  SectionStyleSubView: {
    flexDirection: 'column',
    width: 100,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SectionStyleProgressCircleView: {
    flexDirection: 'column',
    width: 200,

    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 130,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: -20,
    marginLeft: 10,
    top: 70,
  },
  SectionStyleAdvance: {
    flexDirection: 'row',
    width: 100,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 20,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    left: 42,
    top: 10,
  },
  SectionStyleCardioBack: {
    flexDirection: 'row',
    width: 150,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    left: 10,
    top: -10,
  },
  SectionStyleCardioCornerSide: {
    flexDirection: 'row',
    width: 150,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    left: 10,
    top: -10,
  },
  SectionStyleWeightLog: {
    flexDirection: 'column',
    borderRadius: 6,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    top: 0,
    height: 245,
    margin: 0,
  },
  SectionStyleWeightLogback: {
    flexDirection: 'row',
    width: 420,
    backgroundColor: '#00000000',
    height: 200,
    alignSelf: 'center',
    top: -30,
    margin: 6,
  },
  // ImageStyle: {
  //     padding: 10,
  //     margin: 5,
  //     left : 30,
  //     height: 25,
  //     width: 25,
  //     resizeMode: 'stretch',
  //     alignItems: 'center',
  // },
  buttoncontainerForget: {
    height: 40,
    width: 250,
    borderRadius: 40,
    backgroundColor: '#00000000',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 0,
  },
  headerbarButonForgot: {
    fontSize: 13,
    color: '#fff',
    alignSelf: 'center',
  },
  buttoncontainerSignIn: {
    height: 40,
    width: 250,
    borderRadius: 40,
    backgroundColor: '#00000000',
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 0,
  },
  headerbarButonSignIn: {
    fontSize: 13,
    color: '#fff',
    alignSelf: 'center',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: '#00000000',
    // Set content's vertical alignment.
    justifyContent: 'center',

    // Set content's horizontal alignment.
    alignItems: 'center',
  },

  ImageClass: {
    // Setting up image width.
    width: 24,
    alignSelf: 'center',
    alignItems: 'center',
    // Setting up image height.
    height: 24,
  },
  socialcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  img: {
    flex: 1,
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    height: 30,
    width: 30,
    left: 10,
    margin: 20,
  },
  Bottomimg: {
    flex: 1,
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    height: 40,
    width: 30,
    right: 10,
    margin: 20,
  },
  AdvanceBottomimg: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 10,
    width: 18,
    top: 5,
  },
  CardioBottomimg: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 60,
    width: 60,
    top: -10,
  },
  btn: {
    flex: 1,
    height: 10,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginLeft: 0,
    marginTop: 0,
  },

  Bottombtn: {
    flex: 1,
    height: 60,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#cc8d1e',
    marginTop: 90,
    borderRadius: 6,
  },
  btnLeft: {
    flex: 1,
    height: 18,
    width: 18,
    left: -30,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: -20,
  },
  btnRight: {
    flex: 1,
    height: 18,
    width: 18,
    left: -85,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  bottomButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    bottom: 10,
  },
  viewBottomback: {
    flex: 1,

    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#00000000',
    height: 180,
    margin: 12,
    top: 25,
    marginTop: 0,
    borderRadius: 5,
  },
  viewBottomSubViewback: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#3c4145',
    height: 300,
    top: 5,
    marginTop: 1,
    borderRadius: 5,
  },
  viewback: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3c4145',
    height: 90,
    margin: 1,
    width: 60,
    borderRadius: 5,
  },
  viewbackMiddle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#3c4145',
    height: 90,
    margin: 1,
    width: 60,
  },
  socialbottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: -200,
    paddingLeft: 200,
    marginTop: 0,
  },
  socialbottomMaleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: -160,
  },
  socialbottomFemaleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: -100,
    margin: -40,
  },
  bottom: {
    flex: 1,

    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
  blockContainer: {
    backgroundColor: '#fff',
    width: '97%',
    marginLeft: 60,
    elevation: 3,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  blockContainerCheckbox: {
    backgroundColor: '#fff',
    width: '97%',
    marginLeft: 60,
    elevation: 3,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 0,
  },
  headingTextname: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    marginTop: 0,
    marginLeft: 39,
    top: 0,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginLeft: 0,
    top: 0,
  },
  headingTextMiddle: {
    fontSize: 24,
    fontWeight: '900',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    top: 0,
  },
  AdvancedheadingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#c68718',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: -2,
    left: 25,
  },
  CardioheadingText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: 8,
    left: 65,
  },
  CardioheadingTextCorner: {
    fontSize: 9,
    fontWeight: '800',
    color: 'white',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: 12,
    left: 65,
  },
  headingTextWeight: {
    fontSize: 13,
    fontWeight: '100',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  headingTextValueWeight: {
    fontSize: 26,
    fontWeight: '100',
    color: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  headingTextSub: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
    margin: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    left: 12,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioText: {
    marginHorizontal: 5,
    fontSize: 15,
    color: 'white',
  },
});
// export default Profile;

// https://reactnative.dev/docs/layout-props#left,
