import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

// Dummy data for posts
const posts = [
  { id: "1", name: "Josh Allen", image: require('../../assets/JA17.jpg') },
  { id: "2", name: "Kaleb", imageUri: "https://via.placeholder.com/100" },
  { id: "3", name: "Jessica", imageUri: "https://via.placeholder.com/100" },
  { id: "4", name: "Ryan", imageUri: "https://via.placeholder.com/100" },
  { id: "5", name: "Kevin", imageUri: "https://via.placeholder.com/100" },
];

export default function HomeScreenPostChallenge({ isChallengeCompleted }) {
  console.log("HomeScreenPostChallenge Rendered", isChallengeCompleted);

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity><Text style={styles.tabText}>Friends</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tabText}>Explore</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.tabText}>Community</Text></TouchableOpacity>
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
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 120,
  },
  tabText: {
    color: "gray",
    fontSize: 18
  },
  card: {
    flexDirection: "column",
    alignItems: "center", // Ensures everything is centered
    backgroundColor: "white",
    padding: 100,
    borderRadius: 15,
    width: "100%",
    height: 300,
    marginVertical: 20,
    justifyContent: "center", // Center content vertically
    position: "relative",
  },

  profilePic: {
    width: 190, // Increase image size
    height: 180,
    borderRadius: 10,
      alignSelf: "center"
  },
  cardText: {
    fontSize: 22,  // Larger text
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  iconContainer: {
    position: "absolute",
    right: 20, // Adjust positioning slightly
    top: "25%", // Slightly lower positioning
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