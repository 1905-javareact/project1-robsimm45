import { combineReducers } from "redux";

export interface ICurrentUserState{
    username: string,
    password: string
}


//all the states we are following
export interface IState{

}

//
export const state = combineReducers<IState>({

}