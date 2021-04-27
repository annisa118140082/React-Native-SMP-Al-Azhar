import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import IconMenu from "../../../assets/image/menu1.png";
import Profil1 from "../../../assets/image/profil1.png";

const Prestasi = () => {
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <View style={styles.titlebar}>
          <Image
            source={require("../../../assets/image/menu1.png")}
            style={styles.icon}
          />
          <Text style={styles.namahalaman}>Prestasi</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/image/profil1.png")}
              style={styles.fotoprofil}
            />
            <View>
              <Text style={styles.namasiswaberprestasi}>Thalita Zahra S</Text>
              <Text style={styles.namakejuaraan}>
                LCC Permuseuman dan Perkebunan Tingkat Provinsi
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/image/profil1.png")}
              style={styles.fotoprofil}
            />
            <View>
              <Text style={styles.namasiswaberprestasi}>
                Tania Raisa Azizah
              </Text>
              <Text style={styles.namakejuaraan}>KOSN TK Bandar Lampung</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/image/profil1.png")}
              style={styles.fotoprofil}
            />
            <View>
              <Text style={styles.namasiswaberprestasi}>Wahyu Tri Fadila</Text>
              <Text style={styles.namakejuaraan}>POCIL Selampung POLDA</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Prestasi;

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
  namasiswaberprestasi: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "#000000",
    alignItems: "center",
    marginTop: 18,
    fontWeight: "bold",
  },
  namakejuaraan: {
    fontSize: 17,
    fontFamily: "Poppins",
    color: "#000000",
    alignItems: "center",
    marginTop: 5,
    width: 180,
  },
});
