var descriptionHeader = document.getElementById("project-description");
var projectDescription = document.getElementById("descrip");

descriptionHeader.style.visibility='hidden';
projectDescription.style.visibility='hidden';

function Show(name, description, url){
    
    descriptionHeader.style.visibility='visible';
    projectDescription.style.visibility='visible';
    descriptionHeader.innerHTML=name;
    projectDescription.innerHTML= description;

    var projectLink = document.getElementById("link-project-description");
    projectLink.hidden=false;
    projectLink.href = url;



}
