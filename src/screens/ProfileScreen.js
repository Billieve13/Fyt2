import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons"; // Import the icons

export default function ProfileScreen() {
  const dailyStreak = 27;  // Hard-coded daily streak for now
  const userName = "JA17";  // Hard-coded user name for now
  const userAge = 28;  // Example of user's age or any additional dynamic data

  return (
    <View style={styles.container}>
      {/* Unveil Title */}
      <Text style={styles.unveilTitle}>Unveil</Text>

      {/* Profile Picture with White Ring */}
      <View style={styles.profilePicContainer}>
        <View style={styles.profileRing}>
          <Image
            source={require("../../assets/JA17.jpg")}
            style={styles.profilePic}
          />
          <View style={styles.editIconContainer}>
            <MaterialCommunityIcons
              name="pencil" // Edit icon
              size={16}
              color="black"
              style={styles.editIcon}
            />
          </View>
        </View>
      </View>

      {/* User Name and Verified Icon */}
      <View style={styles.nameContainer}>
        <Text style={styles.userName}>
          {userName}, {userAge}
        </Text>
        <MaterialCommunityIcons
          name="checkbox-marked-circle-outline" // Circle with a check inside it (rough edges)
          size={24}
          color="white"
        />
      </View>

      {/* Daily Streak and Boxes */}
      <View style={styles.streakContainer}>
        {/* First Box */}
        <View style={styles.streakBox}>
          <View style={styles.fireContainer}>
            <Text style={styles.fireEmoji}>🔥</Text>
            <Text style={styles.streakText}>{dailyStreak}</Text>
          </View>
          <Text style={styles.streakLabel}>Daily Streak</Text>
        </View>

        {/* Second Box */}
        <View style={styles.streakBox}>
          <View style={styles.fireContainer}>
            <Text style={styles.fireEmoji}>🔥</Text>
            <Text style={styles.streakText}>{dailyStreak}</Text>
          </View>
          <Text style={styles.streakLabel}>Daily Streak</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  unveilTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: -220, //ugh, I hate negative margins like this, brings back bad memories...
  },
  profilePicContainer: {
    alignItems: "center",
    marginTop: 90,
  },
  profileRing: {
    borderRadius: 100,
    borderWidth: 7,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 160,
    marginBottom: 20,
    position: "relative", // Added to position the edit icon
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editIconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "white", // Black circle background
    borderRadius: 12, // Make it circular
    padding: 2, // Added padding to make the circle bigger
  },
  editIcon: {
    padding: 4,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  userName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  streakContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 30,
  },
  streakBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    width: 154,  // Adjusted width
    height: 59,  // Adjusted height
    alignItems: "flex-start",  // Aligns contents to the left inside the box
    // justifyContent: "flex-start", // Align contents to the top
    marginHorizontal: 15, // Space between boxes
    // position: "relative",  // Allows the flame to be positioned absolutely
  },
  fireContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5, // Added margin to create space between the flame and the number
    marginTop: -10,
    marginLeft: -10,
  },
  fireEmoji: {
    fontSize: 20,  // Reduced font size
  },
  streakText: {
    color: "black",
    fontSize: 24,  // Reduced font size for proportion
    fontWeight: "bold",
    fontFamily: 'Montserrat',
    marginLeft: 5, // Space between the fire emoji and the number
    // marginBottom: 0
  },
  streakLabel: {
    color: "black",
    fontSize: 14, // Smaller font size for the label
    // marginTop: 5,  // Space between the number and the label
    marginLeft: 18,  // Space between the number and the label
    // marginBottom: '15',
    fontWeight: 'bold',
  },
});