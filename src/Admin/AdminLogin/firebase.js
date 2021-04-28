import React, { Component } from "react";
import firebase from "firebase";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import LoginForm from "./index";
import Home from "../ProfilSekolah";
import Loading from "./loading";
//import Appa from '../../../App'

class App extends Component {
  state = {
    loggedIn: null,
  };

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyBU6Ost1EP20QxdiCOIPnP9qVVVitbmHO0",
      authDomain: "al-azhar-mob.firebaseapp.com",
      projectId: "al-azhar-mob",
      storageBucket: "al-azhar-mob.appspot.com",
      messagingSenderId: "1042805753125",
      appId: "1:1042805753125:web:09e73a48555dc4311606cc",
      measurementId: "G-NYH3DRGF7C",
    };
    // Initialize Firebase
    //  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;

      case true:
        return <Home />;

      default:
        return <Loading />;
    }
  };

  render() {
    return <View>{this.renderContent()}</View>;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});

//make this component available to the app
export default App;
