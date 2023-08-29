import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import React, { useState } from "react";

function ExpenseItem({ date, title, amount }) {
  const [titleState, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <li>    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    </li>

  );
}

export default ExpenseItem;
