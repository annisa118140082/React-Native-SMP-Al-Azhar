import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProfilSekolah from "../User/ProfilSekolah/index";
import Ekstrakulikuler from "../User/Ekstrakulikuler/index";
import InformasiPPDB from "../User/InformasiPPDB/index";
import Prestasi from "../User/Prestasi/index";
import Pengumuman from "../User/Pengumuman/index";
import TanyaSekolah from "../User/TanyaSekolah/index";
import TentangAplikasi from "../User/TentangAplikasi/index";
import AdminLogin from "../Admin/AdminLogin/firebase";
// import AdminLogin from '../Admin/AdminLogin/index';
const Drawer = createDrawerNavigator();
import firebase from "firebase";
// function Abc(){
//     if(user)
// }

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Profil Sekolah" component={ProfilSekolah} />
        <Drawer.Screen name="Ektrakulikuler" component={Ekstrakulikuler} />
        <Drawer.Screen name="PPDB" component={InformasiPPDB} />
        <Drawer.Screen name="Prestasi" component={Prestasi} />
        <Drawer.Screen name="Pengumuman" component={Pengumuman} />
        <Drawer.Screen name="Tanya Sekolah" component={TanyaSekolah} />
        <Drawer.Screen name="Tentang Aplikasi" component={TentangAplikasi} />
        <Drawer.Screen name="Admin login" component={AdminLogin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
