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
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
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
     toastify("Fill the input required", "#f00", "#fff")
    } else {
        const userObj = {
            userName, email, password
        }
        console.log(userObj)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toastify("Account created successfully", "#006400", "#fff")
                setTimeout(() => {
                    window.location.href = 'signin.html'
                }, 1000)
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                if (errorCode === 'auth/password-does-not-meet-requirements') {
                    toastify("Password should be at least 6 characters", "#f00", "#fff")
                }
                if (errorCode === 'auth/email-already-in-use') {
                    toastify("Email already in use.", "#f00", "#fff")
                }
                if (errorCode === 'auth/invalid-email') {
                    toastify("Invalid email.", "#f00", "#fff")
                }
                if (errorCode === 'auth/operation-not-allowed') {
                    toastify("Operation not allowed.", "#f00", "#fff")
                }
                if (errorCode === 'auth/missing-password') {
                    toastify("Password is required.", "#f00", "#fff")
                }
                if (errorCode === 'auth/internal-error') {
                    toastify("Internal error. Please try again later.", "#f00", "#fff")
                }
            });
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
            }, 1000);
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode, error);
            if (errorCode === 'auth/account-exists-with-different-credential') {
                toastify('Another sign up provider has been used for this mail', "#f00", "#fff");
            }
            if (errorCode === 'auth/popup-closed-by-user') {
                toastify('The sign-in popup was closed before completing the sign in.', "#f00", "#fff");
            }
            if (errorCode === 'auth/cancelled-popup-request') {
                toastify('Popup sign in was canceled because another popup was opened.', "#f00", "#fff");
            }
            if (errorCode === 'auth/popup-blocked') {
                toastify('The browser blocked the sign-in popup. Please allow popups and try again.', "#f00", "#fff");
            }
            if (errorCode === 'auth/operation-not-allowed') {
                toastify('Google sign-in is not enabled in your Firebase project.', "#f00", "#fff");
            }
            if (errorCode === 'auth/unauthorized-domain') {
                toastify('This domain is not authorized for OAuth operations.', "#f00", "#fff");
            }
            if (errorCode === 'auth/network-request-failed') {
                toastify('Network error. Please check your connection and try again.', "#f00", "#fff");
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
            }, 1000);
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode === 'auth/account-exists-with-different-credential') {
                toastify('Another sign up provider has been used for this mail', "#f00", "#fff");
            }
            if (errorCode === 'auth/popup-closed-by-user') {
                toastify('The sign-in popup was closed before completing the sign in.', "#f00", "#fff");
            }
            if (errorCode === 'auth/cancelled-popup-request') {
                toastify('Popup sign in was canceled because another popup was opened.', "#f00", "#fff");
            }
            if (errorCode === 'auth/popup-blocked') {
                toastify('The browser blocked the sign-in popup. Please allow popups and try again.', "#f00", "#fff");
            }
            if (errorCode === 'auth/operation-not-allowed') {
                toastify('GitHub sign-in is not enabled in your Firebase project.', "#f00", "#fff");
            }
            if (errorCode === 'auth/unauthorized-domain') {
                toastify('This domain is not authorized for OAuth operations.', "#f00", "#fff");
            }
            if (errorCode === 'auth/network-request-failed') {
                toastify('Network error. Please check your connection and try again.', "#f00", "#fff");
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