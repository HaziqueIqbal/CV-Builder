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


var loggedIn = localStorage.getItem("loggedIn");

if (loggedIn == "yes") {
    let getAllInfo = JSON.parse(localStorage.getItem("user"));
    factory(getAllInfo);

} else {
    let getAllInfo = JSON.parse(sessionStorage.getItem("user"));
    if (getAllInfo.Templates != undefined) {
        factory(getAllInfo);
    }
}

function factory(getAllInfo) {
    mob.value = getAllInfo.Templates.Temp_01.mobileNumber;
    add.value = getAllInfo.Templates.Temp_01.userAddress;
    dob.value = getAllInfo.Templates.Temp_01.dateOfBirth;
    getObj.value = getAllInfo.Templates.Temp_01.userObjective;

    if (getAllInfo.Templates.Temp_01.academicsDetails.length == 1) {
        let dur = document.getElementById("acdDur");
        let acdSCU = document.getElementById("acdSCU");
        let acdDegree = document.getElementById("acdDegree");
        let acdGrade = document.getElementById("acdGrade");
        dur.value = getAllInfo.Templates.Temp_01.academicsDetails[0].duration;
        acdSCU.value = getAllInfo.Templates.Temp_01.academicsDetails[0].scu;
        acdDegree.value = getAllInfo.Templates.Temp_01.academicsDetails[0].degree;
        acdGrade.value = getAllInfo.Templates.Temp_01.academicsDetails[0].grade;
    } else {
        let dur = document.getElementById("acdDur");
        let acdSCU = document.getElementById("acdSCU");
        let acdDegree = document.getElementById("acdDegree");
        let acdGrade = document.getElementById("acdGrade");
        dur.value = getAllInfo.Templates.Temp_01.academicsDetails[0].duration;
        acdSCU.value = getAllInfo.Templates.Temp_01.academicsDetails[0].scu;
        acdDegree.value = getAllInfo.Templates.Temp_01.academicsDetails[0].degree;
        acdGrade.value = getAllInfo.Templates.Temp_01.academicsDetails[0].grade;
        for (let index = 1; index < getAllInfo.Templates.Temp_01.academicsDetails.length; index++) {
            addAcademic(getAllInfo.Templates.Temp_01.academicsDetails[index].duration,
                getAllInfo.Templates.Temp_01.academicsDetails[index].scu,
                getAllInfo.Templates.Temp_01.academicsDetails[index].degree,
                getAllInfo.Templates.Temp_01.academicsDetails[index].grade, 1)
        }
    }

    if (getAllInfo.Templates.Temp_01.userSkills.length == 1) {
        let skillTF = document.getElementById("skillTF");
        let skillDF = document.getElementById("skillDF");
        skillTF.value = getAllInfo.Templates.Temp_01.userSkills[0].skillTitle;
        skillDF.value = getAllInfo.Templates.Temp_01.userSkills[0].skillDesc;
    } else {
        let skillTF = document.getElementById("skillTF");
        let skillDF = document.getElementById("skillDF");
        skillTF.value = getAllInfo.Templates.Temp_01.userSkills[0].skillTitle;
        skillDF.value = getAllInfo.Templates.Temp_01.userSkills[0].skillDesc;
        for (let index = 1; index < getAllInfo.Templates.Temp_01.userSkills.length; index++) {
            addSkill(getAllInfo.Templates.Temp_01.userSkills[index].skillTitle,
                getAllInfo.Templates.Temp_01.userSkills[index].skillDesc, 1);
        }
    }

    if (getAllInfo.Templates.Temp_01.extraActivitiesDetails.length == 1) {
        let extra1 = document.getElementById("extra1");
        let extra2 = document.getElementById("extra2");
        extra1.value = getAllInfo.Templates.Temp_01.extraActivitiesDetails[0].title;
        extra2.value = getAllInfo.Templates.Temp_01.extraActivitiesDetails[0].desc;
    } else {
        let extra1 = document.getElementById("extra1");
        let extra2 = document.getElementById("extra2");
        extra1.value = getAllInfo.Templates.Temp_01.extraActivitiesDetails[0].title;
        extra2.value = getAllInfo.Templates.Temp_01.extraActivitiesDetails[0].desc;
        for (let index = 1; index < getAllInfo.Templates.Temp_01.extraActivitiesDetails.length; index++) {
            addActivitie(getAllInfo.Templates.Temp_01.extraActivitiesDetails[index].title,
                getAllInfo.Templates.Temp_01.extraActivitiesDetails[index].desc, 1
            )
        }
    }

    if (getAllInfo.Templates.Temp_01.experienceDetails.length == 1) {
        let j = document.getElementById("j");
        let cn = document.getElementById("cn");
        let Cdur = document.getElementById("Cdur");
        let Caddr = document.getElementById("Caddr");
        j.value = getAllInfo.Templates.Temp_01.experienceDetails[0].job;
        cn.value = getAllInfo.Templates.Temp_01.experienceDetails[0].companyName;
        Cdur.value = getAllInfo.Templates.Temp_01.experienceDetails[0].duration;
        Caddr.value = getAllInfo.Templates.Temp_01.experienceDetails[0].companyAddress;
    } else {
        let j = document.getElementById("j");
        let cn = document.getElementById("cn");
        let Cdur = document.getElementById("Cdur");
        let Caddr = document.getElementById("Caddr");
        j.value = getAllInfo.Templates.Temp_01.experienceDetails[0].job;
        cn.value = getAllInfo.Templates.Temp_01.experienceDetails[0].companyName;
        Cdur.value = getAllInfo.Templates.Temp_01.experienceDetails[0].duration;
        Caddr.value = getAllInfo.Templates.Temp_01.experienceDetails[0].companyAddress;
        for (let index = 1; index < getAllInfo.Templates.Temp_01.experienceDetails.length; index++) {
            addExperienc(getAllInfo.Templates.Temp_01.experienceDetails[index].job,
                getAllInfo.Templates.Temp_01.experienceDetails[index].companyName,
                getAllInfo.Templates.Temp_01.experienceDetails[index].duration,
                getAllInfo.Templates.Temp_01.experienceDetails[index].companyAddress, 1);
        }
    }
    getRef.value = getAllInfo.Templates.Temp_01.reference;
}


