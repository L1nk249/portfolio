import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;// destructuration pour éviter d'ecrire props.emoji etc

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}</Box> {text}
        </Box>
    );
}

export default EmojiBullet;
// une fois que EmojiBullet reçoit ses props on peut réutiliser son composant pour afficher les valeurs ( sur home la ou le composant est importé)