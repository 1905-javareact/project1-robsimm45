import { userClient } from "../axios/user-api.client";
import { User } from "../models/users";

export const userTypes ={
    Found_User: 'NEW_USER_LOGGED_IN',
    Found_All: 'FOUND_ALL_USERS',
    Not_Found: 'USER_NOT_FOUND'
}

export const obtainAllUsers = () => async (dispatch) => {
    try{
        let found:User = await userClient.allUsers()

        console.log(found)

        if(found.firstName !== undefined){
            
            dispatch({
                payload:{
                    foundUser: found,
                    errorMessage: 'Logged In'
                },
                type: userTypes.Found_All
            })
    
        } else {
            dispatch({
                type: userTypes.Not_Found
            })
    
        }

    }catch(err){
        console.log(err)
    }
}

export const obtainUser = (id) => async (dispatch) => {
    try{
        let found:User = await userClient.getUser(id)

        console.log(found)

        if(found.firstName !== undefined){
            
            dispatch({
                payload:{
                    foundUser: found,
                    errorMessage: 'Logged In'
                },
                type: userTypes.Found_User
            })
    
        } else {
            dispatch({
                type: userTypes.Not_Found
            })
    
        }

    }catch(err){
        console.log(err)
    }
}