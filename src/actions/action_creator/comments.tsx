import {ActionTypes} from "../ActionTypes";

export function fetchCommentsStarted() {
    return {
        type: ActionTypes.FETCH_COMMENT
    }
}

export function fetchCommentsSuccess(body: any) {
    return {
        type: ActionTypes.FETCH_COMMENT,
        payload: body
    }
}

export function postCommentsStarted() {
    return {
        type: ActionTypes.POST_COMMENT
    }
}

export function postCommentsSuccess(body: any) {
    return {
        type: ActionTypes.POST_COMMENT,
        payload: body
    }
}
