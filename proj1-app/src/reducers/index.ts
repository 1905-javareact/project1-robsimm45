import { combineReducers } from "redux";
import { CurrentUserReducer } from "./user.reducer";
import { User } from "../models/users";

export interface ICurrentUserState{
    currentUser: User
    highestRole: string
    errorMessage: string
}


//all the states we are following
export interface IState{

}

//
export const state = combineReducers<IState>({
ICurrentUserState: CurrentUserReducer
})