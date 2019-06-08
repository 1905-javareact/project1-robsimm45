import React from "react";
import { connect } from "react-redux";
import { User } from "../../../models/users";
import { IState } from "../../../reducers/index";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { obtainUser } from "../../../actions/user.actions";
import { Role } from "../../../models/role";

interface ICurrentUsersState{
    
}

interface ICurrentUserProps extends RouteComponentProps{
    currentUser: User
    foundUsers: User[]

}


class userAllComponent extends React.Component<ICurrentUserProps, ICurrentUsersState>{
    constructor(props){
        super(props);
        this.state = {
            
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

    printRoles(role:Role[]){
        let result = ''
        for(let x of role){
          result += x.roleName + ', '
        }
        console.log(result)
        return result
    }


    printUsers = this.props.foundUsers.map((users, index)=>{
            return(
                <tr key={`${users.userId}`}>
                    <td>{users.userId}</td>
                    <td>{users.firstName}</td>
                    <td>{users.lastName}</td>
                    <td>{users.username}</td>
                    <td>{users.password}</td>
                    <td>{users.email}</td>
                    <td>{this.printRoles(users.role)}</td>
                </tr>
            )
        })
      

    render(){
        if(this.userCanSee()){
            return (
                <div>
                    <table>
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
                            {this.printUsers}
                        </tbody>
                    </table>
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
        foundUsers: state.UserFinder.foundUsers
    }

}

const mapActionToProps = {
}

export default connect(mapStateToProps,mapActionToProps)(userAllComponent)