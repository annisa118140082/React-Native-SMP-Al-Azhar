import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import IconMenu from '../../../assets/image/menu1.png'
import LCC from '../../../assets/image/prestasi/lcc.jpeg'
import KOSN from '../../../assets/image/prestasi/kosn.jpeg'
import Pocil from '../../../assets/image/prestasi/pocil.jpeg'

const Prestasi = () => {
  return (
    <View style={{ marginTop: 27, }}>
      <View style={styles.titlebar}>
        <Image source={require("../../../assets/image/menu1.png")} style={styles.icon} />
        <Text style={styles.namahalaman}>Prestasi</Text>
      </View>
      <ScrollView>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../../assets/image/prestasi/lcc.jpeg")}
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

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/prestasi/lcc.jpeg")} style={styles.fotoprofil} />
            <View>
              <Text style={styles.namasiswaberprestasi}>
                Thalita Zahra S, Akbar Maulana, Daffa Ramanda Putra (9A)
                            </Text>
              <Text style={styles.namakejuaraan}>
                Juara 2 LCC Permuseuman dan Kebudayaan Tingkat Provinsi
                            </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/prestasi/kosn.jpeg")} style={styles.fotoprofil} />
            <View>
              <Text style={styles.namasiswaberprestasi}>
                Tania Raisa Azizah (8G)
                            </Text>
              <Text style={styles.namakejuaraan}>
                Juara 4 KOSN Tk. Kota Bandar Lampung
                            </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/prestasi/pocil.jpeg")} style={styles.fotoprofil} />
            <View>
              <Text style={styles.namasiswaberprestasi}>
                Wahayu Tri Fadilla (9A)
                            </Text>
              <Text style={styles.namakejuaraan}>
                Juara 2 POCIL Selampung (Polda) Provinsi Lampung
                            </Text>
            </View>
          </View>
        </View>
      </ScrollView >
    </View>
  );
};

export default Prestasi;

const styles = StyleSheet.create({
  titlebar: {
    backgroundColor: '#AEBE89',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  namahalaman: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20
  },
  fotoprofil: {
    width: 170,
    height: 170,
    justifyContent: 'center',
    marginHorizontal: 18,
    marginTop: 18
  },
  namasiswaberprestasi: {
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#000000',
    alignItems: 'center',
    marginTop: 18,
    fontWeight: 'bold',
    width: 150
  },
  namakejuaraan: {
    fontSize: 17,
    fontFamily: 'Poppins',
    color: '#000000',
    alignItems: 'center',
    marginTop: 5,
    width: 155
  }
})
