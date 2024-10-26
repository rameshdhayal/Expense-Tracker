import React from "react";
import SortComponent from "./SortComponent ";

export default function ExpenseTable({  expenses, selectedCategory, setSelectedCategory }) {
  //calculating total
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount || 0),
    0
  );

  //handle the select menu change
  // const handleCategoryChange = (e) => {
  //   setSelectedCategory(e.target.value); 
  // };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
          <select value={selectedCategory} onChange={(e) => {
    setSelectedCategory(e.target.value); 
  }}>
              <option value="">All</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>
              <SortComponent />
              
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({ id, title, category, amount }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>₹{amount}</td>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <th></th>
          <th>₹{totalAmount}</th>
        </tr>
      </tbody>
    </table>
  );
}
