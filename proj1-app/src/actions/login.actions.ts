import { loginClient } from "../axios/login-api.client";

export const loginTypes ={
    New_User: 'NEW_USER_LOGGED_IN'
}

export const submitUser = (username:string, password:string) => async (dispatch) => {
    dispatch({
        payload:{
            foundUser: await loginClient.fullLogin(username, password)
        },
        type: loginTypes.New_User
    })
}