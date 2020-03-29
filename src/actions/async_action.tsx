import {loginFailure, loginStarted, loginSuccess} from "./action";

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
            if (body.authToken){
                dispatch(loginSuccess(body))
            }else {
                dispatch(loginFailure(res.body))
            }
        } else {
            dispatch(loginFailure(res.body))
        }
    }

}