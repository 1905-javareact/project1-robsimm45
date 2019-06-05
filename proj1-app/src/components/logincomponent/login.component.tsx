import React from "react";
import { connect } from "react-redux";
import { User } from "../../models/users";
import { IState } from "../../reducers";
import { submitUser } from "../../actions/login.actions";
import { RouteComponentProps } from "react-router";

// numbers for dad, ust keeping it here just in case 24 52  77 62  50 61

interface ICurrentUserState{
    username: string // not null, unique
    password: string // not null
}

interface ICurrentUserProps extends RouteComponentProps{
    currentUser: User
    highestRole: string
    errorMessage: string
    submitUser: (username:string, password:string) => void
}


export class loginComponent extends React.Component<ICurrentUserProps, ICurrentUserState>{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    

    loginSubmit = (event) => {
        event.preventDefault()
        this.props.submitUser(this.state.username, this.state.password)
    }


    updateUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    updatePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }


    render(){
        return (
            <form className="form-signin text-center" onSubmit={this.loginSubmit}>
            <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputUsername" className="sr-only">Username</label>
            <input type="text" id="inputUsername" className="form-control" value={this.state.username} onChange={this.updateUsername}placeholder="Username" required autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" value={this.state.password} onChange={this.updatePassword} placeholder="Password" required/>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <p>{this.props.errorMessage}</p>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
        </form>
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

const mapActionToProps = {
    submitUser
}


export default connect(mapStateToProps,mapActionToProps)(loginComponent)