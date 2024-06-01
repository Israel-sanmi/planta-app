import TopNav from "@/components/header";
import { Colors } from "@/constants/Colors";
import { Fonts, width } from "@/constants/Font";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Button from "@/components/button";
import auth from "@react-native-firebase/auth";
import ErrorModal from "@/components/errorModal";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const openErrorModalFunct = () => {
    setOpenErrorModal((prev) => !prev);
  };
  const [errorText, setErrorText] = useState("");

  const handlePasswordReset = async () => {
    if (email) {
      try {
        await auth().sendPasswordResetEmail(email);
        setOpenErrorModal(true);
        setErrorText("Password reset email sent!");
      } catch (error) {
        setOpenErrorModal(true);
        console.error(error);
        setErrorText("Failed to send password reset email.");
      }
    } else {
      setOpenErrorModal(true);
      setErrorText("Please enter your email address.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav headText={"Forgot Password"} />
      <View>
        <View style={[styles.field, { marginTop: 30 }]}>
          <Feather name="mail" size={18} color={Colors.gray200} />
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            autoComplete="email"
            inputMode="email"
            style={{
              fontFamily: Fonts.roboteReg,
              color: Colors.gray200,
              marginLeft: 10,
            }}
          />
        </View>
        <View>
          {loading ? (
            <View
              style={{
                backgroundColor: Colors.primary,
                borderRadius: 20,
                paddingVertical: 8,
                marginTop: 25,
              }}
            >
              <ActivityIndicator size="large" color="white" />
            </View>
          ) : (
            <Button funct={handlePasswordReset} btnText={"Proceed"} />
          )}
        </View>
      </View>
      <ErrorModal
        openErrorModal={openErrorModal}
        openErrorModalFunct={openErrorModalFunct}
        errorText={errorText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  field: {
    flexDirection: "row",
    width: width * 0.95,
    backgroundColor: Colors.gray50,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray100,
    alignItems: "center",
  },
});

export default ForgotPassword;
