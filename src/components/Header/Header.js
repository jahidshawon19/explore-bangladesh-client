import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from './../../hooks/useAuth'

const Header = () => {

  const {user, logOut} = useAuth()
  
    return (
        <div>
    <nav className="navbar navbar-dark navbar-expand-md">
  <div className="container">
    <Link to="/home" className="navbar-brand text-dark font-weight-bold">
     Explore Bangladesh</Link>
    <button className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNav" className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/booking">Admin</Link>
        </li>
        

        <li className="nav-item">
        <Link className="nav-link" to="/">{user?.displayName}</Link>
        </li>
        <li className="nav-item">
       {
         user?.email ? 
        
         <button className="btn btn-sm btn-danger" onClick={logOut}>Logout</button>
         :
         <Link className="nav-link" to="/login">Login</Link>
       }
        </li>
 
      
      </ul>
     </div>
   </div>
 </nav>
        </div>
    );
};

export default Header;