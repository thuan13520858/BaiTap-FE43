import { combineReducers } from "redux";
import BurgerReducers from './BurgerReducers'
import CinemaReducers from "./CinemaReducers";

const rootReducer = combineReducers({
    BurgerReducers: BurgerReducers,
    CinemaReducers
});

export default rootReducer;