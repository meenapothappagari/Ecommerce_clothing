
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg8WoY1UALvFGOQJVEYo0d0jyLMIOvhtY",
    authDomain: "ecommorce-83372.firebaseapp.com",
    projectId: "ecommorce-83372",
    storageBucket: "ecommorce-83372.appspot.com",
    messagingSenderId: "535277684883",
    appId: "1:535277684883:web:c662e55ddb0e2ca1c9e566",
    measurementId: "G-MS3FGZE3G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup,signOut };




