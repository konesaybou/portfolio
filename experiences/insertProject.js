
// Fonction pour insérer les projets dans le DOM
function insertProjects() {
    if (!Array.isArray(projectss) || projectss.length === 0) {
        //console.error('Aucun projet dans le tableau projectss.');
        return;
    }

    projectss.forEach((project, index) => {
        try {
            const section = document.getElementById(`${project.section}-projects`);
            if (!section) {
                // console.error(`La section ${project.section}-projects n'existe pas dans le DOM.`);
                return;
            }

            // Création d'un élément div pour chaque projet
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.style.opacity = 0;
            projectItem.id = `project-${index}`;



            // Création d'un titre pour chaque projet
            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = project.title;
            projectItem.appendChild(projectTitle);

            // Création du bouton "Voir les détails"
            const detailsButton = document.createElement('button');
            detailsButton.classList.add('details-button');
            detailsButton.textContent = 'Voir les détails';
            detailsButton.setAttribute('aria-expanded', 'false');
            projectItem.appendChild(detailsButton);

            // Création du conteneur pour les détails du projet
            const projectDetails = document.createElement('div');
            projectDetails.classList.add('project-details');
            projectDetails.style.display = 'none';
            projectItem.appendChild(projectDetails);

            // Ajout de la description et des technologies utilisées
            const description = document.createElement('p');
            description.innerHTML = `<strong>Description :</strong> ${project.description}`;
            projectDetails.appendChild(description);

            const entreprise = document.createElement('p');
            entreprise.innerHTML = `<strong>Entrepise :</strong> ${project.entreprise}`;
            projectDetails.appendChild(entreprise);

            // Ajout des vidéos
            if (project.video) {
                const videoWrapper = document.createElement('div');
                videoWrapper.classList.add('video-wrapper');
                if (Array.isArray(project.video)) {
                    project.video.forEach(videoSrc => {
                        const video = document.createElement('video');
                        video.setAttribute('controls', '');
                        const source = document.createElement('source');
                        source.setAttribute('src', videoSrc);
                        source.setAttribute('type', 'video/mp4');
                        video.appendChild(source);
                        videoWrapper.appendChild(video);
                    });
                } else {
                    const video = document.createElement('video');
                    video.setAttribute('controls', '');
                    const source = document.createElement('source');
                    source.setAttribute('src', project.video);
                    source.setAttribute('type', 'video/mp4');
                    video.appendChild(source);
                    videoWrapper.appendChild(video);
                }
                projectDetails.appendChild(videoWrapper);
            }


            if (project.image) {
                project.image.forEach(imgSrc => {
                    const imageWrapper = document.createElement('div');
                    imageWrapper.classList.add('image-wrapper');
                    const img = document.createElement('img');
                    img.setAttribute('src', imgSrc);
                    img.setAttribute('alt', project.title);
                    imageWrapper.appendChild(img);
                    projectDetails.appendChild(imageWrapper);
                });
            }


            if (project.details) {
                const ul = document.createElement('ul');
                project.details.forEach(detail => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${detail.title} :</strong> ${detail.description}`;
                    ul.appendChild(li);


                    if (detail.image) {
                        const imageWrapper = document.createElement('div');
                        imageWrapper.classList.add('image-wrapper');
                        const img = document.createElement('img');
                        img.setAttribute('src', detail.image);
                        img.setAttribute('alt', detail.title);
                        imageWrapper.appendChild(img);
                        li.appendChild(imageWrapper);
                    }

                    if (detail.video) {
                        const videoWrapper = document.createElement('div');
                        videoWrapper.classList.add('video-wrapper');
                        const video = document.createElement('video');
                        video.setAttribute('controls', '');
                        const source = document.createElement('source');
                        source.setAttribute('src', detail.video);
                        source.setAttribute('type', 'video/mp4');
                        video.appendChild(source);
                        videoWrapper.appendChild(video);
                        li.appendChild(videoWrapper);
                    }
                });
                projectDetails.appendChild(ul);
            }


            if (project.link) {
                const projectLink = document.createElement('p');
                projectLink.innerHTML = `<strong>Voir le projet en ligne :</strong> <a href="${project.link}" target="_blank">${project.title}</a>`;
                projectDetails.appendChild(projectLink);
            }


            // if (project.pdf) {
            //     const pdfLink = document.createElement('p');
            //     pdfLink.innerHTML = `<strong>Documentation PDF :</strong> <a href="${project.pdf}" target="_blank">Télécharger ou consulter</a>`;
            //     projectDetails.appendChild(pdfLink);
            // }


            section.appendChild(projectItem);


            setTimeout(() => {
                projectItem.style.opacity = 1;
                projectItem.style.transition = 'opacity 0.6s ease';
            }, index * 200);


        } catch (error) {
            // console.error(`Erreur lors de l'insertion du projet ${project.title}: `, error);
        }
    });
}

// Appel de la fonction pour insérer les projets au chargement de la page
insertProjects();
