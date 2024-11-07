import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  View,
} from "react-native";
import React from "react";
import { colors } from "../colors/colors";
import { useNavigation } from "@react-navigation/native";


export default function WelcomeScreen1() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.wtnContainer}>
        <Image
          source={require("../assets/nike/wtnike.png")}
          style={{ height: 30, width: 27, position: "absolute", left: 0 }}
        />
        <Text style={styles.text}>WELCOME TO NIKE</Text>
        <Image
          source={require("../assets/nike/wtndeco.png")}
          style={{ width: 150, height: 20 }}
        />
      </View>
      <ImageBackground
        source={require("../assets/nike/WelcomeBackground.png")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("../assets/nike/Welcome.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/nike/Vector.png")}
          style={styles.vector}
        />
        <Image
          source={require("../assets/nike/shadow1.png")}
          style={styles.shadow}
        />

        <Image
          source={require("../assets/nike/ws1.png")}
          style={styles.loading}
        />
      </ImageBackground>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('welcome2')}>
        <Text style={styles.buttonText}>{"Get Started"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  wtnContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  text: {
    alignContent: "center",
    fontSize: 40,
    fontWeight: "600",
    color: "#FFF",
    width: 220,
    textAlign: "center",
  },
  backgroundImage: {
    justifyContent: "center",
    height: 550,
    width: "100%",
    backgroundColor: colors.backgroundColor,
  },
  image: {
    position: "absolute",
    right: 0,
    height: 300,
    width: 400,
  },
  vector: {
    position: "absolute",
    left: 5,
    bottom: 50,
    height: 200,
    width: 410,
  },
  shadow: {
    position:'absolute',
    bottom:50,
    justifyContent:'center',
  
  },
  loading: {
    position: "absolute",
    alignSelf: "center",
    bottom: 50,
  },
  button: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 335,
    backgroundColor: "#ECECEC",
    borderRadius: 13,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
});
