import Link from "next/link";
import K72LOGO from "../__components/K72LOGO";
import Video from "../__components/Video";

export default function Home() {
  
  return (
  <div className="h-screen w-full relative">
     
      <div className=" absolute top-0 right-0 z-10 h-full w-full  p-2 ">
        <div className="relative h-full w-full flex justify-center">
      {/* logo  */}
          <div className="absolute top-2 left-2"><K72LOGO color="#ffffff" /></div>
      {/* hero text  */}

          <div className="uppercase  font-Lausanne text-[8vw] lg:mt-28 tracking-widest">
              <h1 className="leading-30 ">
                L'étincelle
              </h1>
              <div className="leading-30 flex justify-center items-center">
                qui 
                <div className="h-[6vw] m rounded-full overflow-hidden"><Video /></div> 
                génère
              </div>
              <h1 className="leading-30 ">
                la créativité
              </h1> 
          </div>

      {/* // hero buttons  */}
          <div className="absolute bottom-2 right-1/2 translate-x-1/2 flex justify-center items-center gap-4">

              <Link 
               href={"/Projects"} 
               className="text-8xl font-Lausanne uppercase w-[35vw] px-3 border-3 rounded-full py-3 flex justify-center items-center">
                 Projects
              </Link>
              <Link 
               href={"/Agency"} 
               className="text-8xl font-Lausanne uppercase w-[35vw] px-3 border-3 rounded-full py-3 flex justify-center items-center">
                 Agecny
              </Link>

          </div>

        </div>
      </div>


      <Video />
  </div>
  );
}
