import React from "react";
//import data
import { hero } from "../data";
//components
import Stats from "../components/Stats";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;

  return (
    <section
      id="home"
      className="w-full h-[850px] bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-12"
    >
      <div className="container relative z-20 mx-auto text-center">
        <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[60px] lg:leading-tight lg:max-w-[888px]">
          {title}
        </h1>
        {/* subtitle */}
        <h2 className="mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl ">
          {subtitle}
        </h2>
        <a
          href="#products"
          className="text-xl bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px] inline-block"
        >
          {buttonText}
        </a>
        {/* Stats components */}
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
