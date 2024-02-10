import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  return(
    <div className='Navbar-container'>
    <nav className='Navbar'>
      <button className='Navbar-btn'> 
        <NavLink exact to='/ramen'> Ramen </NavLink> 
      </button>

      <button className='Navbar-btn'> 
        <NavLink exact to='/soda'> Soda </NavLink> 
      </button>

      <button className='Navbar-btn'> 
        <NavLink exact to='/popsicle'> Popsicle </NavLink> 
      </button>
    </nav> 
    </div>
  )
}

export default Navbar;