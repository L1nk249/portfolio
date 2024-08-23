import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';// crochet car import de module ce n'est pas un composant)
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';

export default function BaseLayout() {
   const location = useLocation() // pour obtenir l'emplacment actuel de la route

   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));// si le chemin actuel est home, ok sinon ce sera portfolio ou about qui sera déclare active.
//Cette logique est souvent utilisée pour gérer l'état actif de la navigation, en mettant à jour l'état active en fonction du chemin actuel de l'URL. Cela peut être utile pour la mise en surbrillance des éléments de menu ou pour d'autres fonctionnalités liées à la navigation dans l'application



   const refHome = useScrollObserver(setActive);
   const refAbout = useScrollObserver(setActive);
   const refPortfolio = useScrollObserver(setActive);
   let [darkMode, setDarkMode] = useState(false);



   function handleToggleDarkMode() {  // fonction pour basculer en darkmode)
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));//Il lit la valeur du mode sombre depuis le localStorage et met à jour l'état darkMode. Si aucune valeur n'est trouvée, elle définit le mode sombre sur false.

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
            </Grid>
            <Grid item flexGrow={1}>
               {singlePage ? <SinglePageRoutes refs={{refHome, refAbout, refPortfolio}}/> : <MultiPageRoutes />}
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p> Cédric LEVY</p>
                  <p>&copy; 2024</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

