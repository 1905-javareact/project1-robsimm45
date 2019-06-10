import React from 'react';
import './App.css';
import  NavComponent  from './components/nav/nav.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import  loginComponent  from './components/logincomponent/login.component';
import  userComponent from './components/usercomponent/user.component';
import userAllComponent from './components/usercomponent/alluserscomponent/user.all.component';
import userIdComponent from './components/usercomponent/userbyidcomponent/user.id.component';
import reimbursementComponent from './components/reimbursementcomponent/reimbursement.component';
import reimbursementUpdateComponent from './components/reimbursementcomponent/updatereimbursementcomponent/update-reim.component';
import reimbursementSubmitComponent from './components/reimbursementcomponent/submitreimbursementcomponent/submit-reim.component';
import AuthorComponent from './components/reimbursementcomponent/reimbursement.author.component'
import updateUserComponent from './components/usercomponent/updateusercomponent/update-user.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
    
      <div className="App">
        <NavComponent/>
          <Switch>
            <Route path='/login' component={loginComponent}/>
            <Route path='/users' component={userComponent}/> 
            <Route path='/seeAllUsers' component={userAllComponent}/>
            <Route path='/findUser' component={userIdComponent}/>
            <Route path='/updateUser' component={updateUserComponent}/>
            <Route path='/Reimbursements' component={reimbursementComponent}/>
            <Route path='/seeAuthors' component={AuthorComponent}/>
            <Route path='/updateReim' component={reimbursementUpdateComponent}/>
            <Route path='/submitReim' component={reimbursementSubmitComponent}/>
          </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
