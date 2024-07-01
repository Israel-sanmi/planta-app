import React from "react";
import HomeScreen from "@/app/screens/home/home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "@/constants/Colors";

const Tab = createBottomTabNavigator();
export default function BottomNav() {
  return (
    <Tab.Navigator

      initialRouteName="screens/home/home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="screens/home/home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
