import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import './Navigation.css';
import Home from './Home.js'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 

function Navigation(props) {
  return (
    <BrowserRouter>  
        <div className="navigation">         
          <div className="navigation-sub">
                                          
            {/* Set up the Links */}
            <Link to="/home" className="item">Home</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>          
        {/* Set up the Router */}        
        <Route path="/home" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />        
        </div>
    </BrowserRouter>
    )
}

export default Navigation;