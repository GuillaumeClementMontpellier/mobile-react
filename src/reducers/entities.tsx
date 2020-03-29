import {combineReducers} from "redux";
import {Action, ActionTypes} from "../actions/ActionTypes";
import {Comment, Post, User} from "../state/entities";

function Posts(state: Post[], action: Action): Post[] {
    if (!state) {
        return []
    }
    switch (action.type) {
        case ActionTypes.ADD_POST:
            if (action.payload && action.payload.post) {
                return [...state, action.payload.post];
            }
            break;
        case ActionTypes.REMOVE_POST:
            if (action.payload && action.payload.post) {
                const {id} = action.payload.post;
                return state.filter((item: Post, index) => index !== id)
            }
            break;
        default :
            return state
    }

    return state
}

function Comments(state: Comment[], action: Action): Comment[] {
    return [];
}

function Users(state: User[], action: Action): User[] {
    return [];
}

export default combineReducers({
    Posts,
    Comments,
    Users
})