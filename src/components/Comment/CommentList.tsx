import React from "react";
import {Comment} from "../../state/entities";
import DynComment from "../../containers/Comment/DynComment";

interface CommentListProps {
    comments: Comment[]
    name: string
}

export default function CommentList(props: CommentListProps & { className?: string }) {
    return (<div className={"comment-list"}>
        <div>
            <h3>{props.name}</h3>
            {props.comments.map((c: Comment) => <DynComment key={c._id} comment={c} className={"comment"}/>)}
        </div>
    </div>);
}
