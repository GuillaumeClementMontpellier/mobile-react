import {Action, ActionTypes} from "./ActionTypes";
import {Error, Message} from "../state/UI";

export function loginStarted(): Action {
    return {
        type: ActionTypes.LOGIN
    }
}
export function registerStarted(): Action {
    return {
        type: ActionTypes.REGISTER
    }
}

export function loginSuccess(body: string): Action {
    return {
        type: ActionTypes.LOGIN,
        payload: {body}
    }
}

export function registerSuccess(body: string): Action {
    return {
        type: ActionTypes.REGISTER,
        payload: {body}
    }
}

export function logout(){
    return (dispatch: any)=>{
        dispatch(clearLogin());
        dispatch(display({message: "Logged Out successfully"}))
    }
}

export function clearLogin(){
    return {
        type: ActionTypes.LOGOUT
    }
}

export function clearError() {
    return {
        type: ActionTypes.ERROR_DISPLAY,
        error: undefined
    }
}

export function displayError(error: Error) {
    return {
        type: ActionTypes.ERROR_DISPLAY,
        error
    }
}
export function display(message: Message) {
    return {
        type: ActionTypes.DISPLAY,
        payload: message
    }
}
export function clearDisplay() {
    return {
        type: ActionTypes.DISPLAY
    }
}
export function fetchPostsStarted() {
    return {
        type: ActionTypes.FETCH_POSTS
    }
}
export function fetchPostsSuccess(body: any) {
    return {
        type: ActionTypes.FETCH_POSTS,
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
