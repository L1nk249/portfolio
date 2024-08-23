import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; 
//? Le hook useInView est conçu pour aider à détecter quand un élément entre ou sort de la vue de l'utilisateur. Cela se fait généralement en utilisant l'API Intersection Observer.

/**
 * This hook will take a function, and returns a ref.
 * ref can be assigned to any JSX element as prop, and
 * when the element reaches 50% of the viewport, the passed
 * in function will be called with the element id as parameter.
 * @param {function} action 
 * @returns {funciton} ref
 */
export default function useScrollObserver(action) {
    const {ref, inView, entry} = useInView({
        rootMargin: '-50% 0% -50% 0%'
    })
    useEffect(() => {
        if (entry && inView) {
            action(entry.target.id);
        }
    }, [entry, action, inView])
    return ref
}

//? useEffect est utilisé pour surveiller les changements de visibilité d'un élément dans la fenêtre d'affichage en utilisant l'API Intersection Observer
//?entry et inView sont des variables qui déterminent si l'élément est visible et contiennent les données de l'observation.
//?action est une fonction qui est appelée lorsque l'élément devient visible.
//?ref est une fonction à attacher à l'élément que tu souhaites observer.
//?Ce hook est utile pour des scénarios comme le chargement paresseux des images, l'activation des animations lorsque des éléments deviennent visibles, ou la gestion d'autres effets basés sur la visibilité des éléments. 