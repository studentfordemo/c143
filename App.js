import React,{Component} from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
import HomeScreen from "./screens/Homeformovie";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends Component{
  render(){
  return (
    <SafeAreaProvider>
    <HomeScreen/>
    </SafeAreaProvider>
  );
}
}
