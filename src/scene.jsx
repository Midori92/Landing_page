import {Canvas } from "@react-three/fiber";
import Element from "./element.jsx";
import { useThree } from "@react-three/fiber";

import gsap from "gsap";
import { useRef, useEffect } from "react";

function CameraAnimation(){
    const {camera} = useThree();
  

    useEffect(() =>{
        const animation = 
        gsap.to(camera.rotation,{
            z: Math.PI * 1/4,
            x: Math.PI * 1/4,
            duration: 2,
        });

        return() => {
            animation.kill();
        }

        },[camera]
    );

    return null;
}

function Scene(){
    


    return(

     <div className="scene">  
     
     <Canvas
     
     camera={{
        position: [0,3,5],
        fov: 50
     }}>
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