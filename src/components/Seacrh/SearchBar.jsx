import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { onSearch } from "../../actions";


import '../../styles/SearchBar.scss'

export default function SearchBar() {

  const dispatch = useDispatch()
  const [city, setCity] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    dispatch(onSearch(city))
    setCity('')
  }

  return (
      <form onSubmit={handleSubmit} className='form'>
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
