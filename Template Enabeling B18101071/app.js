var temp = document.getElementById("temp");

var id_3 = document.getElementById("3");
var id_4 = document.getElementById("4");
id_3.style.opacity = 0.5;
id_4.style.opacity = 0.5;
 
function hover(i) {
    if (i == 1 || i == 2) {
        let id = document.getElementById(i);
        id.style.opacity = 0.5;
        temp.innerHTML = `${i} is free. You can access it.`;
    }
    if(i == 3 || i == 4){
        temp.innerHTML = `${i} is Locked! You will get access soon.`;
    }
}

function leaveHover(j) {
    if (j == 1 || j == 2) {
        let id = document.getElementById(j);
        id.style.opacity = 1;
        temp.innerHTML = "";
    }
    if(j == 3 || j == 4){
        temp.innerHTML = "";
    }
}

function clickMe(k) {
    if (k == 1) {
        window.location.href = "template-1/index.html";
    } else if (k == 2) {
        window.location.href = "template-2/index.html";
    } else if (k == 3) {
        // window.location.href = "template-3/index.html";
    } else if (k == 4) {
        // window.location.href = "template-4/temp_4.html";
    }

}
var currentUser;
window.onload = function(){
    let loggedIn = localStorage.getItem("loggedIn");
    let pageName = document.getElementById("main-Name");
    if(loggedIn == "yes"){
        currentUser = JSON.parse(localStorage.getItem("user"));
        pageName.innerHTML = currentUser.Name;
    }else{
        currentUser = JSON.parse(sessionStorage.getItem("user"));
        pageName.innerHTML = currentUser.Name;
    }
}

var signOut = document.getElementById("signOutButton");
signOut.addEventListener("click",function(){
    let loggedIn = localStorage.getItem("loggedIn");
    if(loggedIn == "yes"){
        localStorage.removeItem("user");
        localStorage.removeItem("loggedIn")

        window.location.replace("../index.html"); 
    }else{
        sessionStorage.removeItem("user");
        window.location.replace("../index.html");
    }
});