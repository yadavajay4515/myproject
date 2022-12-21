import React, { Component } from 'react'
// import { TbLogin } from "react-icons/tb";
// import {AiOutlineHome} from "react-icons/ai";
import {IoHomeSharp} from "react-icons/io5";

import {
    Link
  } from "react-router-dom";

export default class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-info" >
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/login"></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <div className="iohome" style={{paddingLeft: '18px' ,marginTop:'6px'}}><IoHomeSharp/></div>
      <li className="nav-item">
          
          <Link className="nav-link " aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          
          <Link className="nav-link " aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/registration">Registration</Link>
        </li>
       
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
