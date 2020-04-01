import React from "react";
import {Comment} from "../../state/entities";
import CommentDetail from "./CommentDetail";

interface CommentListProps {
    comments: Comment[]
}

export default function CommentList(props: CommentListProps & { className?: string }) {
    return (<div className={"comment-list " + props.className}>
        <div>
            <h3>Other commented :</h3>
            {props.comments.map((c: Comment) => <CommentDetail key={c._id} comment={c} className={"comment"}/>)}
        </div>
    </div>);
}