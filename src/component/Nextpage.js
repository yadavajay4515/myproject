import React from 'react'
import Navbar2 from './Navbar2'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Addmarksheet from './Addmarksheet';
import Marksheetlist from './Marksheetlist';
import College from './College';
import Collegelist from './Collegelist';
import Home from './Home';
import Addrole from './Addrole';
import Rolelist from './Rolelist';
import AddUser from './AddUser';
import UserList from './UserList';
import Addstudent from './Addstudent';
import StudentList from './StudentList';

export default function Nextpage() {
  return (
    <div>
      <Router>
    <Navbar2/>
    <Switch>
    <Route exact path="/home" component={Home } />
    <Route exact path="/addmarksheet" component={Addmarksheet} />
    <Route exact path="/marksheetlist" component={Marksheetlist} />
    <Route exact path="/marksheet/:pid" component={Addmarksheet } />
    <Route exact path="/college" component={College} />
    <Route exact path="/collegelist" component={Collegelist} />
    <Route exact path="/college/:cid" component={College} />
    <Route exact path="/addrole" component={Addrole} />
    <Route exact path="/rolelist" component={Rolelist} />
    <Route exact path="/rolelist/:rid" component={Addrole} />
     <Route exact path="/adduser" component={AddUser} />
    <Route exact path="/userlist" component={UserList} />
    <Route exact path="/userlist/:ajay" component={AddUser } />
    <Route exact path="/addstudent" component={Addstudent} />
    <Route exact path="/studentlist" component={StudentList} />
    <Route exact path="/studentlist/:sid" component={Addstudent} />

        </Switch>
      </Router>
            </div> 
    
  )
}
