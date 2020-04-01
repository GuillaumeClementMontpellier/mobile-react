import {
    fetchCommentsStarted,
    fetchCommentsSuccess,
    postCommentsStarted,
    postCommentsSuccess
} from "../action_creator/comments";
import {display, displayError} from "../action_creator/display";


export function fetchComments(id: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
        dispatch(fetchCommentsStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "publications/" + id + "/comments", {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(fetchCommentsSuccess(body));
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}))
        }
    }

}

export function postComment(id: string, content: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {

        let state = getState();

        const auth: string | undefined = state.params.authToken;

        if (!auth) {
            dispatch(displayError({message: "Not logged in"}));
            return;
        }

        dispatch(postCommentsStarted());

        const data = {
            idParent: id,
            commentAuthor: state.entities.Users[state.params.activeUser],
            commentDescription: content,
            category: "5e7e263cee6a042a24e48d1d"
        };

        const res = await fetch(BASE_URL_RESSOURCES + "comment", {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(postCommentsSuccess(body));
            dispatch(display({message: "Comment Posted !"}));
            dispatch(fetchComments(id));
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}));
        }
    }

}
