import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function Section_1(){

    const Section1Ref = useRef(null)

    useLayoutEffect(() =>
    {gsap.to(Section1Ref.current,{
        
    backgroundColor: "pink",

    scrollTrigger: {
        trigger: Section1Ref.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
        
    },
    

    })},[]);


    return(
        <>
        <div ref={Section1Ref} className="section">

            <div className="content_perso"> 
                <p> PERSO </p>

            </div>

            <div className="content_txt"> 
                <p> blablablabla </p>

            </div>


        </div>
        
        </>
    )


}

export default Section_1