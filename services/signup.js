import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "@/services/config";
import { doc, setDoc } from "firebase/firestore";

export const signup = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await emailVerification();
    // alert(user, + "account created!");
    return user;
  } catch (error) {
    throw error;
  }
};

const showEmailAlert = (email) => {
  alert(
    `A verification email has been sent to ${email}. Please check your inbox.`
  );
};

export const emailVerification = async () => {
  const user = auth.currentUser;
  if (user) {
    try {
      await sendEmailVerification(user, {
        handleCodeInApp: true,
        url: "https://planta-6fb4c.firebaseapp.com",
      });
      showEmailAlert(user.email);
    } catch (error) {
      console.error("Email verification error:", error.code, error.message);
      throw error;
    }
  } else {
    console.error("No user is currently signed in.");
  }
};

export const saveUserData = async (id, name) => {
  try {
    await setDoc(doc(db, "users", id), {
      name: name,
      email: auth.currentUser.email,
    });
    // console.log("User data saved to Firestore.");
  } catch (error) {
    console.error("Error saving user data:", error);
    throw error;
  }
};
