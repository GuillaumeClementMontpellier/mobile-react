export enum PostFilter {
    ALL_POSTS = "ALL_POSTS",
    DISCUSSIONS = "DISCUSSION",
    PUBLICATIONS = "PUBLICATIONS"
}

export interface CommentFilter{
    category : String | undefined
}

export interface UI{
    postFilter : PostFilter
    commentFilter : CommentFilter
    error?: Error
    message?: Message
}

export interface Error{
    message: string
}
export interface Message{
    message: string
}