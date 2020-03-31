import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import params from "./params";
import UI from "./UI";
import entities from "./entities";

export default function createRootReducer(history: any) {
    return combineReducers({
        router: connectRouter(history),
        entities,
        UI,
        params
    });
};