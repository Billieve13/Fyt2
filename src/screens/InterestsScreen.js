import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Using MaterialCommunityIcons for more icons

export default function InterestsScreen({ navigation }) {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = {
    "Times you workout": [
      { label: "Morning", icon: "weather-sunset-up" },
      { label: "Afternoon", icon: "weather-sunny" },
      { label: "Night", icon: "weather-night" },
    ],
    "Types of exercise": [
      { label: "Running", icon: "run" },
      { label: "Swimming", icon: "swim" },
      { label: "Hiking", icon: "hiking" },
      { label: "Weightlifting", icon: "weight-lifter" }, // Correct MaterialCommunityIcons icon
      { label: "Biking", icon: "bike" },
      { label: "Yoga", icon: "meditation" },
      { label: "Boating", icon: "oar" },
    ],
    "Diet": [
      { label: "Pescatarian", icon: "fish" },
      { label: "Keto", icon: "food-steak" },
      { label: "Carnivore", icon: "food-drumstick" },
      { label: "Vegetarian", icon: "leaf" },
    ],
  };

  const toggleSelection = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest) // Remove if already selected
        : prev.length < 5
        ? [...prev, interest] // Add if under limit
        : prev
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.interestsHeader}>Your Interests</Text>
      <Text style={styles.interestsSubtext}>
        Pick up to 5 things you love. It'll help{"\n"}
        us suggest communities for you.{"\n"}
      </Text>

      {/* Loop through interest categories */}
      {Object.entries(interests).map(([category, options]) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.interestCategoryTitle}>{category}</Text>
          <View style={styles.chipContainer}>
            {options.map(({ label, icon }) => (
              <TouchableOpacity
                key={label}
                style={[
                  styles.chip,
                  selectedInterests.includes(label) && styles.chipSelected,
                ]}
                onPress={() => toggleSelection(label)}
              >
                <MaterialCommunityIcons
                  name={icon}
                  size={20}
                  color={selectedInterests.includes(label) ? "#4CAF50" : "#D9D9D9"} // Green when selected, grey when unselected
                  style={styles.chipIcon}
                />
                <Text
                  style={[
                    styles.chipText,
                    selectedInterests.includes(label) && styles.chipTextSelected,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      {/* Bottom Navigation */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.selectedCount}>{selectedInterests.length}/5 selected</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  interestsHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    marginTop: 40,
    marginLeft: 15,
  },
  interestsSubtext: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    marginLeft: -50, // Adjust margin as necessary
  },
  categoryContainer: {
    marginBottom: 60,
    marginLeft: 20
  },
  interestCategoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#D9D9D9",
    marginBottom: 10,
    fontFamily: 'Montserrat'
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chipSelected: {
    backgroundColor: "#D9D9D9",
  },
  chipText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5, // space between icon and text
  },
  chipTextSelected: {
    color: "#000",
    fontWeight: "bold",
  },
  chipIcon: {
    marginRight: 5, // Add some space between the icon and text
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  skipText: {
    color: "#D9D9D9",
    fontSize: 16,
    marginBottom: 25,
    fontWeight: "bold",
  },
  selectedCount: {
    color: "#D9D9D9",
    fontSize: 16,
  },
});
