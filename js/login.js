

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyD2XNc6rbRn78qL_dJdHrn3hd_KDYH5bx4",
    authDomain: "cv-builder-a0617.firebaseapp.com",
    databaseURL: "https://cv-builder-a0617-default-rtdb.firebaseio.com",
    projectId: "cv-builder-a0617",
    storageBucket: "cv-builder-a0617.appspot.com",
    messagingSenderId: "1069773220682",
    appId: "1:1069773220682:web:059402ec935436d8f26fb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();

var change2SignUp = document.getElementById("changeToSignUp");
change2SignUp.addEventListener("click", function () {
    changeToSignUp();
});

var log = document.getElementById("login");
log.addEventListener("click", function () {
    Login();
});


function Login() {
    let fullName = document.getElementById("loginName");
    let password = document.getElementById("loginPassword");
    if (!validate(fullName, password)) {
        return;
    }
    const dbRef = ref(db);
    get(child(dbRef, `useList/${fullName.value}`)).then((snapshot) => {
        if (snapshot.exists()) {
            let dbPass = snapshot.val().Password;
            if (password.value == dbPass) {
                saveInfo(snapshot.val());
                fullName.value = "";
                password.value = "";
                window.location.href = "Template Enabeling B18101071/index.html"
            }
            else {
                callAlert("Incorrect password!", "red");
                return;
            }
        } else {
            callAlert("Record not found! try again.", "red");
            return;
        }
    }).catch((error) => {
        console.error(error);
    });


}

function saveInfo(getValues) {
    let loggedIn = document.getElementById("logincheckbox");
    if (!loggedIn.checked) {
        console.log(getValues)
        sessionStorage.setItem("user", JSON.stringify(getValues));
    } else {
        localStorage.setItem("loggedIn", "yes");
        localStorage.setItem("user", JSON.stringify(getValues));
    }
}

function validate(email, password) {
    if (email.value == "") {
        callAlert("Please enter Email!", "red");
        return false;
    }
    if (password.value == "") {
        callAlert("Please enter Password!", "red");
        return false;
    }
    return true;
}

function changeToSignUp() {
    window.location.href = "signUp.html";
}

var x = document.getElementById("co");
function callAlert(msg, value) {
    x.innerHTML = msg;
    x.style.display = "block"
    x.style.color = value;
    setTimeout(() => {
        x.style.display = "none"
    }, 5000)
}