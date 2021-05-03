import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import IconMenu from "../../../assets/image/menu1.png";
import Profil1 from "../../../assets/image/profil1.png";

const Pengumuman = () => {
  return (
    <View style={{ marginTop: 27, }}>
      <View style={styles.titlebar}>
        <Image
          source={require("../../../assets/image/menu1.png")}
          style={styles.icon}
        />
        <Text style={styles.namahalaman}>Pengumuman</Text>
      </View>
      <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require("../../../assets/image/profil1.png")}
          style={styles.fotoprofil} />
        <Text style={styles.namasiswaberprestasi}>Judul Pengumuman</Text>
      </View>
    </View>
  );
};

export default Pengumuman;

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
    width: 370,
    height: 200,
    marginTop: 18,
  },
  namasiswaberprestasi: {
    fontSize: 18,
    fontFamily: "Poppins",
    color: "#000000",
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
  },
});
