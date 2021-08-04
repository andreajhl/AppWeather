import React, { useState } from "react";

import './Search.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
      <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }} className='form'>
      <input className='search' type="submit" value="Search" />
      <input
        className='input'
        type="text"
        placeholder="  Add City.."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
    </form>
  );
}
