import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";



function Element() {

  const {scene} = useGLTF("/Shuriken-modele.glb") 
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