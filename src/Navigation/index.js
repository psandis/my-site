import React from "react";
import './Navigation.css';
import Home from '../Pages/Home.js'; 
import Projects from '../Pages/Projects.js'; 
import About from '../Pages/About.js'; 

import logo from '../Images/my-site.png';
import {Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink} from './Navigation';


const Navigation = (props) => {
  return (
    <>
      <Nav>
      {/* Set up the Links */}
      <NavMenu>
      <NavLink to="/" className="item">
        <img src={logo} style={{height: '50px', width: '50px'}} alt="Logo" />        
      </NavLink>
      <NavLink to="/projects" className="item">
        Projects
      </NavLink>      
      <NavLink to="/about" className="item">
        About
      </NavLink>
      <NavLink to="/contact" className="item">
        Contact
      </NavLink>
      </NavMenu>
        
      </Nav>   
     </> 
    )
}

export default Navigation;