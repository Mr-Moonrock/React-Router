import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css'

function VendingMachine( { setShowNavbar } ) {
  setShowNavbar(true);

  return (
    <div className='VendingMachine'> 
      <h1 className='VendingMachine-heading'> Pick an item from the Vending Machine </h1>
    </div>
  )
}

export default VendingMachine;