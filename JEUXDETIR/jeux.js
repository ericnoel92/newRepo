console.log("Bienvenue a vous étranger");

// Sélectionner les éléments HTML
let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

if (!container || !btn || !scoreContainer || !timeContainer) {
    console.error("Éléments HTML non trouvés. Assurez-vous que les classes sont correctes.");
}

btn.onclick = function () {
    let score = 0;
    let time = 40;

    container.innerHTML = "";

    let interval = setInterval(function showTarget() {
        // Création de la cible     
        let target = document.createElement('img');
        target.id = "target";
        target.src = "silly.png";
        container.appendChild(target);

        // Calculer la position de manière à rester dans les limites du conteneur
        let maxTop = container.offsetHeight - target.offsetHeight;
        let maxLeft = container.offsetWidth - target.offsetWidth;

        target.style.top = Math.random() * maxTop + 'px';
        target.style.left = Math.random() * maxLeft + 'px';

        // Faire disparaître les cibles
        setTimeout(function () {
            target.remove();
        }, 2000);

        // Quand on clique sur le target
        target.onclick = function () {
            score += 1;
            target.style.display = 'none';
        };

        time -= 1;

        // Afficher les infos
        scoreContainer.innerHTML = `Score: ${score}`;
        timeContainer.innerHTML = `Temps: ${time}s`;

        // Fin du jeu quand le temps est écoulé
        if (time === 0) {
            clearInterval(interval);
            container.innerHTML = "Le jeu est terminé a bientot pour une nouvelle partie";
            console.log("Le jeu est terminé. Score final : " + score);
        }

    }, 1000);
};

