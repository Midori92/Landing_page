import { useState, useEffect } from 'react';
import Nav from './nav.jsx';
import Hero from './hero.jsx';
import './App.css';
import Section1 from './section1.jsx';
import Section2 from './section2.jsx'
import gsap from 'gsap';

function App() {
 
  return (
    <>
      <Nav/>
      <Hero/>
      <Section1/>
      <Section2/>
    
    </>
  )
}

export default App
