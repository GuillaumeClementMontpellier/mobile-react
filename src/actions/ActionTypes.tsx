export enum ActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    LOGOUT = "LOGOUT",
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    ERROR_DISPLAY = "ERROR_DISPLAY",
    DISPLAY = "DISPLAY",
    SIGNALED_POST = "SIGNALED_POST"
}

export interface Action {
    type: ActionTypes
    payload?: any
    error?: any
    meta?: any
}