import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

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
        <div className="hero">

            <div className="title"><h1> THE LAST SHINOBI</h1></div>

            <div className="body">
                <div className="content">
                    <p> IMAGE</p>


                </div>

                <div ref={heroRef} className="text-hero">
                    <p> TEXT TEXT</p>
                </div>
            </div>
        </div>
        
        </>
    )

}

export default Hero