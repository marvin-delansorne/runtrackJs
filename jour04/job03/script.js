async function filterPokemon() {
    // Récupérer les valeurs du formulaire
    const id = document.getElementById('id').value.trim();
    const nom = document.getElementById('nom').value.trim().toLowerCase();
    const type = document.getElementById('type').value;

    // Récupérer les données du fichier JSON
    const response = await fetch('pokemon.json');
    const pokemonList = await response.json();

    // Filtrer les Pokémon en fonction des critères
    const filteredPokemon = pokemonList.filter(pokemon => {
        return (!id || pokemon.id.toString() === id) &&
               (!nom || pokemon.name.english.toLowerCase().includes(nom)) &&
               (!type || pokemon.type.includes(type));
    });

    // Afficher les résultats
    displayResults(filteredPokemon);
}

function displayResults(pokemonList) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Effacer les résultats précédents

    if (pokemonList.length === 0) {
        resultsDiv.innerHTML = '<p>Aucun Pokémon trouvé.</p>';
        return;
    }

    pokemonList.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <h3>${pokemon.name.english} (ID: ${pokemon.id})</h3>
            <p><strong>Nom japonais :</strong> ${pokemon.name.japanese}</p>
            <p><strong>Nom chinois :</strong> ${pokemon.name.chinese}</p>
            <p><strong>Nom français :</strong> ${pokemon.name.french}</p>
            <p><strong>Type(s) :</strong> ${pokemon.type.join(', ')}</p>
            <p><strong>Statistiques de base :</strong></p>
            <ul>
                <li>HP: ${pokemon.base.HP}</li>
                <li>Attack: ${pokemon.base.Attack}</li>
                <li>Defense: ${pokemon.base.Defense}</li>
                <li>Sp. Attack: ${pokemon.base['Sp. Attack']}</li>
                <li>Sp. Defense: ${pokemon.base['Sp. Defense']}</li>
                <li>Speed: ${pokemon.base.Speed}</li>
            </ul>
        `;
        resultsDiv.appendChild(card);
    });
}