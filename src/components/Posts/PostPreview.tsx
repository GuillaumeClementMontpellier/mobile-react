import React from "react";
import {Post} from "../../state/entities";

interface PostPreviewProps {
    post: Post
    onClick: (arg0: string) => void
}

export default function PostPreview({post, onClick, className}: PostPreviewProps & { className?: string }) {

    return (<div className={className} onClick={() => onClick(post._id)}>
        <h2 className={"post-title"}>{post.publicationTitle}</h2>
        <p>{post.publicationAuthor.userPseudo}</p>
        <p>{post.publicationScore.length}</p>
        <p>{post.publicationDescription}</p>
    </div>)
}