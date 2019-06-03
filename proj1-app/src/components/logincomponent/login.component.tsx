import { connect } from "react-redux";
import React from "react";
import { Role } from "../../models/role";
import { User } from "../../models/users";
import { IState } from "../../reducers";

// numbers for dad, ust keeping it here just in case 24 52  77 62  50 61

interface ICurrentUserState{
    username: string // not null, unique
    password: string // not null
}

interface ICurrentUserProps{
    currentUser: User
}


export class loginComponent extends React.Component<any, any>{
    
}

const mapStateToProps = (state:IState) =>{

}

const mapDispatchToProps = {

}


  connect(mapStateToProps,mapDispatchToProps)(loginComponent)