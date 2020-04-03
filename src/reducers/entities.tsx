import {combineReducers} from "redux";
import {Action, ActionTypes} from "../actions/ActionTypes";
import {Comment, Post} from "../state/entities";

function Posts(state: any, action: Action): any {
    if (!state) {
        return {}
    }
    switch (action.type) {
        case ActionTypes.FETCH_POST:
            if (action.payload) {
                let fetchedPosts: Post[] = action.payload;
                let newOb: any = Object.assign({}, state);
                for (const post of fetchedPosts) {
                    newOb[post._id] = post;
                }
                return newOb;
            }
            break;
        case ActionTypes.DELETE_POST:
            if (action.payload) {
                let deletedPost: Post = action.payload;
                let newOb: any = {};
                for (const key in state) {
                    if (state.hasOwnProperty(key)) {
                        if (key !== deletedPost._id) {
                            newOb[key] = state[key];
                        }
                    }
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
                let fetchedComments: Comment[] = action.payload;
                let newOb: any = Object.assign({}, state);
                for (const comment of fetchedComments) {
                    newOb[comment._id] = comment;
                }
                return newOb;
            }
            break;
        case ActionTypes.DELETE_COMMENT:
            if (action.payload) {
                let deletedCom: Comment = action.payload;
                let newOb: any = {};
                for (const key in state) {
                    if (state.hasOwnProperty(key)) {
                        if (key !== deletedCom._id) {
                            newOb[key] = state[key];
                        }
                    }
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
        case ActionTypes.FETCH_USER:
            if (action.payload) {
                const pushedValue: any = {};
                let user = action.payload;
                pushedValue[user._id] = user;
                return Object.assign({}, state, pushedValue);
            }
            break;
        case ActionTypes.LOGIN:
            if (action.payload) {
                const pushedValue: any = {};
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
