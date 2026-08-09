import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Section_1() {

  const section1Ref = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {

    const split = SplitText.create(textRef.current, {
      type: "chars"
    });

    gsap.fromTo(split.chars, { opacity:0 }, {

      y: 400,
      opacity: 1,

      stagger: {
        amount: 0.5,
        from: "random",
        
      },

      scrollTrigger: {
        trigger: section1Ref.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true
      }

    });

    gsap.to(split.chars, {

      y: 600,
      opacity: 0,

      stagger: {
        amount: 0.5,
        from: "random",
       
      },

      scrollTrigger: {
        trigger: section1Ref.current,
        start: "bottom 80%",
        end: "bottom top",
        scrub: true,
       
      }

    });

    gsap.to(section1Ref.current, {

      backgroundColor: "pink",

      scrollTrigger: {
        trigger: section1Ref.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
        markers: true
      }

    });

    return () => {
      split.revert();
    };

  }, []);

  return (
    <div ref={section1Ref} className="section">

      <div className="content_perso">
        <p>PERSO</p>
      </div>

      <div className="content_txt">
        <p ref={textRef}>
          blablablabla
        </p>
      </div>

    </div>
  );
}

export default Section_1;