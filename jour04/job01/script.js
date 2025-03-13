  // Sélectionnez le bouton et le paragraphe
  const button = document.getElementById('button');
  const expressionParagraph = document.getElementById('expression');

  // Ajoutez un écouteur d'événement au bouton
  button.addEventListener('click', () => {
      // Utilisez Fetch pour récupérer le contenu de expression.txt
      fetch('expression.txt')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Erreur lors de la récupération du fichier');
              }
              return response.text();
          })
          .then(data => {
              // Insérez le contenu dans le paragraphe
              expressionParagraph.textContent = data;
          })
          .catch(error => {
              console.error('Erreur :', error);
          });
  });