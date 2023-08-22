import React from "react";
import IconParticles from "./IconParticles";

export default function AboutSection() {
  return (
    <div className="p-section flex h-full w-full flex-col items-center justify-center lg:items-start lg:justify-start">
      <div className="cursor-text-xxl select-none text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">
        <h1>
          I'm a <span className="text-indigo-600">MERN Stack </span>
          front-end developer, blending design skills from graphic artistry and
          the precision of industrial engineering.
        </h1>
      </div>
      <IconParticles />
    </div>
  );
}
