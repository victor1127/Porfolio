var descriptionHeader = document.getElementById("project-description");
var projectDescription = document.getElementById("descrip");

descriptionHeader.style.visibility='hidden';
projectDescription.style.visibility='hidden';

function Show(description){
    
    descriptionHeader.style.visibility='visible';
    projectDescription.style.visibility='visible';

    projectDescription.innerHTML= description;


}
