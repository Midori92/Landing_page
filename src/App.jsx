
import Nav from './nav.jsx';
import Hero from './hero.jsx';
import './App.css';
import Section1 from './section1.jsx';
import Section2 from './section2.jsx'
import {Canvas } from "@react-three/fiber";
import Scene from "./scene.jsx";
import Element from "./element.jsx";


function App() {
  

  return (

    
<>

    <Nav/>
    <main>
    <Hero/>
    <Section1/>
    <Section2/>
    </main>
    
    <Scene/>
  

   
    
</>
  )
}

export default App
