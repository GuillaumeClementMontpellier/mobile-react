import React from "react";
import {Post} from "../../state/entities";
import PostPreview from "./PostPreview";

interface PostListProps {
    name: string
    posts: Post[]
    loaded: boolean
    onClick: (arg0: string) => void
    loadPosts: (auth?: string) => void
    token?: string
    fetching: boolean
}


export default function PostList(props: PostListProps & { className?: string }) {

    if (!props.loaded) {
        if (!props.fetching) {
            props.loadPosts(props.token);
        }
        return <span/>;
    }

    return (<div className={"post-list " + props.className}>
        <h1 className={"list-title"}>{props.name}</h1>
        {props.posts.map((p: Post) => <PostPreview post={p} key={p._id} onClick={props.onClick}
                                                   className={"post-preview"}/>)}
        <button onClick={() => props.loadPosts(props.token)}>Refresh</button>
    </div>);
}