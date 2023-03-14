import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#FFF0E6]">
      <div className="flex justify-center items-center h-screen">
        <div>
          <Header />
          <div className="bg-white mt-5 rounded-xl p-5">
            <h1 className="font-bold text-2xl">Spending - Last 7 days</h1>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
