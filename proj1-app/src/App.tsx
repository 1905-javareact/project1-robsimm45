import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavComponent } from './components/nav/nav.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    /*<Provider store={store}>*/
      <BrowserRouter>
    
      <div className="App">
      <NavComponent/>
        <Switch>
         
          {/* <Route path='/users' component={UserComponent}/>  for testing*/}
        </Switch>
      </div>
      </BrowserRouter>
    /*</Provider>*/
  );
}

export default App;
