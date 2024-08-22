import self from "../img/self.png"

import VideoImovie from "../videos/VideoImovie.mp4" 
import Videoizi from "../videos/Videoizi.mp4"
import VideoPortfolio from "../videos/VideoPortfolio.mp4"
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(97, 58, 242)", "rgb(161, 211, 161)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Cédric",
    lastName: "LEVY",
    initials: "CL", // the example uses first and last, but feel free to use three or more if you like.
    position: " Developpeur Junior Full Stack",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🏃‍♂️',
            text:  'Carburant: sport '
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
       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: `Bonjour,

Je suis Cédric, un ancien manager de grande distribution devenu développeur junior, parce qu'il n'y a pas d'âge pour apprendre! 
Après 12 ans à gérer des équipes, j'ai décidé de troquer mes rayons contre des lignes de code et des projets ambitieux, en me lançant dans une formation de développeur FULL STACK à La Capsule.
Cette reconversion est le fruit d'une passion grandissante pour la tech et d'un goût prononcé pour les défis.
 Maintenant, au lieu de jongler avec des produits en rayon, je jongle avec JavaScript, React et React Native. 
 
Je suis déterminé, curieux, et prêt à plonger dans de nouveaux projets, avec une touche d'humour et une bonne dose d'enthousiasme.

Prêt à coder avec moi ?`

 ,
    skills:
        {
            compétences: ['Javascript', 'React/React Native', 'Git/ Github', 'Html5', 'Css3', 'Figma'],
            backend: ['Nodejs', 'Express', 'MongoDB','Mongoose']
        }
    ,
    hobbies: [
        {
            label: 'Lecture',
            emoji: '📖'
        },
        {
            label: 'Cryptomonnaies',
            emoji: '₿'
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

// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
       
        {
            title: "Projet 1: Mymovies",
            live: "https://frontend-movies-eight.vercel.app/",
            source: "https://github.com/L1nk249/frontendMovies",
            video: VideoImovie
        },
        {
            title: "Projet 2 IZI site de sorties ",
            live: "https://projet-fin-b-atch-front.vercel.app/",
            source: "https://github.com/L1nk249/ProjetFinBAtchFront",
            source:"https://github.com/L1nk249/ProjetFIndeBAsh",
            video:Videoizi
        },
        {
            title: "Projet 3:Portfolio",
            live: "https://portfolio-rho-one-21.vercel.app//",
            source: "https://github.com/L1nk249/Portfolio",
            video:VideoPortfolio
            
        },
        
    ]
}
