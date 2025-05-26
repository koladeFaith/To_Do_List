import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import {
    getAuth, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAoVD28HZJSvNYxJnZ76SQz76c6phyy60",
    authDomain: "class-d93aa.firebaseapp.com",
    projectId: "class-d93aa",
    storageBucket: "class-d93aa.firebasestorage.app",
    messagingSenderId: "416215641552",
    appId: "1:416215641552:web:4cc22bb840dbfcf92e5dd5",
    databaseURL: "https://class-d93aa-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        show.innerHTML = `<h3>Welcome ${user.displayName}</h3>`
    } else {
        setTimeout(() => {
            window.location.href = 'signin.html'
        }, 500)
    }
});

const addToDo = () => {
    const myToDo = document.getElementById('todo').value
    if (myToDo === '') {
        alert('The input is empty')
    } else {
        console.log(myToDo)
        const date = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()
        const toDoObj = { myToDo, date, time }
        console.log(toDoObj);
        const toDoRef = ref(database, '');
        set(toDoRef, toDoObj)
    }
}

let newRef = ref(database, 'todos')
onValue(newRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    display.innerHTML = ''
    data.map((info, i) => {
        display.innerHTML += `
            <p>${i + 1}. <strong>${info.myTodo}</strong></p>
            <small>${info.time} ${info.date}</small>
        `
    })
});

window.addToDo = addToDo