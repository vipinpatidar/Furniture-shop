import React from "react";
//data
import { products } from "../data";

//import components
import ProductSlider from "../components/ProductSlider";

const Products = () => {
  const { title, subtitle } = products;

  return (
    <section id="products" className="section relative text-center">
      <div className="container mx-auto">
        <div>
          <h2 className="title">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {subtitle}
          </p>
        </div>
        {/* slider */}
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
