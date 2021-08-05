import React from 'react';

import SearchBar from '../Seacrh/SearchBar.jsx';
import '../../styles/Nav.scss';




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
