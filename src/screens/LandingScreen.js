import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    //source={require("../../assets/background.jpeg")}
    <ImageBackground
      style={styles.landingScreenBackground}
    >
      <View style={styles.landingScreenOverlay}>
        <Text style={styles.landingScreenTitle}>
          "Unveil"{"\n"}
          your true{"\n"}
          potential{"\n"}
        </Text>
        <View style={styles.landingScreenButtonContainer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate("Create account")}>
            <Text style={styles.createAccountButtonText}>Create account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate("HomePost")}>
            {/* need to fix the navigation for this. it currently leads nowhere*/}
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>

          <Text style={styles.troubleText}>
          Trouble signing in?{"\n"}
          </Text>

        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  landingScreenBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  landingScreenOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 1)", // Dark overlay for readability
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  landingScreenTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
    fontFamily: "Montserrat",
    alignItems: 'center'
  },
  landingScreenButtonContainer: {
    position: "absolute",
    bottom: 50, // Position buttons at the bottom with some space
    width: "100%",
    alignItems: "center", // Center the buttons horizontally
  },
  createAccountButton: {
    backgroundColor: "#D9D9D9",
    marginBottom: '15',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    width: "324",
    height: "54"
  },
  createAccountButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Montserrat',
    textAlign: 'center'
  },
  signInButton: {
    backgroundColor: "#D9D9D9",
    marginBottom: '30',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 10,
    width: "324",
    height: "54",
  },
  signInButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Montserrat',
    textAlign: 'center'
  },
  troubleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    fontFamily: "Montserrat",
    alignItems: 'center'
  },
});