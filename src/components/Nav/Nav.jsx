import React from 'react';

import SearchBar from '../Seacrh/SearchBar.jsx';
import './Nav.css';




function Nav({onSearch}) {
  return (
    <nav className="navbar">
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
