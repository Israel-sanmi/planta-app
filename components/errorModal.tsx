import { Fonts, height } from "@/constants/Font";
import React from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Feather, AntDesign, EvilIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const ErrorModal = ({
  openErrorModal,
  openErrorModalFunct,
  errorText,
}: any) => {
  return (
    <Modal
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      isVisible={openErrorModal}
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
          gap: 29,
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 40,
            width: 40,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EvilIcons name="close" size={24} color="white" />
        </View>
        <View>
          <Text
            style={{
              fontFamily: Fonts.montSemiBold,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Sorry! Check details again
          </Text>
          <Text
            style={{
              color: Colors.gray100,
              fontSize: 16,
              textAlign: "center",
              paddingVertical: 10,
            }}
          >
            {errorText}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "red",
            width: 160,
            paddingHorizontal: 35,
            paddingVertical: 20,
            borderRadius: 50,
          }}
          onPress={openErrorModalFunct}
        >
          <Text
            style={{
              fontFamily: Fonts.montSemiBold,
              color: "white",
              fontSize: 15,
              marginRight: 4,
            }}
          >
            Go back
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

export default ErrorModal;
