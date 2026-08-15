import { useEffect, useState } from "react";
import gsap from "gsap";

function Loader({ onComplete}){

    const[progress, setProgress] = useState(0);

    useEffect(() => {

        let value = 0;
        const interval = setInterval(() =>
        {value += 1;
        setProgress(value);

         if (value >= 100){

            clearInterval(interval);

            gsap.to(".loader",{
                opacity: 0,
                duration: 1,
                delay: 0.3,
                onComplete
            });
         }
        
    }, 20);

    return () => clearInterval(interval);
       

    }, [onComplete]);


    return(
        <>

        <div className="loader">
            <div className="loader_content">

                <p className="loader_title">
                    SHINOBI
                </p>

                <p className="loader_progress"> {progress}% </p>

                <div className="loader_bar">

                    <div className="loader_bar_progress" 
                    style = {{
                        width: `${progress}%`
                    }}/>


                </div>

            </div>



        </div>
        
        </>
    )
    
   

}

export default Loader