import React from "react";
//data
import { navigation } from "../data";

const NavMobile = ({ setMobileNav }) => {
  return (
    <nav className="bg-[rgba(255,255,255,0.9)] w-full h-full shadow-2xl">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <li
              key={index}
              className="text-xl font-medium capitalize"
              onClick={() => setMobileNav((prev) => !prev)}
            >
              <a href={`#${item.href}`}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
