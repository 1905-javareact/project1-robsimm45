import React from "react";
import { connect } from "react-redux";
import { User } from "../../../models/users";
import { IState } from "../../../reducers";
import { RouteComponentProps } from "react-router";
import { sendUser } from "../../../actions/user.actions";

interface ICurrentUsersState{
    userModified: User
    inputVal: number
}

interface ICurrentUserProps extends RouteComponentProps{
    currentUser: User
    allUsers: User[]
    sendUser: (User) => void
}


class updateUserComponent extends React.Component<ICurrentUserProps, ICurrentUsersState>{
    constructor(props){
        super(props)
        this.state = {
            userModified: new User,
            inputVal: 0
        }
    }

    changeSelect=(event)=>{
        event.preventDefault()
        this.setState({
            inputVal: parseInt(event.target.value)
        })
    }

    selectUser=(event)=>{
        event.preventDefault()
        const tempUser = this.props.allUsers.find((t)=>{return t.userId === this.state.inputVal})
        console.log(typeof(this.state.inputVal))
        console.log(tempUser)
        this.setState({
            userModified: tempUser
        })
    }

    changeUsername = (event) =>{
        event.preventDefault()
        let tempUser = this.state.userModified
        tempUser.username = event.target.value
        this.setState({
            userModified: tempUser
        })
    }

    changePassword = (event) =>{
        event.preventDefault()
        let tempUser = this.state.userModified
        tempUser.password = event.target.value
        this.setState({
            userModified: tempUser
        })
    }

    changeFirstName = (event) =>{
        event.preventDefault()
        let tempUser = this.state.userModified
        tempUser.firstName = event.target.value
        this.setState({
            userModified: tempUser
        })
    }

    changeLastName = (event) =>{
        event.preventDefault()
        let tempUser = this.state.userModified
        tempUser.lastName = event.target.value
        this.setState({
            userModified: tempUser
        })
    }

    changeEmail = (event) =>{
        event.preventDefault()
        let tempUser = this.state.userModified
        tempUser.email = event.target.value
        this.setState({
            userModified: tempUser
        })
    }



    updateUser = (event) =>{
        event.preventDefault()
        this.props.sendUser(this.state.userModified)
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

                    <form className="form-signin text-center" onSubmit={this.selectUser}>
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Enter Id of The User You Wanted To Update </h1>
                    <input type="text" id="inputSearchId" className="form-control" onChange={this.changeSelect} required autoFocus/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Search</button>
                    </form>

                    <div>

                    <form onSubmit={this.updateUser}>
                        <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                        <h1>Update Reimbursement</h1>
                        <input type='text' value={this.state.userModified.username} onChange={this.changeUsername}/>
                        <input type='text' value={this.state.userModified.password} onChange={this.changePassword}/>
                        <input type='text' value={this.state.userModified.firstName} onChange={this.changeFirstName}/>
                        <input type='text' value={this.state.userModified.lastName} onChange={this.changeLastName}/>
                        <input type='text' value={this.state.userModified.email} onChange={this.changeEmail}/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
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
        allUsers: state.UserFinder.foundUsers
    }

}

const mapActionToProps = {
    sendUser
}

export default connect(mapStateToProps,mapActionToProps)(updateUserComponent)