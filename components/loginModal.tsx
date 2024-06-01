import { Fonts, height } from "@/constants/Font";
import React from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const LoginModal = ({ openModal, openModalFunct }: any) => {
  return (
    <Modal
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      isVisible={openModal}
    >
      <View
        style={{
          backgroundColor: "white",
          height: height * 0.45,
          borderRadius: 30,
          padding: 20,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 29
        }}
      >
        <View
          style={{
            backgroundColor: Colors.lightActive,
            height: 90,
            width: 90,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="check" size={50} color={Colors.primary} />
        </View>
        <View>
          <Text
            style={{
              fontFamily: Fonts.montSemiBold,
              fontSize: 20,
              textAlign: "center"
            }}
          >
            Yaay! Welcome Back
          </Text>
          <Text
            style={{
              color: Colors.gray100,
              fontSize: 16,
              textAlign: "center",
              paddingVertical: 10
            }}
          >
            Once again you logged in successfully!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: Colors.primary,
            width: 160,
            paddingHorizontal: 35,
            paddingVertical: 20,
            borderRadius: 50,
          }}
          onPress={openModalFunct}
        >
          <Text
            style={{
              fontFamily: Fonts.montSemiBold,
              color: "white",
              fontSize: 15,
              marginRight: 4,
            }}
          >
            Let's begin
          </Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LoginModal;
