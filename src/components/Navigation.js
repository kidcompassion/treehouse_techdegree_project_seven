import React from 'react';
import { 
  NavLink
 } from 'react-router-dom';


const Navigation = ()=>{


  
  
    return(
  
      <nav className="main-nav">
      <ul>
        
        <li><NavLink to='/pugs'>Pugs</NavLink></li>
        <li><NavLink to='/brussels-griffons'>Brussels Griffons</NavLink></li>
        <li><NavLink to='/dog-baths'>Dog Baths</NavLink></li>
      </ul>
    </nav>
      
    )
}

export default Navigation;