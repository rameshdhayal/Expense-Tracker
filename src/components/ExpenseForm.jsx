import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, massage: "Title is required" },
      { minLength: 3, massage: "Title should be at least 3 characters long" },
    ],
    category: [{ required: true, massage: "Please select a category" }],
    amount: [{ required: true, massage: "Please enter an amount" }],
  };

  const validate = (FormData) => {
    const errorsData = {};

    Object.entries(FormData).forEach(([key, value]) => {
      console.log(key);
      console.log(validationConfig[key]);
    })

    if (!FormData.title) {
      errorsData.title = "Title is required";
    }
    if (!FormData.category) {
      errorsData.category = "Category is required";
    }
    if (!FormData.amount) {
      errorsData.amount = "Amount is required";
    }

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        id="title"
        label="Title"
        name="title"
        value={expense.title}
        onchange={handleChange}
        error={errors.title}
      />
      <Select
        id="category"
        label="Category"
        name="category"
        value={expense.category}
        onchange={handleChange}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select Category"
        error={errors.category}
      />
      
      <Input
        id="amount"
        label="Amount"
        name="amount"
        value={expense.amount}
        onchange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
