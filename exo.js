console.log("bonjour je suis un rond");
const ballon = document.getElementById("ballon")
let taille = 200;
letcouleurIndex = 0;
const couleurs = ['red','green',"blue"];
ballon.addEventListener('click', function() {
    taille = taille +'px';
    ballon.style.width = taille + 'px';
    ballon.style.width = taille + 'px';
});
couleurIndex++;
if(couleurIndex >2) {
    couleurIndex = 0;
}
ballon.style.backgroundColor =
couleurs[couleurIndex];