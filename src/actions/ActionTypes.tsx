export enum ActionTypes {
    ADD_POST = "ADD_POST",
    REMOVE_POST = "REMOVE_POST",
    LOGOUT = "LOGOUT",
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    ERROR_DISPLAY = "ERROR_DISPLAY",
    DISPLAY = "DISPLAY"
}

export interface Action {
    type: ActionTypes
    payload?: any
    error?: any
    meta?: any
}