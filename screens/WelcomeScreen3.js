import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../colors/colors";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen3() {
  const navigation= useNavigation();
    return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Image
          source={require("../assets/nike/ws2S2.png")}
          style={{ height: 100, width: 100 }}
        />
        <Image
          source={require("../assets/nike/ws2S1.png")}
          style={{ height: 100, width: 100 }}
        />
      </View>

      <View style={styles.container1}>
        <Image
          source={require("../assets/nike/shoes3.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/nike/shadow2.png")}
          style={styles.shadow}
        />

        <View style={styles.textBox}>
          <Text style={styles.text}>You Have the Power To</Text>
          <Text style={styles.description}>
          There Are Many Beautiful And Attractive Plants To Your Room
          </Text>
        </View>

        <Image
          source={require("../assets/nike/Vector.png")}
          style={styles.vector}
        />

        <Image
          source={require("../assets/nike/ws3.png")}
          style={styles.loading}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('welcome1')}>
        <Text style={styles.buttonText}>{"Next"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colors.backgroundColor,
  },
  style1: {
    flexDirection: "row",
    top: 100,
    width: "100%",
    justifyContent: "space-around",
  },

  container1: {
    flexDirection: "column",
    justifyContent: "center",
    height: 600,
    width: "100%",
  },
  image: {
    position: "absolute",
    top: 70,
    height: 300,
    width: 400,
  },
  shadow: {
    position: "absolute",
    bottom: 220,
    justifyContent: "center",
    width: 218,
    left: 70,
    height: 17,
  },
  textBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 5,
    bottom: 50,
    height: 200,
    width: 410,
  },
  text: {
    fontSize: 40,
    fontWeight: "600",
    color: "#FFF",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    width: 322,
    color: "#FFF",
    textAlign: "center",
  },
  vector: {
    position: "absolute",
    left: 5,
    bottom: 50,
    height: 200,
    width: 410,
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
