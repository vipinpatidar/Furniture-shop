import React from "react";
// import { BiRightArrowAlt } from "react-icons/bi";
//data
import { newInStore } from "../data";
//component
import NewItemsSlider from "./NewItemsSlider";

const NewItems = () => {
  //desturing
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="section relative overflow-hidden lg:min-h-[540px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[70px]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>

            <div className="hidden lg:flex items-center">
              <a
                className="hover:border-b border-primary lg:items-center font-medium transition-all flex items-center"
                href=" "
              >
                {link}
              </a>
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
          {/* slider images */}
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
