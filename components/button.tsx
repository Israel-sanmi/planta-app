import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Font";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ btnText, funct }: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        funct();
      }}
      style={styles.container}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: Fonts.montSemiBold,
          fontSize: 14,
        }}
      >
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 25,
  },
});

export default Button;
