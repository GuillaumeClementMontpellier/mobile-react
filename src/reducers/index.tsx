import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import params from "./params";
import UI from "./UI";
import entities from "./entities";

const createRootReducer = function (history: any) {
    return combineReducers({
        router: connectRouter(history),
        entities,
        UI,
        params
    });
}

export default createRootReducer;