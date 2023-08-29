import logo from "./assets/investment-calculator-logo.png";
import React, { useState } from "react";
import Calculate from "./components/Calculate";
import Table from "./components/Table";

function App() {
  const [yearlyArr, setYearlyArr] = useState([])
  const [initialInvestment, setInitialInvestment] = useState('')

  const submitCalculateHandler = (yearArr, initial) => {
    setYearlyArr(yearArr);
    setInitialInvestment(initial);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Calculate onSubmitCalculate={submitCalculateHandler}></Calculate>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table yearArr= {yearlyArr} initialInvestment={initialInvestment}></Table>
    </div>
  );
}

export default App;
