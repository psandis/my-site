// App.jsx - file
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Navigation from './Navigation';
import Contact from './Pages/Contact';
 
function App() {
  return (    
    <Router>
    <Navigation links={{}} />       
    <Switch>
        {/* Set up the Router */}
        <Route path="/" exact component={Home} />
        <Route exact path="/projects" component={Projects} />        
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />     
    </Switch>
    </Router>
  );
}
 
export default App;