import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/services/config";

export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
