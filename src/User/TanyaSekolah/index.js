import React from 'react'
import { View, Text, Image, StyleSheet, Button} from 'react-native'
import IconMenu from '../../../assets/image/menu1.png'

function TanyaSekolah({navigation}) {
    return (
        <View style={{
            marginTop: 27
        }}>
            <View style={styles.titlebar}>
                <Image onPress={()=>navigation.toggleDrawer()} source={require('../../../assets/image/menu1.png')} style={styles.icon} />
                <Text style={styles.namahalaman}>Tanya Sekolah</Text>
            </View>
           
        
        </View>
    );
}

export default TanyaSekolah;

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
})
