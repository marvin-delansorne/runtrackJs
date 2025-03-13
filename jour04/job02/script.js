async function loadJsonFile(filePath) {
    try {
        const response = await fetch(filePath); // Charge le fichier JSON
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const jsonData = await response.json(); // Convertit la réponse en objet JavaScript
        return jsonData;
    } catch (error) {
        console.error("Erreur lors du chargement du fichier JSON :", error);
    }
}

// Utilisation
const filePath = 'data.json'; // Chemin vers votre fichier JSON
loadJsonFile(filePath).then(data => {
    console.log(data); // Affiche les données JSON
});

