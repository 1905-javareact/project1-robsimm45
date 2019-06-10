import React from "react";
import { connect } from "react-redux";
import { User } from "../../models/users";
import { IState } from "../../reducers";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Reimbursement } from "../../models/reimbursement";
import { obtainByAuthor } from "../../actions/reimbursement.action";

interface IAuthorState{
    authorId : number
}

interface ICurrentUserProps extends RouteComponentProps{
    currentUser: User
    foundReimbursements: Reimbursement[]
    obtainByAuthor: (authorId) => void
}


class authorComponent extends React.Component<ICurrentUserProps, IAuthorState>{
    constructor(props){
        super(props);
        this.state = {
            authorId: 0,
        }
    }

    submitAuthorId = (event)=>{
        event.preventDefault()
        this.props.obtainByAuthor(this.state.authorId) 
    }


    updateAuthorId = (event)=>{
        this.setState({
            authorId: event.target.value
        })
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

        let printReims = this.props.foundReimbursements && this.props.foundReimbursements.map((foundReimbursements)=>{
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
                    <form className="form-signin text-center" onSubmit={this.submitAuthorId}>
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Enter Author Id of Reimbursements You want to Search</h1>
                    <input type="text" id="inputAuthorId" className="form-control" value={this.state.authorId} onChange={this.updateAuthorId}placeholder="UserId" required autoFocus/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Search</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
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
        foundReimbursement: state.ReimbursementFinder.foundReimbursements
    }

}

const mapActionToProps = {
    obtainByAuthor
}

export default connect(mapStateToProps,mapActionToProps)(authorComponent)