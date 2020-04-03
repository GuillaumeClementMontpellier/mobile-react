import React from "react";
import {Post, User} from "../../state/entities";

interface PostPreviewProps {
    post: Post
    onClick: (id: string) => void
    token?: string

    author?: User
    loadAuthor: (idUser: string) => void

    // Signalement
    signal: (idPost: string, token: string) => void
}

export default function PostPreview(props: PostPreviewProps & { className?: string }) {

    if (!props.author) {
        props.loadAuthor(props.post.publicationAuthor);
        return <span/>
    }

    return (<div className={props.className} onClick={() => props.onClick(props.post._id)}>
        <div className={"post-title-card"}>
            <h2 className={"post-title"}>{props.post.publicationTitle}</h2>
            {props.token ?
            <button className={"post-signal link-button-reverse"}
                    onClick={() => props.signal(props.post._id, props.token as string)}>Signaler
            </button> : null}
        </div>
        {props.post.isAnonymous ? null :
            <p className={"post-pseudo"}>By {props.author.userPseudo}</p>}
    </div>)
}