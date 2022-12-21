// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
// import Registration from './component/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AddUser from './component/AddUser';

class App extends React.Component{
  render(){
    return(
     <>
     <Router>
    <Navbar/>
         <div className='container my-3'>
     <Switch>       
          <Route exact path="/login" component={Login} />                 
          <Route exact path="/registration" component={AddUser} />
                   
        
         </Switch>
         </div>
     </Router>
    
     </>
     );
  }
}


export default App;
