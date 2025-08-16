import React from 'react';
import './Main.css';

const Main = () => {
  const ingredients = ['onion', 'turkey', 'pineapple'];

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={Math.random()}>{ingredient}</li>
  ));

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const newIngredient = formData.get('ingredient');
  //   ingredients.push(newIngredient);
  //   console.log(ingredients)
  // }
  return (
    <main className="main">
      <form className="add-ingredient-form">
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
