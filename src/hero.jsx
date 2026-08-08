import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {

const heroRef = useRef(null);

  useLayoutEffect(() => {

    gsap.to(heroRef.current, {
      x: 200,
      duration: 3,

      backgroundColor:'blue',

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