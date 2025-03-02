import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* X Button to go back to Home Screen */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      <Text style={styles.swarmTitle}>
        Swarm{"\n"}
      </Text>

      <Text style={styles.loginTitle}>
        Log in or Sign Up{"\n"}
      </Text>

      {/* Email input field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="jdoe1234@gmail.com"
          placeholderTextColor="#4A4A4A"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {/* Helper text inside the email input area */}
        <Text style={styles.helperText}>Please enter a valid email address.</Text>
      </View>

      {/* Continue button (replaces password field) */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => {
          if (email.trim() !== "") {
            navigation.navigate("Password", { email });
          } else {
            alert("Please enter a valid email address.");
          }
        }}
        >
        <Text style={styles.continueButtonText}>Continue</Text>

      </TouchableOpacity>

      {/* Continue with Google button */}
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      /> */}
{/*
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    position: 'relative',
    color: 'FFFFFF'
  },
  swarmTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    fontFamily: 'Monteserrat'
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: 'white',
    marginBottom: 5
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,  // Space between the email input and other elements
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 15,
    marginBottom: 5, // Space between input field and helper text
    color: "#fff",
    width: '90%',
    marginLeft: 20
  },
  helperText: {
    color: "#D9D9D9", // Light grey color for helper text
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: "#A1A1A1",
    width: '72%',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 6,
    marginBottom: 25,
  },
  continueButtonText: {
    color: "#D9D9D9",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
  googleButton: {
    backgroundColor: "#FFFFFF", // Google red color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 6,
    width: '72%',
  },
  googleButtonText: {
    color: "000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
  // Close button styles
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: "#fff", // White color for the "X"
    fontWeight: "bold",
  },
});