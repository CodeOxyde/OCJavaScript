function lancerJeu(){
    let score = 0;
    let choix = choisirListe();
    let nbMotsProposes = 0;
    
    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots);
        nbMotsProposes = listeMots.length
    }else{
        score = lancerBoucleDeJeu(listePhrases);
        nbMotsProposes = listePhrases.length
    }

    afficherScore(score, nbMotsProposes)
}

function choisirListe(){
    let choixListe = prompt("Voulez vous écrire des mots ou des phrases ?");
    while(choixListe !== "mots" && choixListe !== "phrases"){
        choixListe = prompt("Voulez vous écrire des mots ou des phrases ?");
    }
    return choixListe;
}

function lancerBoucleDeJeu(choix){
    let score = 0
    for(let i = 0; i < choix.length; i++){
        let motUtilisateur = prompt("Rentrer le mot : " + choix[i]);
        if(motUtilisateur === choix[i]){
            score++;
            console.log("Bravo !");
        }else{
            console.log("Vous avez fait une erreur de frappe.");
        }
    }
    return score
}

function afficherScore(score, nombreQuestions){
    console.log('Votre score est de ' + score + ' sur ' + nombreQuestions)
}