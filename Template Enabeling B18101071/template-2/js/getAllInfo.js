var mob = document.getElementById("phoneNo");

var positon = document.getElementById("position");
var getObj = document.getElementById("obj");


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
    mob.value = getAllInfo.Templates.Temp_02.mobileNumber;
    positon.value = getAllInfo.Templates.Temp_02.userPosition;
    getObj.value = getAllInfo.Templates.Temp_02.userObjective;

    if (getAllInfo.Templates.Temp_02.academicsDetails.length == 1) {
        let dur = document.getElementById("acdDur");
        let acdSCU = document.getElementById("acdSCU");
        let acdDegree = document.getElementById("acdDegree");
        let acdGrade = document.getElementById("acdGrade");
        dur.value = getAllInfo.Templates.Temp_02.academicsDetails[0].duration;
        acdSCU.value = getAllInfo.Templates.Temp_02.academicsDetails[0].scu;
        acdDegree.value = getAllInfo.Templates.Temp_02.academicsDetails[0].degree;
        acdGrade.value = getAllInfo.Templates.Temp_02.academicsDetails[0].grade;
    } else {
        let dur = document.getElementById("acdDur");
        let acdSCU = document.getElementById("acdSCU");
        let acdDegree = document.getElementById("acdDegree");
        let acdGrade = document.getElementById("acdGrade");
        dur.value = getAllInfo.Templates.Temp_02.academicsDetails[0].duration;
        acdSCU.value = getAllInfo.Templates.Temp_02.academicsDetails[0].scu;
        acdDegree.value = getAllInfo.Templates.Temp_02.academicsDetails[0].degree;
        acdGrade.value = getAllInfo.Templates.Temp_02.academicsDetails[0].grade;
        for (let index = 1; index < getAllInfo.Templates.Temp_02.academicsDetails.length; index++) {
            addAcad(getAllInfo.Templates.Temp_02.academicsDetails[index].duration,
                getAllInfo.Templates.Temp_02.academicsDetails[index].scu,
                getAllInfo.Templates.Temp_02.academicsDetails[index].degree,
                getAllInfo.Templates.Temp_02.academicsDetails[index].grade, 2)
        }
    }

    if (getAllInfo.Templates.Temp_02.userSkills.length == 1) {
        let skillTF = document.getElementById("skillTF");
        skillTF.value = getAllInfo.Templates.Temp_02.userSkills[0].skill;
    } else {
        let skillTF = document.getElementById("skillTF");
        skillTF.value = getAllInfo.Templates.Temp_02.userSkills[0].skill;
        for (let index = 1; index < getAllInfo.Templates.Temp_02.userSkills.length; index++) {
            addSk(getAllInfo.Templates.Temp_02.userSkills[index].skill, 2);
        }
    }

    if ((getAllInfo.Templates.Temp_02.userInterests.length == 1)) {
        let inte1 = document.getElementById("inte1");
        inte1.value = getAllInfo.Templates.Temp_02.userInterests[0].interests;
    }
    else {
        let inte1 = document.getElementById("inte1");
        inte1.value = getAllInfo.Templates.Temp_02.userInterests[0].interests;
        for (let index = 1; index < getAllInfo.Templates.Temp_02.userInterests.length; index++) {
            addI(getAllInfo.Templates.Temp_02.userInterests[index].interests,2);
        }
    }

    if (getAllInfo.Templates.Temp_02.projects.length == 1) {
        let pp1 = document.getElementById("pp1");
        let pp2 = document.getElementById("pp2");
        pp1.value = getAllInfo.Templates.Temp_02.projects[0].projectName;
        pp2.value = getAllInfo.Templates.Temp_02.projects[0].projectDescription;
    } else {
         let pp1 = document.getElementById("pp1");
        let pp2 = document.getElementById("pp2");
        pp1.value = getAllInfo.Templates.Temp_02.projects[0].projectName;
        pp2.value = getAllInfo.Templates.Temp_02.projects[0].projectDescription;
        for (let index = 1; index < getAllInfo.Templates.Temp_02.projects.length; index++) {
            addP( getAllInfo.Templates.Temp_02.projects[index].projectName,
                getAllInfo.Templates.Temp_02.projects[index].projectDescription, 2
            );
        }
    }

    if (getAllInfo.Templates.Temp_02.experienceDetails.length == 1) {
        let j = document.getElementById("j");
        let cn = document.getElementById("cn");
        let Cdur = document.getElementById("Cdur");
        let Caddr = document.getElementById("Caddr");
        let Cdesc = document.getElementById("Cdesc");
        j.value = getAllInfo.Templates.Temp_02.experienceDetails[0].job;
        cn.value = getAllInfo.Templates.Temp_02.experienceDetails[0].companyName;
        Cdur.value = getAllInfo.Templates.Temp_02.experienceDetails[0].duration;
        Caddr.value = getAllInfo.Templates.Temp_02.experienceDetails[0].companyAddress;
        Cdesc.value = getAllInfo.Templates.Temp_02.experienceDetails[0].jobDescription;
    } else {
        let j = document.getElementById("j");
        let cn = document.getElementById("cn");
        let Cdur = document.getElementById("Cdur");
        let Caddr = document.getElementById("Caddr");
        let Cdesc = document.getElementById("Cdesc");
        j.value = getAllInfo.Templates.Temp_02.experienceDetails[0].job;
        cn.value = getAllInfo.Templates.Temp_02.experienceDetails[0].companyName;
        Cdur.value = getAllInfo.Templates.Temp_02.experienceDetails[0].duration;
        Caddr.value = getAllInfo.Templates.Temp_02.experienceDetails[0].companyAddress;
        Cdesc.value = getAllInfo.Templates.Temp_02.experienceDetails[0].jobDescription;
        for (let index = 1; index < getAllInfo.Templates.Temp_02.experienceDetails.length; index++) {
            addE(getAllInfo.Templates.Temp_02.experienceDetails[index].job,
                getAllInfo.Templates.Temp_02.experienceDetails[index].companyName,
                getAllInfo.Templates.Temp_02.experienceDetails[index].duration,
                getAllInfo.Templates.Temp_02.experienceDetails[index].companyAddress,
                getAllInfo.Templates.Temp_02.experienceDetails[index].jobDescription,
                2);
        }
    }

}

