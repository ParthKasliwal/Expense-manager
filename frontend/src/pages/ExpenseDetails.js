import React from 'react';

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div className="details-container"> {/* Correct class name */}
            <h2>Your Balance: ₹{incomeAmt - expenseAmt}</h2>

            {/* Show Income & Expense amount */}
            <div className="amounts-container">
                <div className="income-box">
                    Income: <span className="income-amount">₹{incomeAmt}</span>
                </div>
                <div className="expense-box">
                    Expense: <span className="expense-amount">₹{expenseAmt}</span>
                </div>
            </div>
        </div>
    );
}

export default ExpenseDetails;