function addExperienc(j, c, cd, ca, t) {
    let getId = document.getElementById("addingExperience");

    let job = document.createElement("div");
    job.classList.add("wrap-input100");
    job.classList.add("rs1-wrap-input100");
    job.classList.add("validate-input");
    let job_1 = document.createElement("span");
    job_1.setAttribute("class", "label-input100");
    job_1.innerHTML = "Enter your job *";
    let job_2 = document.createElement("input");
    job_2.classList.add("input100");
    job_2.classList.add("e1");
    job_2.setAttribute("type", "text");
    job_2.setAttribute("name", "job");
    job_2.value = j;
    job.appendChild(job_1);
    job.appendChild(job_2);

    let comp = document.createElement("div");
    comp.classList.add("wrap-input100");
    comp.classList.add("rs1-wrap-input100");
    comp.classList.add("validate-input");
    let comp_1 = document.createElement("span");
    comp_1.setAttribute("class", "label-input100");
    comp_1.innerHTML = "Enter your company name *";
    let comp_2 = document.createElement("input");
    comp_2.classList.add("input100");
    comp_2.classList.add("e2");
    comp_2.setAttribute("type", "text");
    comp_2.setAttribute("name", "comp");
    comp_2.value = c;
    comp.appendChild(comp_1);
    comp.appendChild(comp_2);

    let durC = document.createElement("div");
    durC.classList.add("wrap-input100");
    durC.classList.add("rs1-wrap-input100");
    durC.classList.add("validate-input");
    let durC_1 = document.createElement("span");
    durC_1.setAttribute("class", "label-input100");
    durC_1.innerHTML = "Enter duration *";
    let durC_2 = document.createElement("input");
    durC_2.classList.add("input100");
    durC_2.classList.add("e3");
    durC_2.setAttribute("type", "text");
    durC_2.setAttribute("name", "durC");
    durC_2.value = cd;
    durC.appendChild(durC_1);
    durC.appendChild(durC_2);

    let addressC = document.createElement("div");
    addressC.classList.add("wrap-input100");
    addressC.classList.add("rs1-wrap-input100");
    addressC.classList.add("validate-input");
    let addressC_1 = document.createElement("span");
    addressC_1.setAttribute("class", "label-input100");
    addressC_1.innerHTML = "Enter company address *";
    let addressC_2 = document.createElement("input");
    addressC_2.classList.add("input100");
    addressC_2.classList.add("e4");
    addressC_2.setAttribute("type", "text");
    addressC_2.setAttribute("name", "addressC");
    addressC_2.value = ca;
    addressC.appendChild(addressC_1);
    addressC.appendChild(addressC_2);

    getId.insertAdjacentElement("beforebegin", job);
    getId.insertAdjacentElement("beforebegin", comp);
    getId.insertAdjacentElement("beforebegin", durC);
    getId.insertAdjacentElement("beforebegin", addressC);
}

