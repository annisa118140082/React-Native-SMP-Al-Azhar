import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import IconMenu from '../../../assets/image/menu1.png'
import Profil1 from '../../../assets/image/profil1.png'

const InformasiPPDB = () => {
    return (
        <View style={{
            marginTop: 27
        }}>
            <View style={styles.titlebar}>
                <Image source={{uri: IconMenu}} style={styles.icon} />
                <Text style={styles.namahalaman}>Informasi PPDB</Text>
            </View>
            <View>
                <Image source={{uri: Profil1}} style={styles.fotoprofil}/>
                <Text style={styles.judulprofil}>
                    Pendaftaran Peserta Didik Baru Tahun Ajaran 2021/2022
                </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.subjudul}>1. Siswa mengisi form pendaftaran online</Text>
                <Text style={styles.isi}>
                    Calon peserta memilih sekolah dan mengisi biodata pendaftaran online sesuai jadwal yang ditetapkan. Tidak ada dokumen yang perlu disiapkan pada tahap ini.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subjudul}>2. Siswa melakukan pembayaran</Text>
                <Text style={styles.isi}>
                    Calon peserta didik mencetak form bukti pendaftaran kemudian melakukan pembayaran untuk memperoleh PIN yang digunakan untuk login.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subjudul}>3. Siswa melengkapi biodata</Text>
                <Text style={styles.isi}>
                    Calon peserta didik login dengan PIN yang diberikan oleh pihak sekolah dan kemudian melengkapi biodata secara online. Persiapkan dokumen digital (scan) seperti pas foto, kartu keluarga, sertifikat, ijazah, dll.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subjudul}>4. Panitia memverifikasi data</Text>
                <Text style={styles.isi}>
                    Panitia akan melakukan verifikasi terhadap data dan berkas yang diupload oleh calon peserta didik. Calon peserta didik yang dinyatakan lolos verifikasi dapat mengikuti tahap seleksi selanjutnya.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subjudul}>5. Siswa mengikuti ujian dan wawancara</Text>
                <Text style={styles.isi}>
                    Calon peserta didik mengikuti ujian seleksi masuk berbasis online dan dilanjutkan dengan wawancara sesuai jadwal dan mekanisme yang diatur oleh panitia.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subjudul}>6. Pengumuman</Text>
                <Text style={styles.isi}>
                    Calon peserta didik yang dinyatakan lulus seleksi akan diumumkan secara online dengan cara login menggunakan PIN yang dimiliki oleh masing-masing siswa.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subjudul}>7. Daftar Ulang</Text>
                <Text style={styles.isi}>
                    Calon peserta didik yang telah lulus seleksi diwajibkan untuk melaksanakan daftar ulang.
                </Text>
            </View>
        </View>
    );
}

export default InformasiPPDB;

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
        marginHorizontal: 18,
        marginVertical: 18
    },
    judulprofil: {
        fontSize: 25,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginHorizontal: 63,
        textAlign: 'center',
        color: '#525252'
    },
    card: {
        backgroundColor: '#16ba00',
        marginHorizontal: 18,
        marginVertical: 18,
        borderRadius: 3,
        shadowRadius: 3
    },
    subjudul: {
        fontSize: 20,
        // textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        marginBottom: 15,
        marginHorizontal: 15,
        marginVertical: 10
    },
    isi: {
        textAlign: 'left',
        marginHorizontal: 10,
        marginBottom: 10,
        color: 'white',
    },
})
