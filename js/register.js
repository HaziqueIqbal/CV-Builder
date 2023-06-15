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

function changeToLogin(){
    window.location.href ="index.html";
}


var reg = document.getElementById("reg");
reg.addEventListener("click", function () {
    register();
});


var change2Login = document.getElementById("changeToLogin");
change2Login.addEventListener("click", function(){
    changeToLogin();
})



function register() {
    if (!validate()) { return }
    let fullName = document.getElementById("signUpName");
    let email = document.getElementById("signUpEmail");
    let password = document.getElementById("signUpPassword");
    let passCheck = document.getElementById("signUpPasswordAgain");
    const dbRef = ref(db);
    get(child(dbRef, "useList/" + fullName.value)).then((snapshot) => {
        if (snapshot.exists()) {
            callAlert("Account already exists!","red");
        } else {
            console.log(snapshot)
            set(ref(db, "useList/" + fullName.value), {
                Name: fullName.value,
                Email: email.value,
                Password: password.value
            }).then(() => {
                callAlert("Successfully Registered!","green");
                fullName.value = "";
                email.value = "";
                password.value = "";
                passCheck.value = "";

            }).catch((error) => {
                callAlert("error" + error,"red");
            });

        }
    });
}

function validate() {
    let nameR = /^[a-zA-Z\s]+$/;
    let emailR = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook|hotmail)\.com$/
    let fullName = document.getElementById("signUpName");
    let email = document.getElementById("signUpEmail");
    let password = document.getElementById("signUpPassword");
    let checkPassword = document.getElementById("signUpPasswordAgain");
    if (fullName.value == "") {
        callAlert("Please enter your name.","red");
        return false;
    }
    if (email.value == "") {
        callAlert("please enter email","red");
        return false;
    }
    if (!nameR.test(fullName.value)) {
        callAlert("Name syntax is incorrect!","red")
        return false;
    }
    if (!emailR.test(email.value)) {
        callAlert("Email syntax is incorret!","red")
        return false;
    }
    if (password.value == "") {
        callAlert("Please enter password!","red");
        return false;
    }
    if (checkPassword.value == "") {
        callAlert("Please enter password again!","red");
        return false;
    }
    if (checkPassword.value !== password.value) {
        callAlert("Password doesn't matches!","red");
        return false;
    }
    return true;

}

var x = document.getElementById("co");
function callAlert(msg,value) {
    x.innerHTML = msg;
    x.style.display = "block"
    x.style.color = value;
    setTimeout(() => {
        x.style.display = "none"
    }, 5000)
}