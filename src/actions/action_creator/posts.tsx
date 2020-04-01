import {ActionTypes} from "../ActionTypes";

export function fetchPostsStarted() {
    return {
        type: ActionTypes.FETCH_POST
    }
}
export function fetchPostsSuccess(body: any) {
    return {
        type: ActionTypes.FETCH_POST,
        payload: body
    }
}

export function fetchSignaledStarted() {
    return {
        type: ActionTypes.SIGNALED_POST
    }
}
export function fetchSignaledSuccess(body: any) {
    return {
        type: ActionTypes.SIGNALED_POST,
        payload: body
    }
}