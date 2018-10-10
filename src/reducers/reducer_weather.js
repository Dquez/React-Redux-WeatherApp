import {FETCH_WEATHER} from "../actions";
// state argument is not application state, only the state this reduce is responsible for
export default function (state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
        }
    return state;
}