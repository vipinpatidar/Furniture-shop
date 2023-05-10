import React from "react";
//data
import { features } from "../data";

const Features = () => {
  //destructuring features
  const { title, subtitle, items, image } = features;

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[80px]">
          {/* image */}
          <div className="flex-1 order-1 lg:-order-1 overflow-hidden rounded-md">
            <img
              className="hover:scale-110 transition-all w-full duration-500"
              src={image.type}
              alt="features"
            />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            {/* items */}
            <div>
              {items.map((item, idx) => (
                <div key={idx} className="flex mb-6 lg:last:mb-0">
                  <div className="text-2xl mr-4 lg:text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="text-base lg:text-xl font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
