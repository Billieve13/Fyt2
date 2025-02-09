import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen.js";
import SignUpScreen from "./src/screens/SignUpScreen.js";
import CustomDrawer from "./src/components/CustomDrawer.js";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sign Up" component={SignUpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}