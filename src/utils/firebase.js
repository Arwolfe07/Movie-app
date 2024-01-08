// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALMdrzH4OFnWi8FgZQv5esjcRIdlhyCuQ",
  authDomain: "watchmonkey-63c88.firebaseapp.com",
  projectId: "watchmonkey-63c88",
  storageBucket: "watchmonkey-63c88.appspot.com",
  messagingSenderId: "293025823784",
  appId: "1:293025823784:web:252f7525a9e93bd9a8c91d",
  measurementId: "G-LKBHH80G2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);