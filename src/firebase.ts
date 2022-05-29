// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxnLAJNSZqRfb3KbdamCgoiVUxTN23F3c",
  authDomain: "first-experience-898cf.firebaseapp.com",
  projectId: "first-experience-898cf",
  storageBucket: "first-experience-898cf.appspot.com",
  messagingSenderId: "661332183379",
  appId: "1:661332183379:web:b445ca027383f860fc39a6",
  measurementId: "G-26W3TLQBPG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
