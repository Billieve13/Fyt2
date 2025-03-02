import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function PasswordScreen({ route, navigation }) {
  const { email } = route.params;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Proceed with account creation logic
    console.log("Account created for:", email);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      <Text style={styles.passwordTitle}>Create a Password</Text>
      <Text style={styles.subtitle}>for {email}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#A1A1A1"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#A1A1A1"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  passwordTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "#A1A1A1",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 15,
    color: "#fff",
    width: "80%",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: "#A1A1A1",
    width: "80%",
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#D9D9D9",
    fontSize: 18,
    fontWeight: "bold",
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