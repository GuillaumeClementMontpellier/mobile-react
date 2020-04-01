import {combineReducers} from "redux";
import {Action, ActionTypes} from "../actions/ActionTypes";
import {Post} from "../state/entities";
import {Comment} from "../state/entities";

function Posts(state: any, action: Action): any {
    if (!state) {
        return {}
    }
    switch (action.type) {
        case ActionTypes.FETCH_POST:
            if (action.payload) {
                let fetchedPosts : Post[] = action.payload;
                let newOb : any = Object.assign({}, state);
                for (const post of fetchedPosts){
                    newOb[post._id] = post;
                }
                return newOb;
            }
            break;
        default :
            return state
    }

    return state
}

function Comments(state: any, action: Action): any {
    if (!state) {
        return {}
    }
    switch (action.type) {
        case ActionTypes.FETCH_COMMENT:
            if (action.payload) {
                let fetchedComments : Comment[] = action.payload;
                let newOb : any = Object.assign({}, state);
                for (const comment of fetchedComments){
                    newOb[comment._id] = comment;
                }
                return newOb;
            }
            break;
        default :
            return state
    }

    return state
}

function Users(state: any, action: Action): any {
    if (!state) {
        return {}
    }
    switch (action.type) {
        case ActionTypes.LOGIN:
            if (action.payload) {
                const pushedValue : any = {};
                let user = action.payload.body.userInfo;
                pushedValue[user._id] = user;
                return Object.assign({}, state, pushedValue);
            }
            break;
        default :
            return state
    }
    return state
}

export default combineReducers({
    Posts,
    Comments,
    Users
});
