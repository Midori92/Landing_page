import {Canvas } from "@react-three/fiber";
import Element from "./element.jsx";

function Scene(){

    return(

        <Canvas>
      <ambientLight intensity={0.15} />

      <directionalLight
        position={[3, 5, 2]}
        intensity={3}
      />

      <pointLight
      position={[2, 2, 2]}
      intensity={10}
    />

      <mesh>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="red" />
</mesh>
    </Canvas>

    )
}

export default Scene