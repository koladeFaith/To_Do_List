
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";


// Your web app's Firebase configuration
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
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            window.location.href = "signin.html"
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

        });

}

window.signUpGoogle = signUpGoogle
