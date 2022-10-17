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
   
      <div>
      
      <Link to="/profile"><Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /></Link>
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}
