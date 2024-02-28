function chercherNombresPairs() {
    let nombres = [];

    for (let i = 0; i < 5; i++) {
        let nombre = parseInt(prompt("Saisissez un nombre :"));
        nombres.push(nombre);
    }

    function estPair(nombre) {
        return nombre % 2 === 0;
    }

    let nombresPairs = nombres.filter(estPair);

    afficherResultats(nombres, nombresPairs);
}

function afficherResultats(nombres, nombresPairs) {
    let resultatsDiv = document.getElementById('resultats');
    resultatsDiv.innerHTML = `
        <p>Nombres saisis : ${nombres.join(', ')}</p>
        <p>Nombres pairs : ${nombresPairs.join(', ')}</p>
        <p>Nombre de nombres pairs : ${nombresPairs.length}</p>
    `;
}
