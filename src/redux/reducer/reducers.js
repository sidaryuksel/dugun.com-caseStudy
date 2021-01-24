import { GET_HOTEL_INFO } from "../actions/actionTypes";


export function hotels(state = [], action){
    switch (action.type){
        case GET_HOTEL_INFO:
            return action.payload;
        default:
            return state;
    }
};