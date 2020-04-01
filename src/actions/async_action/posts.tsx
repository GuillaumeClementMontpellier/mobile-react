import {
    fetchPostsStarted,
    fetchPostsSuccess,
    fetchSignaledStarted,
    fetchSignaledSuccess
} from "../action_creator/posts";
import {displayError} from "../action_creator/display";


export function fetchPosts() {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
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

export function fetchPost(id: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
        dispatch(fetchPostsStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "publications/" + id, {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(fetchPostsSuccess([body]));
        } else {
            let resText = await res.text();
            console.log(resText);
            dispatch(displayError({message: resText}))
        }
    }

}

export function fetchSignaled(auth_token: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
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