import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useAuthRequest } from "expo-auth-session";
import { firebase } from "../firebase"; // Ensure Firebase is initialized correctly

export default function GoogleButton() {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Initialize Google OAuth
  const [request, response, promptAsync] = useAuthRequest({
    clientId: '142746184617-ssed362lkeu4oc2pf4o2v02u6satr0mm.apps.googleusercontent.com',
    redirectUri: 'https://auth.expo.io/@manthan_brilworks/projectractnative',
  });

  // Handle response from the authentication flow
  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;  // Get the ID token

      // Authenticate with Firebase using the Google id_token
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);

      firebase.auth().signInWithCredential(credential)
        .then((userCredential) => {
          console.log("Signed in with Google:", userCredential.user);
          setIsLoading(false);  // Authentication complete, hide loading
        })
        .catch((error) => {
          console.error("Error signing in with Google:", error);
          setIsLoading(false);  // Error occurred, hide loading
        });
    }
  }, [response]);  // This hook runs when the response is updated

  // Show loading state while request is being processed
  if (isLoading || !request) {
    return (
      <Text>Loading...</Text>  // Show a loading message until request is ready
    );
  }

  return (
    <TouchableOpacity style={styles.signInWithGoogle} onPress={() => promptAsync()}>
      <Image source={require("../assets/nike/googleIcon.png")} />
      <Text style={styles.text}>Sign In with Google</Text>
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




