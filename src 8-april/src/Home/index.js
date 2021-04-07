import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfilSekolah from '../ProfilSekolah/index';
import Ekstrakulikuler from '../Ekstrakulikuler/index';
import InformasiPPDB from '../InformasiPPDB/index';
import Prestasi from '../Prestasi/index';
import Pengumuman from '../Pengumuman/index';
import TanyaSekolah from '../TanyaSekolah/index';
import AdminLogin from '../AdminLogin/index';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Profil">
        <Drawer.Screen name="Profil" component={ProfilSekolah} />
        <Drawer.Screen name="Ektrakulikuler" component={Ekstrakulikuler} />
        <Drawer.Screen name="PPDB" component={InformasiPPDB} />
        <Drawer.Screen name="Prestasi" component={Prestasi} />
        <Drawer.Screen name="Pengumuman" component={Pengumuman} />
        <Drawer.Screen name="Tanya Sekolah" component={TanyaSekolah} />
        <Drawer.Screen name="Login Admin" component={AdminLogin} />        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;