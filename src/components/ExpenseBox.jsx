import React from "react";
import ChartAll from "./ChartAll";
import Footer from "./Footer";

const json = require("../data.json");
const ExpenseBox = () => {
  return (
    <div>
      <div className="bg-white mt-5 rounded-xl p-5">
        <ChartAll data={json} />
        <Footer />
      </div>
    </div>
  );
};

export default ExpenseBox;
