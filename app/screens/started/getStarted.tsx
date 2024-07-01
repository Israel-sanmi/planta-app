import { Colors } from "@/constants/Colors";
import { Fonts, height, mainText, width } from "@/constants/Font";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GetStarted = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.flex}>
          <Text style={[mainText]}>
            Planta <Text style={{ color: "black" }}>Sphere</Text>
          </Text>
          <View
            style={{
              height: 3,
              backgroundColor: Colors.primary,
              borderRadius: 8,
              width: 250,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.montSemiBold,
            textAlign: "center",
            paddingVertical: 15,
          }}
        >
          Let's get started!
        </Text>
        <Text
          style={{
            color: Colors.gray100,
            textAlign: "center",
            fontFamily: Fonts.roboteReg,
          }}
        >
          "Get growing! Sign up or log in to bring new life into your home."
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.push("screens/Logs/signUp")}
          style={[styles.button, { backgroundColor: Colors.primary }]}
        >
          <Text style={{ fontFamily: Fonts.montSemiBold, color: "white" }}>
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push("screens/Logs/logIn")}
          style={styles.button}
        >
          <Text
            style={{ fontFamily: Fonts.montSemiBold, color: Colors.primary }}
          >
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{
          navigation.navigate("screens/BottomNav")
        }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: Fonts.robotoMedium,
              fontSize: 14,
            }}
          >
            continue as a guest
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 10,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  flex: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    paddingVertical: 15,
    borderColor: Colors.primary,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
});

export default GetStarted;
