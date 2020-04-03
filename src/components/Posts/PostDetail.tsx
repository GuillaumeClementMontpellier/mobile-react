import React from "react";
import {Comment, Post, User} from "../../state/entities";
import CommentList from "../Comment/CommentList";
import {Link} from "react-router-dom";

interface PostDetailsProps {
    post?: Post
    author?: User
    loadAuthor: (idUser: string) => void

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
    delete: (id: string, token: string) => void
    token?: string

    // Signalement
    signal: (idPost: string, token: string) => void
}

export default function PostDetail(props: PostDetailsProps & { className?: string }) {

    if (!props.post) {
        if (!props.fetching) {
            props.load(props._id);
        }
        return <span/>
    }

    if (!props.author) {
        props.loadAuthor(props.post.publicationAuthor);
        return <span/>
    }

    return (<div className={props.className}>
        <div className={"post-card"}>

            <div className={"post-title-card"}>
                <h1 className={"post-title"}>{props.post.publicationTitle}</h1>
                {props.token ?
                    <button className={"post-signal link-button-reverse"}
                            onClick={() => props.signal(props._id, props.token as string)}>Signaler
                    </button> : null}
            </div>

            <div className={"post-content"}>

                {!props.post.isAnonymous || props.canEdit ?
                    (<p className={"post-pseudo"}>By <Link
                        to={"/user/" + props.author._id}>{props.author.userPseudo}</Link> :
                    </p>) : null}

                <p className={"post-description"}>{props.post.publicationDescription}</p>

            </div>

            {props.canEdit ?
                <button className={"delete-button"}
                        onClick={() => {
                            if (window.confirm('Are you sure you wish to delete this?'))
                                props.delete(props._id, props.token as string)
                        }}>DELETE</button> : null}

            {props.token ? (<div>


                <form className={"comment-form"} id={"add-comment"} onSubmit={(e) => {
                    e.preventDefault();
                    const target: any = e.target;
                    props.postComment(props._id, target);
                    target.comment.value = ""
                }}>
                    <div className={"form-div"}>
                        <h3>Write a comment : </h3>
                    </div>
                    <div className={"form-div"}>
                        <textarea className={"comment-area"} form={"add-comment"} name={"comment"}/>
                    </div>
                    <div className={"form-div"}>
                        <input type={"checkbox"} name={"isAnonymous"}/><p>Post anonymously</p>
                    </div>
                    <div className={"form-div"}>
                        <input type={"submit"}/>
                    </div>

                </form>
            </div>) : <p><Link to={"/login"}>Log in</Link> to comment</p>
            }

        </div>

        <CommentList comments={props.comments} name={"Others Commented :"}/>

        <button onClick={() => props.loadComments(props._id)}>Load Comments</button>
    </div>);
}