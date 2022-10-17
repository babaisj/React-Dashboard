import React from 'react';
import {
  NavLink
} from "react-router-dom";



export default function Sidebar() {
  return (
   
    <div className='sideBar'>
      <ul>
        <li><NavLink className="navbar__link" activeClassName="navbar__link--active" exact to='/'><i className="material-icons-outlined">home</i> Dashboard</NavLink> </li>
        <li><a href='#'><i className="material-icons-outlined">people</i> User</a> </li>
        <li><a href='#'><i className="material-icons-outlined">dvr</i> Order</a> </li>
        <li><a href='#'><i className="material-icons-outlined">receipt_long</i> Report</a> </li>
        <li><NavLink className="navbar__link" activeClassName="navbar__link--active" exact to="/profile"><i className="material-icons-outlined">manage_accounts</i> Profile</NavLink> </li>
        <li><a href='#'><i className="material-icons-outlined">settings</i> Settings</a> </li>
      </ul>
    </div>
    
  )
}
