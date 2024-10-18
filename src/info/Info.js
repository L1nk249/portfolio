import self from "../img/self.png"
import VideoImovie from "../videos/VideoImovie.mp4" 
import Videoizi from "../videos/Videoizi.mp4"
import VideoPortfolio from "../videos/VideoPortfolio.mp4"


export let colors = ["rgb(97, 58, 242)", "rgb(161, 211, 161)"];

/* 
This variable will change the layout of the website from multipage to single, scrollable page  ( module importé ds plusieurs composants)
*/
export let singlePage = false;


export const info = {
    firstName: "Cédric",
    lastName: "LEVY",
    initials: "",
    position: " Developpeur Junior Full Stack",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🏃‍♂️',
            text:  'Carburant : Sport '
        },
        {
            emoji: '🌎',
            text: 'Dans le sud-est de la France'
        },
        {
            emoji: "💼",
            text: "Disponible dès maintenant "
        },
        {
            emoji: "📧",
            text: <a href="mailto:levycedric26@gmail.com">levycedric26@gmail.com</a> 
        }
    ],
    socials: [
       
        {
            link: "https://github.com/L1nk249",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/cédricLEVY",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       
    ],

    bio: `Bonjour,

Je suis Cédric, un ancien manager de grande distribution devenu développeur junior, parce qu'il n'y a pas d'âge pour apprendre! 
Après 12 ans à gérer des équipes, j'ai décidé de troquer mes rayons contre des lignes de code et des projets ambitieux, en me lançant dans une formation de développeur FULL STACK à La Capsule.
Cette reconversion est le fruit d'une passion grandissante pour la tech et d'un goût prononcé pour les défis.
Je suis déterminé, curieux, et prêt à plonger dans de nouveaux projets, avec une touche d'humour et une bonne dose d'enthousiasme.

Prêt à coder avec moi ?`

 ,

 biomobile:`Bonjour, Je suis Cédric, développeur junior fullstack Javascript.
  Ravi de vous voir ici`
 ,
    skills:
        {
            compétences: ['Javascript', 'React/React Native', 'Git/ GitHub', 'HTML5', 'CSS3', 'Figma'],
            backend: ['Node.js', 'Express', 'MongoDB','Mongoose']
        }
    ,
    hobbies: [
        {
            label: 'Lecture',
            emoji: '📖'
        },
        {
            label: ' Cryptomonnaies',
            emoji: '♢'
        },
        {
            label: 'Cinéma',
            emoji: '🕷️'
        },
        {
            label: 'Voyages',
            emoji: '🎒'
        },
        {
            label: 'Animaux',
            emoji: '🐕'
        },
        {
            label: "Pizza à l'ananas (personne n'est parfait !)" ,
            emoji: '🍕🍍'
        }


    ],
    portfolio: [ 
       
        {
            title: "Projet 1: Mymovies",
            live: "https://frontend-movies-eight.vercel.app",
            source: "https://github.com/L1nk249/frontendMovies",
            video: VideoImovie
        },
        {
            title: "Projet 2 IZI site de sorties ",
            live: "https://projet-findebatch-frontend.vercel.app/",
            source:"https://github.com/L1nk249/projet-findebatch-frontend",
            video:Videoizi
        },
        {
            title: "Projet 3:Portfolio",
            live: "https://portfolio-rho-one-21.vercel.app",
            source: "https://github.com/L1nk249/Portfolio",
            video:VideoPortfolio
            
        },
        
    ]
}
