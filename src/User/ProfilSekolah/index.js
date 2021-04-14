import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import IconMenu from '../../../assets/image/menu1.png'
import Profil1 from '../../../assets/image/profil1.png'

const ProfilSekolah = () => {
    return (
        <ScrollView>
            <View style={{
            marginTop: 27
        }}>
            <View style={styles.titlebar}>
                <Image source={{uri: IconMenu}} style={styles.icon} />
                <Text style={styles.namahalaman}>Profil Sekolah</Text>
            </View>
            <View>
                <Text style={styles.judulprofil}>
                    SMP AL-AZHAR 3 BANDAR LAMPUNG
                </Text>
                <Image source={{uri: Profil1}} style={styles.fotoprofil}/>
            </View>
            <View style={styles.card}>
                <Text style={styles.subjudul}>Info Sekolah</Text>
                <Text style={styles.isi}>
                    NPSN{"\t"}{"\t"}10807221{"\n"}{"\n"}
                    NSS{"\t"}{"\t"}{"\t"}202126001085{"\n"}{"\n"}
                    Nama{"\t"}{"\t"}SMPS AL - AZHAR 3 BANDAR LAMPUNG{"\n"}{"\n"}
                    Akreditasi{"\t"}Akreditasi A{"\n"}{"\n"}
                    Alamat{"\t"}{"\t"}JL. Gunung Tanggamus Raya No.34{"\n"}{"\n"}
                    Kodepos{"\t"}{"\t"}35141{"\n"}{"\n"}
                    Nomer Telpon{"\t"}0721771482{"\n"}{"\n"}
                    Nomer Faks{"\t"}-{"\n"}{"\n"}
                    Surel{"\t"}{"\t"}smpalazhar3bl@yahoo.co.id{"\n"}{"\n"}
                    Jenjang{"\t"}{"\t"}SMP{"\n"}{"\n"}
                    Status{"\t"}{"\t"}Swasta{"\n"}{"\n"}
                    Situs{"\t"}{"\t"}smpalazhar3bl.blogspot.com{"\n"}{"\n"}
                    Lintang{"\t"}{"\t"}-5.37823374691718{"\n"}{"\n"}
                    Bujur{"\t"}{"\t"}105.27425229549408{"\n"}{"\n"}
                    Ketinggian{"\t"}103{"\n"}{"\n"}
                    Waktu Belajar{"\t"}Sekolah Pagi{"\n"}{"\n"}
                    </Text>
            </View>
        </View>
        </ScrollView>
    );
}

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
    icon: {
        width: 20,
        height: 20,
        marginLeft: 20
    },
    fotoprofil: {
        width: 375,
        height: 133,
        justifyContent: 'center',
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
    }
})
