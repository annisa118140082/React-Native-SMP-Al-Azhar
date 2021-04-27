import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
//import IconMenu from '../../assets/image/menu1.png'
//import Profil1 from '../../assets/image/profil1.png'
import firebase from "firebase";

function ProfilSekolah() {
  return (
    <View
      style={{
        marginTop: 27,
      }}
    >
      <View style={styles.titlebar}>
        <Image
          source={require("../../../assets/image/menu1.png")}
          style={styles.icon}
        />
        <Text style={styles.namahalaman}>Profil Sekolah</Text>
        <View style={{ marginLeft: 140 }}>
          <Button title="Edit" />
        </View>
      </View>
      <View>
        <Text style={styles.judulprofil}>SMP AL-AZHAR 3 BANDAR LAMPUNG</Text>
        <Image
          source={require("../../../assets/image/profil1.png")}
          style={styles.fotoprofil}
        />
      </View>
      <TouchableOpacity
        style={{ padding: 20 }}
        onPress={() => firebase.auth().signOut()}
      >
        <Text style={{ color: "#1B9CFC" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfilSekolah;

const styles = StyleSheet.create({
  titlebar: {
    backgroundColor: "#AEBE89",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  namahalaman: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  fotoprofil: {
    width: 375,
    height: 133,
    justifyContent: "center",
    marginHorizontal: 18,
  },
  judulprofil: {
    fontSize: 25,
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginVertical: 17,
    marginHorizontal: 63,
    textAlign: "center",
    color: "#525252",
  },
});
