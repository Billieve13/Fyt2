import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "./src/screens/LandingScreen.js";
import CreateAccountScreen from "./src/screens/CreateAccountScreen.js";
import PasswordScreen from "./src/screens/PasswordScreen.js";
import InterestsScreen from "./src/screens/InterestsScreen.js";
import HomeScreenPreChallenge from "./src/screens/HomeScreenPreChallenge.js";
import HomeScreenPostChallenge from "./src/screens/HomeScreenPostChallenge.js";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { ChallengeProvider } from "./src/context/ChallengeContext.js";

const Drawer = createDrawerNavigator();
const Home = createBottomTabNavigator();

export default function App() {
  const { isChallengeCompleted, setIsChallengeCompleted } = useState(false);  // Access the state here

  const HomeNavigator = () => {
    return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Home.Screen
        name="HomeTab"
        // component={isChallengeCompleted ? HomeScreenPostChallenge : HomeScreenPreChallenge}
        children={() => (
          isChallengeCompleted ? (
            <HomeScreenPostChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          ) : (
            <HomeScreenPreChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          )
        )}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="home" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Home.Screen
        name="Trophy"
        // component={isChallengeCompleted ? HomeScreenPostChallenge : HomeScreenPreChallenge}
        children={() => (
          isChallengeCompleted ? (
            <HomeScreenPostChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          ) : (
            <HomeScreenPreChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          )
        )}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="trophy" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Home.Screen
        name="Search"
        // component={isChallengeCompleted ? HomeScreenPostChallenge : HomeScreenPreChallenge}
        children={() => (
          isChallengeCompleted ? (
            <HomeScreenPostChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          ) : (
            <HomeScreenPreChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          )
        )}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="search" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Home.Screen
        name="Heartbeat"
        // component={isChallengeCompleted ? HomeScreenPostChallenge : HomeScreenPreChallenge}
        children={() => (
          isChallengeCompleted ? (
            <HomeScreenPostChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          ) : (
            <HomeScreenPreChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          )
        )}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="heartbeat" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Home.Screen
        name="Profile"
        // component={isChallengeCompleted ? HomeScreenPostChallenge : HomeScreenPreChallenge}
        children={() => (
          isChallengeCompleted ? (
            <HomeScreenPostChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          ) : (
            <HomeScreenPreChallenge
              isChallengeCompleted={isChallengeCompleted}  // Pass state as prop
              setIsChallengeCompleted={setIsChallengeCompleted}  // Pass state setter as prop
            />
          )
        )}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="user" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
    </Home.Navigator>
  );
};

  return (
    // <ChallengeProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Landing" component={LandingScreen} options={{ headerTitle: "" }} />
          <Drawer.Screen name="Create account" component={CreateAccountScreen} options={{ headerTitle: "" }} />
          <Drawer.Screen name="Password" component={PasswordScreen} options={{ headerTitle: "" }} />
          <Drawer.Screen name="Interests" component={InterestsScreen} options={{ headerTitle: "" }} />
          <Drawer.Screen name="Home" component={HomeNavigator} options={{ headerTitle: "" }} />
        </Drawer.Navigator>
      </NavigationContainer>
    // </ChallengeProvider>
  );
}