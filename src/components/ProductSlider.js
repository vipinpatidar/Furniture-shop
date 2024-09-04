import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { BsFillPatchCheckFill } from "react-icons/bs";
//data
import { products } from "../data";
//swiper component
import { Swiper, SwiperSlide } from "swiper/react";
//required modules
import { Navigation, Pagination } from "swiper";
//hook for redux
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

//css of Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

const ProductSlider = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [proId, setProId] = useState(null);

  const dispatch = useDispatch();

  //destructuring products
  const { pages } = products;

  const clickHandler = (id) => {
    setIsAdded(true);
    setProId(id);
    dispatch(addItem(id));
    setTimeout(() => {
      setIsAdded(false);
      setProId(null);
    }, 400);
  };

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="productSlider min-h-[1300px]"
    >
      {pages.map((page, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
              {page.productList.map((product, idx) => {
                //destructure
                const { image, name, price, oldPrice, id } = product;

                return (
                  <div
                    className="w-full max-w-[290px] h-[380px] text-left"
                    key={idx}
                  >
                    <div className="border hover:border-accent rounded-[18px] w-full p-2 max-w-[285px] h-full max-h-[292px] flex items-center justify-center relative mb-[15px] transition">
                      <img src={image.type} alt="furnicute" />
                      <div className="absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition">
                        {id !== proId && (
                          <HiPlus
                            className="text-xl text-primary"
                            onClick={() => clickHandler(id)}
                          />
                        )}

                        {isAdded && id === proId && (
                          <BsFillPatchCheckFill className="text-xl text-green-500" />
                        )}
                      </div>
                    </div>
                    <div className="font-semibold lg:text-xl pl-4">{name}</div>
                    <div className="flex items-center gap-x-4 pl-4">
                      <div>$ {price}</div>
                      <div className="text-[15px] text-gray line-through">
                        $ {oldPrice}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
