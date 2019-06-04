import {ICurrentUserState} from '.'
import { User } from '../models/users';



// creates the initial state using the interface of userstate from the index 
const initialState: ICurrentUserState = {
    currentUser: new User(),
    highestRole: '',
    errorMessage: ''
}



export const CurrentUserReducer = (state = initialState, action) => {

}