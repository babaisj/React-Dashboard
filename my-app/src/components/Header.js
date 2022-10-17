import React from 'react'
import logo from '../img/logo.png';
import Avatar from '@mui/material/Avatar';
import {
  Link
} from "react-router-dom";





export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'><img src={logo} alt="Logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
     {/* <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul> */}
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div>
      
      <Link to="/profile"><Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /></Link>
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}
