import { width } from "@/constants/Font";
import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

const ProgressBar = ({ duration = 3000, color = "#4caf50" }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [duration]);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.progressBar, { width, backgroundColor: color }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 5,
  },
});

export default ProgressBar;
