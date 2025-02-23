// Liste des projets avec détails, vidéos, images, etc.
const projectss = [
    {
        section: 'but1',
        title: 'Robot Ricochet',
        description: "Robot Ricochet est un jeu de société créé par Alex Randolph et illustré par Franz Vohwinkel,édité en 1999.Le but de ce projet est de développer un programme permettant de trouver une solution optimale pour toute situation du jeu. Dans un premier temps,il s’agira de développer le moteur du jeu (cf. règles) puis d’implanter un algorithme de résolution naïf, appelé A*.",
        technologies: 'java, java swing, achitecture MVC.',
        video: null,
        image: ["../images/ricochet1.png"],
        pdf: null,
        link: null,
    },

    {
        section: 'but1',
        title: "Application DAN'NAYA",
        description: "Il s'agit d'un projet en cours de développement",
        technologies: 'React, node.js, mongoDB,javaScript',
        video: null,
        link: null,
        image: ["../images/danaya.jpg"]
    },

    {
        section: 'but1',
        title: 'Création de mon portfolio',
        description: "Un site mettant en avant mes différentes expériences",
        technologies: 'HTML5, CSS,javaScript.',
        video: null,
        link: 'https://konesaybou.github.io/portfolio/',
        image: ["../images/portfolio.png"]
    },


    {
        section: 'licence1',
        title: 'Simulation de jeux de la vie',
        description: "Le but de ce projet est de développer un programme permettant la simulation de l'évolution de cellule sur une surface. Dans un premier temps, il s'agit de développer le moteur du jeu (cf.règles) puis le doté d'une interface graphique permettant la visualisation des générations. Dans un second temps, il s'agira alors d'implémenter l'algorithme Hashlife pour accélérer la resolution puis étendre ce système aux automates cellulaires neuraux.",
        technologies: 'java, java swing, model MVC',
        video: "../video/gameOfLfie.mp4",
        link: null,
        image: null,
    },
    {
        section: 'licence1',
        title: 'JavaScript Asynchrone et Cartographie',
        description: 'Affichage de la localisation d\'une image sur une carte et ajout des images Flickr géolocalisées.',
        technologies: 'JavaScript, API Flickr, API de cartographie.',
        video: null,
        link: 'https://konesaybou.github.io/serviceImages/',
        image: ["../images/service_carte.png"],
    },
    {
        section: 'licence1',
        title: 'Création des applications web',
        description: "Mise en place d'une application CRUD",
        technologies: 'JavaScript, php, mySQL, bootstrap, html/css',
        video: "../video/crud_php.mp4",
        link: null,
        image: null,
    },
    {
        section: 'licence1',
        title: 'Jeux de Sokoban',
        description: "Il s'agit d'un jeu de puzzle où le gardien d'entrepôt , le joueur doit ranger des caisses sur des cases cibles. Il peut se déplacer dans les quatre directions, et pousser une seule caisse à la fois. Une fois toutes les caisses rangées, le niveau est réussi et le joueur passe au niveau suivant, plus difficile en général. L'idéal est de réussir avec le moins de coups possibles. ",
        technologies: 'Python, bibliothèque pygame.',
        video: "../video/sokoban.mp4",
        link: null,
        image: null,
    },

    {
        section: 'licence1',
        title: 'Création des sites web statiques',
        description: "Il s'agit de créer des sites web statiques. Note : ceci est un exemple parmi tant d'autres crées",
        technologies: 'HTML5, CSS.',
        video: null,
        link: 'https://konesaybou.github.io/angrybird/',
        image: ["../images/angry_bird.png"]
    }

];
