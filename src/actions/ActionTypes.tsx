import {Post, Comment, User} from "../state/entities";

export enum ActionTypes{
    ADD_POST = "ADD_POST",
    REMOVE_POST = "REMOVE_POST",
    LOGOUT = "LOGOUT",
    LOGIN = "LOGIN"
}

export interface Action{
    type : ActionTypes
    payload? : any
    error?: any
    meta? : any
}