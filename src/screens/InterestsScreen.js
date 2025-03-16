import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function InterestsScreen({ navigation }) {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = {
    "Times you workout": [
      { label: "Morning", icon: "weather-sunset-up", color: "#FFA500" },
      { label: "Afternoon", icon: "weather-sunny", color: "#FFD700" },
      { label: "Night", icon: "weather-night", color: "#4B0082" },
    ],
    "Types of exercise": [
      { label: "Running", icon: "run", color: "#FF4500" },
      { label: "Swimming", icon: "swim", color: "#1E90FF" },
      { label: "Hiking", icon: "hiking", color: "#8B4513" },
      { label: "Weightlifting", icon: "weight-lifter", color: "#A9A9A9" },
      { label: "Biking", icon: "bike", color: "#32CD32" },
      { label: "Yoga", icon: "meditation", color: "#BA55D3" },
      { label: "Rowing", icon: "oar", color: "#4682B4" },
    ],
    "Diet": [
      { label: "Pescatarian", icon: "fish", color: "#00CED1" },
      { label: "Keto", icon: "food-steak", color: "#8B0000" },
      { label: "Carnivore", icon: "food-drumstick", color: "#B22222" },
      { label: "Vegetarian", icon: "leaf", color: "#228B22" },
    ],
  };

  const toggleSelection = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : prev.length < 5
        ? [...prev, interest]
        : prev
    );
  };

  return (
    <View style={styles.interestsScreencontainer}>
      <Text style={styles.interestsHeader}>Your Interests</Text>
      <Text style={styles.interestsSubtext}>
        Pick up to 5 things you love. It'll help us suggest communities for you.
      </Text>

      {Object.entries(interests).map(([category, options]) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.interestCategoryTitle}>{category}</Text>
          <View style={styles.chipContainer}>
            {options.map(({ label, icon, color }) => (
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
                  color={selectedInterests.includes(label) ? "#FFFFFF" : color}
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

      <View style={styles.interestsScreenBottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.selectedCount}>{selectedInterests.length}/5 selected</Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialCommunityIcons name="chevron-right" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  interestsScreencontainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  interestsHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
    marginTop: 60,
    marginLeft: 15,
  },
  interestsSubtext: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 60,
  },
  categoryContainer: {
    marginBottom: 50,
    marginLeft: 20,
  },
  interestCategoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D9D9D9",
    marginBottom: 10,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chipSelected: {
    backgroundColor: "#4CAF50",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
  chipText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  chipTextSelected: {
    color: "#FFFFFF",
  },
  chipIcon: {
    marginRight: 5,
  },
  interestsScreenBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    marginBottom: '20',
    bottom: 20,
    left: 20,
    right: 20,
  },
  skipText: {
    color: "#D9D9D9",
    fontSize: 16,
  },
  selectedCount: {
    color: "#D9D9D9",
    fontSize: 16,
    marginLeft: '13'
  },
  nextButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});