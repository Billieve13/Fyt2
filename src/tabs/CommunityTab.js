import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CommunityTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Community Posts</Text>
      <Text style={styles.text}>Check out the community's latest posts and achievements.</Text>
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