import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar.jsx';
import Herosection from './components/Herosection.jsx';
import Logo from './components/Logo.jsx';
import Services from './components/Services.jsx';
import About from '../src/components/About.jsx';

function App() {


  return (
    <>
      <Navbar />
      <Herosection />
      <Logo/>
      <Services/>
      <About/>
    </>
  )
}

export default App
