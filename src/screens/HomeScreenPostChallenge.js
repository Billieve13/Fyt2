import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function HomeScreen() {
  // Manage active tab state
  const [activeTab, setActiveTab] = useState("");//need to change the state so it is not rendered each time

  return (
    <View style={styles.homeScreencontainer}>
      {/* Top Navigation Bar */}
      <View style={styles.homeScreenTopNav}>
        <Icon name="user-friends" size={24} color="white" style={styles.homeScreenTopLeftIcon} />
        <Image source={require('../../assets/background.jpeg')} style={styles.homeScreenProfilePic} />
      </View>

      {/* Tabs */}
      <View style={styles.homeScreenTabs}>
        <TouchableOpacity onPress={() => setActiveTab("Friends")}>
          <Text style={[styles.homeScreenTabText, activeTab === "Friends" && styles.homeScreenActiveTab]}>
            Friends
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Explore")}>
          <Text style={[styles.homeScreenTabText, activeTab === "Explore" && styles.homeScreenActiveTab]}>
            Explore
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Community")}>
          <Text style={[styles.homeScreenTabText, activeTab === "Community" && styles.homeScreenActiveTab]}>
            Community
          </Text>
        </TouchableOpacity>
      </View>

      {/* Blurred Exercise Image with Eye Icon */}
      <View style={styles.homeScreenChallengeContainer}>
        <Image source={{ uri: "https://via.placeholder.com/300" }} style={styles.blurredImage} />
        <Icon name="eye-slash" size={30} color="white" style={styles.eyeIcon} />
        <Text style={styles.homeScreenChallengeText}>Complete Daily Challenge</Text>
        <Text style={styles.homeScreenChallengeSubText}>To view your friends' posts/achievements, complete yours!</Text>
      </View>

      {/* Daily Streak */}
      <View style={styles.homeScreenDailyStreak}>
        <Icon name="fire" size={24} color="orange" style={styles.fireIcon} />
        <Text style={styles.homeScreenDailyStreakText}>Daily Streak</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreencontainer: { flex: 1, backgroundColor: "black", alignItems: "center" },
  homeScreenTopNav: { flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 20, position: "absolute", top: 40 },
  homeScreenTopLeftIcon: { marginLeft: 10 },
  homeScreenProfilePic: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  homeScreenTabs: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 120 },
  homeScreenTabText: { color: "gray", fontSize: 18 }, // Use gray for inactive tabs
  homeScreenActiveTab: { color: "white", fontWeight: "bold" }, // Active tab text will be white and bold
  homeScreenChallengeContainer: { alignItems: "center", marginTop: 100 },
  blurredImage: { width: 300, height: 200, opacity: 0.3, borderRadius: 10 },
  eyeIcon: { position: "absolute", top: "40%" },
  homeScreenChallengeText: { color: "white", fontSize: 20, fontWeight: "bold", marginTop: 10 },
  homeScreenChallengeSubText: { color: "gray", fontSize: 14, textAlign: "center", width: 250, marginTop: 5 },
  homeScreenDailyStreak: { flexDirection: "row", alignItems: "center", marginTop: 20 },
  fireIcon: { marginRight: 5 },
  homeScreenDailyStreakText: { color: "white", fontSize: 16 }
});