import React from "react";
import '../../styles/Cuidad.scss'
import { NavLink } from "react-router-dom";

import {ArrowLeftOutlined} from '@ant-design/icons'

export default function Ciudad({city}) {
    if(!city) {
        return <>No existe la ciudad</>
    }
        return (
        <div style={{display:'flex'}}>
            <div className='flecha'>
                 <NavLink to ='/' ><ArrowLeftOutlined style={{color: 'white'}} /></NavLink>
            </div>
            <div className="container">
                    <h2 >{city.name}</h2>
                    <div className="info">
                        <div className='infoImg'>
                            <img className='ii' src={`https://openweathermap.org/img/wn/${city.img}@2x.png`} alt='img del clima por ciudad' />
                        </div>
                    <div className='infoC'>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}