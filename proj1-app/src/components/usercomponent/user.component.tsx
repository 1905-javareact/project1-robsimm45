import React from "react";
import { connect } from "react-redux";
import { User } from "../../models/users";
import { IState } from "../../reducers";
import { RouteComponentProps } from "react-router";
import { userNavComponent } from "../nav/user-nav.component";
import { BrowserRouter, Link } from "react-router-dom";
import { obtainAllUsers, obtainUser } from "../../actions/user.actions";
import { CurrentUserReducer } from "../../reducers/loginUser.reducer";
//import { obtainAllUsers, obtainUser } from "../../actions/user.actions";

// numbers for dad, ust keeping it here just in case 24 52  77 62  50 61

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


    componentWillMount(){

    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    {/* So gotta figure out for extra components*/}
                    <table>
                        <tr>
                            <th>User ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Roles</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>{this.props.currentUser.userId}</td>
                                <td>{this.props.currentUser.firstName}</td>
                                <td>{this.props.currentUser.lastName}</td>
                                <td>{this.props.currentUser.username}</td>
                                <td>{this.props.currentUser.password}</td>
                                <td>{this.props.currentUser.email}</td>
                                <td>{this.props.currentUser.printRoles()}</td>

                            </tr>
                        </tbody>
                    </table>
                    {this.userCanSee() ? <button> <Link to='/seeAllUsers'> See All Users </Link> </button>: null}
                    {this.userCanSee() ? <button> <Link to='/findUser'>Find User Using Id</Link> </button>: null}
                    {this.userCanSee() ? <button> <Link to='/updateUser'>Update a Certain User</Link></button>: null}
                </div>
            </BrowserRouter>
        ) 
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