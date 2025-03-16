import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ExploreTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Content</Text>
      <Text style={styles.text}>Find new workouts, challenges, and friends.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});