import {
    createPostStarted, createPostSuccess, deletePostStarted, deletePostSuccess,
    fetchPostsStarted,
    fetchPostsSuccess,
    fetchSignaledStarted,
    fetchSignaledSuccess, signalStarted, signalSuccess
} from "../action_creator/posts";
import {displayError} from "../action_creator/display";
import {User} from "../../state/entities";
import {push} from "connected-react-router";
import {
    fetchCommentsSuccess,
    fetchSignaledCommentsStarted,
    fetchSignaledCommentsSuccess
} from "../action_creator/comments";


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
            dispatch(displayError({message: resText}))
        }
    }

}

export function fetchPost(id: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {

        if (!id) {
            return;
        }

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
            if (body) {
                dispatch(fetchPostsSuccess([body]));
            } else {
                dispatch(push("/"))
            }
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}))
        }
    }

}

export function fetchSignaled(auth_token: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
        dispatch(fetchSignaledStarted());
        dispatch(fetchSignaledCommentsStarted());

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
            dispatch(fetchCommentsSuccess(body.listCommentSig));

            dispatch(fetchSignaledSuccess(body));
            dispatch(fetchSignaledCommentsSuccess(body));
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}))
        }
    }

}


export function createPost(post: any, user: User, token: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
        dispatch(createPostStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "publications", {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify(post)
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(createPostSuccess(body));
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}))
        }
    }

}

export function signalPost(postId: string, token: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
        dispatch(signalStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "signal/pub/" + postId, {
            method: 'PUT',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(signalSuccess(body));
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}))
        }
    }

}


export function deletePost(id: string, token: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
        dispatch(deletePostStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "publications/" + id, {
            method: 'DELETE',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(deletePostSuccess(body));
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}))
        }
    }

}