import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import IconMenu from "../../../assets/image/menu1.png";
import Profil1 from "../../../assets/image/profil1.png";

function Pengumuman({ navigation }) {
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
        <Text style={styles.namahalaman}>Ekstrakulikuler</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Image
            source={require("../../../assets/image/profil1.png")}
            style={styles.fotoprofil}
          />
          <Text style={styles.namasiswaberprestasi}>Judul Pengumuman</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <Image
            source={require("../../../assets/image/profil1.png")}
            style={styles.fotoprofil}
          />
          <Text style={styles.namasiswaberprestasi}>Judul Pengumuman</Text>
        </View>
      </View>
    </View>
  );
}

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
    justifyContent: "center",
    marginHorizontal: 18,
    marginTop: 18,
    alignItems: "center",
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
