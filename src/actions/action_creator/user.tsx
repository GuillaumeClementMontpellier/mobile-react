import {ActionTypes} from "../ActionTypes";

export function fetchUserStarted() {
    return {
        type: ActionTypes.FETCH_USER
    }
}

export function fetchUserSuccess(body: any) {
    return {
        type: ActionTypes.FETCH_USER,
        payload: body
    }
}
