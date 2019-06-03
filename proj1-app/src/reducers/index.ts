import { combineReducers } from "redux";
import { CurrentUserReducer } from "./user.reducer";

export interface ICurrentUserState{
    username: string,
    password: string
}


//all the states we are following
export interface IState{

}

//
export const state = combineReducers<IState>({
ICurrentUserState: CurrentUserReducer
})