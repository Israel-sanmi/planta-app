import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import IntroductionScreen from "./screens/intro";
import { SafeAreaView, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import SplashText from "./screens/intro/splash/SplashText";
import GetStarted from "./screens/started/getStarted";
import LogIn from "./screens/Logs/logIn";
import SignUp from "./screens/Logs/signUp";
import HomeScreen from "./screens/home/home";
import ForgotPassword from "./screens/Logs/forgotPassword";
import React from "react";
import BottomNav from "@/app/screens/BottomNav";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  const Stack = createStackNavigator();

  const [loaded] = useFonts({
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MonteserratSemi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showSplash ? (
        <SplashText />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="screens/intro/index"
            component={IntroductionScreen}
          />
          <Stack.Screen
            name="screens/started/getStarted"
            component={GetStarted}
          />
          <Stack.Screen name="screens/Logs/logIn" component={LogIn} />
          <Stack.Screen name="screens/Logs/signUp" component={SignUp} />
          <Stack.Screen name="screens/BottomNav" component={BottomNav} />

          <Stack.Screen name="screens/Logs/forgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      )}
    </SafeAreaView>
  );
}
