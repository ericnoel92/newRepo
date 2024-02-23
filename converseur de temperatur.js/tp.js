
function aireSphere(rayon) {
    return 4 * Math.PI * Math.pow(rayon, 2);
}


function volumeBoule(rayon) {
    return (4 / 3) * Math.PI * Math.pow(rayon, 3);
}


function nombreDePaires(nombres) {
    let paires = 0;
    for (let i = 0; i < nombres.length; i++) {
        for (let j = i + 1; j < nombres.length; j++) {
            if (nombres[i] === nombres[j]) {
                paires++;
            }
        }
    }
    return paires;
}


function calculIMC(poids, taille) {
    return poids / Math.pow(taille, 2);
}


let rayonSphere = 5;
console.log("1) Aire de la sphère : " + aireSphere(rayonSphere));

let rayonBoule = 3;
console.log("2) Volume de la boule : " + volumeBoule(rayonBoule));

let nombresUtilisateur = [1, 2, 3, 4, 5];
console.log("3) Nombre de paires : " + nombreDePaires(nombresUtilisateur));

let poidsUtilisateur = 70;
let tailleUtilisateur = 1.75;
console.log("4) IMC : " + calculIMC(poidsUtilisateur, tailleUtilisateur));
