import { ISearchedUsersState, state } from ".";
import { userTypes } from "../actions/user.actions";

const initialState:ISearchedUsersState = {
    foundUsers: [],
    errorMessage: ''
}



export const UserSearcherReducer = (state = initialState, action) => {
    switch(action.type){
        case userTypes.Found_All:
            return{
                ...state,
                foundUsers: action.payload.foundUser
            }
        case userTypes.Found_User:
            return{
                ...state,
                foundUsers: action.payload.foundUser
            }
        case userTypes.Not_Found:
            return{
                ...state,
                errorMessage: 'User not found'
            }
    }

    return state
}