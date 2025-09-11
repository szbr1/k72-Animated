'use client'
import K72LOGO from "@/app/__components/K72LOGO";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const images = [
  "/Photos/img1.jpg", 
  "/Photos/3.jpg",
  "/Photos/4.jpg",
  "/Photos/5.jpg",
  "/Photos/6.jpg",
  "/Photos/7.jpg",
  "/Photos/8.jpg",
]

function page() {
  gsap.registerPlugin(ScrollTrigger);

  const ImageContainerRef = useRef(null)
  const ImageRef = useRef(null)
  
  useGSAP(()=>{
    gsap.to(ImageContainerRef.current, {
      scrollTrigger: {
        pin: true,
        trigger: ImageContainerRef.current,
        start: "top 20%",
        end: "bottom -50%",
        scrub: true,
        onUpdate: (e)=>{
          const imageOrder =  Math.floor(e.progress * images.length)
          if(ImageRef.current && imageOrder < 7){
            console.log(imageOrder)
            ImageRef.current.src = images[imageOrder]
          }          
        }
      }
    })
  },[])
  return (
    <div className="min-h-screen w-full relative font-Lausanne bg-black text-white ">

      {/* logo  */}
      <div className="absolute top-2 left-2"><K72LOGO color="#ffffff" /></div>

      <div 
       ref={ImageContainerRef} 
       className="absolute overflow-hidden top-34 left-[30%]  h-[19vw] w-[14vw] bg-red-800 rounded-xl"
      >
        <img ref={ImageRef} src={"/Photos/img1.jpg"} alt="" className="h-full w-full object-cover" />
      </div>
      
      <div className="h-screen w-full   flex flex-col gap-3 justify-center items-center ">
        <h1 className="text-[18.5vw] mt-[54%] relative  uppercase  leading-[14vw] ">
          Soixan7e <br />
          Douze
        </h1>
        <h5 className="pl-[40%] text-4xl relative">
          Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
        </h5>
      </div>

      <div className="h-screen w-full "></div>
    </div>
  );
}

export default page;
