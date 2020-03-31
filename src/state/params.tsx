export interface Params{
    signaledPosts : string[]
    signaledComments : string[]

    // if not logged in, all null / undefined, if logged, all values
    authToken? : string
    activeUser? : string
}
