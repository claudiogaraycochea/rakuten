import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className='nav-logo'/>
      </Link>
      <div className='nav-items'>
        <div className='nav-item'>
          <Link to=''>
            FILMS
          </Link>
        </div>
        <div className='nav-item'>
          <Link to=''>
            FAMILY
          </Link>
        </div>
        <div className='nav-item'>
          <Link to=''>
            TV SERIES
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;