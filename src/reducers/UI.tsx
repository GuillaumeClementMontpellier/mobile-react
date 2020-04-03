import {PostFilter, UI} from "../state/UI";
import {Action, ActionTypes} from "../actions/ActionTypes";

export default function (state: UI, action: Action): UI {
    if (!state) {
        return {
            commentFilter: {category: undefined},
            postFilter: PostFilter.ALL_POSTS,
            fetching: false,
        }
    }
    switch (action.type) {
        case ActionTypes.ROUTE_CHANGE:
            if (action.payload && action.payload.location && action.payload.location) {
                if (action.payload.previousRoute) {
                    return {...state, callbackURL: action.payload.previousRoute}
                }
            }
            break;
        case ActionTypes.ERROR_DISPLAY:
            return Object.assign({}, state, {error: action.error, fetching: false});
        case ActionTypes.DISPLAY:
            if (action.payload) {
                return Object.assign({}, state, {
                    message: {message: action.payload.message, color: action.payload.color}
                });
            }
            return Object.assign({}, state, {message: undefined});
        case ActionTypes.FETCH_SIGNALED_POST:
        case ActionTypes.FETCH_SIGNALED_COMMENT:
        case ActionTypes.FETCH_POST:
        case ActionTypes.FETCH_COMMENT:
            return Object.assign({}, state, {fetching: !action.payload});
        default:
            return state
    }
    return state
}