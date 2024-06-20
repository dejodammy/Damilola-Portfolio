import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const renderTechnologies = () => {
    return technologies.map((technology) => (
      <div className="w-28 h-28" key={technology.name}>
        <BallCanvas icon={technology.icon} />
        <p className="flex justify-center text-white font-bold">{technology.name}</p>
      </div>
    ));
  };

  return (
    <>
      <h1 className="font-bold flex justify-center text-lg mb-5 text-[#915EFF]">My Tech Stack</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {renderTechnologies()}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
