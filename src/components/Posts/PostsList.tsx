import React from "react";
import {Post} from "../../state/entities";
import PostPreview from "./PostPreview";

interface PostListProps {
    name: string
    posts: Post[]
    onClick: (arg0: string) => void
    loadPosts: (auth? : string) => void
    token?: string
}


export default function PostList({posts, loadPosts, token,name, onClick, className}: PostListProps & { className?: string }) {
    const handleClick = () => {
        loadPosts(token)
    }

    return (<div className={"post-list " + className}>
        <h1 className={"list-title"}>{name}</h1>
        {posts.map((p: Post) => <PostPreview post={p} key={p._id} onClick={onClick} className={"post-preview"}/>)}
        <button onClick={handleClick}>Refresh</button>
    </div>);
}