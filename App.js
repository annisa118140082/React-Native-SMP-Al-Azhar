import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/SplashScreen/index';
import Home from './src/Home/index';
import ProfilSekolah from './src/ProfilSekolah/index';
import InformasiPPDB from './src/InformasiPPDB/index';
import Prestasi from './src/Prestasi/index';
import Ekstrakulikuler from './src/Home/Ekstrakulikuler/index';
import Pengumuman from './src/Pengumuman';

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
    <View>
      {/* {splash && <SplashScreen />}
      {home && <Home />} */}
      {/* <ProfilSekolah /> */}
      {/* <InformasiPPDB /> */}
      {/* <Prestasi /> */}
      {/* <Ekstrakulikuler /> */}
      <Pengumuman />
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
