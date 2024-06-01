import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
  GoogleAuthProvider,
  // signInWithPopup,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmffaN1BeyFwX0DQfbs_tyqe3ND6A4ua4",
  authDomain: "planta-6fb4c.firebaseapp.com",
  projectId: "planta-6fb4c",
  storageBucket: "planta-6fb4c.appspot.com",
  messagingSenderId: "134034070548",
  appId: "1:134034070548:web:af4a31871eeb4e1013db01",
  measurementId: "G-GFFVW7Z8LJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// export const auther = firebase.auth();

export { app, db, auth, firebase };
