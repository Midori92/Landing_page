
import Nav from './nav.jsx';
import Hero from './hero.jsx';
import './App.css';
import { useEffect, useState } from "react";
import Section1 from './section1.jsx';
import Section2 from './section2.jsx'
import {Canvas } from "@react-three/fiber";
import Scene from "./scene.jsx";

import Loader from './Loader.jsx';


function App() {

  const [loading, setLoading] = useState(true);
  

  return (

    
<html>
    {loading && ( <Loader onComplete = {() => setLoading(false)}/>)}

    <main>
    <Hero/>
    <Section1/>
    <Section2/>
    </main>
    
    <Scene/>
  

   
    
</html>
  )
}

export default App
