var tablinks = document.getElementsByClassName("titles");
var tabcontents = document.getElementsByClassName("contents");

function opentab(tabname, e){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}

function email() {
    window.location.href="mailto:21131a0392@gvpce.ac.in"
}

function openbox(project){
    const modal = document.getElementById("work-modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    const projects = {
        solar:{
            title:"Solar Powered Water Supply System",
            description:"[Edit this later] Detailed explanation about design, components, calculations and implementation."
        },
        wedm:{
            title:"Optimization of W-EDM Process",
            description:"[Edit this later] Explanation about VIKOR, TOPSIS, COPRAS, MOORA and ANN."
        }
    };

    // Safety check to ensure the project exists in the object
    if (projects[project]) {
        title.innerText = projects[project].title;
        description.innerText = projects[project].description;
        modal.style.display="flex";
    }
}

function closebox(){
    document.getElementById("work-modal").style.display="none";
}