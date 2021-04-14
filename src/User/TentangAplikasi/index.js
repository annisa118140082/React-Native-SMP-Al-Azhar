import React from 'react'
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native'
import ImageSplashscreen from '../../../assets/image/splashscreen.png'
import TombolKembali from '../../../assets/image/back.png'

const TentangAplikasi = () => {
    // let ScreenHeight = Dimensions.get("window").height;
    return (
        <View style={{
            marginTop: 27
        }}>
            <View style={styles.titlebar}>
                <Image source={{uri: TombolKembali}} style={styles.icon} />
            </View>
        <View style={styles.wrapper}>
            <Text style={styles.namaaplikasi}>SMP AL-AZHAR MOBILE</Text>
            <Text style={styles.version}>Versi 1.1.1</Text>
            <Image source={{uri: ImageSplashscreen}} style={styles.logo} />
            {/* <Image source={require('../../assets/image/splashscreen.png')} style={styles.logo} /> */}
        </View>
        </View>
    );
}

export default TentangAplikasi;

const styles = StyleSheet.create({
    titlebar: {
        marginLeft: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 110
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 20
    },
    logo: {
        width: 146,
        height: 170,
        marginVertical: 15
    },
    namaaplikasi: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'SemiBold',
        textAlign: 'center',
    },
    version: {
        fontFamily: 'Poppins',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10
    }
})