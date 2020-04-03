import {ActionTypes} from "../ActionTypes";
import {display} from "./display";
import {push} from "connected-react-router";

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
        type: ActionTypes.FETCH_SIGNALED_POST
    }
}
export function fetchSignaledSuccess(body: any) {
    return {
        type: ActionTypes.FETCH_SIGNALED_POST,
        payload: body
    }
}

export function signalStarted() {
    return {
        type: ActionTypes.SIGNAL_POST
    }
}

export function signalSuccess(body: any) {
    return (dispatch: any) => {
        dispatch(spSuccess(body));
        dispatch(display({message: "Signaled !"}))
    }
}

function spSuccess(body: any) {
    return {
        type: ActionTypes.SIGNAL_POST,
        payload: body
    }
}


export function createPostStarted(){
    return {
        type: ActionTypes.CREATE_POST
    }
}
export function createPostSuccess(body: any) {
    return (dispatch: any) => {
        dispatch(cPostSuccess(body));
        dispatch(push("/post/"+body._id))
    }
}
function cPostSuccess(body: any) {
    return {
        type: ActionTypes.CREATE_POST,
        payload: body
    }
}


export function deletePostStarted(){
    return {
        type: ActionTypes.DELETE_POST
    }
}

export function deletePostSuccess(body: any) {
    return (dispatch: any) => {
        dispatch(push("/posts"));
        dispatch(dPostSuccess(body));
        dispatch(display({message: "Post deleted"}));
    }
}
function dPostSuccess(body: any) {
    return {
        type: ActionTypes.DELETE_POST,
        payload: body
    }
}