import { userClient } from "../axios/user-api.client";
import { User } from "../models/users";

export const userTypes ={
    Found_User: 'FOUND_USER',
    Found_All: 'FOUND_ALL_USERS',
    User_Updated: 'UPDATED',
    Not_Found: 'USER_NOT_FOUND'
}

export const obtainAllUsers = () => async (dispatch) => {
    try{
        let found:User[] = await userClient.allUsers()

        if(found[0].firstName !== undefined){
            
            dispatch({
                payload:{
                    foundUsers: found,
                    errorMessage: 'found them all'
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
                    errorMessage: ''
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

export const sendUser = (user) => async (dispatch) => {
    try{
        let found:User = await userClient.updateUser(user)

        console.log(found)

        if(found !== undefined){
            
            dispatch({
                type: userTypes.User_Updated
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