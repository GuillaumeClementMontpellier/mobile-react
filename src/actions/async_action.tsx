import {
    display,
    displayError, fetchPostsStarted, fetchPostsSuccess, fetchSignaledStarted, fetchSignaledSuccess,
    loginStarted,
    loginSuccess,
    registerStarted,
    registerSuccess
} from "./action";
import {push} from 'connected-react-router'

const BASE_URL_RESSOURCES = "https://intense-cove-31113.herokuapp.com/";

export function login(data: { userMail: string, userPassword: string }) {

    return async (dispatch: any) => {
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

    return async (dispatch: any) => {
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

export function fetchPosts() {

    return async (dispatch: any) => {
        dispatch(fetchPostsStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "publications", {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(fetchPostsSuccess(body));
        } else {
            let resText = await res.text();
            console.log(resText);
            dispatch(displayError({message: resText}))
        }
    }

}

export function fetchSignaled(auth_token: string) {

    return async (dispatch: any) => {
        dispatch(fetchSignaledStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "signal", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': auth_token
            }
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(fetchPostsSuccess(body.listPostSig));
            dispatch(fetchSignaledSuccess(body));
        } else {
            let resText = await res.text();
            console.log(resText);
            dispatch(displayError({message: resText}))
        }
    }

}