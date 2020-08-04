/*Example to Dynamically Change Drawer/Sidebar Options in React Navigation Drawer */
/* https://aboutreact.com/dynamically-change-sidebar-options/ */

import React from 'react';

//Import Navigators from React Navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//Import External Screens
import Login from './Login';
import FirstStepSig from './FirstStepSig';
import Forget from './Forget';
import SecondStepSig from './SecondStepSig';
import ThirdStepSig from './ThirdStepSig';
import Terms from './Terms';
import First from './First';
import Classic from './Classic';
import Athlete from './Athlete';
import Bulk from './Bulk';
import Crosshred from './Crossshred';
import Leanx from './Leanx';
import Tone from './Tone';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Gym',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SettingScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Setting Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#fff',
    }),
  },
});
const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Classic,
    navigationOptions: ({navigation}) => ({
      title: 'Classic',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#fff',
    }),
  },
});
const FourthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Athlete,
    navigationOptions: ({navigation}) => ({
      title: 'Athlete',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#fff',
    }),
  },
});
const FifthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Bulk,
    navigationOptions: ({navigation}) => ({
      title: 'Bulk Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#fff',
    }),
  },
});
const SixthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Crosshred,
    navigationOptions: ({navigation}) => ({
      title: 'Crosshred',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#fff',
    }),
  },
});
const SeventhActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Leanx,
    navigationOptions: ({navigation}) => ({
      title: 'Leanx',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#fff',
    }),
  },
});
const EightActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Tone,
    navigationOptions: ({navigation}) => ({
      title: 'Tone',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#f9a616',
      },
      headerTintColor: '#fff',
    }),
  },
});
const DrawerNavigationRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    SettingsScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Setting Screen',
      },
    },
    ClassicScreen: {
      screen: ThirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Classic Screen',
      },
    },
    AthleteScreen: {
      screen: FourthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Classic Screen',
      },
    },
    BulkScreen: {
      screen: FifthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Classic Screen',
      },
    },
    CrosshredScreen: {
      screen: SixthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Classic Screen',
      },
    },
    LeanxScreen: {
      screen: SeventhActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Classic Screen',
      },
    },
    ToneScreen: {
      screen: EightActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Classic Screen',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

const App = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  GetStarted: {
    screen: First,
    navigationOptions: {
      headerShown: false,
      // title: 'Demo Login',
      // headerStyle: {
      //   backgroundColor: '#307ecc',
      // },
      // headerTintColor: '#fff',
    },
  },
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignupFirstScreen: {
    screen: FirstStepSig,
    navigationOptions: {
      headerShown: false,
    },
  },
  Forget: {
    screen: Forget,
    navigationOptions: {
      headerShown: false,
    },
  },
  SecondStepSig: {
    screen: SecondStepSig,
    navigationOptions: {
      headerShown: false,
    },
  },
  ThirdStepSig: {
    screen: ThirdStepSig,
    navigationOptions: {
      headerShown: false,
    },
  },
  Terms: {
    screen: Terms,
    navigationOptions: {
      headerShown: false,
    },
  },
  DrawerNavigationRoutes: {
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default createAppContainer(App);
