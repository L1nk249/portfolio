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
    >


{/* Condition pour afficher une vidéo ou une image */}
{video ? (
        <Box component={"video"} controls width={"80%"} height={"auto"}>
          <source src={video}autoPlay type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      ) : (
        <Box component={"img"} src={image} alt={"mockup"} />
      )}

      <h1 style={{ fontSize: "2rem" }}>{title}</h1>

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
