import {PostFilter, UI} from "../state/UI";
import {Action} from "../actions/ActionTypes";

export default function (state: UI, action: Action): UI {
    return {
        commentFilter: {category : undefined},
        postFilter: PostFilter.ALL_POSTS
    }
}