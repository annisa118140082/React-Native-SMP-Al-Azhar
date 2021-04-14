import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import TentangAplikasi from './src/User/TentangAplikasi';
import SplashScreen from './src/SplashScreen/index';
import Home from './src/Home/index';
// import ProfilSekolah from './src/User/ProfilSekolah/index';
// import InformasiPPDB from './src/User/InformasiPPDB/index';
import Ekstrakulikuler from './src/User/Ekstrakulikuler/index'
// import Pengumuman from './src/User/Pengumuman/index'
import TentangAplikasi from './src/User/TentangAplikasi'
import Prestasi from './src/User/Prestasi';

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
      {splash && <SplashScreen />}
      {home && <Home />}
      {/* <ProfilSekolah /> */}
      {/* <InformasiPPDB /> */}
      {/* <Ekstrakulikuler /> */}
      {/* <TentangAplikasi /> */}
      {/* <Pengumuman /> */}
      {/* <Prestasi /> */}
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
