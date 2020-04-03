import {displayError} from "../action_creator/display";
import {fetchUserStarted, fetchUserSuccess} from "../action_creator/user";


export function fetchAuthor(idUser: string) {

    return async (dispatch: any, getState: any, BASE_URL_RESSOURCES: string) => {
        dispatch(fetchUserStarted());

        const res = await fetch(BASE_URL_RESSOURCES + "users/" + idUser, {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            const body = await res.json();
            dispatch(fetchUserSuccess(body));
        } else {
            let resText = await res.text();
            dispatch(displayError({message: resText}))
        }
    }

}