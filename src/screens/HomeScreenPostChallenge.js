import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

// Import your screens
import ExploreTab from '../tabs/ExploreTab.js'; // adjust the path if needed
import CommunityTab from '../tabs/CommunityTab.js'; // adjust the path if needed

// Dummy data for posts
const posts = [
  { id: "1", name: "Josh Allen", image: require('../../assets/JA17.jpg') },
  { id: "2", name: "Kaleb", image: require('../../assets/runningman.jpg') },
  { id: "3", name: "Jessica", image: require('../../assets/runningwoman.jpg') },
  { id: "4", name: "Ryan", image: require('../../assets/runningman2.jpg') },
  { id: "5", name: "Kevin", image: require('../../assets/runningman3.jpg') },
];

export default function HomeScreenPostChallenge({ isChallengeCompleted }) {
  const [activeTab, setActiveTab] = useState("Friends"); // default tab is Friends

  console.log("HomeScreenPostChallenge Rendered", isChallengeCompleted);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Friends":
        return (
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <View style={styles.card}>
                {/* Profile icon in the top-left corner of the card */}
                <View style={styles.profileIconContainer}>
                  <Image source={item.image} style={styles.profileIcon} />
                </View>

                {/* Name positioned to the right of the profile icon */}
                <Text style={styles.cardText}>{item.name}</Text>

                {/* Main post image */}
                <Image
                  source={item.image ? item.image : { uri: item.imageUri }}
                  style={styles.profilePic}
                />

                {/* Bottom icons */}
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
        );
      case "Explore":
        return <ExploreTab />;
      case "Community":
        return <CommunityTab />;
      default:
        return null;
    }
  };

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
                activeTab === tab && styles.activeTab, // Apply activeTab styling
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render Content Based on Active Tab */}
      {renderTabContent()}
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
  homeScreenPostChallengeTopNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
    position: "absolute",
    top: 40,
  },
  homeScreenPostChallengeTopLeftIcon: {
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  homeScreenPostChallengeProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderColor: "yellow",
  },
  homeScreenPostChallengeTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 100,
    paddingBottom: 10,
  },
  homeScreenPostChallengeTabText: {
    color: "gray",
    fontSize: 18,
  },
  activeTab: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(255, 255, 255, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    paddingBottom: 5,
  },
  card: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 30,
    width: 380,
    height: 380,
    marginVertical: 10,
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    position: "relative",
  },
  profilePic: {
    width: "100%",
    height: "85%",
    borderRadius: 30,
    zIndex: 1, // Keeps it behind the profile icon
    shadowColor: "#000",  // Shadow color (black)
    shadowOffset: { width: 0, height: 10 },  // Slight shadow below (adjust height for shadow depth)
    shadowOpacity: 0.3,  // Light shadow opacity
    shadowRadius: 20,  // Shadow blur radius
    elevation: 5,  // For Android shadow (iOS only uses shadow properties)
  },
  profileIconContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "black",
    zIndex: 2, // Ensures it stays in front
    overflow: "hidden", // Prevents extra white space
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "montserrat",
    color: "black",
    position: "absolute",
    top: 10,
    left: 60,
  },
  iconContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: -12, // Reduced spacing from bottom
    marginTop: 5,
  },
  iconWrapper: {
    backgroundColor: "black",
    borderRadius: 25,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    color: "white",
    fontSize: 18,
  },
});