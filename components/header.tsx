import { Fonts, width } from "@/constants/Font";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

const TopNav = ({ headText }: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={20} />
      </TouchableOpacity>
      <Text style={{ fontFamily: Fonts.montSemiBold, fontSize: 16 }}>
        {headText}
      </Text>
      <View style={{ width: 30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default TopNav;
