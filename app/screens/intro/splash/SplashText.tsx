import ProgressBar from "@/components/progress";
import { Colors } from "@/constants/Colors";
import { Fonts, mainText } from "@/constants/Font";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashText = () => {
  return (
    <LinearGradient
      colors={[Colors.gray50, Colors.light]}
      style={styles.container}
    >
      <Text style={mainText}>
        Planta <Text style={{ color: Colors.gray500 }}>Sphere</Text>
      </Text>
      <ProgressBar />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashText;
