import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Stairs({color}: {color?: "#ffffff"}) {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".stairs", {
      height: 0,
      duration: 0.3,
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(".stairs", {
      y: "100%",
      duration: 0.3,
      stagger: {
        amount: -0.1,
      },
    });
    tl.to(".switer", {
      display: "none",
      opacity: 0,
    });
  }, []);

  return (
    <div className="switer h-screen w-full absolute z-50 top-0 left-0 flex justify-center items-start">
      <div className={`stairs h-full w-2/10 ${color ? "bg-white": "bg-black"}`}></div>
      <div className={`stairs h-full w-2/10 ${color ? "bg-white": "bg-black"}`}></div>
      <div className={`stairs h-full w-2/10 ${color ? "bg-white": "bg-black"}`}></div>
      <div className={`stairs h-full w-2/10 ${color ? "bg-white": "bg-black"}`}></div>
      <div className={`stairs h-full w-2/10 ${color ? "bg-white": "bg-black"}`}></div>
    </div>
  );
}

export default Stairs;
