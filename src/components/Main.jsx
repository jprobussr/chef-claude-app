import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsList = ingredients.map((item) => (
    <li key={Math.random()}>{item}</li>
  ))

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputData = formData.get('ingredient');
    setIngredients((prev) => [...prev, inputData]);
  }

  return (
    <main className="main">
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Add Ingredient"
          type="text"
          placeholder="e.g oregano"
          name="ingredient"
        />
        <button className="ingredient-btn">Add Ingredient</button>
      </form>

      <ul>{ingredientsList}</ul>
    </main>
  );
};

export default Main;
