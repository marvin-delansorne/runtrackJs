function jourTravaille(date) {
   
    const joursFeries2024 = [
        "01-01", 
        "04-01", 
        "05-01", 
        "05-08",
        "05-30", 
        "06-10", 
        "07-14", 
        "08-15", 
        "11-01", 
        "11-11", 
        "12-25"  
    ];

    
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois commencent à 0 en JavaScript
    const année = date.getFullYear();

    const dateFormatee = `${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}`;

    
    if (joursFeries2024.includes(dateFormatee)) {
        console.log(`Le ${jour} ${mois} ${année} est un jour férié.`);
    }
 
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log(`Non, ${jour} ${mois} ${année} est un week-end.`);
    }
   
    else {
        console.log(`Oui, ${jour} ${mois} ${année} est un jour travaillé.`);
    }
}

jourTravaille(new Date(2024, 0, 1));   // 1er janvier 2024 (jour férié)
jourTravaille(new Date(2024, 3, 1));   // 1er avril 2024 (lundi de Pâques, jour férié)
jourTravaille(new Date(2024, 4, 1));   // 1er mai 2024 (Fête du Travail, jour férié)
jourTravaille(new Date(2024, 4, 4));   // 4 mai 2024 (samedi, week-end)
jourTravaille(new Date(2024, 4, 5));   // 5 mai 2024 (dimanche, week-end)
jourTravaille(new Date(2024, 4, 6));   // 6 mai 2024 (lundi, jour travaillé)