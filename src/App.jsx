import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Counter from './components/Counter.jsx';
import Todo from './components/Todo.jsx';
import LikeButton from './components/LikeButton.jsx';



const App = () => {
  return (
    <>
    <main className='container'>
      <Header />
      <Main />
    </main>

    <section>
      <Todo />

      <LikeButton />
    </section>

    </>
  );
};

export default App;
