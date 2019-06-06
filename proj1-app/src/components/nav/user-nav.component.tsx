import React from "react";
import {Link} from 'react-router-dom'

export class userNavComponent extends React.Component{
    render(){
        return (
            <div>
                <ul className='user-ul'>
                    <li className = 'user-li'> 
                        <Link to='/userInfo' className='notAnchor'> Log In </Link>
                    </li>
                <   li className = 'user-li'>
                        <Link to='/AllUsers' className='notAnchor'> Find User</Link>
                    </li>
                    <li className = 'user-li'>
                        <Link to='/userUpdate' className='notAnchor'>Update User</Link>
                    </li>
                </ul>
            </div>
        )
    }
}