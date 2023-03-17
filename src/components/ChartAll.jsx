import React from "react";
import ChartItem from "./ChartItem";

const ChartAll = (props) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Spending - Last 7 days</h1>
      <div className="flex justify-between mb-7">
        {props.data.map((item, index) => {
          return (
            <ChartItem
              key={index}
              id={index + 1}
              sum={item.amount}
              day={item.day}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChartAll;
