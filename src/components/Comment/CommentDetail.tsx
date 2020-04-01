import React from "react";
import {Comment} from "../../state/entities";

interface CDProps{
    comment: Comment
}

export default function CommentDetail({className, comment}: CDProps & { className?: string }){
    return (<div className={className}>
        <p>{comment.commentDescription}</p>
    </div>)
}