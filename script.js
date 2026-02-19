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
var smallboxes = document.getElementsByClassName("Work");
var bigboxes = document.getElementsByClassName("");
function openbox(project){

    const modal = document.getElementById("work-modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    const projects = {
        A: {
            title: "Solar Powered Water Supply System",
            description: "Designed and implemented a solar-powered domestic water supply system focusing on sustainable energy usage and cost efficiency."
        },
        B: {
            title: "Optimization of W-EDM Process",
            description: "Optimized WEDM process parameters using MCDM methods like VIKOR, TOPSIS, COPRAS, MOORA along with Artificial Neural Networks."
        },
        C: {
            title: "E-Commerce Website",
            description: "Built an interactive e-commerce interface using HTML, CSS, and JavaScript with responsive design and dynamic features."
        },
        crime: {
            title: "Crime Rate Analysis",
            description: "Performed data analysis on crime datasets using Python, visualization tools, and statistical methods to identify crime trends and patterns."
        },
        resale: {
            title: "Re-Sale of Used Cars",
            description: "Developed a used car reselling platform featuring dynamic listings, filtering options, and responsive UI for better user experience."
        }
    };

    title.innerText = projects[project].title;
    description.innerText = projects[project].description;
    modal.style.display = "flex";
}

function closebox(){
    document.getElementById("work-modal").style.display = "none";
}
