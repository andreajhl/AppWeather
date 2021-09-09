import {
    GET_CUIDAD,
    GET_DETAILS,
    REMOVE_CUIDAD
} from '../actions/index.js';

const initialState = {
    ciudades:[],
    details:{}

}

export default function rootReducers(state = initialState, action) {

    const {type, payload}=action

    switch (type) {
        case GET_CUIDAD:
            var search = [...state.ciudades].filter(e=>e.id===payload.id)
            if(search && search.length>0){
                var resto= [...state.ciudades].filter(c => c.id !==payload.id)
                var res= search.concat(resto)
            }
           
            return{
                ...state,
                ciudades:res && res.length>0? res : payload.img?  [payload,...state.ciudades] : [...state.ciudades]

            }
        case GET_DETAILS:
            
            return{
                ...state,
                details: state.ciudades.find(e=>e.id===Number(payload))
            }
        case REMOVE_CUIDAD:
            return{
                ...state,
                ciudades:[...state.ciudades].filter(c => c.id !== Number(payload))
            }
        default: return state
    }
}