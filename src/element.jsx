import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Element() {

  const { scene } = useGLTF("/Shuriken-modele.glb");

  useEffect(() => {

    const rotation = gsap.to(scene.rotation, {
      y: "+=" + Math.PI * 2,

      duration: 8,

      repeat: -1,

      ease: "none",
    });



    const section1Position = gsap.to(scene.position, {

      x: -1,
      y: 0,

      scrollTrigger: {
        trigger: "#section1",

        start: "top center",
        end: "bottom center",

        scrub: 1,
      },

    });



    const section2Position = gsap.to(scene.position, {

      x: 0,
      y: -1.5,

      scrollTrigger: {
        trigger: "#section2",

        start: "top center",
        end: "bottom center",

        scrub: 1,
      },

    });



    return () => {

      rotation.kill();

      section1Position.kill();

      section2Position.kill();

      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });

    };

  }, [scene]);


  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default Element;