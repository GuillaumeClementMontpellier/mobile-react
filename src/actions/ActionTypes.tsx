export enum ActionTypes {
    // Post
    FETCH_POST = "FETCH_POST",
    FETCH_SIGNALED_POST = "FETCH_SIGNALED_POST",
    CREATE_POST = "CREATE_POST",
    DELETE_POST = "DELETE_POST",
    SIGNAL_POST = "SIGNAL_POST",

    // Comment
    FETCH_COMMENT = "FETCH_COMMENT",
    POST_COMMENT = "POST_COMMENT",
    SIGNAL_COMMENT = "SIGNAL_COMMENT",
    DELETE_COMMENT = "DELETE_COMMENT",
    FETCH_SIGNALED_COMMENT = "FETCH_SIGNALED_COMMENT",

    // Auth
    LOGOUT = "LOGOUT",
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",

    // User
    FETCH_USER = "FETCH_USER",

    // Display
    ERROR_DISPLAY = "ERROR_DISPLAY",
    DISPLAY = "DISPLAY",

    // Route
    ROUTE_CHANGE = "@@router/LOCATION_CHANGE",
}

export interface Action {
    type: ActionTypes
    payload?: any
    error?: any
    meta?: any
}