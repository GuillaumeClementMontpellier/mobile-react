import React from "react";
import {Post} from "../../state/entities";
import DynPostPreview from "../../containers/Post/DynPostPreview";

interface PostListProps {
    name: string

    posts: Post[]

    loaded: boolean
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
        <h3 className={"list-title"}>{props.name}</h3>
        {props.posts.map((p: Post) => <DynPostPreview post={p} key={p._id}
                                                   className={"post-preview"}/>)}
        <button onClick={() => props.loadPosts(props.token)}>Refresh</button>
    </div>);
}