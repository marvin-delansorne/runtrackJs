function Citation(){
    const elementCitation = document.getElementById("citation");
    const texteCitation = elementCitation.textContent;
    console.log(texteCitation);
}

const bouton = document.getElementById("button");
bouton.addEventListener("click", Citation);