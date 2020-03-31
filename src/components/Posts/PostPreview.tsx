import React from "react";
import {Post} from "../../state/entities";

interface PostPreviewProps{
    post: Post
    onClick: (arg0: string) => void
}

export default function PostPreview({post,onClick, className}: PostPreviewProps & {className?: string}) {
    const handleClick = () => {
        onClick(post._id)
    };

    return (<div className={className} onClick={handleClick}>
        <h2 className={"post-prev-title"}>{post.publicationTitle}</h2>
        <p>{post.publicationAuthor.userPseudo}</p>
        <p>{post.publicationScore.length}</p>
        <p>{post.publicationDescription}</p>
    </div>)
}