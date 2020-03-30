import {Action, ActionTypes} from "../actions/ActionTypes";
import {Params} from "../state/params";


export default function (state: Params, action: Action): Params {
    if (!state) {
        return {
            visibleComment: [],
            visiblePosts: []
        }
    }

    switch (action.type) {
        case ActionTypes.LOGIN:
            if (action.payload) {
                return {
                    ...state,
                    authToken: action.payload.body.authToken,
                    activeUser: action.payload.body.userInfo._id
                };
            }
            break;
        case ActionTypes.LOGOUT:
            return {...state, authToken: undefined, activeUser: undefined};
        default:
            return state;
    }
    return state;
}