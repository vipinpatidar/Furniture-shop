import React from "react";
//icon
import { BsCart4 } from "react-icons/bs";
// hooks of redux
import { useSelector } from "react-redux";

const CartBtn = ({ setIsCartOpen, setMobileNav }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const clickHandler = () => {
    setMobileNav(false);
    setIsCartOpen(true);
  };

  return (
    <button
      className="flex items-center gap-x-1 outline-none border-none px-[20px] py-[9px] md:pl-[20px] md:pr-[22px] text-[1.1rem] lg:text-base font-[400] rounded-md bg-none md:bg-accent text-white relative"
      onClick={clickHandler}
    >
      <span className="hidden md:block">Your Cart</span>
      <span>
        <BsCart4 className="text-xl md:text-base" />
      </span>
      <span className="absolute top-[0.15rem] right-2.5 md:top-1 md:right-2 bg-red-500 w-[1.15rem] h-[1.15rem] rounded-full text-[0.85rem] font-medium flex items-center justify-center">
        {totalQuantity}
      </span>
    </button>
  );
};

export default CartBtn;