function addP(n, d,t) {
    let getId = document.getElementById("addingProjects");

    let title = document.createElement("div");
    title.classList.add("wrap-input100");
    title.classList.add("validate-input");
    let title_span = document.createElement("span");
    title_span.setAttribute("class", "label-input100");
    title_span.innerHTML = "Enter your project name *";
    let input = document.createElement("input");
    input.classList.add("input100");
    input.classList.add("p1");
    input.setAttribute("type", "text");
    input.setAttribute("name", "projectN");
    input.value = n;
    title.appendChild(title_span);
    title.appendChild(input);

    let title1 = document.createElement("div");
    title1.classList.add("wrap-input100");
    title1.classList.add("validate-input");
    let title_span1 = document.createElement("span");
    title_span1.setAttribute("class", "label-input100");
    title_span1.innerHTML = "Enter project description *";
    let input1 = document.createElement("input");
    input1.classList.add("input100");
    input1.classList.add("p2");
    input1.setAttribute("type", "text");
    input1.setAttribute("name", "projectDesc");
    input1.value = d;
    title1.appendChild(title_span1);
    title1.appendChild(input1);

    getId.insertAdjacentElement("beforebegin", title);
    getId.insertAdjacentElement("beforebegin", title1);
}

function addI(i,t) {
    let inte = document.getElementById("addingInterests");

    let int = document.createElement("div");
    int.classList.add("wrap-input100");
    int.classList.add("validate-input");
    let int_1 = document.createElement("span");
    int_1.setAttribute("class", "label-input100");
    int_1.innerHTML = "Enter your interests *";
    let int_2 = document.createElement("input");
    int_2.classList.add("input100");
    int_2.classList.add("inte");
    int_2.setAttribute("type", "text");
    int_2.setAttribute("name", "interests");
    int_2.value = i;
    int.appendChild(int_1);
    int.appendChild(int_2);

    inte.insertAdjacentElement("beforebegin", int);
}


function addE(jobs, cn, d, ca, jd,t) {
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
    job_2.value = jobs;
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
    comp_2.value = cn;
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
    durC_2.value = d;
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

    let desc = document.createElement("div");
    desc.classList.add("wrap-input100");
    desc.classList.add("validate-input");
    let descC_1 = document.createElement("span");
    descC_1.setAttribute("class", "label-input100");
    descC_1.innerHTML = "Enter role description *";
    let descC_2 = document.createElement("input");
    descC_2.classList.add("input100");
    descC_2.classList.add("e5");
    descC_2.setAttribute("type", "text");
    descC_2.setAttribute("name", "descC");
    descC_2.value = jd;
    desc.appendChild(descC_1);
    desc.appendChild(descC_2);


    getId.insertAdjacentElement("beforebegin", job);
    getId.insertAdjacentElement("beforebegin", comp);
    getId.insertAdjacentElement("beforebegin", durC);
    getId.insertAdjacentElement("beforebegin", addressC);
    getId.insertAdjacentElement("beforebegin", desc);
}


function addSk(s,t) {
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
    input.value = s
    title.appendChild(title_span);
    title.appendChild(input);

    getId.insertAdjacentElement("beforebegin", title);
}


function addAcad(durat, scu, deg, grad, temp) {
    let getId = document.getElementById("adding");

    let dur = document.createElement("div");
    dur.classList.add("wrap-input100");
    dur.classList.add("rs1-wrap-input100");
    dur.classList.add("validate-input");
    let dur_1 = document.createElement("span");
    dur_1.setAttribute("class", "label-input100");
    dur_1.innerHTML = "Enter duration *";
    let dur_2 = document.createElement("input");
    dur_2.classList.add("input100");
    dur_2.classList.add("n1");
    dur_2.setAttribute("type", "text");
    dur_2.setAttribute("name", "dur");
    dur_2.value = durat;
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
    csu_2.value = scu;
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