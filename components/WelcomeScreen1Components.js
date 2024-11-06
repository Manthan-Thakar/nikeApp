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
const { height } = Dimensions.get("screen");

export default function WelcomeComponents({
  image,
  text,
  buttonText,
  backgroundImage,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.wtnContainer}>
        <Image
          source={require("../assets/nike/wtnike.png")}
          style={{ height: 30, width: 27, position: "absolute", left: 0 }}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Image source={image} style={styles.image} />
      </ImageBackground>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    height: height - 45,
    backgroundColor: colors.backgroundColor,
  },
  wtnContainer: {
    marginTop: 50,
    // justifyContent:'center',
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

    height: 600,
    width: "100%",
    backgroundColor: colors.backgroundColor,
  },
  image: {
    position: "absolute",
    right: 0,
    height: 250,
    width: 400,
  },
  button: {
    marginTop: 50,
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
