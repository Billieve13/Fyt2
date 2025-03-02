import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen.js";
import SignUpScreen from "./src/screens/SignUpScreen.js";
// import CustomDrawer from "./src/components/CustomDrawer.js";
import PasswordScreen from "./src/screens/PasswordScreen.js";
import InterestsScreen from "./src/screens/InterestsScreen.js";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false, //Disable the white bar at the top
        }}
      >
      {/* </Drawer.Navigator><Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}> */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sign Up" component={SignUpScreen} />
        <Drawer.Screen name="Password" component={PasswordScreen} />
        <Drawer.Screen name="Interests" component={InterestsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}