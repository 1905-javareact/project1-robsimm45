import React from "react";
import { connect } from "react-redux";
import { User } from "../../models/users";
import { IState } from "../../reducers";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { obtainAllUsers, obtainUser } from "../../actions/user.actions";

interface ICurrentUsersState{
    
}

interface ICurrentUserProps extends RouteComponentProps{
    currentUser: User
    obtainAllUsers: () => void
    obtainUser: (userId) => void
}


class userComponent extends React.Component<ICurrentUserProps, ICurrentUsersState>{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentWillMount(){
        this.props.obtainAllUsers()
    }

    userCanSee(){
        for(let rol of this.props.currentUser.role){
            if(rol.roleName === 'finance-manager'){
                return true
            } else if(rol.roleName === 'admin'){
                return true
            }else if(rol.roleName === 'employee'){
                return true
            }
            return false
        }

    }

    userAuthorized(){
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
        for(let x of this.props.currentUser.role){
          result += x.roleName + ', '
        }
        console.log(result)
        return result
      }

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
                            <tr>
                                <td>{this.props.currentUser.userId}</td>
                                <td>{this.props.currentUser.firstName}</td>
                                <td>{this.props.currentUser.lastName}</td>
                                <td>{this.props.currentUser.username}</td>
                                <td>{this.props.currentUser.password}</td>
                                <td>{this.props.currentUser.email}</td>
                                <td>{this.printRoles()}</td>

                            </tr>
                        </tbody>
                    </table>
                    {this.userAuthorized() ? <button> <Link to='/seeAllUsers'> See All Users </Link> </button>: null}
                    {this.userAuthorized() ? <button> <Link to='/findUser'>Find User Using Id</Link> </button>: null}
                    {this.userAuthorized() ? <button> <Link to='/updateUser'>Update a Certain User</Link></button>: null}
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
        currentUser: state.CurrentUser.currentUser
    }

}

const mapActionToProps = {
    obtainAllUsers,
    obtainUser
}

export default connect(mapStateToProps,mapActionToProps)(userComponent)