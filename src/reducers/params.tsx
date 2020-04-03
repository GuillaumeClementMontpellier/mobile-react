import {Action, ActionTypes} from "../actions/ActionTypes";
import {Params} from "../state/params";

export default function(state: Params, action: Action): Params {
    if (!state) {
        return {
            signaledPosts: [],
            signaledComments: []
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
        case ActionTypes.FETCH_SIGNALED_COMMENT:
        case ActionTypes.FETCH_SIGNALED_POST:
            if (action.payload) {
                const signals = action.payload;
                let sPosts = [...state.signaledPosts];
                for (const post of signals.listPostSig) {
                    if (!sPosts.includes(post._id)) {
                        sPosts.push(post._id)
                    }
                }
                let sComments = [...state.signaledComments];
                for (const comment of signals.listCommentSig) {
                    if (!sComments.includes(comment._id)) {
                        sComments.push(comment._id)
                    }
                }
                return {...state, signaledPosts: sPosts, signaledComments: sComments}
            }
            break;
        case ActionTypes.LOGOUT:
            return {...state, authToken: undefined, activeUser: undefined};
        default:
            return state;
    }
    return state;
}