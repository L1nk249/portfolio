import React, { useState, useEffect } from 'react';

function TypingEffect({ text }) { //* destructuraiton de text qui est une props qui vient de home (soit info.firstname)
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
     //! index est la position actuelle dans la chaîne de caractère.commence à 0 // displayedText contient l'état du texte progressivement affiché, au début:0


    useEffect(() => {
        if (index < text.length) {     //! on  s'assure qu'index sit tjrs inferieur à la valeur totale de text
            const timeoutId = setTimeout(() => {
                setDisplayedText(displayedText + text[index]);
                setIndex(index + 1);//! Après 230 ms, l'effet ajoute la lettre suivante à l'état displayedText et incrémente l'index (setIndex(index + 1)).
            }, 230); // Vitesse d'affichage des lettres en millisecondes

            return () => clearTimeout(timeoutId);//netoie le composant qand c'est fini
        }
    }, [index, text, displayedText]);//* état relancé à chaque changement d'index  text ou displaytext

    return  <span 
    style={{ 
        background: 'linear-gradient(to left, rgb(2, 26, 100), rgb(66, 152, 136))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline',
        minWidth: '100px', // Régler à une largeur minimale pour conserver l'espace
        visibility: index < text.length ? 'visible' : 'hidden', // Masquer le texte jusqu'à ce qu'il soit complètement affiché
        whiteSpace: 'nowrap', // Empêche le retour à la ligne
    }}
>{displayedText}</span>;
}

export default TypingEffect;