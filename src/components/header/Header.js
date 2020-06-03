import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header>
      <a href='/'>
        <div className='nav-logo'/>
      </a>
      <div className='nav-items'>
        <div className='nav-item'>
          <a href=''>
            FILMS
          </a>
        </div>
        <div className='nav-item'>
          <a href=''>
            FAMILY
          </a>
        </div>
        <div className='nav-item'>
          <a href=''>
            TV SERIES
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;