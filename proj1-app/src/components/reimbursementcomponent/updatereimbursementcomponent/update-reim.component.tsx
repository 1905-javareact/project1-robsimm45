import React from "react";
import { connect } from "react-redux";
import { User } from "../../../models/users";
import { IState } from "../../../reducers";
import { RouteComponentProps } from "react-router";
import { Reimbursement } from "../../../models/reimbursement";
import { updateReimbursement } from "../../../actions/reimbursement.action";


interface IUpdatedReimState{
    toBeUpdated: Reimbursement
}

interface IReimbursementProps extends RouteComponentProps{
    currentUser: User
    foundReimbursements: Reimbursement[]
    updateReimbursement: (reim) => void
}


class reimbursementUpdateComponent extends React.Component<IReimbursementProps, IUpdatedReimState>{
    constructor(props){
        super(props)
        this.state = {
            toBeUpdated: new Reimbursement
        }
    }
    
    selectReim = (event) =>{
        event.preventDefault()
        console.log(event.target.value)

        let tempArray = this.props.foundReimbursements.find((reim)=>{return reim.reimbursementId === event.target.value})
        if(tempArray !== undefined){
            this.setState({
                toBeUpdated: tempArray
            })
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


    
    updateReim = (event) =>{
        this.props.updateReimbursement(this.state.toBeUpdated)
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
                    <form className="form-signin text-center">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Enter Id of The Reimbursement You Wanted To Update </h1>
                    <input type="number" id="inputSearchId" className="form-control" onChange={this.selectReim} required autoFocus/>
                    </form>

                    <div>
                        <form onSubmit={this.updateReim}>
                        <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                        <h1>Update Reimbursement</h1>
                        <input type='number' value={this.state.toBeUpdated.amount} onChange={this.changeAmount}/>
                        <input type='text' value={this.state.toBeUpdated.dateSubmitted} onChange={this.changeDateSub}/>
                        <input type='text' value={this.state.toBeUpdated.dateResolved} onChange={this.changeDateRes}/>
                        <input type='text' value={this.state.toBeUpdated.description} onChange={this.changeDescription}/>
                        <input type='text' value={this.state.toBeUpdated.resolver} onChange={this.changeResolver}/>
                        <input type='text' value={this.state.toBeUpdated.author}onChange={this.changeAuthor}/>
                        <select value={this.state.toBeUpdated.type} onChange={this.changeType}>
                            <option value='Lodging'>Lodging</option>
                            <option value='Travel'>Travel</option>
                            <option value='Food'>Food</option>
                            <option value='Other'>Other</option>
                        </select>
                        <select value={this.state.toBeUpdated.status} onChange={this.changeStatus}>
                            <option value='Pending'>Pending</option>
                            <option value='Approved'>Approved</option>
                            <option value='Denied'>Denied</option>
                        </select>
                        </form>
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
        foundReimbursements: state.ReimbursementFinder.foundReimbursements
    }

}

const mapActionToProps = {
    updateReimbursement
}

export default connect(mapStateToProps,mapActionToProps)(reimbursementUpdateComponent)