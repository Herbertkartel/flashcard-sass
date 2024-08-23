// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5XrXvUf2CH-iiqzuAj3QFzJVpOSrXBIg",
  authDomain: "flashcard-sass-7f93b.firebaseapp.com",
  projectId: "flashcard-sass-7f93b",
  storageBucket: "flashcard-sass-7f93b.appspot.com",
  messagingSenderId: "61990595768",
  appId: "1:61990595768:web:cf956ce11012528739d84d",
  measurementId: "G-TKD6ZB00W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);