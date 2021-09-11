const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export const GET_CUIDAD ='GET_CIUDAD';
export const GET_DETAILS = 'GET_DETAILS'
export const REMOVE_CUIDAD = 'REMOVE_CUIDAD'

export function onSearch(ciudad){
    return async function(dispatch){
        var recurso= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
            recurso= await recurso.json()
           let res = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
        }

        return dispatch({type:GET_CUIDAD, payload:res})
    }
};

export function onSearchInicio(lat,lon){
    return async function(dispatch){
        var searchCuidad= await fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat},${lon}&language=en`,{
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
                "x-rapidapi-key": "97b4cb77a4mshb6208e1e9129adfp1f128cjsn3fec747d66ca"
            }
        })
      const {results}= await searchCuidad.json()
        var recurso= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${results[0].country}&appid=${apiKey}`)
        recurso= await recurso.json()
        let res = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
        }
        return dispatch({type:GET_CUIDAD, payload:res})
    }
};

export function details(id){
    return{
        type:GET_DETAILS,
        payload:id
    }

};

export function onClose(id){
    return{
     type: REMOVE_CUIDAD,
     payload:id
    }
}
