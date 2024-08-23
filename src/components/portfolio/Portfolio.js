import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
  return (
    <Box id={"portfolio"} ref={innerRef}>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (   //8 import des infos portfolio qui sont dans le composant infos)
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              video={project.video}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
