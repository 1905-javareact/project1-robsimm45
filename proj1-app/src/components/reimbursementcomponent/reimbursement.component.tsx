import React from "react";
import { connect } from "react-redux";
import { User } from "../../models/users";
import { IState } from "../../reducers";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Reimbursement } from "../../models/reimbursement";
import { findReimbursementsByStatus } from "../../actions/reimbursement.action";
import { jsxAttribute } from "@babel/types";

interface ICurrentUsersState{
    statusType: number
    statusName: string
}

interface IReimbursementProps extends RouteComponentProps{
    currentUser: User
    foundReimbursements: Reimbursement[]
    findReimbursementsByStatus: (status) => void
}


class reimbursementComponent extends React.Component<IReimbursementProps, ICurrentUsersState>{
    constructor(props){
        super(props);
        this.state = {
            statusType: 1,
            statusName: '',
        }
    }

    convStatus = (value) =>{
        if(value === 'Pending'){
            this.setState({
                statusType: 1
            })
        } else if(value === 'Approved'){
            this.setState({
                statusType: 2
            })
        }else if(value === 'Denied'){
            this.setState({
                statusType: 3
            })
        }
    }

    updateReimbursement = (event) =>{
        event.preventDefault()
        this.setState({
            statusName: event.target.value
        })
        this.convStatus(event.target.value)
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

    componentDidMount(){
        this.props.findReimbursementsByStatus(this.state.statusType)
    }

    componentDidUpdate(){
        this.props.findReimbursementsByStatus(this.state.statusType)
    }

    render(){
        let printReims = this.props.foundReimbursements.map((foundReimbursements)=>{
            return(
                <tr key={`${foundReimbursements.reimbursementId}`}>
                    <td>{foundReimbursements.reimbursementId}</td>
                    <td>{foundReimbursements.author}</td>
                    <td>{foundReimbursements.amount}</td>
                    <td>{foundReimbursements.dateSubmitted}</td>
                    <td>{foundReimbursements.dateResolved}</td>
                    <td>{foundReimbursements.description}</td>
                    <td>{foundReimbursements.resolver}</td>
                    <td>{foundReimbursements.status}</td>
                    <td>{foundReimbursements.type}</td>
                </tr>
            )
        })
        if(this.userCanSee()){
            return (
                <div>
                    <form className="form-signin text-center">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Choose to search by Status or Author </h1>
                    <select id="selectStat" className="form-control" value={this.state.statusName} onChange={this.updateReimbursement} required autoFocus>
                        <option value='Pending'>Pending</option> 
                        <option value='Approved'>Approved</option>
                        <option value='Denied'>Denied</option> 
   
                    </select>
                    </form>    
                    
                    <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Reimbursement ID</th>
                            <th>Author</th>
                            <th>Amount</th>
                            <th>Date Submitted</th>
                            <th>Date Resolved</th>
                            <th>Description</th>
                            <th>Resolver</th>
                            <th>Status</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                            {printReims}
                        </tbody>
                    </table>
                    </div>
                    <button> <Link to='/seeAuthors'> See Reimbursements By Author </Link> </button>
                    <button> <Link to='/updateReim'> Update One Of The Reimbursements Here </Link> </button>
                    <button> <Link to='/submitReim'> Submit New Reimbursement</Link></button>
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
        foundReimbursements: state.ReimbursementFinder.foundReimbursements
    }

}

const mapActionToProps = {
    findReimbursementsByStatus
}

export default connect(mapStateToProps,mapActionToProps)(reimbursementComponent)