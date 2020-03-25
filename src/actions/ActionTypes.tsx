import {Post} from "../interfaces";

export enum ActionTypes{
    AddPost = "Add_Post",
    RemovePost = "Remove_Post"
}

export interface Action{
    type : ActionTypes
    payload? : {
        post? : Post
    }
    error?: {}
    meta? : {}
}