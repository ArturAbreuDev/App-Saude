import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAE2bpANizuLIQcP7-ZNgR0aul9gxfWseY",
  authDomain: "saudeapp-4a696.firebaseapp.com",
  projectId: "saudeapp-4a696",
  storageBucket: "saudeapp-4a696.appspot.com",
  messagingSenderId: "67259028887",
  appId: "1:67259028887:web:ffe285c3e4f5f73fe6e0d2",
  measurementId: "G-T4ST1YSMZ3"
};
// initialize firebase app
const app = initializeApp(firebaseConfig);

// initialize auth
const firebase = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

const storage = getStorage(app)

export { app, db, firebase, storage };