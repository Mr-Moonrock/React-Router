import React from 'react';
import { Link } from 'react-router-dom';
import './Ramen.css'

function Ramen({ setShowNavbar }) {
  setShowNavbar(false);
  return (
    <div>
      <h1> Sluuuuurrrrrpppp! </h1>
      <div className='Ramen-Image-container'> 
      <img 
        className='Ramen-Image'
        src='https://static.vecteezy.com/system/resources/previews/004/997/349/original/mexican-food-neon-sign-vector.jpg'
        alt='slurping ramen'
      />
      </div>
      <button className='Ramen-btn'>
        <Link to='/'> Go Back </Link>
      </button>
    </div>
  );
}

export default Ramen;