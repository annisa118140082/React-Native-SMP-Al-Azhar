import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfilSekolah from '../User/ProfilSekolah/index';
import Ekstrakulikuler from '../User/Ekstrakulikuler/index';
import InformasiPPDB from '../User/InformasiPPDB/index';
import Prestasi from '../User/Prestasi/index';
import Pengumuman from '../User/Pengumuman/index';
import TanyaSekolah from '../User/TanyaSekolah/index';
// import AdminLogin from '../Admin/AdminLogin/index';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
        <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={ProfilSekolah} />
      <Drawer.Screen name="Article" component={Ekstrakulikuler} />
    </Drawer.Navigator>
       </NavigationContainer>
  //     <Drawer.Navigator   drawerStyle={{
  //   backgroundColor: '#c6cbef',
  //   width: 240,
  // }} initialRouteName="Profil">
  //       <Drawer.Screen name="Profil" component={ProfilSekolah} />
  //       <Drawer.Screen name="Ektrakulikuler" component={Ekstrakulikuler} />
  //       <Drawer.Screen name="PPDB" component={InformasiPPDB} />
  //       <Drawer.Screen name="Prestasi" component={Prestasi} />
  //       <Drawer.Screen name="Pengumuman" component={Pengumuman} />
  //       <Drawer.Screen name="Tanya Sekolah" component={TanyaSekolah} />
  //       {/* <Drawer.Screen name="Login Admin" component={AdminLogin} />         */}
  //     </Drawer.Navigator>
  );
}

export default App;