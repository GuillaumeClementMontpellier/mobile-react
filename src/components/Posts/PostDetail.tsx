import React from "react";
import {Comment, Post} from "../../state/entities";
import CommentList from "../Comment/CommentList";
import {Link, NavLink} from "react-router-dom";

interface PostDetailsProps {
    post?: Post

    // in case not loaded
    _id: string
    load: (id: string) => void
    fetching: boolean

    // Comments
    loadComments: (id: string) => void
    comments: Comment[]
    postComment: (id: string, content: string) => void

    // Admin or OP
    canEdit: boolean
    delete: (id: string) => void
    token?: string
}

export default function PostDetail(props: PostDetailsProps & { className?: string }) {

    if (!props.post) {
        if (!props.fetching) {
            props.load(props._id);
        }
        return <span/>
    }

    return (<div className={props.className}>
        <div className={"post-card"}>
            <h1 className={"post-title"}>{props.post.publicationTitle}</h1>

            {props.canEdit ?
                <button className={"delete-button"} onClick={() => props.delete(props._id)}>DELETE</button> : null}

            <div className={"post-content"}>

                <p>{props.post.publicationAuthor.userPseudo}</p>
                <p>{props.post.publicationScore.length}</p>
                <p>{props.post.publicationDescription}</p>
            </div>

            {props.token ? (<form className={"comment-form"} id={"add-comment"} onSubmit={(e) => {
                e.preventDefault();
                const target: any = e.target;
                props.postComment(props._id, target.comment.value);
                target.comment.value = ""
            }}>
                <h3>Write a comment : </h3>
                <textarea className={"comment-area"} form={"add-comment"} name={"comment"}/>
                <input type={"submit"}/>
            </form>) : <p><Link to={"/login"}>Log in</Link> to comment</p>}

        </div>

        <CommentList comments={props.comments}/>

        <button onClick={() => props.loadComments(props._id)}>Load Comments</button>
    </div>)
}