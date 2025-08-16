import React from 'react';
import './Header.css';
import chefImg from '../assets/images/chef.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <img src={chefImg} alt="Chef Claude Logo" className='header__logo' />
        <h1 className='header__title'>Chef Claude</h1>
      </div>
    </header>
  );
};

export default Header;
