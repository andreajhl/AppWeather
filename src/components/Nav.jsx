import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom'



function Nav({onSearch}) {
  return (
    <nav className="navbar">
          <Link to='/'>
            <div className="navbar-brand">
            <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            Henry - Weather App
            </div>
          </Link>
          <Link to='/about'>
            <div className="navbar-brand">About</div>
          </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
