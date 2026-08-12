import {Canvas } from "@react-three/fiber";
import Element from "./element.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Scene(){
    

    return(

     <div className="sene">  <Canvas>
      <ambientLight intensity={0.15} />

      <directionalLight
        position={[3, 5, 2]}
        intensity={3}
      />

      <pointLight
      position={[2, 2, 2]}
      intensity={10}
    />

     <Element/>
    </Canvas> 
    </div> 

    )
}

export default Scene