export enum ActionTypes {
    // Post
    FETCH_POST = "FETCH_POST",
    SIGNALED_POST = "SIGNALED_POST",

    // Comment
    FETCH_COMMENT = "FETCH_COMMENT",
    POST_COMMENT = "POST_COMMENT",

    // Auth
    LOGOUT = "LOGOUT",
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",

    // Display
    ERROR_DISPLAY = "ERROR_DISPLAY",
    DISPLAY = "DISPLAY"
}

export interface Action {
    type: ActionTypes
    payload?: any
    error?: any
    meta?: any
}