// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARHWt9_LQpJYXsXY5pC4YivYm2h8ZbEZY",
  authDomain: "netflixgpt-fb984.firebaseapp.com",
  projectId: "netflixgpt-fb984",
  storageBucket: "netflixgpt-fb984.appspot.com",
  messagingSenderId: "366511453374",
  appId: "1:366511453374:web:74d9eee8983e98ed451aef",
  measurementId: "G-FT30XEFW3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);