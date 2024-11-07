import { StyleSheet, Text, View , TouchableOpacity , Image} from "react-native";
import React from "react";

export default function GoogleButton() {
  return (
    <TouchableOpacity style={styles.signInWithGoogle}>
      <Image source={require("../assets/nike/googleIcon.png")} />
      <Text style={styles.text}>Sign In with Google </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  signInWithGoogle: {
    borderColor: "#d8dce3",
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "#F7F7F9",
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 20,
    width: 335,
    justifyContent: "center",
    borderRadius: 13,
  },
  text: {
    textAlign: "center",
    marginLeft: 30,
  },
});
