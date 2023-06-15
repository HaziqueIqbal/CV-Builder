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


var getName = document.getElementById("fname");

var eMail = document.getElementById("eMail");
var mob = document.getElementById("phoneNo");

var positon = document.getElementById("position");
var getObj = document.getElementById("obj");

var getDur = document.getElementsByClassName("n1");
var getCSU = document.getElementsByClassName("n2");
var getDeg = document.getElementsByClassName("n3");
var getGra = document.getElementsByClassName("n4");

var getSkillT = document.getElementsByClassName("s1");

var getJob = document.getElementsByClassName("e1");
var getCompany = document.getElementsByClassName("e2");
var getCompanyDur = document.getElementsByClassName("e3");
var getCompanyAddress = document.getElementsByClassName("e4");
var getCompanyDesc = document.getElementsByClassName("e5");

var gete1 = document.getElementsByClassName("p1");
var gete2 = document.getElementsByClassName("p2");

var interest = document.getElementsByClassName("inte");

var allAcd = [];
var allExp = [];
var allproj = [];
var allSkill = [];
var allIntr = [];

let isloggedIn = localStorage.getItem("loggedIn");
if (isloggedIn == "yes") {
    let getUser = JSON.parse(localStorage.getItem("user"));
    getName.value = getUser.Name;
    getName.setAttribute("readonly", "readonly");
    eMail.value = getUser.Email;
    eMail.setAttribute("readonly", "readonly");
} else {
    let getUser = JSON.parse(sessionStorage.getItem("user"));
    getName.value = getUser.Name;
    getName.setAttribute("readonly", "readonly");
    eMail.value = getUser.Email;
    eMail.setAttribute("readonly", "readonly");
}

function submit() {

    let fName = document.getElementById("fName");
    fName.innerHTML = getName.value;

    let email = document.getElementById("email");
    email.innerHTML = eMail.value;

    let phone = document.getElementById("phone");
    phone.innerHTML = mob.value;

    let position = document.getElementById("positio");
    let position_description = document.getElementById("desc");
    position.innerHTML = positon.value;
    position_description.innerHTML = getObj.value;


    for (let i = 0; i < getJob.length; i++) {
        addExp(getCompany[i], getCompanyAddress[i], getCompanyDur[i], getJob[i], getCompanyDesc[i]);
    }
    for (let ind = 0; ind < getDur.length; ind++) {
        addEduc(getCSU[ind], getGra[ind], getDur[ind], getDeg[ind]);
    }
    for (let im = 0; im < gete1.length; im++) {
        addProject(gete1[im], gete2[im]);
    }
    for (let jj = 0; jj < getSkillT.length; jj++) {
        addS(getSkillT[jj]);
    }
    for (let m = 0; m < interest.length; m++) {
        addInterests(interest[m])
    }

    ////////////////////////////////////////////////////////////
    if (getName.value == "" || mob.value == "" || getObj.value == "" || eMail.value == "" || positon.value == "") {
        callAlert("May be your personal information is missing!");
        return;
    }
    for (let index = 0; index < getDur.length; index++) {
        if (getDur[index].value == "" || getCSU[index].value == "" || getDeg[index].value == "" || getGra[index].value == "") {
            callAlert("May be your Educational information is missing!");
            return;
        }
    }
    for (let index = 0; index < getSkillT.length; index++) {
        if (getSkillT[index].value == "") {
            callAlert("May be your skills information is missing!");
            return;
        }
    }

    for (let index = 0; index < getJob.length; index++) {
        if (getJob[index].value == "" || getCompany[index].value == "" || getCompanyDur[index].value == "" ||
            getCompanyAddress[index].value == "" || getCompanyDesc[index].value == "") {
            callAlert("May be your job information is missing!");
            return;
        }
    }

    for (let index = 0; index < gete1.length; index++) {
        if (gete1[index].value == "") {
            callAlert("May be your project information is missing!");
            return;
        }
    }

    for (let index = 0; index < interest.length; index++) {
        if (interest[index].value == "") {
            callAlert("May be your interests are missing!");
            return;
        }
    }

    ////////////////////////////////////////////////////////////



    let template_2 = [{
        templateNumber: "2",
        userPosition: positon.value,
        mobileNumber: mob.value,
        userObjective: getObj.value,
        academicsDetails: allAcd,
        experienceDetails: allExp,
        projects: allproj,
        userSkills: allSkill,
        userInterests: allIntr
    }];

    let isloggedIn = localStorage.getItem("loggedIn");
    if (isloggedIn == "yes") {
        let getUser = JSON.parse(localStorage.getItem("user"));
        saveToFirebase(getUser);
        let stored = Object.assign(getUser, template_2);
        localStorage.setItem("user", JSON.stringify(stored));
    } else {
        let getUser = JSON.parse(sessionStorage.getItem("user"));
        saveToFirebase(getUser, template_2);
        let stored = Object.assign(getUser);
        sessionStorage.setItem("user", JSON.stringify(stored));
    }


    let form = document.getElementById("myForm");
    form.style.display = "none";

    let temp_1 = document.getElementById("template-2");
    temp_1.style.display = "block";


}

