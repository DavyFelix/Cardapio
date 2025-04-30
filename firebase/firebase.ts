// firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWaSCAsTjXgspMvG4D-0mvqSHa267dld0",
    authDomain: "dejtcc.firebaseapp.com",
    databaseURL: "https://dejtcc-default-rtdb.firebaseio.com",
    projectId: "dejtcc",
    storageBucket: "dejtcc.firebasestorage.app",
    messagingSenderId: "653324429334",
    appId: "1:653324429334:web:0321d1ea0c600000cc6d37",
    measurementId: "G-VEFPJKV861"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
