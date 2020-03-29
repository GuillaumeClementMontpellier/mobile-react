export interface Params{
    visiblePosts : number[]
    visibleComment : number[]

    // if not logged in, all null / undefined, if logged, all values
    authToken? : string
    activeUser? : string
}