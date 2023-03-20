import React, { useState } from "react";

const ChartItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const showHint = (e) => {
    setIsHovered(true);
  };

  const hideHint = (e) => {
    setIsHovered(false);
  };

  const height = props.sum * 3;
  return (
    <main className="mt-16 h-52 flex flex-col justify-end">
      <div
        className="cusor-pointer relative"
        onMouseEnter={showHint}
        onMouseLeave={hideHint}
      >
        {isHovered ? (
          <div className="absolute top-[-2rem] md:top-[-3rem] left-[-0.2rem] md:left-[-0.8rem] w-[45px] md:w-[75px] bg-[#382314] rounded-[5px] text-xs md:text-lg font-bold text-VeryPaleOrange p-1 md:p-2 text-center">
            ${props.sum}
          </div>
        ) : (
          <div className="hidden">
            ${props.sum}
          </div>
        )}
        {props.id === new Date().getDay() ? (
          <div
            className="bg-Cyan w-9 md:w-12 rounded-[5px] mx-auto transition-all duration-150 ease-in-out hover:bg-[#b4e0e5]"
            id={props.id}
            style={{ height: `${height}px` }}
          ></div>
        ) : (
          <div
            className="bg-SoftRed w-9 md:w-12 rounded-[5px] mx-auto transition-all duration-150 ease-in-out hover:bg-[#ff9b86]"
            id={props.id}
            style={{ height: `${height}px` }}
          ></div>
        )}
      </div>
      <div className="text-MediumBrown text-xs md:text-lg text-center">
        {props.day}
      </div>
    </main>
  );
};

export default ChartItem;
