import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDAoVD28HZJSvNYxJnZ76SQz76c6phyy60",
    authDomain: "class-d93aa.firebaseapp.com",
    projectId: "class-d93aa",
    storageBucket: "class-d93aa.firebasestorage.app",
    messagingSenderId: "416215641552",
    appId: "1:416215641552:web:4cc22bb840dbfcf92e5dd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// Sign Up Google
const signUpGoogle = () => {
    // alert("working")
    console.log("working");
    
}

window.signUpGoogle = signUpGoogle