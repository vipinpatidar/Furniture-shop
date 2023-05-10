import React from "react";
//icons
import { CgClose } from "react-icons/cg";
import { HiPlus, HiMinus } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";
import { ImSad } from "react-icons/im";
//image
import logo from "../assets/img/logo.svg";
//hook of redux
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  removeWholeItem,
  clearCart,
} from "../store/cartSlice";

const Cart = ({ setIsCartOpen }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#1c1c1c] w-full h-full shadow-2xl flex flex-col items-center ">
      <div className=" w-full flex items-center justify-center py-5 border-b border-b-gray-600 relative">
        <MdArrowForwardIos
          className="top-[34%] text-2xl left-7 text-white absolute cursor-pointer"
          onClick={() => setIsCartOpen(false)}
        />
        <img className="h-7" src={logo} alt="logo" />
      </div>
      <div className="py-2 w-full">
        <ul className="w-full px-6 max-h-[500px] md:max-h-[450px] overflow-y-auto">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
                <li
                  className="flex w-full items-center px-4 md:pl-10  md:pr-4 gap-x-8  border-b border-b-gray-400 py-6"
                  key={index}
                >
                  <div className="w-[4.1rem] h-[4.1rem]  p-1 flex items-center justify-center">
                    <img
                      className="w-full"
                      src={item.image.type}
                      alt="product"
                    />
                  </div>
                  <div className="flex flex-col justify-start text-white  gap-y-3">
                    <div className="flex items-center">
                      <h3 className="text-[1.15rem] font-[500] text-gray-300 leading-tight">
                        {item.name}
                      </h3>
                      <CgClose
                        className="ml-auto text-xl cursor-pointer"
                        onClick={() => dispatch(removeWholeItem(item.id))}
                      />
                    </div>
                    <div className="flex items-center gap-x-4">
                      <button
                        className="bg-white text-accent p-1"
                        onClick={() => dispatch(addItem(item.id))}
                      >
                        <HiPlus />
                      </button>
                      <p className="flex items-center gap-x-3">
                        <span>{`$${item.price}`}</span>
                        <span>X</span>
                        <span>{item.numOfItem}</span>
                      </p>
                      <button
                        className="bg-white text-accent p-1"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        <HiMinus />
                      </button>
                      <span className="ml-auto md:ml-10">{`$${
                        item.price * item.numOfItem
                      }`}</span>
                    </div>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <h2 className="text-2xl text-gray-400 mt-10 text-center flex items-center gap-x-3 justify-center overflow-hidden">
              I Am Empty <ImSad />
            </h2>
          )}
        </ul>
      </div>
      <div className="flex flex-col w-full px-10 text-white bg-accent mt-auto py-6">
        <p className="flex items-center justify-between mb-2 text-[0.9rem]">
          <span>Subtotal</span> <span>{`$${totalPrice}`}</span>
        </p>
        <p className="flex items-center justify-between text-xl mb-4">
          <span>Total</span> <span>{`$${totalPrice}`}</span>
        </p>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-400 rounded-md px-7 py-3"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button className="bg-primary  rounded-md  px-7 py-3">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
