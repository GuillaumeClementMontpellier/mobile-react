import {ActionTypes} from "../ActionTypes";
import {Error, Message} from "../../state/UI";

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
