
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

    
<>
    {loading && ( <Loader onComplete = {() => setLoading(false)}/>)}
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
/*
/// let value = 0;
        const interval = setInterval(() =>
        {value += 1;
        setProgess(value);

         if (value >= 100){

            clearInterval(interval);

            gsap.to(".loader",{
                opacity: 0,
                duration: 1,
                delay: 0.3,
                onComplete
            });
         }
        
    }, 20);

    return () => clearInterval(interval);*/