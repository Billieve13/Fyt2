import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    //source={require("../../assets/background.jpeg")}
    <ImageBackground
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Strengthen{"\n"}
          Win{"\n"}
          Achieve{"\n"}
          Reach{"\n"}
          Motivate{"\n"}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("Sign Up")}>
            <Text style={styles.getStartedButtonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 1)", // Dark overlay for readability
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
    fontFamily: "Montserrat",
    // position: "absolute",
    alignItems: 'center'
    // marginTop: '20'
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50, // Position buttons at the bottom with some space
    width: "100%",
    alignItems: "center", // Center the buttons horizontally
  },
  loginButton: {
    backgroundColor: "grey",
    marginBottom: '10',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 2,
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Montserrat',
  },
  getStartedButton: {
    backgroundColor: "transparent",
    marginBottom: '10',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 2,
    marginVertical: 10,
  },
  getStartedButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Montserrat',
  },
});