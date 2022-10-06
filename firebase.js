import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAzeD4vAxUk6Z32btpXxODMZ9765Y_eZNA",
    authDomain: "otptest-6d798.firebaseapp.com",
    projectId: "otptest-6d798",
    storageBucket: "otptest-6d798.appspot.com",
    messagingSenderId: "527296258392",
    appId: "1:527296258392:web:f0858c50f4f4e07f08052d",
    measurementId: "G-8T9W8WQJ73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
