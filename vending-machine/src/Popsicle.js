import React from 'react';
import { Link } from 'react-router-dom';
import './Popsicle.css'

function Popsicle({ setShowNavbar }) {
  setShowNavbar(false);

  return (
    <div>
      <h1> BRRRRRRRRRRRRR!!! BRAIN FREEZE </h1>
      <div className='Popsicle-Image-container'>
        <img 
          className='Popsicle-Image'
          src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjkyNy1pY2VjcmVhbTItMTNfMS5qcGc.jpg'
          alt='Popsicle'
        />
      </div>
      <button className='Popsicle-btn'>
        <Link to='/'> Go Back </Link>
      </button>
    </div>
  )
}

export default Popsicle;