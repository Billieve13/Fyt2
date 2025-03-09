import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "./src/screens/LandingScreen.js";
import CreateAccountScreen from "./src/screens/CreateAccountScreen.js";
// import CustomDrawer from "./src/components/CustomDrawer.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PasswordScreen from "./src/screens/PasswordScreen.js";
import InterestsScreen from "./src/screens/InterestsScreen.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import Icon from "react-native-vector-icons/FontAwesome5";

const Drawer = createDrawerNavigator();
const Home = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false, // Hide header
        tabBarStyle: {
          backgroundColor: "black", // Tab bar background color
          borderTopWidth: 0, // Remove the white line above the icons
        },
        tabBarActiveTintColor: "white", // Active tab icon color
        tabBarInactiveTintColor: "gray", // Inactive tab icon color
      }}
    >
      <Home.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="home" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "", // Hide tab name
        }}
      />
      <Home.Screen
        name="Trophy"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="trophy" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "", // Hide tab name
        }}
      />
      <Home.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="search" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "", // Hide tab name
        }}
      />
      <Home.Screen
        name="Heartbeat"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="heartbeat" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "", // Hide tab name
        }}
      />
      <Home.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="user" size={focused ? 26 : 20} color={color} />
          ),
          tabBarLabel: "", // Hide tab name
        }}
      />
    </Home.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false, // Disable the white bar at the top for the entire Drawer
        }}
      >
        <Drawer.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerTitle: '' }} // Hide name for the drawer screen
        />
        <Drawer.Screen
          name="Create account"
          component={CreateAccountScreen}
          options={{ headerTitle: '' }} // Hide name for the drawer screen
        />
        <Drawer.Screen
          name="Password"
          component={PasswordScreen}
          options={{ headerTitle: '' }} // Hide name for the drawer screen
        />
        <Drawer.Screen
          name="Interests"
          component={InterestsScreen}
          options={{ headerTitle: '' }} // Hide name for the drawer screen
        />
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ headerTitle: '' }} // Hide name for the drawer screen
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}