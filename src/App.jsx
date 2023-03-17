import React from "react";
import Header from "./components/Header";
import ExpenseBox from "./components/ExpenseBox";

function App() {
  return (
    <main className="min-h-screen bg-[#FFF0E6]">
      <div className="flex justify-center items-center h-screen">
        <div>
          <Header />
          <ExpenseBox />
        </div>
      </div>
    </main>
  );
}

export default App;
