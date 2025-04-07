import React, { useState } from "react";
import { handleError } from "../utils";

function ExpenseForm({ addTransaction }) {
  const [expenseInfo, setExpenseInfo] = useState({ amount: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseInfo({ ...expenseInfo, [name]: value });
  };

  const addExpenses = (e) => {
    e.preventDefault();
    if (!expenseInfo.amount || !expenseInfo.text) {
      handleError("Please add Expense Details");
      return;
    }
    addTransaction(expenseInfo);
    setExpenseInfo({ amount: "", text: "" });
  };

  return (
    <div className="expense-form">
      <h1>Expense Tracker</h1>
      <form onSubmit={addExpenses}>
        <div>
          <label htmlFor="text">Expense Detail</label>
          <input
            onChange={handleChange}
            type="text"
            name="text"
            placeholder="Enter your Expense Detail..."
            value={expenseInfo.text}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Enter your Amount..."
            value={expenseInfo.amount}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
