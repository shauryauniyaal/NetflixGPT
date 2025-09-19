// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_3bjvO_Yc8xr7LQ62IA5kWjw5zGwqGGU",
  authDomain: "netflixgpt-8c1fb.firebaseapp.com",
  projectId: "netflixgpt-8c1fb",
  storageBucket: "netflixgpt-8c1fb.firebasestorage.app",
  messagingSenderId: "345903065956",
  appId: "1:345903065956:web:07b4275b029ba893b96871",
  measurementId: "G-D4VHJT9BMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
