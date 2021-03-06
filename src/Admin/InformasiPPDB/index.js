import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import IconMenu from "../../../assets/image/menu1.png";
import Profil1 from "../../../assets/image/profil1.png";

const InformasiPPDB = () => {
  return (
    <View
      style={{
        marginTop: 27,
      }}
    >
      <View style={styles.titlebar}>
        <Image
          onPress={() => navigation.toggleDrawer()}
          source={require("../../../assets/image/menu1.png")}
          style={styles.icon}
        />
        <Text style={styles.namahalaman}>Informasi PPDB</Text>
      </View>
      <View>
        <Image source={{ uri: Profil1 }} style={styles.fotoprofil} />
        <Text style={styles.judulprofil}>
          Pendaftaran Peserta Didik Baru Tahun Ajaran 2021/2022
        </Text>
      </View>
      <View style={styles.card}></View>
    </View>
  );
};

export default InformasiPPDB;

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
    marginVertical: 18,
  },
  judulprofil: {
    fontSize: 25,
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginHorizontal: 63,
    textAlign: "center",
    color: "#525252",
  },
});
