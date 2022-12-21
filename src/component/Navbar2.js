import React, { Component } from 'react'
import logo from "./logo.png"
import {RiLogoutCircleLine} from "react-icons/ri";
import {ImHome3} from "react-icons/im";

import {
  Link
} from "react-router-dom";


export default class Navbar2 extends Component {
  name=localStorage.getItem("name");
  
  logout(){
  
    window.location.href = "/";

  }
  
  
  render() {
    return (
      <div>
       
        <ul className="nav nav-tabs ">
          <li className="nav-item mx-1"> <h1 ><img src={logo} alt="...."width="250" height="90" /></h1></li>
  
  <li className="nav-item mx-1" style={{marginTop:"56px"}} >
    <Link className="nav-link " to="/Home"><ImHome3/>&nbsp;&nbsp;Home</Link>
  </li>
  <li className="nav-item mx-1"style={{marginTop:"56px"}}>
    <div className='dropdown'>
    <Link className="btn btn-light nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Addstudent
  </Link>
  <ul className="dropdown-menu">
    <Link className="nav-link " to="/addstudent">Addstudent</Link>
   <Link className="nav-link " to="/studentlist">StudentList</Link>
   </ul>
      </div>
  </li>
  
  <li className="nav-item mx-1"style={{marginTop:"56px"}}>
    <div className='dropdown'>
    <Link className="btn btn-light nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  MarkSheet
  </Link>
  <ul className="dropdown-menu">
    <Link className="nav-link " to="/addmarksheet">Addmarksheet</Link>
   <Link className="nav-link " to="/marksheetlist">MarkSheet List</Link>
   </ul>
      </div>
  </li>
  <li className="nav-item mx-1"style={{marginTop:"56px"}}>
    <div className='dropdown'>
    <Link className="btn btn-light nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  College 
  </Link>
  <u1 className="dropdown-menu">
    <Link className="nav-link "to="/college">College details</Link>
      <Link className="nav-link "to="/collegelist">College list</Link>
      </u1>
      </div>
  </li>
  <li className="nav-item mx-1"style={{marginTop:"56px"}}>
    <div className='dropdown'>
    <Link className="btn btn-light nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Role
  </Link>
  <u1 className="dropdown-menu">
    <Link className="nav-link "to="/addrole">Addrole</Link>
      <Link className="nav-link "to="/rolelist">Rolelist</Link>
      </u1>
      </div>
  </li>
  <li className="nav-item mx-1"style={{marginTop:"56px"}}>
    <div className='dropdown'>
    <Link className="btn btn-light nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  User 
  </Link>
  <u1 className="dropdown-menu">
    <Link className="nav-link "to="/adduser">Adduser</Link>
      <Link className="nav-link "to="/userlist">Userlist</Link>
      </u1>
      </div>
  </li>
  <li style={{marginTop:"65px",width:'248px'}}>{this.name}</li>
 
   <li className="nav-item mx-1"style={{marginTop:"56px"}}>
    <Link className="nav-link " onClick={this.logout} style={{marginLeft:"60px"}}> 
logout<RiLogoutCircleLine color='brown' size=""/></Link>
  </li>
 
 
 

</ul>

      </div>

    )
  }
}
