import {ICurrentUserState} from '.'


// creates the initial state using the interface of userstate from the index 
const initialState: ICurrentUserState = {
    username: '',
    password: ''
}



export const CurrentUserReducer = (state = initialState, action) => {

}