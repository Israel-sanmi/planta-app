import FavCard from "@/components/favCard";
import TopNav from "@/components/header";
import { Colors } from "@/constants/Colors";
import { Fonts, height, width } from "@/constants/Font";
import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Favourite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav headText={"Favourite plant"} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          <FavCard />
          <FavCard />
          <FavCard />
          <FavCard />
          <FavCard />
          <FavCard />
          <FavCard />
          <FavCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 60
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
});

export default Favourite;
