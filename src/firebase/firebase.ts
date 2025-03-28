
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtu6pz-2GwxN6YU3wUwxgndFP7bK-Kk4Y",
  authDomain: "leetclone-52dfa.firebaseapp.com",
  projectId: "leetclone-52dfa",
  storageBucket: "leetclone-52dfa.firebasestorage.app",
  messagingSenderId: "935258245898",
  appId: "1:935258245898:web:a812845c8f8487708ac8f3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

const auth = getAuth(app);
const firestore  = getFirestore(app)

export {auth,firestore,app}