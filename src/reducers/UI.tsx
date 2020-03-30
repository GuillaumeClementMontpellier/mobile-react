import {PostFilter, UI} from "../state/UI";
import {Action, ActionTypes} from "../actions/ActionTypes";

export default function (state: UI, action: Action): UI {
    if (!state) {
        return {
            commentFilter: {category: undefined},
            postFilter: PostFilter.ALL_POSTS,
            error: undefined,
            message: undefined
        }
    }
    switch (action.type) {
        case ActionTypes.ERROR_DISPLAY:
            return Object.assign({}, state, {error: action.error});
        case ActionTypes.DISPLAY:
            if (action.payload) {
                return Object.assign({}, state, {
                    message: {message: action.payload.message, color: action.payload.color}
                });
            }
            return Object.assign({}, state, {message: undefined});
        default:
            return state
    }
}