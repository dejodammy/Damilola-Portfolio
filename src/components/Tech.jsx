import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  return (
    <>
      <h1 className='font-bold flex justify-center text-lg mb-5 text-[#915EFF]'>My Tech Stack</h1>
      <div className={`flex flex-wrap justify-center gap-10 ${isMobile ? 'mobile-grid' : ''}`}>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="flex justify-center text-white font-bold">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
