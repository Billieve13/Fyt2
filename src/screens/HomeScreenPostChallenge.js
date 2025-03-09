import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

// Dummy data for posts
const posts = [
  { id: "1", name: "John Doe", imageUri: "https://via.placeholder.com/100" },
  { id: "2", name: "Jane Smith", imageUri: "https://via.placeholder.com/100" },
  { id: "3", name: "Tom Brown", imageUri: "https://via.placeholder.com/100" },
  { id: "4", name: "Alice Green", imageUri: "https://via.placeholder.com/100" },
  { id: "5", name: "Bob White", imageUri: "https://via.placeholder.com/100" },
];

export default function HomeScreenPostChallenge({ isChallengeCompleted }) {
  console.log("HomeScreenPostChallenge Rendered", isChallengeCompleted);

  return (
    <View style={styles.homeScreenPostChallengeContainer}>
      {/* Tabs */}
      <View style={styles.homeScreenPostChallengeTabs}>
        <TouchableOpacity>
          <Text style={styles.homeScreenPostChallengeTabText}>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.homeScreenPostChallengeTabText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.homeScreenPostChallengeTabText}>Community</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Cards */}
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUri }} style={styles.profilePic} />
            <Text style={styles.cardText}>{item.name}</Text>
            <View style={styles.cardIcons}>
              <Icon name="heart" size={30} color="red" style={styles.icon} />
              <Icon name="comment" size={30} color="white" style={styles.icon} />
              <Icon name="heartbeat" size={30} color="white" style={styles.icon} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Daily Streak */}
      <View style={styles.homeScreenPostChallengeDailyStreak}>
        <Icon name="fire" size={24} color="orange" style={styles.fireIcon} />
        <Text style={styles.homeScreenPostChallengeDailyStreakText}>Daily Streak</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreenPostChallengeContainer: { flex: 1, backgroundColor: "black", alignItems: "center" },
  homeScreenPostChallengeTabs: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 120 },
  homeScreenPostChallengeTabText: { color: "gray", fontSize: 18 },
  card: { backgroundColor: "white", marginBottom: 20, padding: 10, borderRadius: 10, width: "90%", alignItems: "center" },
  profilePic: { width: 60, height: 60, borderRadius: 30 },
  cardText: { color: "black", fontSize: 18, marginVertical: 10 },
  cardIcons: { flexDirection: "row", justifyContent: "space-evenly", width: "100%" },
  icon: { margin: 10 },
  fireIcon: { marginRight: 5 },
  homeScreenPostChallengeDailyStreak: { flex: 1, backgroundColor: "black", alignItems: "center" },//may need to change this
  homeScreenPostChallengeDailyStreakText: { color: "white", fontSize: 16 }
});