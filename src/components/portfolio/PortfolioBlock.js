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
            {video ? (                                   //! si tu as une vidéo affiche la, sinon  affiche une photo.
                <Box component="div" style={{ width: "80%", height: "auto" }}>
                    <video 
                        controls 
                        autoPlay 
                        muted 
                        playsInline 
                        width="100%" 
                        height="auto"
                    >
                        <source src={video} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo
                    </video>
        </Box>
      ) : ( //! ou affiche une photo
        <Box component={"img"} src={image} alt={"mockup"} />
      )}

      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
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
