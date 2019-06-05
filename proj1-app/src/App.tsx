import React from 'react';
import './App.css';
import { NavComponent } from './components/nav/nav.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { loginComponent } from './components/logincomponent/login.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
    
      <div className="App">
      <NavComponent/>
        <Switch>
            <Route path='/login' component={loginComponent}/>
          {/* <Route path='/users' component={UserComponent}/>  for testing*/}
        </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
