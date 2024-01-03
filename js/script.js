/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*========== translation ==========*/

const translations = {
    'myPortfolio': {
        'fr': 'Mon Portfolio',
    },
    'welcomeText': {
        'fr': "Bonjour, je suis"
    },
    'introText' : {
        'fr': "Actuellement, je suis étudiant à Epitech, en cours d'obtention de mon master spécialisé en Intelligence Artificielle (IA). Pour mon stage, j'aspire à travailler en tant que développeur web, en créant des sites ou des fonctionnalités à la fois esthétiques et fonctionnellement efficaces. Mon ambition est de progresser et d'exceller dans le domaine de l'intelligence artificielle, car je suis profondément passionné par ce sujet."
    },
    'downloadCV' : {
        'fr': "Télécharger mon CV"
    },
    'wheelweb' : {
        'fr': "Développeur Web"
    },
    'wheelfutur' : {
        'fr': "Futur Développeur IA"
    },
    'wheelguitar' : {
        'fr': "Guitariste"
    },
    'aboutMe' : {
        'fr': "A propos de "
    },
    'aboutMe2' : {
        'fr': "moi"
    },
    'button' : {
        'fr': "EN"
    },
    'aboutMeText' : {
        'fr': "Bonjour, bienvenue dans mon portfolio ! Je suis Jean, un futur développeur passionné d’IA qui aime apprendre de nouvelles technologies !"   
    },
    'aboutMeText2' : {
        'fr': "Ce site est mon portfolio personnel où vous pouvez trouver des informations complètes sur mon parcours. Je poste chaque projet que j’ai fait dans Epitech ou des projets personnels."
    },
    'aboutMeText3' : {
        'fr': "Je vous remercie de visiter mon portfolio et de mieux me connaître. J’espère que vous trouverez mon portfolio intéressant et que vous prendrez plaisir à le lire."
    },
    'aboutMeButton' : {
        'fr': "Voir plus"
    },
    'servicesTitle' : {
        'fr': "Mes "
    },
    'servicesTitle2' : {
        'fr': "services"
    },
    'servicesTextTitle' : {
        'fr': "Développement web"
    },
    'servicesText' : {
        'fr': "Je possède un BAC+2 en Développement Web, spécialisé en tant que développeur Web et mobile. Mon expertise me permet d’exceller en tant que développeur web, où je peux créer des sites ou des fonctionnalités visuellement attrayants et hautement fonctionnels pendant mon stage. De plus, j’ai acquis une expérience professionnelle précieuse dans le développement web, ayant travaillé pendant un mois chez LiveMentor."
    },
    'project' : {
        'fr': "Mes "
    },
    'project2' : {
        'fr': "projets"
    },
    'projectText' : {
        'fr': "Un jeu de tower defense créé avec Java, AWT et Swing développé en 7 jours"
    },
    'projectText2' : {
        'fr': "Une imitation de Reddit développée en 2 semaines"
    },
    'projectText3' : {
        'fr': "Un site web incroyable pour vous permettre de reserver un concert et recevoir un code QR"
    },
    'projectText4' : {
        'fr': "Un site web où chaque utilisateur peut afficher et utiliser différents widgets"
    },
    'projectText5' : {
        'fr': "Un site avec un système de troc comme dans un RPG pour échanger vos objets avec différents utilisateurs"
    },
    'projectText6' : {
        'fr': "Un site qui repertorie les pires films parmi les pires"
    },
    'projectTitle7' : {
        'fr': "Projet en cours"
    },
    'projectText7' : {
        'fr': "Arrive prochainement..."
    },
    'projectTitle8' : {
        'fr': "Prochain projet"
    },
    'projectText8' : {
        'fr': "En attente"
    },
    'contact' : {
        'fr': "Contactez-"
    },
    'contact2' : {
        'fr': "moi !"
    },
    'copyright' : {
        'fr': "Touts droits réservés"
    }

};

let currentLanguage = 'en';

function applyTranslations(language) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[key] && translations[key][language]) {
            if (el.childElementCount === 0) { // Check if the element has no child elements
                el.textContent = translations[key][language];
            } else {
                // If the element has child elements, only update the text nodes
                el.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.nodeValue = translations[key][language];
                    }
                });
            }
        }
    });
}


document.getElementById('languageSwitch').addEventListener('click', () => {
    if (document.documentElement.lang === 'en') {
      applyTranslations('fr');
      document.documentElement.lang = 'fr';
    } else {
      location.reload();
    }
  });