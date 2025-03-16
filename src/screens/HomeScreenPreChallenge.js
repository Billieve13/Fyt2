import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function HomeScreenPreChallenge({ isChallengeCompleted, setIsChallengeCompleted, navigation }) {//can probably take two of these away
  const [activeTab, setActiveTab] = useState("Friends");

  const completeChallenge = () => {
    setIsChallengeCompleted(true);  // Set challenge as completed when button is pressed
    console.log("Challenge Completed from Pre");
    // alert("Challenge Completed: " + true);
  };

  return (
    <View style={styles.homeScreenPreChallengecontainer}>
      {/* Top Navigation Bar */}
      <View style={styles.homeScreenPreChallengeTopNav}>
        <Icon name="user-friends" size={24} color="white" style={styles.homeScreenPreChallengeTopLeftIcon} />
        <Image source={require('../../assets/runningman.jpg')} style={styles.homeScreenPreChallengeProfilePic} />
      </View>

      {/* Tabs */}
      <View style={styles.homeScreenPreChallengeTabs}>
        <TouchableOpacity onPress={() => setActiveTab("Friends")}>
          <Text style={[styles.homeScreenPreChallengeTabText, activeTab === "Friends" && styles.homeScreenPreChallengeActiveTab]}>
            Friends
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Explore")}>
          <Text style={[styles.homeScreenPreChallengeTabText, activeTab === "Explore" && styles.homeScreenPreChallengeActiveTab]}>
            Explore
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Community")}>
          <Text style={[styles.homeScreenPreChallengeTabText, activeTab === "Community" && styles.homeScreenPreChallengeActiveTab]}>
            Community
          </Text>
        </TouchableOpacity>
      </View>

      {/* Blurred Exercise Image with Eye Icon */}
      <View style={styles.homeScreenPreChallengeChallengeContainer}>
        <Image source={{ uri: "https://via.placeholder.com/300" }} style={styles.blurredImage} />
        <Icon name="eye-slash" size={30} color="white" style={styles.eyeIcon} />

        {/* Complete Challenge Button */}
        <TouchableOpacity onPress={completeChallenge}>
          {/* The state needs to be updated here!!!!!!!!!!!!!!!!! */}
          <Text style={styles.homeScreenPreChallengeChallengeText}>Complete Daily Challenge</Text>
        </TouchableOpacity>
        <Text style={styles.homeScreenPreChallengeChallengeSubText}>To view your friends' posts/achievements, complete yours!</Text>
      </View>

      {/* Daily Streak */}
      <View style={styles.homeScreenPreChallengeDailyStreak}>
        <Icon name="fire" size={24} color="orange" style={styles.fireIcon} />
        <Text style={styles.homeScreenPreChallengeDailyStreakText}>Daily Streak</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenPreChallengecontainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center"
  },
  homeScreenPreChallengeTopNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    position: "absolute",
    top: 40
  },
  homeScreenPreChallengeTopLeftIcon: {
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  homeScreenPreChallengeProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderColor: 'yellow'
  },
  homeScreenPreChallengeTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 120
  },
  homeScreenPreChallengeTabText: {
    color: "gray",
    fontSize: 18
  }, // Use gray for inactive tabs
  homeScreenPreChallengeActiveTab: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(255, 255, 255, 0.8)", // White glow effect
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15, // Adjust glow intensity
    // borderBottomWidth: 2, // Adds an underline effect
    borderBottomColor: "white", // White underline
    paddingBottom: 5, // Space for the underline
  }, // Active tab
  homeScreenPreChallengeChallengeContainer: {
    alignItems: "center",
    marginTop: 100
  },
  blurredImage: {
    width: 300,
    height: 200,
    opacity: 0.3,
    borderRadius: 10
  },
  eyeIcon: {
    position: "absolute",
    top: "40%"
  },
  homeScreenPreChallengeChallengeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  },
  homeScreenPreChallengeChallengeSubText: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
    width: 250,
    marginTop: 5
  },
  homeScreenPreChallengeDailyStreak: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  fireIcon: {
    marginRight: 5
  },
  homeScreenPreChallengeDailyStreakText: {
    color: "white",
    fontSize: 16
  }
});