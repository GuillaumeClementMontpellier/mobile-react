import {push} from "connected-react-router";
import {loginStarted, loginSuccess, registerStarted, registerSuccess} from "../action_creator/auth";
import {display, displayError} from "../action_creator/display";

export function login(data: { userMail: string, userPassword: string }) {

    return async (dispatch: any, getState : any, BASE_URL_RESSOURCES : string) => {
        dispatch(loginStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "login", {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            const body = await res.json();
            if (body.authToken) {
                dispatch(loginSuccess(body));
                dispatch(display({message: "Login success"}));
                dispatch(push('/'))
            } else {
                dispatch(displayError(body))
            }
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}))
        }
    }

}

export function register(data: any) {

    return async (dispatch: any, getState : any, BASE_URL_RESSOURCES : string) => {
        dispatch(registerStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "register", {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(registerSuccess(body));
            dispatch(display({message: "Register success"}));
            dispatch(login({userMail: data.userMail, userPassword: data.userPassword}))
        } else {
            let resText = await res.text();
            console.log(resText);
            dispatch(displayError({message: resText}))
        }
    }

}
