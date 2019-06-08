import { ISearchedUsersState, state } from ".";
import { userTypes } from "../actions/user.actions";
import { User } from "../models/users";

const initialState:ISearchedUsersState = {
    foundUsers: [],
    foundUser: new User,
    errorMessage: ''
}



export const UserSearcherReducer = (state = initialState, action) => {
    switch(action.type){
        case userTypes.Found_All:
            return{
                ...state,
                foundUsers: action.payload.foundUsers
            }
        case userTypes.Found_User:
            return{
                ...state,
                foundUser: action.payload.foundUser
            }
        case userTypes.Not_Found:
            return{
                ...state,
                errorMessage: 'User not found'
            }
    }

    return state
}