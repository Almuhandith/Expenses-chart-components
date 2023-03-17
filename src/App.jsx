import React from "react";
// import { useState } from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ChartItem from "./components/ChartItem";
// import ChartAll from "./components/ChartAll";
import ExpenseBox from "./components/ExpenseBox";
// import Chart from './components/Chart';
// import { Bar } from './components/Chart';

// const data = [
//   {
//     day: "mon",
//     amount: 17.45
//   },
//   {
//     day: "tue",
//     amount: 34.91
//   },
//   {
//     day: "wed",
//     amount: 52.36
//   },
//   {
//     day: "thu",
//     amount: 31.07
//   },
//   {
//     day: "fri",
//     amount: 23.39
//   },
//   {
//     day: "sat",
//     amount: 43.28
//   },
//   {
//     day: "sun",
//     amount: 25.48
//   }
// ]

function App() {
  // const [expensesData, setExpensesData] = useState(data);
  // const maxExpense = 200;
  // const chartHeight = maxExpense + 20;
  // const barWidth = 50;
  // const barMargin = 30;
  // const numberOfBars = expensesData.length;
  // let width = numberOfBars * (barMargin + barWidth);

  // Calculate highest expense for the month
  // const calculateHighestExpense = (data) => data.reduce((acc, cur) => {
  //   const { amount } = cur;
  //   return amount > acc ? amount : acc;
  // }, 0);

  // const [highestExpense, setHighestExpense] = useState(
  //   calculateHighestExpense(data));

  // useEffect(() => {
  //   console.log(JSON.stringify(expensesData));
  //   console.log(highestExpense);
  // });

  return (
    <main className="min-h-screen bg-[#FFF0E6]">
      <div className="flex justify-center items-center h-screen">
        <div>
          <Header />
          {/* <div className="bg-white mt-5 rounded-xl p-5"> */}
          {/* <Chart height={chartHeight} width={width}>
              {expensesData.map((data, index) => {
                const barHeight = data.amount;
                return (
                  <Bar
                    key={data.day}
                    x={index * (barWidth + barMargin)}
                    y={chartHeight - barHeight}
                    width={barWidth}
                    height={barHeight}
                    expenseName={data.day}
                    highestExpense={highestExpense}
                  />
                );
              })}
            </Chart> */}
          {/* <ChartAll />
            <Footer /> */}
          {/* </div> */}
          <ExpenseBox />
        </div>
      </div>
    </main>
  );
}

export default App;
