import React from 'react';
import './Main.css';

const Main = () => {
  const ingredients = ['onion', 'turkey', 'pineapple', 'habenero'];

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputData = formData.get('ingredient');
    console.log(inputData);
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
