import { connect } from "react-redux";
import React from "react";
import { Role } from "../../models/role";
import { User } from "../../models/users";
import { IState } from "../../reducers";

// numbers for dad, ust keeping it here just in case 24 52  77 62  50 61

interface ICurrentUserState{
    currentUser: User
    highestRole: string
    errorMessage: string
}

interface ICurrentUserProps{
    username: string // not null, unique
    password: string // not null
}


export class loginComponent extends React.Component<ICurrentUserProps, ICurrentUserState>{
    
}

const mapStateToProps = (state:IState) =>{
    return{
        username: 
        password:
    }
}

const mapDispatchToProps = {

}


  connect(mapStateToProps,mapDispatchToProps)(loginComponent)