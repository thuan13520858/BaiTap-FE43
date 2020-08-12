import { combineReducers } from "redux";
import BurgerReducers from './BurgerReducers'

const rootReducer = combineReducers({
    BurgerReducers: BurgerReducers
});

export default rootReducer;