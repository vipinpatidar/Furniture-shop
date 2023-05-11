import React, { useState, useEffect } from "react";
//logo
import logo from "../assets/img/logo.svg";
//icons
import { CgMenuRight, CgClose } from "react-icons/cg";
//data
import { navigation } from "../data";
//component
import NavMobile from "./NavMobile";
import CartBtn from "./CartBtn";
import Cart from "./Cart";
import { useScrollBlock } from "../hook/StopScroll";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [upDown, setUpDown] = useState("");
  const [lastPosition, setLastPosition] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [isScrollable, setIsScrollable] = useState(true);

  const [blockScroll, allowScroll] = useScrollBlock();

  const isMobileSize = window.innerWidth <= 768;

  useEffect(() => {
    const ShowNavHandler = () => {
      if (window.scrollY > 70) {
        if (window.scrollY < lastPosition) {
          setUpDown("translate-y-0 ");
        } else if (window.scrollY > lastPosition) {
          setUpDown(
            `${
              isMobileSize ? "-translate-y-[4.88rem]" : "-translate-y-[5.1rem]"
            }`
          );
        }
        setBg(true);
      } else {
        setUpDown("");
        setBg(false);
      }
      setLastPosition(window.scrollY);
    };
    window.addEventListener("scroll", ShowNavHandler);

    return () => window.removeEventListener("scroll", ShowNavHandler);
  }, [lastPosition, isMobileSize]);

  // converting height into %

  const getHeight = () => {
    const TotalScrollHight = document.documentElement.scrollHeight;
    const TotalPageHight = document.documentElement.clientHeight;

    return (lastPosition / (TotalScrollHight - TotalPageHight)) * 100;
  };

  //stopping scrolling while menu and cart is open

  return (
    <>
      <div
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${upDown}`}
      >
        <header
          className={`${
            bg ? "bg-primary py-5 lg:py-5" : "bg-none py-6"
          }  transition-all duration-300`}
        >
          <div className="container mx-auto lg:px-[50px]">
            <div className="flex justify-between items-center">
              {/* logo */}
              <a href="/">
                <img className="h-6 lg:h-8" src={logo} alt="logo" />
              </a>
              <div className="flex items-center gap-x-5 md:order-1">
                {/* cart btn */}
                <CartBtn
                  setIsCartOpen={setIsCartOpen}
                  setMobileNav={setMobileNav}
                  disableScroll={blockScroll}
                />
                {/* menu icons switching */}
                <div
                  className="text-2xl text-white md:hidden lg:text-3xl order-1"
                  onClick={() => setMobileNav((prev) => !prev)}
                >
                  {mobileNav ? (
                    <CgClose onClick={() => allowScroll()} />
                  ) : (
                    <CgMenuRight onClick={() => blockScroll()} />
                  )}
                </div>
              </div>
              {/* nav */}
              <nav className="hidden md:flex md:ml-auto md:mr-10">
                <ul className="md:flex md:gap-x-12 md:items-center">
                  {navigation.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          className="capitalize text-white hover:border-b transition-all"
                          href={`#${item.href}`}
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div
          className={`${bg ? `h-[6px] bg-blue-500` : "hidden"}`}
          style={{ width: `${getHeight()}%` }}
        ></div>
      </div>
      {/* nav for mobile */}
      <div
        className={`${
          mobileNav ? "left-0" : "-left-full"
        } fixed z-50 bottom-0 w-full max-w-xs h-full transition-all`}
      >
        <NavMobile setMobileNav={setMobileNav} />
      </div>
      {/* cart */}
      <div
        className={`${
          isCartOpen ? "right-0" : "-right-full"
        } fixed bottom-0 z-50 top-0  w-full max-w-sm md:max-w-md h-screen transition-all`}
      >
        <Cart setIsCartOpen={setIsCartOpen} enableScroll={allowScroll} />
      </div>
    </>
  );
};

export default Header;
