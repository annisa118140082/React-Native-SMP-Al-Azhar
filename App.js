import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/SplashScreen/index';
import Home from './src/Home/index'

export default function App() {
  const [splash, IsSplash] = useState(true)
  const [home, IsHome] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      IsSplash(false)
      IsHome(true)
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {splash && <SplashScreen />}
      {home && <Home />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
