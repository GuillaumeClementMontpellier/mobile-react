import {Action, ActionTypes} from "../ActionTypes";
import {display} from "./display";

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

export function logout() {
    return (dispatch: any) => {
        dispatch(clearLogin());
        dispatch(display({message: "Logged Out successfully"}))
    }
}

function clearLogin() {
    return {
        type: ActionTypes.LOGOUT
    }
}
