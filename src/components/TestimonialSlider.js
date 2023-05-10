import React from "react";
//swiper component
import { Swiper, SwiperSlide } from "swiper/react";
//required modules
import { Navigation, Autoplay } from "swiper";

//css of Swiper
import "swiper/css";
import "swiper/css/navigation";
import "../slider.css";

//data
import { testimonial } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      className="testimonialSlider"
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={true}
    >
      {testimonial.persons.map((preson, idx) => {
        const { avatar, name, occupation, message } = preson;
        return (
          <SwiperSlide key={idx}>
            <div className="flex flex-col min-h-[250px]">
              <div className="flex items-center gap-x-5 mb-8">
                {/* avrtar */}
                <img src={avatar.type} alt="avatar" />
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{occupation}</div>
                </div>
              </div>
              {/* text */}
              <div className="text-[1.25rem] leading-tight max-w-[570px]">
                {message}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
