import { combineReducers } from "redux";
import { CurrentUserReducer } from "./loginUser.reducer";
import { User } from "../models/users";
import { UserSearcherReducer } from "./userSearch.reducer";
import { Reimbursement } from "../models/reimbursement";
import { ReimbursementSearcherReducer } from "./reimbursementSearch.reducer";

export interface ICurrentUserState{
    currentUser: User
    highestRole: string
    errorMessage: string
}

export interface ISearchedUsersState{
    foundUsers: User[]
    foundUser: User
    errorMessage: string
}

export interface ISearchedReimbursementState{
    foundReimbursements: Reimbursement[]
    errorMessage: string
}


//all the states we are following
export interface IState{
    CurrentUser: ICurrentUserState
    UserFinder: ISearchedUsersState
    //ReimbursementFinder: ISearchedReimbursementState


}

//
export const state = combineReducers<IState>({
    CurrentUser: CurrentUserReducer,
    UserFinder: UserSearcherReducer,
    //ReimbursementFinder: ReimbursementSearcherReducer,
})