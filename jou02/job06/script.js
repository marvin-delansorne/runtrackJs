// Séquence du code Konami
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let userInput = [];


function checkKonamiCode(event) {
  
    userInput.push(event.key);

 
    if (userInput.length > konamiCode.length) {
        userInput.shift(); 
    }

    if (userInput.toString() === konamiCode.toString()) {
      
        document.body.classList.add('konami');

        document.getElementById('content').innerHTML = '<h1>Code Konami réussi !</h1>';

       
        window.removeEventListener('keydown', checkKonamiCode);
    }
}

window.addEventListener('keydown', checkKonamiCode);

// Haut (↑)

// Haut (↑)

// Bas (↓)

// Bas (↓)

// Gauche (←)

// Droite (→)

// Gauche (←)

// Droite (→)

// B

// A