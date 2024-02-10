import React from 'react';
import Soda from './Soda'
import Ramen from './Ramen';
import Popsicle from './Popsicle';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import useNavbar from './hooks/useNavbar';


function App() {
  const { showNavbar, setShowNavbar } = useNavbar();

  return (
    <main className='App'>
      <BrowserRouter>
        {showNavbar && <Navbar />} 
        <Routes>
          <Route exact path='/' element={<VendingMachine setShowNavbar={ setShowNavbar }/>}/>
          <Route exact path='/ramen' element={<Ramen setShowNavbar={ setShowNavbar }/>}/>
          <Route exact path='/soda' element={<Soda setShowNavbar={ setShowNavbar }/>}/>
          <Route exact path='/popsicle' element={<Popsicle setShowNavbar={ setShowNavbar }/>}/>
        </Routes>
        </BrowserRouter>
    </main>
    
  );
}

export default App;
