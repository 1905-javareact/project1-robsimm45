import { loginClient } from "../axios/login-api.client";
import { User } from "../models/users";

export const loginTypes ={
    New_User: 'NEW_USER_LOGGED_IN',
    Not_Found: 'USER_NOT_FOUND'
}

export const submitUser = (username:string, password:string) => async (dispatch) => {
    try{
        let found:User = await loginClient.fullLogin(username, password)

        console.log(found)

        if(found.firstName !== undefined){
            
            dispatch({
                payload:{
                    foundUser: found,
                    errorMessage: 'Logged In'
                },
                type: loginTypes.New_User
            })
    
        } else {
            dispatch({
                type: loginTypes.Not_Found
            })
    
        }

    }catch(err){
        console.log(err)
    }
}