import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
  const { image,video, live, source, title } = props;
  return (
    <Box
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    mt={4}
    // Pour centrer les vidéos sur mobile
    sx={{
      width: '100%',
      '@media (max-width: 768px)': {
        paddingLeft: '10px', // Petit ajustement gauche sur mobile
        paddingRight: '10px' // Petit ajustement droite sur mobile
      }
    }}
  >

<div>
        {video ? (
          <Box
            component="div"
            sx={{
              width: "80%",
              height: "auto",
              margin: "0 auto", // Centrage horizontal
              '@media (max-width: 768px)': {
                width: "100%", // Pleine largeur sur mobile
              },
            }}
          >
            <video
              controls
              autoPlay
              muted
              playsInline
              width="100%" // S'assure que la vidéo prend toute la largeur disponible
              height="auto"
              style={{ display: "block", margin: "0 auto" }} // Centrer la vidéo dans son conteneur
            >
                        <source src={video} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo
                    </video>
        </Box>
      ) : ( //! ou affiche une photo
        <Box component={"img"} src={image} alt={"mockup"} />
      )}

<h1
              style={{
                fontSize: "2rem",
                textAlign: "center", // Centrer le texte sur tous les écrans
                marginTop: "10px", // Ajoute un petit espace entre la vidéo et le titre
              }}
            >
              {title}
            </h1>
      </div>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Demo"} icon={"fa fa-safari"} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Code Source"} icon={"fa fa-code"} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