function addActivitie(tit, des, temp) {
    let getId = document.getElementById("addingActivities");

    let title = document.createElement("div");
    title.classList.add("wrap-input100");
    title.classList.add("validate-input");
    let title_span = document.createElement("span");
    title_span.setAttribute("class", "label-input100");
    title_span.innerHTML = "Enter your activity title *";
    let input = document.createElement("input");
    input.classList.add("input100");
    input.classList.add("eca1");
    input.setAttribute("type", "text");
    input.setAttribute("name", "activitiesTitle");
    input.value = tit;
    title.appendChild(title_span);
    title.appendChild(input);

    let title1 = document.createElement("div");
    title1.classList.add("wrap-input100");
    title1.classList.add("validate-input");
    let title_span1 = document.createElement("span");
    title_span1.setAttribute("class", "label-input100");
    title_span1.innerHTML = "Enter activities details *";
    let input1 = document.createElement("input");
    input1.classList.add("input100");
    input1.classList.add("eca2");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "activities");
    input1.value = des;
    title1.appendChild(title_span1);
    title1.appendChild(input1);

    getId.insertAdjacentElement("beforebegin", title);
    getId.insertAdjacentElement("beforebegin", title1);
}


function addSkill(tit, des, temp) {
    let getId = document.getElementById("addingSkills");

    let title = document.createElement("div");
    title.classList.add("wrap-input100");
    title.classList.add("validate-input");
    let title_span = document.createElement("span");
    title_span.setAttribute("class", "label-input100");
    title_span.innerHTML = "Enter your skill title *";
    let input = document.createElement("input");
    input.classList.add("input100");
    input.classList.add("s1");
    input.setAttribute("type", "text");
    input.setAttribute("name", "skillTitle");
    input.value = tit;
    title.appendChild(title_span);
    title.appendChild(input);

    let title1 = document.createElement("div");
    title1.classList.add("wrap-input100");
    title1.classList.add("validate-input");
    let title_span1 = document.createElement("span");
    title_span1.setAttribute("class", "label-input100");
    title_span1.innerHTML = "Enter skills *";
    let input1 = document.createElement("input");
    input1.classList.add("input100");
    input1.classList.add("s2");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "skills");
    input1.value = des;
    title1.appendChild(title_span1);
    title1.appendChild(input1);

    getId.insertAdjacentElement("beforebegin", title);
    getId.insertAdjacentElement("beforebegin", title1);
}



function addAcademic(duration, clu, deg, grad, temp) {
    let getId = document.getElementById("adding");

    let dur = document.createElement("div");
    dur.classList.add("wrap-input100");
    dur.classList.add("rs1-wrap-input100");
    dur.classList.add("validate-input");
    let dur_1 = document.createElement("span");
    dur_1.setAttribute("class", "label-input100");
    dur_1.innerHTML = "Enter duration *"
    let dur_2 = document.createElement("input");
    dur_2.classList.add("input100");
    dur_2.classList.add("n1");
    dur_2.setAttribute("type", "text");
    dur_2.setAttribute("name", "dur");
    dur_2.value = duration;
    dur.appendChild(dur_1);
    dur.appendChild(dur_2);

    let csu = document.createElement("div");
    csu.classList.add("wrap-input100");
    csu.classList.add("rs1-wrap-input100");
    csu.classList.add("validate-input");
    let csu_1 = document.createElement("span");
    csu_1.setAttribute("class", "label-input100");
    csu_1.innerHTML = "Enter your college/school/universuit name *";
    let csu_2 = document.createElement("input");
    csu_2.classList.add("input100");
    csu_2.classList.add("n2");
    csu_2.setAttribute("type", "text");
    csu_2.setAttribute("name", "csu");
    csu_2.value = clu
    csu.appendChild(csu_1);
    csu.appendChild(csu_2);

    let degree = document.createElement("div");
    degree.classList.add("wrap-input100");
    degree.classList.add("rs1-wrap-input100");
    degree.classList.add("validate-input");
    let degree_1 = document.createElement("span");
    degree_1.setAttribute("class", "label-input100");
    degree_1.innerHTML = "Enter your degree name *";
    let degree_2 = document.createElement("input");
    degree_2.classList.add("input100");
    degree_2.classList.add("n3");
    degree_2.setAttribute("type", "text");
    degree_2.setAttribute("name", "degree");
    degree_2.value = deg;

    degree.appendChild(degree_1);
    degree.appendChild(degree_2);

    let grade = document.createElement("div");
    grade.classList.add("wrap-input100");
    grade.classList.add("rs1-wrap-input100");
    grade.classList.add("validate-input");
    let grade_1 = document.createElement("span");
    grade_1.setAttribute("class", "label-input100");
    grade_1.innerHTML = "Enter your grade *";
    let grade_2 = document.createElement("input");
    grade_2.classList.add("input100");
    grade_2.classList.add("n4");
    grade_2.setAttribute("type", "text");
    grade_2.setAttribute("name", "grade");
    grade_2.value = grad;
    grade.setAttribute("id", "n4");
    grade.appendChild(grade_1);
    grade.appendChild(grade_2);

    getId.insertAdjacentElement("beforebegin", dur);
    getId.insertAdjacentElement("beforebegin", csu);
    getId.insertAdjacentElement("beforebegin", degree);
    getId.insertAdjacentElement("beforebegin", grade);
}