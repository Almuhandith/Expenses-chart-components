import React from "react";

const Chart = ({ children, width, height }) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidyMax meet"
    >
      {children}
    </svg>
  );
};

export const Bar = ({ x, y, width, height, expenseName, highestExpense }) => (
  <>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx="5"
      fill={highestExpense === height ? `Cyan` : `hsl(10, 79%, 65%)`}
      className="rounded-xl cursor-pointer"
    />
    <text x={x} y={y - 10} className="bg-black text-white p-5">
      {`$${height}`}
    </text>
  </>
);

export default Chart;
