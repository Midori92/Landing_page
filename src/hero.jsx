import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Element from "./element";

gsap.registerPlugin(SplitText) 
gsap.registerPlugin(ScrollTrigger);




function Hero() {

const heroRef = useRef(null);

  useLayoutEffect(() => {

    let split = SplitText.create(heroRef.current,{
        type: "chars"
    });

    gsap.to(split.chars, {
        y: -400,
        
    
      stagger: {
        amount: 0.5,
        from: "random"
      },

      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      }

    });

  }, []);


    return(
        <>
        <div className="hero_section" id="hero" >

            <div className="hero_title"><h1> THE LAST SHINOBI</h1></div>

                <div className="hero_content">
                  
                    <Element/>

                </div>

                <div ref={heroRef} className="hero_text">
                    <p> THE NEW HERO IS BORN</p>
                </div>


                <div className="hero_instruc1"
                >
                  <p> ↓ Scroll to discover ↓</p>
                </div>
        
        </div>
        
        </>
    )

}

export default Hero