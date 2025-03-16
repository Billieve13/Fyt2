// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

// export default function TrophyScreen() {
//   const [activeTab, setActiveTab] = useState("Daily");

//   // Placeholder for top 3 leaderboard profiles
//   const topThree = {
//     Gold: { name: "JA17", image: require("../../assets/JA17.jpg"), size: 130 },
//     Silver: { name: "Kevin", image: require("../../assets/runningman3.jpg"), size: 110 },
//     Bronze: { name: "Kaleb", image: require("../../assets/runningman2.jpg"), size: 100 },
//   };

//   return (
//     <View style={styles.container}>
//       {/* Leaderboard Title */}
//       <Text style={styles.leaderboardTitle}>Leaderboard</Text>

//       {/* Tabs for Daily, Weekly, Monthly */}
//       <View style={styles.tabs}>
//         {["Daily", "Weekly", "Monthly"].map((tab) => (
//           <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
//             <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>{tab}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Dynamic Leaderboard Title */}
//       <Text style={styles.leaderboardCategory}>{activeTab} Leaderboard</Text>

//       {/* Top 3 Podium */}
//       <View style={styles.podiumContainer}>
//         {/* Silver (Left) */}
//         <View style={styles.podium}>
//           <View style={[styles.profileRing, styles.silverRing]}>
//             <Image source={topThree.Silver.image} style={[styles.profilePic, { width: topThree.Silver.size, height: topThree.Silver.size }]} />
//             <View style={[styles.rankCircle, styles.silverCircle]}>
//               <Text style={styles.rankNumber}>2</Text>
//             </View>
//           </View>
//           <Text style={styles.rankText}> {topThree.Silver.name}</Text>
//           {/* 🥈 */}
//         </View>

//         {/* Gold (Center - Largest) */}
//         <View style={styles.podium}>
//           <View style={[styles.profileRing, styles.goldRing]}>
//             <Image source={topThree.Gold.image} style={[styles.profilePic, { width: topThree.Gold.size, height: topThree.Gold.size }]} />
//             <View style={[styles.rankCircle, styles.goldCircle]}>
//               <Text style={styles.rankNumber}>1</Text>
//             </View>
//           </View>
//           <Text style={styles.rankText}> {topThree.Gold.name}</Text>
//           {/* 🥇 */}
//         </View>

