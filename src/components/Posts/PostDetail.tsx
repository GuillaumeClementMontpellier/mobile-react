import React from "react";
import {Post} from "../../state/entities";


interface PostDetailsProps {
    post?: Post
    load: () => void
}

export default function PostDetail({post, load, className}: PostDetailsProps & { className?: string }) {

    if(!post){
        load();
        return <span/>
    }

    return (<div className={className}>
        <h1>{post.publicationTitle}</h1>
    </div>)
}