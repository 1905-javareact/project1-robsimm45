import React from "react";
import { connect } from "react-redux";
import { User } from "../../../models/users";
import { IState } from "../../../reducers";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { obtainUser } from "../../../actions/user.actions";

interface ICurrentUsersState{
    UsersId : number
}

interface ICurrentUserProps extends RouteComponentProps{
    currentUser: User
    foundUser: User
    obtainUser: (userId) => void
}


class userIdComponent extends React.Component<ICurrentUserProps, ICurrentUsersState>{
    constructor(props){
        super(props);
        this.state = {
            UsersId: 0
        }
    }

    submitUserId = (event)=>{
        event.preventDefault()
        this.props.obtainUser(this.state.UsersId)
    }


    updateUserId = (event)=>{
        this.setState({
            UsersId: event.target.value
        })
    }

    gotId(){
        if(this.props.foundUser.userId === 0){
            return false
        }else{
            return true
        }
    }

    userCanSee(){
        for(let rol of this.props.currentUser.role){
            if(rol.roleName === 'finance-manager'){
                return true
            } else if(rol.roleName === 'admin'){
                return true
            }
            return false
        }

    }

    printRoles(){
        let result = ''
        for(let x of this.props.foundUser.role){
          result += x.roleName + ', '
        }
        console.log(result)
        return result
      }

    render(){
        if(this.userCanSee()){
            return (
                <div>
                    <form className="form-signin text-center" onSubmit={this.submitUserId}>
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Enter User Id You want to Search</h1>
                    <label htmlFor="inputUserId" className="sr-only">UserId</label>
                    <input type="text" id="inputUserId" className="form-control" value={this.state.UsersId} onChange={this.updateUserId}placeholder="UserId" required autoFocus/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Search</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                    </form>    
                    
                    <div>
                    {this.gotId() ? <table>
                        <thead>
                        <tr>
                            <th>User ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Roles</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.foundUser.userId}</td>
                                <td>{this.props.foundUser.firstName}</td>
                                <td>{this.props.foundUser.lastName}</td>
                                <td>{this.props.foundUser.username}</td>
                                <td>{this.props.foundUser.password}</td>
                                <td>{this.props.foundUser.email}</td>
                                <td>{this.printRoles()}</td>

                            </tr>
                        </tbody>
                    </table>: null}
                    </div>
                </div>            
            ) 
        } else {
            this.props.history.goBack()
            return ''
        }
    }   
        
}

const mapStateToProps = (state:IState) =>{
    return{
        currentUser: state.CurrentUser.currentUser,
        foundUser: state.UserFinder.foundUser
    }

}

const mapActionToProps = {
    obtainUser
}

export default connect(mapStateToProps,mapActionToProps)(userIdComponent)