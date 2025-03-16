import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

// Dummy data for posts
const posts = [
  { id: "1", name: "Josh Allen", image: require('../../assets/JA17.jpg') },
  { id: "2", name: "Kaleb", image: require('../../assets/runningman.jpg') },
  { id: "3", name: "Jessica", image: require('../../assets/runningwoman.jpg') },
  { id: "4", name: "Ryan", image: require('../../assets/runningman2.jpg') },
  { id: "5", name: "Kevin", image: require('../../assets/runningman3.jpg') },
];

export default function HomeScreenPostChallenge({ isChallengeCompleted }) {
  const [activeTab, setActiveTab] = useState("");
  console.log("HomeScreenPostChallenge Rendered", isChallengeCompleted);

  return (
    <View style={styles.container}>

      <View style={styles.homeScreenPostChallengeTopNav}>
        <Icon name="user-friends" size={24} color="white" style={styles.homeScreenPostChallengeTopLeftIcon} />
        <Image source={require('../../assets/runningman.jpg')} style={styles.homeScreenPostChallengeProfilePic} />
      </View>

      {/* Tabs */}
      <View style={styles.homeScreenPostChallengeTabs}>
        {["Friends", "Explore", "Community"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.homeScreenPostChallengeTabText,
                activeTab === tab && styles.activeTab, // Ensure proper application
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable Cards */}
      <FlatList
        data={posts}
        renderItem={({ item }) => (
        <View style={styles.card}>

        {/* Name */}
        <Text style={styles.cardText}>{item.name}</Text>

        {/* Profile Image */}
        <Image
          source={item.image ? item.image : { uri: item.imageUri }}
          style={styles.profilePic}
      />

      {/* Vertical Icons */}
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <Icon name="heart" style={styles.icon} />
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="comment" style={styles.icon} />
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="heartbeat" style={styles.icon} />
        </View>
      </View>
    </View>
  )}
  keyExtractor={(item) => item.id}
/>

      {/* Daily Streak
      <View style={styles.dailyStreak}>
        <Icon name="fire" size={24} color="orange" style={styles.fireIcon} />
        <Text style={styles.dailyStreakText}>Daily Streak</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 20,
  },
  homeScreenPostChallengeTopNav: {//overall container for profile pic and icon
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    position: "absolute",
    top: 40
  },
  homeScreenPostChallengeTopLeftIcon: {//icon container for the top
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  homeScreenPostChallengeProfilePic: {//container for profile pic
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderColor: 'yellow'
  },
  homeScreenPostChallengeTabs: {//Friends, explore, and community container
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 100,
    paddingBottom: 10, // Prevents shifting when selected
  },
  homeScreenPostChallengeTabText: {
    color: "gray",
    fontSize: 18
  },
  activeTab: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(255, 255, 255, 0.8)", // White glow effect
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15, // Glow intensity
    paddingBottom: 5, // Prevents shifting
  },
  card: {
    flexDirection: "column",
    alignItems: "center", // Ensures everything is centered
    backgroundColor: "white",
    padding: 80,
    borderRadius: 30,
    width: 380,
    height: 300,
    marginVertical: 10,
    justifyContent: "center", // Center content vertically
    // marginTop: '15'
    // position: "relative",
  },
  profilePic: {
    width: 220, // Increase image size
    height: 220,
    borderRadius: 30,
    alignSelf: "center"
  },
  cardText: {
    fontSize: 22,  // Larger text
    fontWeight: "bold",
    fontFamily: 'montserrat',
    color: "black",
    marginBottom: 5,
  },
  iconContainer: {
    position: "absolute",
    right: 20, // Adjust positioning slightly
    top: "35%", // Slightly lower positioning
    flexDirection: "column",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "black",
    borderRadius: 25, // Slightly smaller
    width: 40, // Decrease icon background size
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12, // More spacing between icons
  },
  icon: {
    color: "white",
    fontSize: 20, // Reduce icon size
  },
});