//         {/* Bronze (Right - Smallest) */}
//         <View style={styles.podium}>
//           <View style={[styles.profileRing, styles.bronzeRing]}>
//             <Image source={topThree.Bronze.image} style={[styles.profilePic, { width: topThree.Bronze.size, height: topThree.Bronze.size }]} />
//             <View style={[styles.rankCircle, styles.bronzeCircle]}>
//               <Text style={styles.rankNumber}>3</Text>
//             </View>
//           </View>
//           <Text style={styles.rankText}> {topThree.Bronze.name}</Text>
//           {/* 🥉 */}
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   leaderboardTitle: {
//     color: "white",
//     fontSize: 28,
//     fontWeight: "bold",
//     marginTop: 20,
//     marginBottom: 0,
//   },
//   tabs: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   tabText: {
//     color: "gray",
//     fontSize: 20,
//   },
//   activeTab: {
//     color: "white",
//     fontWeight: "bold",
//     textShadowColor: "rgba(255, 255, 255, 0.8)",
//     textShadowOffset: { width: 0, height: 0 },
//     textShadowRadius: 15,
//     borderBottomColor: "white",
//     paddingBottom: 5,
//   },
//   leaderboardCategory: {
//     color: "white",
//     fontSize: 22,
//     fontWeight: "bold",
//     marginTop: 80,
//     marginBottom: 30,
//   },
//   podiumContainer: {
//     flexDirection: "row",
//     alignItems: "flex-end",
//     justifyContent: "center",
//     width: "100%",
//     marginBottom: 20,
//   },
//   podium: {
//     alignItems: "center",
//     marginHorizontal: -2,
//   },
//   profileRing: {
//     borderRadius: 100,
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 7, // Thicker border for better visibility
//     position: "relative",
//   },
//   goldRing: {
//     borderColor: "#FFBC40",
//   },
//   silverRing: {
//     borderColor: "#B4B4B4",
//   },
//   bronzeRing: {
//     borderColor: "#E5834E",
//   },
//   profilePic: {
//     borderRadius: 100,
//   },
//   rankText: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 15,
//     fontFamily: 'Montserrat'
//   },
//   rankCircle: {
//     position: "absolute",
//     bottom: -20, // Moves the circle down over the bottom of the ring
//     width: 45,
//     height: 45,
//     borderRadius: 25,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   goldCircle: {
//     backgroundColor: "#FFBC40",
//   },
//   silverCircle: {
//     backgroundColor: "#B4B4B4",
//   },
//   bronzeCircle: {
//     backgroundColor: "#E5834E",
//   },
//   rankNumber: {
//     color: "black",
//     fontSize: 22,
//     fontWeight: "bold",
//     fontFamily: 'Montserrat'
//   },
// });

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function TrophyScreen() {
  const [activeTab, setActiveTab] = useState("Daily");

  // Placeholder for top 3 leaderboard profiles
  const topThree = {
    Gold: { name: "JA17", image: require("../../assets/JA17.jpg"), size: 130 },
    Silver: { name: "Kevin", image: require("../../assets/runningman3.jpg"), size: 110 },
    Bronze: { name: "Kaleb", image: require("../../assets/runningman2.jpg"), size: 100 },
  };

  // Mapping of the tabs to leaderboard categories
  const leaderboardCategories = {
    Daily: "Calories Burned",
    Weekly: "Miles Ran",
    Monthly: "Total Steps",
  };

  return (
    <View style={styles.container}>
      {/* Leaderboard Title */}
      <Text style={styles.leaderboardTitle}>Leaderboard</Text>

      {/* Tabs for Daily, Weekly, Monthly */}
      <View style={styles.tabs}>
        {["Daily", "Weekly", "Monthly"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Dynamic Leaderboard Title */}
      <Text style={styles.leaderboardCategory}>
        {leaderboardCategories[activeTab]} Leaderboard
      </Text>

      {/* Top 3 Podium */}
      <View style={styles.podiumContainer}>
        {/* Silver (Left) */}
        <View style={styles.podium}>
          <View style={[styles.profileRing, styles.silverRing]}>
            <Image source={topThree.Silver.image} style={[styles.profilePic, { width: topThree.Silver.size, height: topThree.Silver.size }]} />
            <View style={[styles.rankCircle, styles.silverCircle]}>
              <Text style={styles.rankNumber}>2</Text>
            </View>
          </View>
          <Text style={styles.rankText}> {topThree.Silver.name}</Text>
        </View>

        {/* Gold (Center - Largest) */}
        <View style={styles.podium}>
          <View style={[styles.profileRing, styles.goldRing]}>
            <Image source={topThree.Gold.image} style={[styles.profilePic, { width: topThree.Gold.size, height: topThree.Gold.size }]} />
            <View style={[styles.rankCircle, styles.goldCircle]}>
              <Text style={styles.rankNumber}>1</Text>
            </View>
          </View>
          <Text style={styles.rankText}> {topThree.Gold.name}</Text>
        </View>

        {/* Bronze (Right - Smallest) */}
        <View style={styles.podium}>
          <View style={[styles.profileRing, styles.bronzeRing]}>
            <Image source={topThree.Bronze.image} style={[styles.profilePic, { width: topThree.Bronze.size, height: topThree.Bronze.size }]} />
            <View style={[styles.rankCircle, styles.bronzeCircle]}>
              <Text style={styles.rankNumber}>3</Text>
            </View>
          </View>
          <Text style={styles.rankText}> {topThree.Bronze.name}</Text>
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
    paddingTop: 50,
  },
  leaderboardTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 0,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  tabText: {
    color: "gray",
    fontSize: 20,
  },
  activeTab: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(255, 255, 255, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    borderBottomColor: "white",
    paddingBottom: 5,
  },
  leaderboardCategory: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 80,
    marginBottom: 30,
  },
  podiumContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  podium: {
    alignItems: "center",
    marginHorizontal: -2,
  },
  profileRing: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 7, // Thicker border for better visibility
    position: "relative",
  },
  goldRing: {
    borderColor: "#FFBC40",
  },
  silverRing: {
    borderColor: "#B4B4B4",
  },
  bronzeRing: {
    borderColor: "#E5834E",
  },
  profilePic: {
    borderRadius: 100,
  },
  rankText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: 'Montserrat'
  },
  rankCircle: {
    position: "absolute",
    bottom: -20, // Moves the circle down over the bottom of the ring
    width: 35,
    height: 35,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  goldCircle: {
    backgroundColor: "#FFBC40",
  },
  silverCircle: {
    backgroundColor: "#B4B4B4",
  },
  bronzeCircle: {
    backgroundColor: "#E5834E",
  },
  rankNumber: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'Montserrat'
  },
});
