export interface Post{
    id : number
    isPublication : Boolean
}

export interface Comment{
    id : number
    idPost : number
    content : String

    respondTo? : number
    author? : number
}

export interface User {
    id : string
    name : String
}

