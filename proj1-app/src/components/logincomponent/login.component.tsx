import { connect } from "react-redux";
import React from "react";
import { User } from "../../models/users";
import { IState } from "../../reducers";

// numbers for dad, ust keeping it here just in case 24 52  77 62  50 61

interface ICurrentUserState{
    username: string // not null, unique
    password: string // not null
}

interface ICurrentUserProps{
    currentUser: User
    highestRole: string
    errorMessage: string
    submitUser: (username: string, password:string) => void
}


export class loginComponent extends React.Component<ICurrentUserProps, ICurrentUserState>{
    
    render(){
        return (
            
        ) 
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        currentUser: state.CurrentUser.currentUser,
        highestRole: state.CurrentUser.highestRole,
        errorMessage: state.CurrentUser.errorMessage
    }
}

const mapDispatchToProps = {
    submitUser
}


export default connect(mapStateToProps,mapDispatchToProps)(loginComponent)