import React from 'react'
import {TouchableOpacity, View, Text, Image, StyleSheet, TextInput, Button} from 'react-native'
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4sjMKMtvy3MGeiJAiHs7OmKddqSuSSKk",
    authDomain: "al-azhar-app.firebaseapp.com",
    projectId: "al-azhar-app",
    storageBucket: "al-azhar-app.appspot.com",
    messagingSenderId: "849568754787",
    appId: "1:849568754787:web:5cc008a887ffedf4815c56",
    measurementId: "G-EWBEQT7QC6"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const AdminLogin = () => {
    state ={
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state

        firebase.auth().signInWithEmailAndPassword(email,password)
    }
    
    return (
        <View>
            <Text style={styles.login}>
                Login
            </Text>
        <TextInput onChangeText={email => this.setState({email})} value={this.state.email} placeholder='email' style={styles.user}/>        
        <TextInput onChangeText={password => this.setState({password})} value={this.state.password} autoCapitalize="none"  placeholder='password' style={styles.password}/>        
        
        <TouchableOpacity style={styles.log} onPress={this.handleLogin}>
        <Button title="login" color= "#C4C4C4"/>
        </TouchableOpacity>
        </View>



    )
}





const styles = StyleSheet.create({
    login: {
        position: 'absolute',
        width: 76,
        height: 35,
        left: 47,
        top: 91,
        fontFamily: 'Roboto',
        fontSyle: 'normal',
        fontWeight: 'Bold',
        fontSize: 30,
        lineHeight: 35,
        color: 'black'
    },
    user: {
        position: 'absolute',
        width: 273,
        height: 45,
        left: 37,
        top: 190,     
        fontFamily: 'Poppins',
        borderWidth: 1,
        borderColor: "#C3C3C3",
        paddingLeft:20,
        color: "#20232a",
    },
    password: {
        position: 'absolute',
        width: 273,
        height: 45,
        left: 37,
        top: 257,     
        fontFamily: 'Poppins',
        borderWidth: 1,
        borderColor: "#C3C3C3",
        paddingLeft:20,
        color: "#20232a",
    },
    log: {
        position: 'absolute',
        width: 273,
        height: 39,
        left: 37,
        top: 332,
        color: "#C4C4C4"
    }
});

export default AdminLogin;