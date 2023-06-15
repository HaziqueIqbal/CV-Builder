function addAcademics() {
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
    dur_2.setAttribute("placeholder", "start - end");
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
    csu_2.setAttribute("placeholder", "Enter here");
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
    degree_2.setAttribute("placeholder", "Enter here");

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
    grade_2.setAttribute("placeholder", "Enter here");
    grade.setAttribute("id", "n4");
    grade.appendChild(grade_1);
    grade.appendChild(grade_2);

    getId.insertAdjacentElement("beforebegin", dur);
    getId.insertAdjacentElement("beforebegin", csu);
    getId.insertAdjacentElement("beforebegin", degree);
    getId.insertAdjacentElement("beforebegin", grade);
}

function addSkills() {
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
    input.setAttribute("placeholder","Enter title");
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
    input1.setAttribute("placeholder","Enter here");
    title1.appendChild(title_span1);
    title1.appendChild(input1);

    getId.insertAdjacentElement("beforebegin", title);
    getId.insertAdjacentElement("beforebegin", title1);
}



function addActivities(){
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
    input.setAttribute("placeholder","Enter title");
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
    input1.setAttribute("placeholder","Enter here");
    title1.appendChild(title_span1);
    title1.appendChild(input1);

    getId.insertAdjacentElement("beforebegin", title);
    getId.insertAdjacentElement("beforebegin", title1);
}

function addExperience(){
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
    job_2.setAttribute("placeholder", "Enter job");
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
    comp_2.setAttribute("placeholder", "Enter company name");
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
    durC_2.setAttribute("placeholder", "start - end");
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
    addressC_2.setAttribute("placeholder", "Enter address");
    addressC.appendChild(addressC_1);
    addressC.appendChild(addressC_2);

    getId.insertAdjacentElement("beforebegin", job);
    getId.insertAdjacentElement("beforebegin", comp);
    getId.insertAdjacentElement("beforebegin", durC);
    getId.insertAdjacentElement("beforebegin", addressC);
}