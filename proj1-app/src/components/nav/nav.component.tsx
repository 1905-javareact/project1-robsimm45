import React from "react";
import {Link} from 'react-router-dom'
import { User } from "../../models/users";
import { IState } from "../../reducers";
import { connect } from "react-redux";

interface ICurrentUserProps{
    currentUser: User
}

export class NavComponent extends React.Component<ICurrentUserProps>{
    
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
    
    render(){
        return (
            <nav>
                <ul className='nav-ul'>
                    <li className = 'nav-li'> 
                        <Link to='/login' className='notAnchor'> Log In </Link>
                    </li>
                <   li className = 'nav-li'>
                        <Link to='/users' className='notAnchor'> User Profile</Link>
                    </li>
                    {this.userCanSee() ? <li className = 'nav-li'>
                        <Link to='/Reimbursements' className='notAnchor'> Reimbursements </Link>
                    </li> : null}
                    <li className = 'nav-li'>
                        <Link to='/Dash' className='notAnchor'> </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        currentUser: state.CurrentUser.currentUser
    }

}

const mapActionToProps = {

}

export default connect(mapStateToProps,mapActionToProps)(NavComponent)