import React,{useEffect} from 'react';
import { useDispatch} from "react-redux";

import { onSearchInicio } from '../../actions';

import Cards from '../Card/Cards'


export default function Home (){
    const dispatch = useDispatch()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position){
                const lat= position.coords.latitude
                const lon= position.coords.longitude
                dispatch(onSearchInicio(lat,lon))
            },
            function(error){
                console.log(error)
            },
            {enableHighAccuracy:true}
        );
    }, [dispatch])

    return (
        <div>
            <Cards/>
        </div>
    )
}
