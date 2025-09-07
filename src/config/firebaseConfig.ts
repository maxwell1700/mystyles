
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArtGbd3M2AEUBNSbUq95BKVKfWCcaeaL0",
  authDomain: "mystyles-db.firebaseapp.com",
  projectId: "mystyles-db",
  storageBucket: "mystyles-db.firebasestorage.app",
  messagingSenderId: "63600930334",
  appId: "1:63600930334:web:d9a5519a2263287a98c80f",
  measurementId: "G-1GM4FC7Z4M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);

