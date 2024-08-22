import React, { useState, useEffect } from 'react';

function TypingEffect({ text }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText(displayedText + text[index]);
                setIndex(index + 1);
            }, 230); // Vitesse d'affichage des lettres en millisecondes

            return () => clearTimeout(timeoutId);
        }
    }, [index, text, displayedText]);

    return  <span 
    style={{ 
        background: 'linear-gradient(to left, rgb(2, 26, 100), rgb(66, 152, 136))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    }}
>{displayedText}</span>;
}

export default TypingEffect;