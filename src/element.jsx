
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";



function Element() {

  const {scene} = useGLTF("/Shuriken-modele.glb");
  const elementRef = useRef();

  useEffect(() =>
{
    gsap.to(scene.rotation,{
        y: Math.PI * 2,
        duration: 3,
        reapeat: -1,
        ease: "none",
    });

}, [scene])

  return (
    <primitive
    object = {scene}
    scale = {2} 
    position = {[0,-1,0]}
    rotation = {[3, -15, 3]}
    />
  );
}


export default Element;