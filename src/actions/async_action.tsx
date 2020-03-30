import {
    display,
    displayError,
    loginStarted,
    loginSuccess,
    registerStarted,
    registerSuccess
} from "./action";
import {push} from 'connected-react-router'

export function login(data: { userMail: string, userPassword: string }) {

    return async (dispatch: any) => {
        dispatch(loginStarted());

        const res = await fetch("http://localhost:4000/login", {
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
                dispatch(display({color: "green", message: "Login success"}));
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

    return async (dispatch: any) => {
        dispatch(registerStarted());

        const res = await fetch("http://localhost:4000/register", {
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
            dispatch(display({color: "green", message: "Register success"}));
            dispatch(login({userMail: data.userMail, userPassword: data.userPassword}))
        } else {
            let resText = await res.text();
            console.log(resText);
            dispatch(displayError({message: resText}))
        }
    }

}