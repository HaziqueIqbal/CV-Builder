


function submit() {
    //template 3 start--------------------------------------------------------------------
    var getName = document.getElementById("name");

    var getObj = document.getElementById("obj");

    var getDur = document.getElementsByClassName("n1");
    var getCSU = document.getElementsByClassName("n2");
    var getDeg = document.getElementsByClassName("n3");
    var getGra = document.getElementsByClassName("n4");

    var wyr = document.getElementById("wyr");

    var getSkillT = document.getElementsByClassName("s1");
    var getSkillD = document.getElementsByClassName("s2");

    var getContactT = document.getElementsByClassName("c1");
    var getContactD = document.getElementsByClassName("c2");
    var getContactL = document.getElementsByClassName("c3");

    var getJob = document.getElementsByClassName("e1");
    var getCompany = document.getElementsByClassName("e2");
    var getCompanyDur = document.getElementsByClassName("e3");
    var getCompanyAddress = document.getElementsByClassName("e4");

    var gete1 = document.getElementsByClassName("eca1");
    var gete2 = document.getElementsByClassName("eca2");

    var getRef = document.getElementById("ref");
    //header
    if (getName.value == "" || wyr.value == "" || getObj.value == "") {
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

    for (let index = 0; index < getContactT.length; index++) {
        if (getContactD[index].value == "" || getContactT[index].value == "") {
            callAlert("May be your contact information is missing!");
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

    var headerName = document.getElementById("head");
    headerName.setAttribute("class", "head");

    var h2 = document.createElement("h2");
    h2.setAttribute("class", "edit1");

    var Name = document.createElement("span");

    Name.innerHTML = getName.value; // future use in form

    h2.appendChild(Name);
    headerName.appendChild(h2);

    var jobTitle = document.createElement("p");

    jobTitle.innerHTML = wyr.value;

    headerName.appendChild(jobTitle);
    ///////////////////////////////////////////////////////////////
    var divideId = document.getElementById("divide");
    divideId.setAttribute("class", "divide");
    //start of set 1
    //part 1

    var set1 = document.createElement("div");
    set1.setAttribute("class", "set1");

    var set1_1 = document.createElement("div");
    set1_1.setAttribute("class", "align");

    var set1_1_heading = document.createElement("h3");
    set1_1_heading.setAttribute("class", "heading");
    set1_1_heading.innerHTML = "objective";

    var set1_1_doc = document.createElement("div");
    set1_1_doc.setAttribute("class", "doc");

    var set1_1_para = document.createElement("p");
    set1_1_para.innerHTML = getObj.value; // future use in form

    set1_1_doc.appendChild(set1_1_para);
    set1_1.appendChild(set1_1_heading);
    set1_1.appendChild(set1_1_doc);
    //end of part 1

    // part 2
    var set1_2 = document.createElement("div");
    set1_2.setAttribute("class", "align");

    var set1_2_heading = document.createElement("h3");
    set1_2_heading.setAttribute("class", "heading");
    set1_2_heading.innerHTML = "academics";
    set1_2.appendChild(set1_2_heading);

    for (let index = 0; index < getDeg.length; index++) {
        AddAcademice(getDur[index], getCSU[index], getDeg[index], getGra[index], set1_2);
    }

    //end of part 2

    //part 3
    var set1_3 = document.createElement("div");
    set1_3.setAttribute("class", "align");

    var set1_3_heading = document.createElement("h3");
    set1_3_heading.setAttribute("class", "heading");
    set1_3_heading.innerHTML = "skills";
    set1_3.appendChild(set1_3_heading);

    var set1_3_doc = document.createElement("div");
    set1_3_doc.setAttribute("class", "doc");

    for (let i = 0; i < getSkillD.length; i++) {
        AddSkills(getSkillT[i], getSkillD[i], set1_3, set1_3_doc)
    }
    //end of part 3

    set1.appendChild(set1_1);
    set1.appendChild(set1_2);
    set1.appendChild(set1_3);
    //end of set 1

    //start of set 2
    //part 1
    var set2 = document.createElement("div");
    set2.setAttribute("class", "set2");

    var set2_1 = document.createElement("div");
    set2_1.setAttribute("class", "align");

    var set2_1_heading = document.createElement("h3");
    set2_1_heading.setAttribute("class", "heading");
    set2_1_heading.innerHTML = "contacts";

    var set2_1_doc_add = document.createElement("div");
    set2_1_doc_add.setAttribute("class", "doc");
    // set2_1_doc_add.setAttribute("class", "add");
    for (let j = 0; j < getContactT.length; j++) {
        AddContacts(getContactT[j], getContactD[j], getContactL[j], set2_1_doc_add)
    }

    // sample
    set2_1.appendChild(set2_1_heading);
    set2_1.appendChild(set2_1_doc_add);

    //end of part 1

    //part 2
    var set2_2 = document.createElement("div");
    set2_2.setAttribute("class", "align");

    var set2_2_heading = document.createElement("h3");
    set2_2_heading.setAttribute("class", "heading");
    set2_2_heading.innerHTML = "experience";
    set2_2.appendChild(set2_2_heading);

    for (let k = 0; k < getCompany.length; k++) {
        AddExperience(getJob[k], getCompany[k], getCompanyDur[k], getCompanyAddress[k], set2_2);
    }
    //end of part 2

    // part 3
    var set2_3 = document.createElement("div");
    set2_3.setAttribute("class", "align");

    var set2_3_heading = document.createElement("h3");
    set2_3_heading.setAttribute("class", "heading");
    set2_3_heading.innerHTML = "Extra Curricular Activities";
    set2_3.appendChild(set2_3_heading);

    var set2_3_doc = document.createElement("div");
    set2_3_doc.setAttribute("class", "doc");

    for (let index = 0; index < gete1.length; index++) {
        AddExtraActivities(gete1[index], gete2[index], set2_3_doc, set2_3)
    }


    // end of part 3

    //part 4
    var set2_4 = document.createElement("div");
    set2_4.setAttribute("class", "align");

    var set2_4_heading = document.createElement("h3");
    set2_4_heading.setAttribute("class", "heading");
    set2_4_heading.innerHTML = "reference";
    set2_4.appendChild(set2_4_heading);

    var set2_4_doc = document.createElement("div");
    set2_4_doc.setAttribute("class", "doc");

    var ref = getRef.value; // use in form
    var reference = document.createElement("p");
    reference.innerHTML = ref;
    set2_4_doc.appendChild(reference);
    set2_4.appendChild(set2_4_doc);

    //end of part 4
    set2.appendChild(set2_1);
    set2.appendChild(set2_2);
    set2.appendChild(set2_3);
    set2.appendChild(set2_4);
    //end of set 2

    //start of set 3
    var set3 = document.createElement("div");
    set3.setAttribute("class", "set3")
    //end of set 3

    divideId.appendChild(set1);
    divideId.appendChild(set3);
    divideId.appendChild(set2);



    let form = document.getElementById("myForm");
    let temp3 = document.getElementById("myTemplate3");
    form.style.display = "none"
    temp3.style.display = "block"


}

window.onload = function () {
    document.getElementById("pr")
        .addEventListener("click", () => {
            const cv = this.document.getElementById("myTemplate3");
            var opt = {
                margin: 1,
                filename: 'CV.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 }
            };
            html2pdf().from(cv).set(opt).save();
        })
}

function AddAcademice(n1, n2, n3, n4, set1_2) {
    var set1_2_doc = document.createElement("div");
    set1_2_doc.setAttribute("class", "doc");

    var set1_2_para1 = document.createElement("p");
    set1_2_para1.innerHTML = n1.value; // future use in form
    set1_2_para1.setAttribute("class", "bold");

    var set1_2_para2 = document.createElement("p");
    set1_2_para2.innerHTML = n2.value; // future use in form
    set1_2_para2.setAttribute("class", "bold");

    var set1_2_para3 = document.createElement("p");
    set1_2_para3.innerHTML = n3.value; // future use in form
    set1_2_para3.setAttribute("class", "Italic");

    var set1_2_para4 = document.createElement("p");
    set1_2_para4.innerHTML = n4.value; // future use in form
    set1_2_para4.setAttribute("class", "Italic");

    set1_2_doc.appendChild(set1_2_para1);
    set1_2_doc.appendChild(set1_2_para2);
    set1_2_doc.appendChild(set1_2_para3);
    set1_2_doc.appendChild(set1_2_para4);

    set1_2.appendChild(set1_2_doc);
}

function AddSkills(s1, s2, set1_3, set1_3_doc) {
    var tech = s1.value;
    var skills = s2.value;
    var description = document.createElement("p");
    description.innerHTML = `<b>${tech}:</b> ${skills}`;
    set1_3_doc.appendChild(description);
    set1_3.appendChild(set1_3_doc);
}

function AddContacts(c1, c2, c3, set2_1_doc_add) {
    var contact = c1.value;
    var desc = c2.value;
    var link = c3.value;

    if (link == "") {
        link = "javascript:void(0)"
    }

    var set2_1_para = document.createElement("p");
    set2_1_para.innerHTML = `<b>${contact}: </b><a class = "contact" href = "${link}">${desc}</a>`;
    set2_1_doc_add.appendChild(set2_1_para);
}

function AddExperience(e1, e2, e3, e4, set2_2) {
    var set2_2_doc = document.createElement("div");
    set2_2_doc.setAttribute("class", "doc");

    var set2_2_para1 = document.createElement("p");
    set2_2_para1.innerHTML = e1.value; // future use in form
    set2_2_para1.setAttribute("class", "bold");

    var set2_2_para2 = document.createElement("p");
    set2_2_para2.innerHTML = e2.value; // future use in form

    var set2_2_para3 = document.createElement("p");
    set2_2_para3.innerHTML = e3.value; // future use in form

    var set2_2_para4 = document.createElement("p");
    set2_2_para4.innerHTML = e4.value; // future use in form

    set2_2_doc.appendChild(set2_2_para1);
    set2_2_doc.appendChild(set2_2_para2);
    set2_2_doc.appendChild(set2_2_para3);
    set2_2_doc.appendChild(set2_2_para4);

    set2_2.appendChild(set2_2_doc);
}

function AddExtraActivities(eca1, eca2, set2_3_doc, set2_3) {
    var title = eca1.value;
    var desc = eca2.value;
    var set2_3_para = document.createElement("p");
    set2_3_para.innerHTML = `<b>${title}: </b> ${desc}`;
    set2_3_doc.appendChild(set2_3_para);
    set2_3.appendChild(set2_3_doc);
}
var x = document.getElementById("co");
function callAlert(msg) {
    x.innerHTML = msg;
    x.style.display = "block"
    setTimeout(() => {
        x.style.display = "none"
    }, 5000)
}

//template 3 end----------------------------------------------------------------------