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
          source={require("../../../assets/image/menu1.png")}
          style={styles.icon}
        />
        <Text style={styles.namahalaman}>Informasi PPDB</Text>
      </View>
      <View>
        <Image
          source={require("../../../assets/image/profil1.png")}
          style={styles.fotoprofil}
        />
        <Text style={styles.judulprofil}>
          Pendaftaran Peserta Didik Baru Tahun Ajaran 2021/2022
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.subjudul}>1.Pendaftaran</Text>
        <Text style={styles.isi}>
          Pendaftaran peserta didik baru SMP Al-Azhar 3 Bandar Lampung
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subjudul}>2.Waktu Pendaftaran</Text>
        <Text style={styles.isi}>Senin Hingga Jum'at Pukul 07:30 - 15;00</Text>
      </View>
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
  card: {
    backgroundColor: "white",
    marginHorizontal: 18,
    marginVertical: 18,
    borderRadius: 3,
    shadowRadius: 3,
  },
  subjudul: {
    fontSize: 20,
    textAlign: "center",
    // fontWeight: 'Medium',
    fontFamily: "Poppins",
    marginBottom: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  isi: {
    textAlign: "left",
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
