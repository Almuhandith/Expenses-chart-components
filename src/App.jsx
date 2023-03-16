import React, {useState, useEffect} from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chart from './components/Chart';

const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

function App() {
  const [expensesData, setExpensesData] = useState(data);
  const maxExpense = 200;
  const chartHeight = maxExpense + 20;
  const barWidth = 50;
  const barMargin = 30;
  const numberOfBars = expensesData.length;
  let width = numberOfBars * (barMargin + barWidth);

  return (
    <main className="min-h-screen bg-[#FFF0E6]">
      <div className="flex justify-center items-center h-screen">
        <div>
          <Header />
          <div className="bg-white mt-5 rounded-xl p-5">
            <h1 className="font-bold text-2xl">Spending - Last 7 days</h1>
            <Chart />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
