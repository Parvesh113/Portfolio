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
function openbox(){

}