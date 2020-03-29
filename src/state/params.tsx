export interface Params{
    visiblePosts : number[]
    visibleComment : number[]

    // if not logged in, all null / undefined, if logged, all values
    isAnon? : Boolean
    isAdmin? : Boolean
    authToken? : String
    activeUser? : number
}