import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomDrawer({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Sign Up")}>
        <Text style={styles.itemText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Option 3 (To Be Updated)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
});
