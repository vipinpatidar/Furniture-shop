import React from "react";
//import data
import { stats } from "../data";

const Stats = () => {
  return (
    <div className="bg-accent rounded-[20px] p-6">
      <div className="flex flex-wrap gap-y-8 items-center">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="min-h-[70px] w-3/6 flex flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r lg:even:border-r lg:even:last:border-none"
          >
            <div className="text-2xl font-semibold lg:text-4xl">
              {item.value}
            </div>
            <div className="text-base font-light max-w-[110px] mx-auto leading-none">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
