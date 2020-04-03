import React from "react";
import {Comment, User} from "../../state/entities";
import {Link} from "react-router-dom";

interface CDProps {
    comment: Comment

    author?: User
    loadAuthor: (idUser: string) => void

    // Signalement
    signal: (idCom: string, token: string) => void
    token?: string

    canEdit: boolean
    deleteComment: (id: string, token: string) => void
}

export default function CommentDetail(props: CDProps & { className?: string }) {

    if (!props.author) {
        props.loadAuthor(props.comment.commentAuthor);
        return <span/>
    }

    return (<div className={props.className}>
        <div className={"comment-header"}>

            <p className={"comment-author"}>By {!props.comment.isAnonymous || props.canEdit ?
                <Link to={"/user/" + props.author._id}>{props.author.userPseudo}</Link> : "Anonymous"
            }</p>

            {props.token ? <button className={"comment-signal link-button-reverse"}
                                   onClick={() => props.signal(props.comment._id, props.token as string)}>Signaler
            </button> : null}

        </div>
        <div className={"comment-header"}>

            <p className={"comment-content"}>{props.comment.commentDescription}</p>
        </div>

        {props.canEdit ?
            <button className={"deleteButton"}
                    onClick={() => {
                        if (window.confirm('Are you sure you wish to delete this?'))
                            props.deleteComment(props.comment._id, props.token as string)
                    }}>DELETE</button> : null}
    </div>)
}