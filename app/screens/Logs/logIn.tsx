import Button from "@/components/button";
import TopNav from "@/components/header";
import LoginModal from "@/components/loginModal";
import { Colors } from "@/constants/Colors";
import { Fonts, height, width } from "@/constants/Font";
import { Feather, FontAwesome } from "@expo/vector-icons";

import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { login } from "@/services/login";
import { emailVerification } from "@/services/signup";
import ErrorModal from "@/components/errorModal";

const LogIn = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const showPassFunct = () => {
    setShowPassword((prev) => !prev);
  };

  const [openModal, setOpenModal] = useState(false);
  const openModalFunct = () => {
    setOpenModal((prev) => !prev);
    navigation.replace("screens/BottomNav");
  };
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const openErrorModalFunct = () => {
    setOpenErrorModal((prev) => !prev);
  };

  const [errorText, setErrorText] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      const user = await login(email, password);
      if (user) {
        if (user.emailVerified) {
          setOpenModal(true);
        } else {
          setShowEmailMessage(true);
          await emailVerification();
        }
      }
    } catch (error: any) {
      setLoading(false);
      setOpenErrorModal(true);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setErrorText("Invalid email or password. Please try again!");
      } else if (error.code === "auth/too-many-requests") {
        setErrorText(
          "Too many unsuccessful login attempts. Please try again later."
        );
      } else if (error.code === "auth/invalid-credential") {
        setErrorText("Incorrect credentials");
      } else {
        setErrorText(error.code);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav headText={"Login"} />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "column",
          height: height * 0.92,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
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
              <View
                style={[
                  styles.field,
                  { justifyContent: "space-between", marginTop: 20 },
                ]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Feather name="lock" size={18} color={Colors.gray200} />
                  <TextInput
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Enter your password"
                    autoComplete="password"
                    secureTextEntry={!showPassword}
                    style={{
                      fontFamily: Fonts.roboteReg,
                      color: Colors.gray200,
                      marginLeft: 10,
                    }}
                  />
                </View>
                <TouchableOpacity onPress={showPassFunct}>
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={18}
                    color={Colors.gray200}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("screens/Logs/forgotPassword");
              }}
            >
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  textAlign: "right",
                  fontSize: 14,
                  color: Colors.primary,
                  paddingTop: 4,
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
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
              <Button funct={handleLogin} btnText={"Login"} />
            )}
            {showEmailMessage ? (
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "red",
                  fontSize: 12,
                }}
              >
                Email verification required. Please check your email inbox and
                follow the instructions to verify your email address
              </Text>
            ) : (
              <></>
            )}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  fontSize: 14,
                  color: Colors.gray100,
                }}
              >
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace("screens/Logs/signUp");
                }}
              >
                <Text
                  style={{
                    color: Colors.primary,
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 14,
                  }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 15,
            }}
          >
            <View style={styles.line} />
            <Text
              style={{
                fontFamily: Fonts.montSemiBold,
                paddingHorizontal: 13,
                color: Colors.gray100,
              }}
            >
              OR
            </Text>
            <View style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.otherLogin}>
              <FontAwesome name="apple" size={24} color="black" />
              <Text style={styles.loginText}>Log in with Apple</Text>
              <View />
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherLogin}>
              <FontAwesome name="google" size={24} color="#4285F4" />
              <Text style={styles.loginText}>Log in with Google</Text>
              <View />
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherLogin}>
              <FontAwesome name="facebook" size={24} color="#1877F2" />
              <Text style={styles.loginText}>Log in with Facebook</Text>
              <View />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <LoginModal openModal={openModal} openModalFunct={openModalFunct} />
      <ErrorModal
        openErrorModal={openErrorModal}
        openErrorModalFunct={openErrorModalFunct}
        errorText={errorText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  otherLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.gray50,
    borderRadius: 25,
    padding: 12,
    marginVertical: 6,
  },
  loginText: {
    fontFamily: Fonts.robotoMedium,
  },
  line: {
    backgroundColor: Colors.gray100,
    width: width * 0.41,
    height: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
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

export default LogIn;
