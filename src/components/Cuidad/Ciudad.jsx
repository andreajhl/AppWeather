import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { details } from "../../actions";
import { useParams } from "react-router";
import '../../styles/Cuidad.scss'
import { NavLink } from "react-router-dom";

import {ArrowLeftOutlined} from '@ant-design/icons'

export default function Ciudad() {

    const { id } = useParams();
    const dispatch = useDispatch()
    const city = useSelector( state => state.details)
    
    
    useEffect(() => {
       dispatch(details(id))
  
    }, [dispatch,id])

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