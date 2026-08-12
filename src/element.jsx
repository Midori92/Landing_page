
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Element() {

  const {scene} = useGLTF("/Shuriken-modele.glb");

  useEffect(() =>
{
    const anim_section1 = gsap.to(scene.rotation,{
        y: Math.PI * 2,
        
        scrollTrigger: {
            trigger: "#section1",
            start: "top top",
            end: "bottom center",
            scrub: 1,

        },
    });

     gsap.to(scene.position,{
        y: 0,
        x: -1,
        
        scrollTrigger: {
            trigger: "#section1",
            start: "top center",
            end: "bottom center",
            scrub: true,

        },
    });

    const rotation = gsap.to(scene.rotation,{
        y: "+=" + Math.PI * 2,
        duration: 8,
        repeat: -1,
        ease: "none",
        paused: true,

       
    });

    const trigger =  ScrollTrigger.create({
            trigger: "#hero",
            start: "top top",
            end: "bottom top",

            onEnter: () => rotation.play(),

            onLeave: () => rotation.pause(),

            onEnterBack: () => rotation.play(),

            onLeaveBack: () => rotation.pause(),

        });

     const anim_section2 = gsap.to(scene.position,{
        y: -1.5,
        x: 0,
        
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            end: "bottom center",
            scrub: true,

        },
    });

    gsap.to(scene.position,{
        y: 0,
        x: -1,
        
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            end: "bottom bottom",
            scrub: true,

        },
    });

    return () => {
        anim_section1.kill();
        rotation.kill();
        trigger.kill();
        anim_section2.kill();
    }

}, [scene])

  return (
    <primitive
    object = {scene}
    scale = {1} 
    position = {[0,0,0]}
    rotation = {[0, 0, 0]}
    />
  );
}


export default Element;