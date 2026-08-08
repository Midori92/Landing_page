
import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);






function Section_2(){


    const Section2Ref = useRef(null)

    useLayoutEffect(() =>
    {gsap.to(Section2Ref.current,{
        
    backgroundColor: "lightblue",

    scrollTrigger: {
        trigger: Section2Ref.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        
    },
    

    })},[]);

    return(
        <>
        <div ref={Section2Ref} className="section_2">
            <div className="text_section2">
                <p>Text </p>

            </div>
            
            <div className="perso_section2">
                <p>Personnage marche</p>

            </div>

            
        </div>
        
        </>
    )

}

export default Section_2