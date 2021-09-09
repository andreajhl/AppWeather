import React from 'react';
import { useSelector } from "react-redux";

import '../../styles/Cards.scss';

import Card from './Card.jsx';

export default function Cards() {
  
  const cities = useSelector(state => state.ciudades)

  return (
    <div className='cards'>
      {cities && cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
        /> )}
    </div>
  );
}