function saveToFirebase(getUser) {
    const dbRef = ref(db);
    get(child(dbRef, `useList/${getUser.Name}`)).then((snapshot) => {
        if (snapshot.exists()) {
            set(ref(db, "useList/" + getUser.Name + "/Templates/Temp_02"), {
                templateNumber: "2",
                userPosition: positon.value,
                mobileNumber: mob.value,
                userObjective: getObj.value,
                academicsDetails: allAcd,
                experienceDetails: allExp,
                projects: allproj,
                userSkills: allSkill,
                userInterests: allIntr
            }).then(() => {
                console.log("Added to DB!")
            }).catch((error) => {
                callAlert("error" + error, "red");
            });
        } else {
            callAlert("Record not found! try again.", "red");
            return;
        }
    }).catch((error) => {
        console.error(error);
    });
}

var submit_t2 = document.getElementById("submit_t2");
submit_t2.addEventListener("click", function () {
    submit();
});

var goBack = document.getElementById("goBack");
goBack.addEventListener("click", function () {
    window.location.replace("../index.html");
});

var x = document.getElementById("co");
function callAlert(msg) {
    x.innerHTML = msg;
    x.style.display = "block"
    setTimeout(() => {
        x.style.display = "none"
    }, 5000)
}

var so = document.getElementById("so");
so.addEventListener("click", function () {
    let loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn == "yes") {
        localStorage.removeItem("user");
        localStorage.removeItem("loggedIn")

        window.location.replace("../../index.html");
    } else {
        sessionStorage.removeItem("user");
        window.location.replace("../../index.html");
    }
});
window.onload = function () {
    document.getElementById("pr").addEventListener("click", () => {
        const cv = this.document.getElementById("template-2");
        var opt = {
            margin: 1,
            filename: 'CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 }
        };
        html2pdf().from(cv).set(opt).save();
    });
};






function addExp(n, a, d, j, jd) {
    let sec_list = document.getElementById("sec_list");
    let sec_list_item = document.createElement("div");
    sec_list_item.setAttribute("class", "section__list-item");
    let left = document.createElement("div");
    left.setAttribute("class", "left");
    let name = document.createElement("div");
    name.setAttribute("class", "name");
    name.innerHTML = n.value;
    let address = document.createElement("div");
    address.setAttribute("class", "addr");
    address.innerHTML = a.value;
    let duration = document.createElement("div");
    duration.setAttribute("class", "duration");
    duration.innerHTML = d.value;
    left.appendChild(name);
    left.appendChild(address);
    left.appendChild(duration);
    let right = document.createElement("div");
    right.setAttribute("class", "right");
    let role = document.createElement("div");
    role.setAttribute("class", "name");
    role.innerHTML = j.value;
    let role_description = document.createElement("div");
    role_description.setAttribute("class", "desc");
    role_description.innerHTML = jd.value;
    right.appendChild(role);
    right.appendChild(role_description);
    sec_list_item.appendChild(left);
    sec_list_item.appendChild(right);
    allExp.push({ "job": j.value, "jobDescription": jd.value, "companyName": n.value, "duration": d.value, "companyAddress": a.value });
    sec_list.appendChild(sec_list_item);
}

function addEduc(scu, a, d, deg) {
    let sec_list = document.getElementById("edu_list");
    let sec_list_item = document.createElement("div");
    sec_list_item.setAttribute("class", "section__list-item");
    let left = document.createElement("div");
    left.setAttribute("class", "left");
    let name = document.createElement("div");
    name.setAttribute("class", "name");
    name.innerHTML = scu.value;
    let address = document.createElement("div");
    address.setAttribute("class", "addr");
    address.innerHTML = a.value;
    let duration = document.createElement("div");
    duration.setAttribute("class", "duration");
    duration.innerHTML = d.value;
    left.appendChild(name);
    left.appendChild(address);
    left.appendChild(duration);
    let right = document.createElement("div");
    right.setAttribute("class", "right");
    let role = document.createElement("div");
    role.setAttribute("class", "name");
    role.innerHTML = deg.value;
    right.appendChild(role);
    sec_list_item.appendChild(left);
    sec_list_item.appendChild(right);
    allAcd.push({ "duration": d.value, "scu": scu.value, "degree": deg.value, "grade": a.value });
    sec_list.appendChild(sec_list_item);
}

function addProject(n, d) {
    let projects = document.getElementById("projects");
    let sec_list_item = document.createElement("div");
    sec_list_item.setAttribute("class", "section__list-item");
    let projectName = document.createElement("div");
    projectName.setAttribute("class", "name");
    projectName.innerHTML = n.value;
    let projectDesc = document.createElement("div");
    projectDesc.setAttribute("class", "text");
    projectDesc.innerHTML = d.value;
    sec_list_item.appendChild(projectName);
    sec_list_item.appendChild(projectDesc);
    allproj.push({ "projectName": n.value, "projectDescription": d.value });
    projects.appendChild(sec_list_item);
}

function addS(s) {
    let skills = document.getElementById("skills");
    let span = document.createElement("span");
    span.setAttribute("class", "x-2");
    span.innerHTML = s.value;
    allSkill.push({ "skill": s.value });
    skills.appendChild(span);
}

function addInterests(i) {
    let int = document.getElementById("int");
    let span = document.createElement("span");
    span.setAttribute("class", "x-2");
    span.innerHTML = i.value;
    allIntr.push({ "interests": i.value });
    int.appendChild(span);
}