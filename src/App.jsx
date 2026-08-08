import { useState } from 'react';
import Nav from './nav.jsx';
import Hero from './hero.jsx';
import './App.css';
import Section1 from './section1.jsx';
import gsap from 'gsap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Hero/>
      <Section1/>
    </>
  )
}

export default App
