import {ICurrentUserState} from '.'
import { loginTypes } from '../actions/login.actions';



// creates the initial state using the interface of userstate from the index 
const initialState: ICurrentUserState = {
    currentUser: undefined,
    highestRole: '',
    errorMessage: ''
}



export const CurrentUserReducer = (state = initialState, action) => {
    switch(action.type){
        case loginTypes.New_User:
            return{
                ...state,
                currentUser: action.payload.foundUser,
                errorMessage: action.payload.errorMessage
            }
        case loginTypes.Not_Found:
            return{
                ...state,
                errorMessage: 'User Not Found'
            }
    }

    return state
}