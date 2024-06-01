import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Font";

const Checkbox = ({ label, checked, onChange }: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
        {checked && <Feather name="check" size={16} color={"white"} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Colors.gray100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  checkedCheckbox: {
    backgroundColor: Colors.primary,
  },
  label: {
    marginLeft: 5,
    fontFamily: Fonts.robotoMedium,
    color: Colors.gray100,
  },
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Checkbox;