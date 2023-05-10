import React from "react";
//logo
import logo from "../assets/img/logo.svg";
//data
import { footer } from "../data";

const Footer = () => {
  return (
    <footer className="section bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-x-gray-700 pb-7 lg:pb-10 mb-14">
          <a href="/" className="mb-6 lg:mb-0">
            <img src={logo} alt="" />
          </a>
          {/* social */}
          <div className="flex gap-x-4 ">
            {footer.social.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition"
                >
                  <a href="/">{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        {/* copyright */}
        <p className="text-center">&copy; FuniShop - All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
