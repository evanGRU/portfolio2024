import {projectRanges, projectTypes} from "./constants";

const initialProjectsObject = [
    {
        id: 1,
        title: 'League of Legends',
        date: 2023,
        type: projectTypes.website,
        picture: {
            path: 'img/lol.png',
            pathBis: 'img/projects/lol.png',
            alt: 'league of legends',
            logoPath: 'img/projects/logo_lol.png'
        },
        links: {
            github: 'https://github.com/evanGRU/sae203',
            website: 'https://mmi21d10.sae203.ovh/'
        },
        tags: ['HTML', 'SCSS', 'PHP', 'JS'],
        description: 'Second projet le plus complet et professionnel sur la gestion de données via un pannel admin.' +
            ' Découverte de SCSS. Amélioration de mes compétences en SCSS/JS/PHP.',
        range: projectRanges.school
    },
    {
        id: 2,
        title: 'MMIPLE',
        date: 2023,
        type: projectTypes.website,
        picture: {
            path: 'img/mmiple.png',
            pathBis: 'img/projects/mmiple.png',
            alt: 'mmiple',
            logoPath: 'img/projects/logo_mmiple.png'
        },
        links: {
            github: '',
            website: 'https://mmi21d10.mmi-troyes.fr/projets/mmiple/'
        },
        tags: ['HTML', 'CSS', 'PHP'],
        description: 'Site type boutique en ligne. Manipulation de données en PHP dont l\'authentification et la sauvegarde de données dans un panier.',
        range: projectRanges.school
    },
    {
        id: 3,
        title: 'Stats\'Albums',
        date: 2022,
        type: projectTypes.website,
        picture: {
            path: 'img/statalbums.png',
            pathBis: 'img/projects/statalbums.png',
            alt: 'stats\'albums',
            logoPath: 'img/projects/logo_statalbums.png'
        },
        links: {
            github: 'https://github.com/evanGRU/sae105',
            website: 'https://mmi21d10.h205.online/index.php'
        },
        tags: ['HTML', 'CSS', 'PHP', 'JS'],
        description: 'Site complet présentant diverses statistiques sur des albums de rap français. Approfondissement de mes' +
            'connaissances et capacités en CSS et JS. Travail sur la composition et la structure du site.',
        range: projectRanges.school
    },
    {
        id: 4,
        title: 'Monyelos',
        date: 2022,
        type: projectTypes.website,
        picture: {
            path: 'img/monyelos.png',
            pathBis: 'img/projects/monyelos.png',
            alt: 'monyelos',
            logoPath: 'img/projects/logo_monyelos.png'
        },
        links: {
            github: '',
            website: 'https://mmi21d10.mmi-troyes.fr/projets/monyelos/'
        },
        tags: ['HTML', 'CSS'],
        description: 'Maquette d\'un site de vente en ligne type. Il s\'agissait de la première fois que je m\'essayais' +
            'à l\'exercice.',
        range: projectRanges.personal
    },
    {
        id: 5,
        title: 'One Piece',
        date: 2021,
        type: projectTypes.website,
        picture: {
            path: 'img/onepiece.png',
            pathBis: 'img/projects/onepiece.png',
            alt: 'one piece',
            logoPath: 'img/projects/logo_onepiece.png'
        },
        links: {
            github: '',
            website: 'https://mmi21d10.mmi-troyes.fr/projets/onepiece_php/'
        },
        tags: ['HTML', 'CSS'],
        description: 'Site fait dans le but de m\'exercer au début de ma formation. J\'y ai notamment appris et compris' +
            'l\'utilisation des display flex et la création d\'un menu de navigation.',
        range: projectRanges.school
    },
    {
        id: 6,
        title: 'Pokedex',
        date: 2024,
        type: projectTypes.mobileApp,
        picture: {
            path: 'img/pokedex.png',
            pathBis: 'img/projects/pokedex.png',
            alt: 'pokedex',
            logoPath: 'img/projects/logo_pokedex.png'
        },
        links: {
            github: 'https://github.com/evanGRU/AppPokemon',
            website: ''
        },
        tags: ['REACTNATIVE', 'SCSS'],
        description: 'Application Pokémon reprenant les codes du pokédex. Je savais déjà développer en react, mais il' +
            ' s\'agit de ma première application mobile. Beaucoup de manipulation de données JSON via des requêtes API.',
        range: projectRanges.school
    },
    {
        id: 7,
        title: 'Portfolio 2024',
        date: 2024,
        type: projectTypes.website,
        picture: {
            path: 'img/portfolio2024.png',
            pathBis: 'img/projects/portfolio2024.png',
            alt: 'portfolio2024',
            logoPath: 'img/logo.svg'
        },
        links: {
            github: 'https://github.com/evanGRU/portfolio2024',
            website: 'https://evan-gruchot.vercel.app/'
        },
        tags: ['REACT', 'CSS', 'JS'],
        description: 'Portfolio de mes projets étudiants et personnels. Mise en application de mes compétences REACT.',
        range: projectRanges.professional
    },
]

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const dateA = a.date;
    const dateB = b.date;

    let comparison = 0;
    if (dateA > dateB) {
        comparison = 1;
    } else if (dateA < dateB) {
        comparison = -1;
    }
    return comparison * -1;
}
export const projectsObject = initialProjectsObject.sort(compare);