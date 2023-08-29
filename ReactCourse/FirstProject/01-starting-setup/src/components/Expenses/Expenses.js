import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses({ data }) {
  const [FilterYear, setFilterYear] = useState("2020");

  const filteredExpenses = data.filter((expense) => {
    
    return expense.date.getFullYear().toString() === FilterYear;
  });


  const filteredYearHandler = (enteredYearFilter) => {
    setFilterYear(enteredYearFilter);
  };

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={FilterYear}
        onFilteredYear={filteredYearHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
      <ExpensesList data = {filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
