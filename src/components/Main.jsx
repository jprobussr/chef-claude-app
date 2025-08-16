import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className='main'>
      <form className="add-ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Add Ingredient"
          type="text"
          placeholder="e.g oregano"
        />
        <button className="ingredient-btn">Add Ingredient</button>
      </form>
    </main>
  );
};

export default Main;
