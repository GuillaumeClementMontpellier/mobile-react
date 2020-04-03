import {ActionTypes} from "../ActionTypes";
import {display} from "./display";

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
    return (dispatch: any) => {
        dispatch(commentSuccess(body));
        dispatch(display({message: "Comment Posted"}))
    }
}

function commentSuccess(body: any){
    return {
        type: ActionTypes.POST_COMMENT,
        payload: body
    }
}

export function signalCommentStarted() {
    return {
        type: ActionTypes.SIGNAL_COMMENT
    }
}

export function signalCommentSuccess(body: any) {
    return (dispatch: any) => {
        dispatch(scSuccess(body));
        dispatch(display({message: "Signaled !"}))
    }
}
function scSuccess(body: any) {
    return {
        type: ActionTypes.SIGNAL_COMMENT,
        payload: body
    }
}
export function deleteCommentStarted() {
    return {
        type: ActionTypes.DELETE_COMMENT
    }
}

export function deleteCommentSuccess(body: any) {
    return (dispatch: any) => {
        dispatch(dcSuccess(body));
        dispatch(display({message: "Deleted !"}))
    }
}

function dcSuccess(body: any) {
    return {
        type: ActionTypes.DELETE_COMMENT,
        payload: body
    }
}

export function fetchSignaledCommentsSuccess(body: any) {
    return {
        type: ActionTypes.FETCH_SIGNALED_COMMENT,
        payload: body
    }
}
export function fetchSignaledCommentsStarted() {
    return {
        type: ActionTypes.FETCH_SIGNALED_COMMENT
    }
}