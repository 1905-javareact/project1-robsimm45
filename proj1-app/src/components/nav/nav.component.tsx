import React from "react";
import {Link} from 'react-router-dom'

export class NavComponent extends React.Component{
    render(){
        return (
            <div>
                <ul className='nav-ul'>
                    <li className = 'nav-li'> 
                        <Link to='/Login' className='notAnchor'> Log In </Link>
                    </li>
                <   li className = 'nav-li'>
                        <Link to='/users' className='notAnchor'> Find User</Link>
                    </li>
                    <li className = 'nav-li'>
                        <Link to='/userUpdate' className='notAnchor'>Update User</Link>
                    </li>
                    <li className = 'nav-li'>
                        <Link to='/Reimbursements' className='notAnchor'> </Link>
                    </li>
                </ul>
            </div>
        )
    }
}