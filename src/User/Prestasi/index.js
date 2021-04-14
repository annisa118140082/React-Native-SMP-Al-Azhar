import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import IconMenu from '../../../assets/image/menu1.png'
import Profil1 from '../../../assets/image/profil1.png'

const Prestasi = () => {
    return (
        <View style={{
            marginTop: 27
        }}>
            <View style={styles.titlebar}>
                <Image source={{uri: IconMenu}} style={styles.icon} />
                <Text style={styles.namahalaman}>Prestasi</Text>
            </View>

                <View style={{ flex:1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{uri: Profil1}} style={styles.fotoprofil}/>
                        <View>
                            <Text style={styles.namasiswaberprestasi}>
                                Riski D
                            </Text>
                            <Text style={styles.namakejuaraan}>
                                Juara I FLS2N 2020 musik tradisional profinsi Lampung
                            </Text>
                        </View>
                     </View>        
                </View>

                <View style={{ flex:1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'  }}>
                        <Image source={{uri: Profil1}} style={styles.fotoprofil}/>
                        <View>
                            <Text style={styles.namasiswaberprestasi}>
                                Aisyah Kamila
                            </Text>
                            <Text style={styles.namakejuaraan}>
                                Juara II FLS2N 2019 musik tradisional profinsi Lampung
                            </Text>
                        </View>
                    </View>
                </View>
                    
                <View style={{ flex:1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'  }}>
                        <Image source={{uri: Profil1}} style={styles.fotoprofil}/>
                        <View>
                            <Text style={styles.namasiswaberprestasi}>
                                Shifa Salsabila
                            </Text>
                            <Text style={styles.namakejuaraan}>
                                Juara I FLS2N 2018 musik tradisional profinsi Lampung
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
    );
}

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
    },
    namakejuaraan: {
        fontSize: 17,
        fontFamily: 'Poppins',
        color: '#000000',
        alignItems: 'center',
        marginTop: 5,
        width: 180
    }
})
