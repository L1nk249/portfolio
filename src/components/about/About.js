import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat En savoir plus: {firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            En savoir plus: <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd Compétences
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Compétences <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Frontend</p>
        <ul className={Style.skills}>
          {info.skills.compétences.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Backend</p>
        <ul className={Style.skills}>
          {info.skills.backend.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd Loisirs
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            Loisirs <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      ref={innerRef}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
      id={"about"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
