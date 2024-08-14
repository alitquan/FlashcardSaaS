// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOtM3rCyPlELeeXrcFiiNQM-K31OwPzsE",
  authDomain: "flashjs-5386e.firebaseapp.com",
  projectId: "flashjs-5386e",
  storageBucket: "flashjs-5386e.appspot.com",
  messagingSenderId: "994375239392",
  appId: "1:994375239392:web:a027dc44ce052cdff63285",
  measurementId: "G-9610JWC85N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export { db };
