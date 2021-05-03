import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import IconMenu from '../../../assets/image/menu1.png'
import Profil1 from '../../../assets/image/profil1.png'
import Alamat from '../../../assets/image/alamat.png'

const ProfilSekolah = () => {
  return (
    <View style={{
      marginTop: 27
    }}>
      <View style={styles.titlebar}>
        <Image source={require("../../../assets/image/menu1.png")} style={styles.icon} />
        <Text style={styles.namahalaman}>Profil Sekolah</Text>
      </View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.judulprofil}>
            SMP AL-AZHAR 3 BANDAR LAMPUNG
                </Text>
          <Image source={require("../../../assets/image/profil1.png")} style={styles.fotoprofil} />
        </View>
        <View style={styles.card}>
          <Text style={styles.subjudul}>Info Sekolah</Text>
          <Text style={styles.isi}>
            NPSN{"\t"}{"\t"}{"\t"}10807221{"\n"}{"\n"}
                    NSS{"\t"}{"\t"}{"\t"}{"\t"}202126001085{"\n"}{"\n"}
                    Nama{"\t"}{"\t"}{"\t"}SMPS AL - AZHAR 3 BANDAR LAMPUNG{"\n"}{"\n"}
                    Akreditasi{"\t"}{"\t"}Akreditasi A{"\n"}{"\n"}
                    Alamat{"\t"}{"\t"}{"\t"}Jl. Mawar No.43, Kedaton, Kec. Kedaton, Kota Bandar Lampung, Lampung 35132{"\n"}{"\n"}
                    Kodepos{"\t"}{"\t"}{"\t"}35141{"\n"}{"\n"}
                    Nomer Telpon{"\t"}{"\t"}0721771482{"\n"}{"\n"}
                    Nomer Faks{"\t"}{"\t"}-{"\n"}{"\n"}
                    Surel{"\t"}{"\t"}{"\t"}smpalazhar3bl@yahoo.co.id{"\n"}{"\n"}
                    Jenjang{"\t"}{"\t"}{"\t"}SMP{"\n"}{"\n"}
                    Status{"\t"}{"\t"}{"\t"}Swasta{"\n"}{"\n"}
                    Situs{"\t"}{"\t"}{"\t"}smpalazhar3bl.blogspot.com{"\n"}{"\n"}
                    Lintang{"\t"}{"\t"}{"\t"}-5.37823374691718{"\n"}{"\n"}
                    Bujur{"\t"}{"\t"}{"\t"}105.27425229549408{"\n"}{"\n"}
                    Ketinggian{"\t"}{"\t"}103{"\n"}{"\n"}
                    Waktu Belajar{"\t"}{"\t"}Sekolah Pagi{"\n"}{"\n"}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subjudul}>Identitas Sekolah</Text>
          <Text style={styles.isi}>
            NPSN{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}10807221{"\n"}{"\n"}
                    Status{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}Swasta{"\n"}{"\n"}
                    Nama{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}SMP{"\n"}{"\n"}
                    Bentuk Pendidikan{"\t"}{"\t"}{"\t"}Yayasan{"\n"}{"\n"}
                    Status Kepemilikan{"\t"}{"\t"}{"\t"}172/I.12.1.6/I.1989{"\n"}{"\n"}
                    SK Pendirian Sekolah{"\t"}{"\t"}1989-10-06{"\n"}{"\n"}
                    SK Izin Operasional{"\t"}{"\t"}{"\t"}1824/I.12.BI/U/1989{"\n"}{"\n"}
                    Tanggal SK Izin Operasional{"\t"}1989-12-13{"\n"}{"\n"}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subjudul}>Hubungi Kami</Text>
          <Text style={styles.subjudul}>Email</Text>
          <Text style={styles.isi}>contoh@gmail.com</Text>
          <Text style={styles.subjudul}>Telepon</Text>
          <Text style={styles.isi}>021-79187676</Text>
          <Text style={styles.subjudul}>Faks</Text>
          <Text style={styles.isi}>02419425</Text>
          <Text style={styles.subjudul}>Alamat</Text>
          <Text style={styles.isi}>Jl. Mawar No.43, Kedaton, Kec. Kedaton, Kota Bandar Lampung, Lampung 35132</Text>
          <Image source={require("../../../assets/image/alamat.png")} style={styles.gambaralamat} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilSekolah;

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
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 20
  },
  fotoprofil: {
    width: 375,
    height: 133,
    marginHorizontal: 18
  },
  judulprofil: {
    fontSize: 25,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginVertical: 17,
    marginHorizontal: 63,
    textAlign: 'center',
    color: '#525252'
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 18,
    marginVertical: 18,
    borderRadius: 3,
    shadowRadius: 3
  },
  subjudul: {
    fontSize: 20,
    // fontWeight: 'Medium',
    fontFamily: 'Poppins',
    marginBottom: 15,
    marginHorizontal: 15,
    marginVertical: 10
  },
  isi: {
    textAlign: 'left',
    marginHorizontal: 10,
    marginBottom: 10
  },
  gambaralamat: {
    width: 300,
    height: 176,
    marginHorizontal: 12,
    marginBottom: 34,
    marginTop: 18
  }
})
