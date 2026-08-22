import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Element() {

  const { scene } = useGLTF("/Shuriken-modele.glb");


  useEffect(() => {

    const ctx = gsap.context(() => {


      // ==========================
      // ROTATION PERMANENTE
      // ==========================

      gsap.to(scene.rotation, {

        y: "+=" + Math.PI * 2,

        duration: 8,

        repeat: -1,

        ease: "none",

      });


      // ==========================
      // MOUVEMENT AVEC LE SCROLL
      // ==========================

      const tl = gsap.timeline({

        scrollTrigger: {

          trigger: "#hero",

          start: "top top",

          end: "bottom+=200% top",

          scrub: 1,

        }

      });


      tl.to(scene.position, {

        x: -2,

        y: 0,

      });


      tl.to(scene.position, {

        x: 1,

        y: -1.5,

      });


    });


    return () => ctx.revert();


  }, [scene]);


  return (

    <primitive

      object={scene}

      scale={1}

    />

  );

}


export default Element;