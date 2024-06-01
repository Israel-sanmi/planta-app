import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import TopNav from "@/components/header";
import { Colors } from "@/constants/Colors";
import { Fonts, width } from "@/constants/Font";

import { Feather } from "@expo/vector-icons";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { saveUserData, signup } from "@/services/signup";

const SignUp = ({ navigation }: any) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    if (isChecked) {
      try {
        setLoading(true);
        const user = await signup(email, password, name);
        if (user) {
          const id = user.uid;
          await saveUserData(id, name);
          setLoading(false);
          alert("Account created successfully!");
        }
      } catch (error: any) {
        setLoading(false);
        if (error.code === "auth/email-already-in-use") {
          alert("Email already in use");
        } else if (error.code === "auth/weak-password") {
          alert("weak password");
        } else {
          alert("Signup error:" + error.message);
        }
      } finally{
        setLoading(false)
      }
    } else{
      alert("Click the check box for terms and condition")
    }
  };

  const showPassFunct = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNav headText={"Sign Up"} />
      <View>
        <View style={[styles.field, { marginTop: 20 }]}>
          <Feather name="user" size={18} color={Colors.gray200} />
          <TextInput
            onChangeText={setname}
            value={name}
            placeholder="Full name"
            inputMode="text"
            style={{
              fontFamily: Fonts.roboteReg,
              color: Colors.gray200,
              marginLeft: 10,
            }}
          />
        </View>
        <View style={[styles.field, { marginTop: 10 }]}>
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
            { justifyContent: "space-between", marginTop: 10 },
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
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <Checkbox
            label={
              <Text>
                I agree to
                <Text style={{ color: Colors.primary }}> Plata </Text>
                Terms of service and
                <Text style={{ color: Colors.primary }}> Privacy policy </Text>
              </Text>
            }
            checked={isChecked}
            onChange={toggleCheckbox}
          />
        </View>
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
          <Button btnText={"Sign up"} funct={handleSignUp} />
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
            Already have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("screens/Logs/logIn");
            }}
          >
            <Text
              style={{
                color: Colors.primary,
                fontFamily: Fonts.montSemiBold,
                fontSize: 14,
              }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default SignUp;
