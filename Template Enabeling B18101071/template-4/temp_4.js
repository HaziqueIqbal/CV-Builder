function template_4(){
    let name = document.getElementById("name");
    name.innerHTML = "Enter your name";

    let job_title = document.getElementById("job-title");
    job_title.innerHTML = "Enter who you are?";

    let pe = document.getElementById("pe");
    pe.innerHTML = `Phone: Enter phone No &nbsp; - &nbsp; Email: Enter Email`;

    let obj = document.getElementById("obj");
    obj.innerHTML = "Enter your objective";

    AddEducation();
    AddEducation();

    AddExperience();
    AddExperience();

    let dob = document.getElementById("dob");
    dob.innerHTML = "<b>dd/mm/yyyy</b>";

    let cnic = document.getElementById("cnic");
    cnic.innerHTML = "<b>42***-*******-*</b>";

    let religion = document.getElementById("religion");
    religion.innerHTML = "<b>Enter your religion</b>";

    let nationality = document.getElementById("nationality");
    nationality.innerHTML = "<b>Enter your nationality</b>";

    let ref = document.getElementById("ref");
    ref.innerHTML = "<b>Enter reference</b>";

}

function AddEducation(){
    let table = document.getElementById("E_table");

    let tr = document.createElement("tr");

    let td_1 = document.createElement("td");
    td_1.setAttribute("style", "width: 120px; color: gray;");
    td_1.innerHTML = "Enter duration";

    let td_2 = document.createElement("td");
    td_2.innerHTML = `<b>Enter degree</b>: Enter College/Uni/School name`;

    tr.appendChild(td_1);
    tr.appendChild(td_2);

    table.appendChild(tr);
}

function AddExperience(){
    let table = document.getElementById("Ex_table");

    let tr = document.createElement("tr");
    tr.setAttribute("class","work-2");

    let td_1 = document.createElement("td");
    td_1.innerHTML = "Enter duration";

    let td_2 = document.createElement("td");
    td_2.innerHTML = `<b>Enter company name</b>: Enter your job`;

    tr.appendChild(td_1);
    tr.appendChild(td_2);

    table.appendChild(tr);
}
template_4();