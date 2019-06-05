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
                ///didn't think highest role through maybe a function is needed
                //errorMesage: action.
            }
    }

    return state
}