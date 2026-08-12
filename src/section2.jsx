
import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.registerPlugin(ScrollTrigger);




function Section_2(){


    const section2Ref = useRef(null);
    const text2Ref = useRef(null);

    useLayoutEffect(() =>
    {

     const split = SplitText.create(text2Ref.current, {
      type: "chars"
    });

    gsap.fromTo(split.chars, { opacity:0, y: -400}, {

      y: 0,
      opacity: 1,

      stagger: {
        amount: 0.5,
        from: "random",
        
      },

      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true
      }

    });
        
    gsap.to(section2Ref.current,{
        
    

    scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        
    },
    

    })},[]);

    return(
        <>
        <div ref={section2Ref} className="section_2">
            <div className="text_section2">
                <p ref={text2Ref}>　ARE YOU READY ?</p>

            </div>
            
            <div className="perso_section2">
                

            </div>

            
        </div>
        
        </>
    )

}

export default Section_2