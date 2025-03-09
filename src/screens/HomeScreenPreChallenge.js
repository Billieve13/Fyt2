import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function HomeScreenPreChallenge() {
  // Manage active tab state
  const [activeTab, setActiveTab] = useState("");//need to change the state so it is not rendered each time

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
        <Text style={styles.homeScreenPreChallengeChallengeText}>Complete Daily Challenge</Text>
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
  homeScreenPreChallengecontainer: { flex: 1, backgroundColor: "black", alignItems: "center" },
  homeScreenPreChallengeTopNav: { flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 20, position: "absolute", top: 40 },
  homeScreenPreChallengeTopLeftIcon: { marginLeft: 10, width: 50, height: 50, },
  homeScreenPreChallengeProfilePic: { width: 40, height: 40, borderRadius: 20, marginRight: 10, borderColor: 'yellow'},
  homeScreenPreChallengeTabs: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 120 },
  homeScreenPreChallengeTabText: { color: "gray", fontSize: 18 }, // Use gray for inactive tabs
  homeScreenPreChallengeActiveTab: { color: "white", fontWeight: "bold" }, // Active tab text will be white and bold
  homeScreenPreChallengeChallengeContainer: { alignItems: "center", marginTop: 100 },
  blurredImage: { width: 300, height: 200, opacity: 0.3, borderRadius: 10 },
  eyeIcon: { position: "absolute", top: "40%" },
  homeScreenPreChallengeChallengeText: { color: "white", fontSize: 20, fontWeight: "bold", marginTop: 10 },
  homeScreenPreChallengeChallengeSubText: { color: "gray", fontSize: 14, textAlign: "center", width: 250, marginTop: 5 },
  homeScreenPreChallengeDailyStreak: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  fireIcon: { marginRight: 5 },
  homeScreenPreChallengeDailyStreakText: { color: "white", fontSize: 16 }
});
