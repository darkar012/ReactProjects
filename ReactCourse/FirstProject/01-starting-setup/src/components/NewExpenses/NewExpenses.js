import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpenses.css";

const NewExpense = (props) => {
  const [NewExpenseBoolean, setNewExpenseBoolean] = useState(false);

  

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setNewExpenseBoolean(false)
  };

  
  let NewExpenseContent = (
    <button
      onClick={() => {
        setNewExpenseBoolean(true);
      }}
    >
      Add New Expense
    </button>
  );

  if (NewExpenseBoolean === true) {
    NewExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {()=>{setNewExpenseBoolean(false)}}></ExpenseForm>
  }

  return (
    <div className="new-expense">
      {NewExpenseContent}
    </div>
  );
};

export default NewExpense;
