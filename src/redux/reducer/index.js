import { combineReducers } from "redux";
import {hotels} from './reducers';

const rootReducer = combineReducers({
    hotels
});

export default rootReducer;