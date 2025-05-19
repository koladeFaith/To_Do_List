
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
// SIGN IN WITH PASSWORD AND EMAIL
const signUpUser = () => {
    const userName = document.getElementById('uName').value
    const email = document.getElementById('mail').value
    const password = document.getElementById('pass').value
    if (userName === '' || email === '' || password === "") {
        alert("working")
    } else {

    }
}

// Sign Up Google
const signUpGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode, error);
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Another sign up provider has been used for this mail')
            }
            if (errorCode === 'auth/popup-closed-by-user') {
                alert('The sign-in popup was closed before completing the sign in.');
            }
            if (errorCode === 'auth/cancelled-popup-request') {
                alert('Popup sign in was canceled because another popup was opened.');
            }
            if (errorCode === 'auth/popup-blocked') {
                alert('The browser blocked the sign-in popup. Please allow popups and try again.');
            }
            if (errorCode === 'auth/operation-not-allowed') {
                alert('GitHub sign-in is not enabled in your Firebase project.');
            }
            if (errorCode === 'auth/unauthorized-domain') {
                alert('This domain is not authorized for OAuth operations.');
            }
            if (errorCode === 'auth/network-request-failed') {
                alert('Network error. Please check your connection and try again.');
            }
        });

}
const signGitHub = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);

            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Another sign up provider has been used for this mail')
            }
            if (errorCode === 'auth/popup-closed-by-user') {
                alert('The sign-in popup was closed before completing the sign in.');
            }
            if (errorCode === 'auth/cancelled-popup-request') {
                alert('Popup sign in was canceled because another popup was opened.');
            }
            if (errorCode === 'auth/popup-blocked') {
                alert('The browser blocked the sign-in popup. Please allow popups and try again.');
            }
            if (errorCode === 'auth/operation-not-allowed') {
                alert('GitHub sign-in is not enabled in your Firebase project.');
            }
            if (errorCode === 'auth/unauthorized-domain') {
                alert('This domain is not authorized for OAuth operations.');
            }
            if (errorCode === 'auth/network-request-failed') {
                alert('Network error. Please check your connection and try again.');
            }
        });
}
window.signUpUser = signUpUser
window.signUpGoogle = signUpGoogle
window.signGitHub = signGitHub




// const password = document.getElementById('pass')
// const show = document.querySelector("#show")
// show.addEventListener("click", () => {
//     if (password.getAttribute("type") === "password") {
//         password.setAttribute("type", "text")
//         show.classList.replace("bi-eye", "bi-eye-slash")
//     } else {
//         password.setAttribute("type", "password")
//         show.classList.replace("bi-eye-slash", "bi-eye")

//     }
// })