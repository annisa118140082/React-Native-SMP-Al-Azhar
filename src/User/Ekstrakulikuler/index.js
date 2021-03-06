import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import IconMenu from '../../../assets/image/menu1.png'
import Profil1 from '../../../assets/image/profil1.png'
import Pramuka from '../../../assets/image/ekskul/pramuka.jpg'
import Rohis from '../../../assets/image/ekskul/rohis.jpg'
import PMR from '../../../assets/image/ekskul/pmr.jpg'
import English from '../../../assets/image/ekskul/english.jpg'
import Olimpiade from '../../../assets/image/ekskul/olim.jpg'
import MTK from '../../../assets/image/ekskul/mtk.jpg'
import Vocal from '../../../assets/image/ekskul/vocal.jpg'
import Seni from '../../../assets/image/ekskul/senitari.jpg'
import Keterampilan from '../../../assets/image/ekskul/keterampilan.jpg'
import Band from '../../../assets/image/ekskul/band.jpg'
import Futsal from '../../../assets/image/ekskul/futsal.jpg'
import Atletik from '../../../assets/image/ekskul/atletik.jpg'
import Taekwondo from '../../../assets/image/ekskul/taekwondo.jpg'
import Silat from '../../../assets/image/ekskul/silat.jpg'
import Karate from '../../../assets/image/ekskul/karate.jpg'

const Ekstrakulikuler = ({ navigation }) => {
  return (
    <View style={{
      marginTop: 27
    }}>
      <View style={styles.titlebar}>
        <Image source={require("../../../assets/image/menu1.png")} style={styles.icon} />
        <Text style={styles.namahalaman}>Ekstrakulikuler</Text>
      </View>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/pramuka.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Pramuka
                    </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/rohis.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Rohis
                    </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/pmr.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              PMR
                    </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/english.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              English Club
                    </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/olim.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Olimpiade Sains
                    </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/mtk.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Club MTK
                    </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/vocal.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Vocal Group
                    </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/senitari.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Seni Tari
                    </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/keterampilan.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Keterampilan
                    </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/band.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Band
                    </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/futsal.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Futsal dan Sepakbola
                    </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/atletik.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Atletik
                    </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/taekwondo.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Teakwondo
                    </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/silat.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Pencak Silat
                    </Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image source={require("../../../assets/image/ekskul/karate.jpg")} style={styles.fotoprofil} />
            <Text style={styles.namaeskul}>
              Karate
                    </Text>
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
