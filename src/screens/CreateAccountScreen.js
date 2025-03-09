import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg"; // Import SVG components

export default function CreateAccountScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false); // State to track focus

  const clearEmail = () => {
    setEmail(""); // Clears the email input
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* Ensure only one root child (View) under TouchableWithoutFeedback */}
      <View style={styles.createAccountContainer}>
        {/* X Button to go back to Home Screen */}
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>

        <Text style={styles.createScreenTitle}>
          Unveil{"\n"}
        </Text>

        <Text style={styles.loginTitle}>
          Log in or Sign Up{"\n"}
        </Text>

        {/* Email input field */}
        <View style={styles.emailButtonContainer}>
          <TextInput
            style={[styles.emailText, isFocused && styles.focusedInput]} // Apply focused style when focused
            placeholder="Example: jdoe1234@gmail.com"
            placeholderTextColor="#4A4A4A"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            onFocus={() => setIsFocused(true)} // When input is focused
            onBlur={() => setIsFocused(false)} // When input loses focus
          />
          {/* "X" Circle to clear email */}
          {email.length > 0 && (
            <TouchableOpacity style={styles.clearButton} onPress={clearEmail}>
              <Text style={styles.clearButtonText}>X</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Continue button */}
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

        <Text style={styles.orText}>or</Text>

        {/* Continue with Google button */}
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.googleContent}>
            {/* Google "G" Logo */}
            <Svg width={24} height={24} viewBox="0 0 48 48" style={styles.googleLogo}>
              <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </Svg>
            {/* Google Button Text */}
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  createAccountContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    position: 'relative',
    color: 'FFFFFF'
  },
  createScreenTitle: {
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
  emailButtonContainer: {
    width: "80%",
    marginBottom: 20,
    position: "relative",
    marginRight: 5,
  },
  emailText: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 0,
    color: "#FFFFFF",
    backgroundColor: "#4A4A4A",
    opacity: .75,
    width: '90%',
    marginLeft: 20
  },
  focusedInput: {
    backgroundColor: "#808080",
  },
  clearButton: {
    position: "absolute",
    right: 25,
    top: 12,
    marginTop: '2',
    height: '20',
    width: '20',
    backgroundColor: "#ccc",
    borderRadius: 10,
    // padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  clearButtonText: {
    color: "#827A7A",
    fontWeight: "bold",
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: "#A1A1A1",
    width: '72%',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  continueButtonText: {
    color: "#D9D9D9",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
  orText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: '10'
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '72%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  googleLogo: {
    marginRight: 10,
  },
  googleButtonText: {
    color: "000000",
    opacity: .54,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});