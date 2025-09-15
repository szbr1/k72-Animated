"use client";
import Link from "next/link";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import K72LOGO from "../K72LOGO";
import Stairs from "@/components/Stairs";

function FullScreenNav({
  setToggle,
}: {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {


  
  useGSAP(() => {
    const tl = gsap.timeline();
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

  const closeTransition = ()=>{
    const clostTl = gsap.timeline({onComplete: ()=>{
      setToggle(false)
    }})
    clostTl.set(".switer"
      ,{
        display: "flex",
        opacity: 1,
        
      }
    )
    
    clostTl.from(".stairs", {
      duration: 0.3,
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    })
    clostTl.to(".stairs", {
      y: "0%",
      duration: 0.3,
    
      stagger: {
        amount: 0.3,
      },
    })
     clostTl.to("takemeUP",{
      y: "10%"
    })
    clostTl.to(".switer", {
      duration: 0.1,
      display: "none",
      opacity: 0
    })

   
  }

  
  
  
  return (
    <>
    <div className=" p-2 h-screen absolute top-0 z-80 left-0 w-screen  font-Lausanne bg-black">

    <div className="switer h-screen w-full absolute z-50 top-0 left-0 flex justify-center items-start">
      <div className={`stairs h-full w-2/10 bg-white`}></div>
      <div className={`stairs h-full w-2/10 bg-white`}></div>
      <div className={`stairs h-full w-2/10 bg-white`}></div>
      <div className={`stairs h-full w-2/10 bg-white`}></div>
      <div className={`stairs h-full w-2/10 bg-white`}></div>
    </div>
      
        <div className=" flex w-full justify-between items-center"> 
            <K72LOGO color="#ffffff" /> 
            <button onClick={()=>{
              closeTransition()
          } 
          } 
           className=" h-30 w-30">
                <img src={"/cross.svg"} className="h-full w-full object-cover" />
            </button>

        </div>
      <div className=" uppercase w-full flex flex-col mt-2">

        <div className=" group border-t py-2  text-center relative">
          <Link href={"/projects"} className=" text-8xl  w-full  ">
            Home
          </Link>
          <div className=" absolute top-0 h-full left-0 hidden takemeUP group-hover:flex whitespace-nowrap bg-yellow scrl">

                <div className="uppercase  bg-yellow  text-8xl flex transition-all  items-center  ">
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/1.jpg"
                    alt=""
                    />
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/2.jpg"
                    alt=""
                    />
                </div>
                <div className="uppercase  bg-yellow  text-8xl flex transition-all  items-center  ">
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/1.jpg"
                    alt=""
                    />
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/2.jpg"
                    alt=""
                    />
                </div>

              </div>
        </div>

        <div className=" group border-t py-2  text-center relative">
          <Link href={"/contacts"} className=" text-8xl  w-full  ">
           contacts
          </Link>
          <div className=" absolute top-0 left-0 hidden  group-hover:flex whitespace-nowrap h-full bg-yellow scrl">

                <div className="uppercase  bg-yellow  text-8xl flex transition-all  items-center  ">
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/1.jpg"
                    alt=""
                    />
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/2.jpg"
                    alt=""
                    />
                </div>
                <div className="uppercase  bg-yellow  text-8xl flex transition-all  items-center  ">
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/1.jpg"
                    alt=""
                    />
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/2.jpg"
                    alt=""
                    />
                </div>

              </div>
        </div>

        <div className=" group border-t py-2  text-center relative">
          <Link href={"/Agence"} className=" text-8xl  w-full  ">
            agence
          </Link>
          <div className=" absolute top-0 left-0 hidden  group-hover:flex whitespace-nowrap h-full bg-yellow scrl">

                <div className="uppercase  bg-yellow  text-8xl flex transition-all  items-center  ">
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/1.jpg"
                    alt=""
                    />
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/2.jpg"
                    alt=""
                    />
                </div>
                <div className="uppercase  bg-yellow   text-8xl flex transition-all  items-center  ">
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/1.jpg"
                    alt=""
                    />
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/2.jpg"
                    alt=""
                    />
                </div>

              </div>
        </div>

        <div className=" group border-y py-2  text-center relative">
          <Link href={""} className=" text-8xl  w-full  ">
            blogue
          </Link>
          <div className=" absolute top-0 left-0 hidden  group-hover:flex whitespace-nowrap h-full  bg-yellow scrl">

                <div className="uppercase  bg-yellow  text-8xl flex transition-all  items-center  ">
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/1.jpg"
                    alt=""
                    />
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/2.jpg"
                    alt=""
                    />
                </div>
                <div className="uppercase  bg-yellow  text-8xl flex transition-all  items-center  ">
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/1.jpg"
                    alt=""
                    />
                    <h5 className=" shrink-0">pour tout voir</h5>
                    <img
                    className=" shrink-0 h-20 w-70 rounded-full px-2 object-cover"
                    src="/Photos/2.jpg"
                    alt=""
                    />
                </div>

              </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default FullScreenNav;
