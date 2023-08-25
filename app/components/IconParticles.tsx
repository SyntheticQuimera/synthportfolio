import React from "react";
import { DiCss3, DiGit, DiHtml5, DiJavascript, DiReact } from "react-icons/di";
import {
  BiLogoFigma,
  BiLogoFirebase,
  BiLogoGraphql,
  BiLogoMongodb,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiOpenaiFill } from "react-icons/ri";
import { SiApollographql } from "react-icons/si";

export default function IconParticles() {
  return (
    <div className="particles-icons opacity-40">
      <DiJavascript className="particle-icon" />
      <BiLogoTailwindCss className="particle-icon" />
      <DiCss3 className="particle-icon" />
      <DiReact className="particle-icon" />
      <DiHtml5 className="particle-icon" />
      <BiLogoTypescript className="particle-icon" />
      <BiLogoMongodb className="particle-icon" />
      <RiOpenaiFill className="particle-icon" />
      <BiLogoRedux className="particle-icon" />
      <BiLogoFirebase className="particle-icon" />
      <BiLogoGraphql className="particle-icon" />
      <SiApollographql className="particle-icon" />
      <DiGit className="particle-icon" />
      <BiLogoFigma className="particle-icon" />
    </div>
  );
}
