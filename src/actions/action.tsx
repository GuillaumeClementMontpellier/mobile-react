import {Action, ActionTypes} from "./ActionTypes";

export function loginStarted(): Action{
    return {
        type: ActionTypes.LOGIN
    }
}

export function loginSuccess(body : string): Action{
    return {
        type: ActionTypes.LOGIN,
        payload : {body}
    }
}

export function loginFailure(resultBody : any): Action{
    return {
        type: ActionTypes.LOGIN,
        error: resultBody
    }
}

