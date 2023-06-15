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

var allAcd = [];
var allExp = [];
var allExtra = []
var allSkill = [];

function addAcadmics(dur, scu, deg, grade) {
    let c = document.getElementById("c");
    let p = document.createElement("p");
    p.innerHTML = `<span class="acd">${dur.value}</span> ${scu.value}`;
    let p1 = document.createElement("p");
    p1.innerHTML = `${deg.value} : ${grade.value}`;
    allAcd.push({ "duration": dur.value, "scu": scu.value, "degree": deg.value, "grade": grade.value });
    c.appendChild(p);
    c.appendChild(p1);

}

function addExp(job, compName, dur, compAddress) {
    let exp_list = document.getElementById("exp_list");
    let li = document.createElement("li");
    li.innerHTML = `<b>${job.value}</b><br>${compName.value} <br> ${dur.value} <br> ${compAddress.value}`;
    exp_list.append(li);
    allExp.push({ "job": job.value, "companyName": compName.value, "duration": dur.value, "companyAddress": compAddress.value });
}

function addExtraActivitie(title, desc) {
    let eca = document.getElementById("eca");
    let p = document.createElement("p");
    p.innerHTML = `<b>${title.value}: </b> ${desc.value}`;
    eca.appendChild(p);
    allExtra.push({ "title": title.value, "desc": desc.value });
}

function addSkil(title, desc) {
    let skills = document.getElementById("skills");
    let li = document.createElement("li");
    li.innerHTML = `<b>${title.value}: </b> ${desc.value}`;
    skills.appendChild(li);
    allSkill.push({ "skillTitle": title.value, "skillDesc": desc.value });
}

var submit_t1 = document.getElementById("submit_t1");
submit_t1.addEventListener("click", function () {
    submit();
});
var getName = document.getElementById("name");

var getObj = document.getElementById("obj");
var mob = document.getElementById("mobileNo");
var eMail = document.getElementById("eMail");
var add = document.getElementById("address");

var dob = document.getElementById("dob");

var getDur = document.getElementsByClassName("n1");
var getCSU = document.getElementsByClassName("n2");
var getDeg = document.getElementsByClassName("n3");
var getGra = document.getElementsByClassName("n4");



var getSkillT = document.getElementsByClassName("s1");
var getSkillD = document.getElementsByClassName("s2");


var getJob = document.getElementsByClassName("e1");
var getCompany = document.getElementsByClassName("e2");
var getCompanyDur = document.getElementsByClassName("e3");
var getCompanyAddress = document.getElementsByClassName("e4");

var gete1 = document.getElementsByClassName("eca1");
var gete2 = document.getElementsByClassName("eca2");

var getRef = document.getElementById("ref");


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

function saveToFirebase(getUser) {
    const dbRef = ref(db);
    get(child(dbRef, `useList/${getUser.Name}`)).then((snapshot) => {
        if (snapshot.exists()) {
            set(ref(db, "useList/" + getUser.Name + "/Templates/Temp_01"), {
                templateNumber: "1",
                mobileNumber: mob.value,
                userAddress: add.value,
                dateOfBirth: dob.value,
                userObjective: getObj.value,
                academicsDetails: allAcd,
                experienceDetails: allExp,
                extraActivitiesDetails: allExtra,
                userSkills: allSkill,
                reference: getRef.value
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

function submit() {


    ////////////////////////////////////////////////////////////
    if (getName.value == "" || mob.value == "" || getObj.value == "" || eMail.value == "" || dob.value == "" || add.value == "") {
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
        if (getSkillT[index].value == "" || getSkillD[index].value == "") {
            callAlert("May be your skills information is missing!");
            return;
        }
    }

    for (let index = 0; index < getJob.length; index++) {
        if (getJob[index].value == "" || getCompany[index].value == "" || getCompanyDur[index].value == "" ||
            getCompanyAddress[index].value == "") {
            callAlert("May be your job information is missing!");
            return;
        }
    }

    for (let index = 0; index < gete1.length; index++) {
        if (gete1[index].value == "" || gete2[index].value == "") {
            callAlert("May be your activity information is missing!");
            return;
        }
    }
    if (getRef.value == "") {
        callAlert("May be reference is missing!");
        return;
    }
    ////////////////////////////////////////////////////////////


    let content = document.getElementById("cont");


    let Name = document.createElement("h2");
    Name.setAttribute("class", "space");
    Name.innerHTML = getName.value //form
    let hr_1 = document.createElement("hr");
    let address = document.createElement("p");
    address.innerHTML = `Address: <b>${add.value}</b>`;
    let mobile = document.createElement("p");
    mobile.innerHTML = `Mobile: <b>${mob.value}</b>`;
    let email_dob = document.createElement("p");
    email_dob.innerHTML = `Email: <a href = "JavaScript:void(0)">${eMail.value}</a></b> DOB <b>${dob.value}</b>`;
    content.appendChild(Name);
    content.appendChild(hr_1);
    content.appendChild(address);
    content.appendChild(mobile);
    content.appendChild(email_dob);

    let para = document.getElementById("para");
    para.innerHTML = getObj.value

    for (let index = 0; index < getDur.length; index++) {
        addAcadmics(getDur[index], getCSU[index], getDeg[index], getGra[index]);
    }
    for (let index = 0; index < getJob.length; index++) {
        addExp(getJob[index], getCompany[index], getCompanyDur[index], getCompanyAddress[index]);
    }
    for (let index = 0; index < gete1.length; index++) {
        addExtraActivitie(gete1[index], gete2[index]);
    }
    for (let index = 0; index < getSkillT.length; index++) {
        addSkil(getSkillT[index], getSkillD[index]);
    }


    let ref = document.getElementById("ref1");
    ref.innerHTML = getRef.value;

    let template_1 = [{
        templateNumber: "1",
        mobileNumber: mob.value,
        userAddress: add.value,
        dateOfBirth: dob.value,
        userObjective: getObj.value,
        academicsDetails: allAcd,
        experienceDetails: allExp,
        extraActivitiesDetails: allExtra,
        userSkills: allSkill,
        reference: getRef.value
    }];

    let isloggedIn = localStorage.getItem("loggedIn");
    if (isloggedIn == "yes") {
        let getUser = JSON.parse(localStorage.getItem("user"));
        saveToFirebase(getUser);

        let stored = Object.assign(getUser, template_1);
        localStorage.setItem("user", JSON.stringify(stored));
    } else {
        let getUser = JSON.parse(sessionStorage.getItem("user"));
        saveToFirebase(getUser, template_1);
        let stored = Object.assign(getUser);
        sessionStorage.setItem("user", JSON.stringify(stored));
    }


    let form = document.getElementById("myForm");
    form.style.display = "none";

    let temp_1 = document.getElementById("template-1");
    temp_1.style.display = "block";
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

var x = document.getElementById("co");
function callAlert(msg) {
    x.innerHTML = msg;
    x.style.display = "block"
    setTimeout(() => {
        x.style.display = "none"
    }, 5000)
}
window.onload = function () {
    document.getElementById("pr").addEventListener("click", () => {
        const cv = this.document.getElementById("template-1");
        var opt = {
            margin: 1,
            filename: 'CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 }
        };
        html2pdf().from(cv).set(opt).save();
    });
};

var goBack = document.getElementById("goBack");
goBack.addEventListener("click", function () {
    window.location.replace("../index.html");
});