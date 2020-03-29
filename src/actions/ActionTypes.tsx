import {Post, Comment, User} from "../state/entities";

export enum ActionTypes{
    ADD_POST = "ADD_POST",
    REMOVE_POST = "REMOVE_POST",
    LOGOUT = "LOGOUT"
}

export interface Action{
    type : ActionTypes
    payload? : {
        post? : Post
        comment? : Comment
        user? : User
    }
    error?: {}
    meta? : {}
}