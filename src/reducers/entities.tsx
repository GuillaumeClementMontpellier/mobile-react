import {combineReducers} from "redux";
import {Action, ActionTypes} from "../actions/ActionTypes";
import {Post} from "../interfaces";

function Post(state: [], action: Action) {
    switch (action.type) {
        case ActionTypes.AddPost:
            if (action.payload) {
                return [...state, action.payload];
            }
            break;
        case ActionTypes.RemovePost:
            if (action.payload && action.payload.post) {
                const {id} = action.payload.post;
                return state.filter((item : Post, index) => index !== id)
            }
            break;
        default :
            return state
    }
    return state;
}

function Comment() {

}

function User() {

}

export default combineReducers({
    Post,
    Comment,
    User
})