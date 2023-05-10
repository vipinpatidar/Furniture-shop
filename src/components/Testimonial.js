import React from "react";
//component
import TestimonialSlider from "./TestimonialSlider";
//import data
import { testimonial } from "../data";

const Testimonial = () => {
  //destructuring data
  const { image, title } = testimonial;

  return (
    <section className="section mt-14 lg:mt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            {/* title */}
            <h2 className="title mb-9">{title}</h2>
            {/* slider */}
            <div className="relative pb-14 lg:pb-0 mb-8 lg:mb-0">
              <TestimonialSlider />
            </div>
          </div>
          {/* image */}
          <div className="overflow-hidden rounded-md order-1">
            <img
              className="hover:scale-110 transition-all w-full duration-500"
              src={image.type}
              alt="chair"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
