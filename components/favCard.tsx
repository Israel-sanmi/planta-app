import { Colors } from "@/constants/Colors";
import { Fonts, height, width } from "@/constants/Font";
import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const FavCard = () => {
  return (
    <View
      style={{
        width: width * 0.45,
        height: 210,
        backgroundColor: Colors.lightHover,
        borderRadius: 14,
        padding: 6,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.montBold,
            fontSize: 14,
          }}
        >
          Yucca
        </Text>
        <TouchableOpacity
          style={{
            width: 27,
            height: 27,
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 100,
            borderColor: Colors.gray50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="heart" size={14} color="red" />
        </TouchableOpacity>
      </View>
      <Image
        source={require("@/assets/images/onboard3.png")}
        style={{
          width: width * 0.45,
          resizeMode: "contain",
          height: height * 0.19,
          marginVertical: 5,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.montBold,
            fontSize: 14,
          }}
        >
          $40
        </Text>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavCard;
