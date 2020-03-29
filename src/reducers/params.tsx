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
        case ActionTypes.LOGOUT:
            return {
                visibleComment: state.visibleComment,
                visiblePosts: state.visiblePosts
            };
        default:
            return state;
    }
}