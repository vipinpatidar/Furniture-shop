import React from "react";
//data
import { features } from "../data";

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[80px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
          {/* image */}
          <div className="flex-1 overflow-hidden rounded-md">
            <img
              className="hover:scale-110 transition-all w-full duration-500"
              src={image.type}
              alt="features"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
