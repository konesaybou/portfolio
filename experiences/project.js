// Effet de zoom sur les projets (optimisé avec requestAnimationFrame)
function initZoomEffects() {
    const projects = document.querySelectorAll('.project-item');
    if (projects.length === 0) {
        console.error('Aucun projet trouvé dans le DOM.');
    } else {
        projects.forEach(project => {

            project.addEventListener('mouseover', () => {
                console.log(`Survol sur le projet : ${project.id}`);
                try {
                    requestAnimationFrame(() => {
                        project.style.transform = 'scale(1.05)';
                        project.style.transition = 'transform 0.3s ease';
                    });
                } catch (error) {
                    console.error(`Erreur lors de l'animation de zoom pour le projet ${project.id}: `, error);
                }
            });

            // Écoute l'événement "mouseout" pour restaurer la taille normale du projet
            project.addEventListener('mouseout', () => {
                console.log(`Fin du survol du projet : ${project.id}`);
                try {
                    requestAnimationFrame(() => {
                        project.style.transform = 'scale(1)';
                    });
                } catch (error) {
                    console.error(`Erreur lors de la restauration du zoom pour le projet ${project.id}: `, error);
                }
            });
        });
    }
}

// Gestion de l'affichage des détails des projets après le chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.details-button');
    if (buttons.length === 0) {
        console.error('Aucun bouton "Voir les détails" trouvé dans le DOM.');
    } else {
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                console.log(`Bouton cliqué pour le projet : ${this.parentNode.id}`);

                const details = this.nextElementSibling;
                try {
                    if (details.style.display === 'none' || details.style.display === '') {
                        details.style.display = 'block';
                        this.textContent = 'Masquer les détails';
                        this.setAttribute('aria-expanded', 'true');
                    } else {
                        details.style.display = 'none';
                        this.textContent = 'Voir les détails';
                        this.setAttribute('aria-expanded', 'false');
                    }
                } catch (error) {
                    console.error(`Erreur lors de la gestion des détails pour le projet ${this.parentNode.id}: `, error);
                }
            });
        });
    }

    // Initialisation des effets de zoom après le chargement des projets
    initZoomEffects();
});

