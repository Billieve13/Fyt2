import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av'; // Use expo-av for video playback

export default function ExploreTab() {
  // State to control video playback
  const [playVideo, setPlayVideo] = useState([false, false, false, false]);

  // Toggle play video when clicked
  const handlePlay = (index) => {
    const newPlayState = [...playVideo];
    newPlayState[index] = !newPlayState[index];
    setPlayVideo(newPlayState);
  };

  return (
    <View style={styles.container}>
      {/* Scrollable Boxes */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>🔥 Trends</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>🏋️‍♂️ Workouts</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>📅 Challenges</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>🤝 Friends</Text>
        </View>
      </ScrollView>

      {/* Trending Video Section */}
      <Text style={styles.trendingText}>Trending Video</Text>

      {/* Video Grid: Rows of 2 */}
      <ScrollView style={styles.videoContainer}>
        <View style={styles.videoRow}>
          {/* First Video */}
          <View style={styles.videoCard}>
            <TouchableOpacity onPress={() => handlePlay(0)}>
              <Video
                source={require('../../assets/vid1.mp4')} // Replace with your video file path
                style={styles.videoThumbnail}
                resizeMode="cover"
                shouldPlay={playVideo[0]} // Control play on click
                isLooping
              />
            </TouchableOpacity>
            <View style={styles.profileIconContainer}>
              <Image source={require('../../assets/JA17.jpg')} style={styles.profileIcon} />
            </View>
          </View>

          {/* Second Video */}
          <View style={styles.videoCard}>
            <TouchableOpacity onPress={() => handlePlay(1)}>
              <Video
                source={require('../../assets/vid2.mp4')} // Replace with your second video file path
                style={styles.videoThumbnail}
                resizeMode="cover"
                shouldPlay={playVideo[1]} // Control play on click
                isLooping
              />
            </TouchableOpacity>
            <View style={styles.profileIconContainer}>
              <Image source={require('../../assets/JA17.jpg')} style={styles.profileIcon} />
            </View>
          </View>
        </View>

        <View style={styles.videoRow}>
          {/* <View style={[styles.videoCard, styles.partialVideo]}> */}
          <View style={styles.videoCard}>
            <TouchableOpacity onPress={() => handlePlay(2)}>
              <Video
                source={require('../../assets/vid3.mp4')} // Replace with your third video file path
                style={styles.videoThumbnail}
                resizeMode="cover"
                shouldPlay={playVideo[2]} // Control play on click
                isLooping
              />
            </TouchableOpacity>
            <View style={styles.profileIconContainer}>
              <Image source={require('../../assets/JA17.jpg')} style={styles.profileIcon} />
            </View>
          </View>

          <View style={styles.videoCard}>
            <TouchableOpacity onPress={() => handlePlay(3)}>
              <Video
                source={require('../../assets/vid4.mp4')} // Replace with your fourth video file path
                style={styles.videoThumbnail}
                resizeMode="cover"
                shouldPlay={playVideo[3]} // Control play on click
                isLooping
              />
            </TouchableOpacity>
            <View style={styles.profileIconContainer}>
              <Image source={require('../../assets/JA17.jpg')} style={styles.profileIcon} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  boxContainer: {
    marginBottom: 10,  // Small space to control the gap between boxes and the trending video section
    marginTop: 5,
  },
  box: {
    backgroundColor: 'white',
    marginRight: 15,
    borderRadius: 15,
    paddingVertical: 0,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
    height: 50,
  },
  boxText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
  },
  trendingText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,  // Adjusted margin to reduce space between trending text and videos
    textAlign: 'left',
    marginLeft: 5,
  },
  videoContainer: {
    marginTop: 10,
  },
  videoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  videoCard: {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 15,
    width: '48%',
  },
  profileIconContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 1,
    borderWidth: 2,
    borderColor: 'black',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  videoThumbnail: {
    width: '100%',
    height: 250,  // Ensure all videos have the same height for consistency
    borderRadius: 15,
  },
  // partialVideo: {
  //   height: 120, // Set the desired height for partial visibility
  // },
});