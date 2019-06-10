import React from "react";
import { connect } from "react-redux";
import { User } from "../../../models/users";
import { IState } from "../../../reducers";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Reimbursement } from "../../../models/reimbursement";
import { submitReimbursement } from "../../../actions/reimbursement.action";
import { jsxAttribute } from "@babel/types";


interface IUpdatedReimState{
    toBeUpdated: Reimbursement
}

interface IReimbursementProps extends RouteComponentProps{
    currentUser: User
    foundReimbursements: Reimbursement[]
    submitReimbursement: (reim) => void
}


class reimbursementSubmitComponent extends React.Component<IReimbursementProps, IUpdatedReimState>{
    constructor(props){
        super(props)
        this.state = {
            toBeUpdated: new Reimbursement
        }
    }


    changeAmount = (event) =>{
        event.preventDefault()
        let tempReim = this.state.toBeUpdated
        tempReim.amount = event.target.value
        this.setState({
            toBeUpdated: tempReim
        })
    }

    changeDateSub = (event) =>{
        event.preventDefault()
        let tempReim = this.state.toBeUpdated
        tempReim.dateSubmitted = event.target.value
        this.setState({
            toBeUpdated: tempReim
        })
    }

    changeDateRes = (event) =>{
        event.preventDefault()
        let tempReim = this.state.toBeUpdated
        tempReim.dateResolved = event.target.value
        this.setState({
            toBeUpdated: tempReim
        })
    }

    changeDescription = (event) =>{
        event.preventDefault()
        let tempReim = this.state.toBeUpdated
        tempReim.description = event.target.value
        this.setState({
            toBeUpdated: tempReim
        })
    }

    changeResolver = (event) =>{
        event.preventDefault()
        let tempReim = this.state.toBeUpdated
        tempReim.resolver = event.target.value
        this.setState({
            toBeUpdated: tempReim
        })
    }

    changeAuthor = (event) =>{
        event.preventDefault()
        let tempReim = this.state.toBeUpdated
        tempReim.author = event.target.value
        this.setState({
            toBeUpdated: tempReim
        })
    }

    changeType = (event) =>{
        event.preventDefault()
        let tempReim = this.state.toBeUpdated
        tempReim.type = event.target.value
        this.setState({
            toBeUpdated: tempReim
        })
    }

    changeStatus = (event) =>{
        event.preventDefault()
        let tempReim = this.state.toBeUpdated
        tempReim.status = event.target.value
        this.setState({
            toBeUpdated: tempReim
        })
    }


    
    addReim = (event) =>{
        this.props.submitReimbursement(this.state.toBeUpdated)
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


    render(){
        console.log(this.props.foundReimbursements)
        if(this.userCanSee()){
            return (
                <div>
                    
                        <form onSubmit={this.addReim}>
                        <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                        <h1>Make a New Reimbursement (Must have all fields filled)</h1>
                        <input type='number' placeholder='Amount' onChange={this.changeAmount}/>
                        <input type='text' placeholder='Date Submitted' onChange={this.changeDateSub}/>
                        <input type='text' placeholder='Date Resolved' onChange={this.changeDateRes}/>
                        <input type='text' placeholder='Description' onChange={this.changeDescription}/>
                        <input type='text' placeholder='Resolver' onChange={this.changeResolver}/>
                        <input type='text' placeholder='Author' onChange={this.changeAuthor}/>
                        <select onChange={this.changeType}>
                            <option value='Lodging'>Lodging</option>
                            <option value='Travel'>Travel</option>
                            <option value='Food'>Food</option>
                            <option value='Other'>Other</option>
                        </select>
                        <select onChange={this.changeStatus}>
                            <option value='Pending'>Pending</option>
                            <option value='Approved'>Approved</option>
                            <option value='Denied'>Denied</option>
                        </select>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                        </form>
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
    submitReimbursement
}

export default connect(mapStateToProps,mapActionToProps)(reimbursementSubmitComponent)