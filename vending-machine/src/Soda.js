import React from 'react';
import { Link } from 'react-router-dom';
import './Soda.css'

function Soda({ setShowNavbar }) {
  setShowNavbar(false);
  return (
    <div>
      <h1> Yummy!!! </h1>
      <div className='Soda-Image-container'>
        <img 
          className='Soda-Image'
          src='https://img.pikbest.com/png-images/qianku/neon-summer-cold-drink-soda_2415609.png!sw800'
          alt='Soda'
        />
      </div>
      <button className='Soda-btn'>
        <Link to='/'> Go Back </Link>
      </button>
    </div>
  )
}

export default Soda;