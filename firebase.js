// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // If using authentication
import { getFirestore } from 'firebase/firestore';  // If using Firestore


// Your Firebase config object from the Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyB02grAXO-btvyVY-SUAs0UBcT4zARuimk",
    authDomain: "nikeapp-001.firebaseapp.com",
    projectId: "nikeapp-001",
    storageBucket: "nikeapp-001.firebasestorage.app",
    messagingSenderId: "142746184617",
    appId: "1:142746184617:web:9a410cc26141668f2a72b8",
    measurementId: "G-TJGT1L1LSK"
  };
// Initialize Firebase only once
const app = initializeApp(firebaseConfig);  // Initialize Firebase
const auth = getAuth(app);  // Get Firebase Authentication instance
const firestore = getFirestore(app);  // Get Firestore instance

export { app, auth, firestore };