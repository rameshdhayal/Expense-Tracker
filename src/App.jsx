import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'

function App() {
  const [expenses, setExpenses] = useState(expenseData)

  //for dropdown select menu
  const [selectedCategory, setSelectedCategory] = useState(""); 

  const filteredExpenses = expenses.filter(
    (expense) => selectedCategory === "" || expense.category === selectedCategory
  );
  
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable
       expenses={filteredExpenses} 
       selectedCategory={selectedCategory} 
       setSelectedCategory={setSelectedCategory}
        // expenses={expenses}
         />
      </div>
    </main>
  )
}

export default App