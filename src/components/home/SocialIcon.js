import React from 'react';

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}> 
           //!noopener est utilisé pour éviter une potentielle faille de sécurité liée à l'utilisation de liens qui s'ouvrent dans un nouvel onglet via target="_blank".
           //!Masquer la provenance : Il empêche le navigateur d'envoyer des informations de référent à la page cible. Le référent est l'URL de la page d'où provient le clic. Si noreferrer est ajouté, la page vers laquelle pointe le lien ne saura pas d'où vient l'utilisateur (ce qui améliore la confidentialité).

            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;