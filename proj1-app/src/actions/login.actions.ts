import { loginClient } from "../axios/login-api.client";
import { User } from "../models/users";

export const loginTypes ={
    New_User: 'NEW_USER_LOGGED_IN'
}

export const submitUser = (username:string, password:string) => async (dispatch) => {
    try{
        let found:User = await loginClient.fullLogin(username, password)
    
        dispatch({
            payload:{
                foundUser: found,
                errorMessage: ''
            },
            type: loginTypes.New_User
        })

    }catch(err){
        console.log(err)
    }
}