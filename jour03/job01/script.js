document.getElementById("button").addEventListener("click", showhide);

function showhide(){
    let article = document.getElementById("citation");
    citation.style.display = (citation.style.display === "none")? "block" : "none";
}

