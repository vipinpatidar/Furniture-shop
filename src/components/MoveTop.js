import React, { useEffect, useState } from "react";
//icon
import { MdOutlineArrowBackIos } from "react-icons/md";

const MoveTop = () => {
  const [isNear, setIsNear] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const position = window.scrollY;

      setIsNear(position);
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const clickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    isNear >= 463 && (
      <div
        className="md:w-12 md:h-12 w-8 h-8 border-2 bg-white md:bg-transparent shadow-md border-accent hover:bg-accent text-accent hover:text-white fixed bottom-24 z-10  rounded-full flex items-center justify-center md:right-8 right-2 cursor-pointer"
        onClick={clickHandler}
      >
        <MdOutlineArrowBackIos className="rotate-90  text-base md:text-xl" />
      </div>
    )
  );
};

export default MoveTop;
