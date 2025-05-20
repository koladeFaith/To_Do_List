// Toastify
const toastify = (text, background, color) => {
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: background,
            color: color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
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

const signInUser = () => {
    const email = document.getElementById('mail').value
    const password = document.getElementById('pass').value
    if (email === '' || password === "") {
        toastify("Fill the input required", "#f00", "#fff");
    } else {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toastify("Sign in successful", "#006400", "#fff")

                user ? setTimeout(() => {
                    window.location.href = 'dashboard.html'
                }, 1000) : window.location.href = 'index.html'
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode === 'auth/wrong-password') {
                    toastify('Wrong password.', "#f00", "#fff");
                }
                if (errorCode === 'auth/user-not-found') {
                    toastify('User not found.', "#f00", "#fff");
                }
                if (errorCode === 'auth/invalid-email') {
                    toastify('Invalid email.', "#f00", "#fff");
                }
                if (errorCode === 'auth/too-many-requests') {
                    toastify('Too many requests. Try again later.', "#f00", "#fff");
                }
                if (errorCode === 'auth/operation-not-allowed') {
                    toastify('Operation not allowed.', "#f00", "#fff");
                }
                if (errorCode === 'auth/weak-password') {
                    toastify('Weak password.', "#f00", "#fff");
                }
                if (errorCode === 'auth/invalid-credential') {
                    toastify('Invalid credential.', "#f00", "#fff");
                }
            });
    }
}
window.signInUser = signInUser;