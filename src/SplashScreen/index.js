import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ImageSplashScreen from "../../assets/image/splashscreen.png";

const SplashScreen = () => {
  return (
    <View style={styles.wrapper}>
      {/* <Image source={{uri: ImageSplashScreen}} style={styles.logo} /> */}
      <Image
        source={require("../../assets/image/splashscreen.png")}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
<<<<<<< HEAD
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 148,
    height: 170,
    marginVertical: 230,
  },
});
=======
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: 148,
        height: 170,
        marginVertical: 230
    }
})
>>>>>>> ff65f09513a9239c08de86c7c25be0345eb60763
