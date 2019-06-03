import { combineReducers } from "redux";

export interface ICurrentUserState{
    username: string,
    password: string,
    roles: roles[]
}


//all the states we are following
export interface IState{

}

//
export const state = combineReducers<IState>({

}