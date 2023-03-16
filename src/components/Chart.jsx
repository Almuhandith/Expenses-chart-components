import "./bar.css";
import BarChart from "react-bar-chart";
//import { useState } from "react";
// import data2 from "../data.json";

// const Chart = ({children, width, height}) => {
  
//   return (
//     <svg
//       viewBox={`0 0 ${width} ${height}`}
//       width='100%'
//       height='70%'
//       preserveAspectRatio='xMidyMax meet'
//       className='bg-SoftRed'
//     >
//       {children}
//     </svg>
//   )
export default function Chart() {
  const data = [
    { text: "mon", value: 17.45 },
    { text: "tue", value: 34.91 },
    { text: "wed", value: 52.36 },
    { text: "thu", value: 31.07 },
    { text: "fri", value: 23.39 },
    { text: "sat", value: 43.28 },
    { text: "sun", value: 25.48 },
  ];
  const color = { color: "blue" };
  const margin = { top: 20, right: 0, bottom: 30, left: 0 };
  // const now = new Date().getDay();
  const handleBarClick = (element) => {
    //the hover effect may come here plus the color change
    console.log(`The  ${element.text} with value ${element.value} was clicked`);
  };
  return (
    <div className="bar-header ">
      <div style={{ width: "100%" }}>
        <BarChart
          ylabel=""
          width={300}
          height={200}
          margin={margin}
          data={data}
          color={color}
          onBarClick={handleBarClick}
        />
      </div>
    </div>
  );
}
