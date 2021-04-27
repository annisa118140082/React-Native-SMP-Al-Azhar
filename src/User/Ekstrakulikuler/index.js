import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import IconMenu from "../../../assets/image/menu1.png";
import Profil1 from "../../../assets/image/profil1.png";

const Ekstrakulikuler = () => {
  return (
    <View
      style={{
        marginTop: 27,
      }}
    >
      <ScrollView>
        <View style={styles.titlebar}>
          <Image
            source={require("../../../assets/image/menu1.png")}
            style={styles.icon}
          />
          <Text style={styles.namahalaman}>Ekstrakulikuler</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../../../assets/image/voli.jpg")}
              style={styles.fotoprofil}
            />
            <Text style={styles.namaeskul}>Voli</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../../../assets/image/pramuka.jpg")}
              style={styles.fotoprofil}
            />
            <Text style={styles.namaeskul}>Pramuka</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../../../assets/image/rohis.jpg")}
              style={styles.fotoprofil}
            />
            <Text style={styles.namaeskul}>Rohis</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../../../assets/image/pmr.jpg")}
              style={styles.fotoprofil}
            />
            <Text style={styles.namaeskul}>PMR</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Ekstrakulikuler;

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
    width: 170,
    height: 170,
    justifyContent: "center",
    marginHorizontal: 18,
    marginTop: 18,
  },
  namaeskul: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#000000",
    marginTop: 10,
    textAlign: "center",
    justifyContent: "center",
  },
});
