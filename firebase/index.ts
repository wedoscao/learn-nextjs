import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9BdqVfBotiaoDd4AUnhha9dQnRg5-YMY",
    authDomain: "music-player-7576b.firebaseapp.com",
    projectId: "music-player-7576b",
    storageBucket: "music-player-7576b.appspot.com",
    messagingSenderId: "122607972930",
    appId: "1:122607972930:web:8247fa0553bd17e444b3db",
    measurementId: "G-Y9DVYL7SKZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
