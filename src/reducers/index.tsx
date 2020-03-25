import {combineReducers} from 'redux'
import params from "./params";
import UI from "./UI";
import entities from "./entities";

export default combineReducers({
    entities,
    UI,
    params
})