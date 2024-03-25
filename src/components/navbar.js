import { NavLink } from 'react-router-dom';
import React from 'react';

function NavBar() {
      
  const navLinkStyles = ({ isActive }) => {
      return {
          fontWeight: isActive ? 'bold' : 'normal',
          // textDecoration: isActive ? 'dotted' : 'none',
          color: isActive ? 'black' : 'white'
      }
  }
  
  return (     
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid" >
      
              <NavLink className="navbar-brand" to="/"> </NavLink>
                  <button 
                      className="navbar-toggler" 
                      type="button" 
                      data-toggle="collapse" 
                      data-target="navbarNav" 
                      aria-controls="navbarNav" 
                      aria-expanded="false" 
                      aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

              <div className="collapse navbar-collapse" id="navbarNav" >

                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <NavLink  
                          to='/' 
                          style={navLinkStyles} 
                          className="nav-link" 
                          aria-current="page"
                          > Home </NavLink>                          
                      </li>

                      <li className="nav-item">
                          <NavLink 
                          to='/createaccount/' 
                          style={navLinkStyles} 
                          className="nav-link" 
                          >Create Account</NavLink>                          
                      </li>

                      <li className="nav-item">
                          <NavLink 
                          to="/deposit/" 
                          style={navLinkStyles} 
                          className="nav-link"
                          >Deposit</NavLink>                          
                      </li>

                      <li className="nav-item">
                          <NavLink  
                          to="/withdraw/" 
                          className="nav-link"
                          style={navLinkStyles}
                          >Withdraw</NavLink>                          
                      </li>

                      <li className="nav-item">
                          <NavLink 
                          to="/alldata/" 
                          style={navLinkStyles} 
                          className="nav-link"
                          >All Data</NavLink>                          
                      </li>           
              
                  </ul>
              </div>  
          </div>
      </nav>       
  );
}

export default NavBar;