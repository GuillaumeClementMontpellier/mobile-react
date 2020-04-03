import React from "react";
import {User} from "../../state/entities";
import {Link} from "react-router-dom";

interface PostCreateProps {
    author?: User
    submit: (user: User, data: any, token: string) => void
    token?: string
}

export default function PostDetail(props: PostCreateProps & { className?: string }) {

    if (!props.author) {
        return (<div><Link to={"/login"}>Log in</Link> to submit a post</div>);
    }

    return (<div className={props.className}>
        <form id={"create-post"} onSubmit={(e) => {
            e.preventDefault();
            props.submit(props.author as User, e.target, props.token as string)
        }}>

            <div className={"form-div"}>
                Title : <input type={"text"} name={"publicationTitle"} className={"form-input"}/>
            </div>
            <div className={"form-div"}>
                <textarea className={"comment-area"} form={"create-post"} name={"publicationDescription"}/>
            </div>
            <div className={"form-div"}>
                Post as Discussion ? <input type={"checkbox"} className={"form-input"} name={"isDiscussion"}/>
            </div>
            <div className={"form-div"}>
                Post as Anonymous ? <input type={"checkbox"} className={"form-input"} name={"isAnonymous"}/>
            </div>

            <input className={"form-input"} type={"submit"} value={"Post"}/>
        </form>
    </div>)
}