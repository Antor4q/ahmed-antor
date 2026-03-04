// import { FiArrowRight } from "react-icons/fi";
// import ResizeHandle from "../flipText/ResizeHandle";
import { cn } from "../utils/utils";
import my from "../../../public/mark.png"
import Image from "next/image";
import log from "../../../public/pooo.png"
import log2 from "../../../public/gablin.png"
// import Link from "next/link";
// import { SiFsecure } from "react-icons/si";




const Banner = () => {
    return (
   <div className="overflow-hidden">
       <div className="container mx-auto px-10">
           <div className="relative flex  h-[800px] items-center w-full  bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
       <div className="absolute w-[500px] h-[500px] -bottom-7 left-40 rounded-full bg-[#d5f139]  opacity-80 blur-[150px]"></div>
       <div className="absolute w-[250px] h-[250px] right-0 z-50 bottom-0 rounded-full bg-[#d5f139]  opacity-100 blur-[150px]"></div>
       {/* new design */}
      <div className="w-full">


        
      
         <p className="absolute top-60 left-8 text-2xl  font-bold text-[#073322] font-sans">
  BRANDING . DESIGNING . DEVELOPMENT
  </p>
         <h3 className="absolute top-1/2 -translate-y-1/2 text-[180px]  font-bold text-[#010b08] font-sans">
    AHMED
  </h3>
         <h3 className="absolute right-0 top-1/3 -translate-y-1/3 text-[180px] font-bold text-black font-sans">
   ANTOR
  </h3>
         <p className="absolute right-0 top-3/5 -translate-y-3/5 w-[500px] text- font-bold text-black font-sans">
   I’m Ahmed Antor — Full Stack Developer (MERN) and Founder of ioxora, a web design & development agency that helps businesses build and manage web applications efficiently, delivering user-friendly solutions that support growth.
  </p>
       
      
         <Image className="relative -bottom-1 mx-auto" src={my} width={800} height={900} alt="myPhoto"/>
      
      </div>
           <Image className="absolute bottom-0 right-0" src={log2} width={200} height={200} alt="myPhoto"/>
           <Image className="absolute top-0 -left-56" src={log} width={200} height={200} alt="myPhoto"/>

      <div>
        {/* left sight content */}
        {/* <div>
          <h3 className="text-xl font-medium text-black font-mono mb-3">Hi There,</h3>
          <h3 className="text-7xl font-bold text-black font-sans">{"I'm Ahmed Antor"}</h3>
          <div className="flex items-center gap-4">
          <h3 className="text-7xl font-bold text-black font-sans">Expert In</h3>
          <ResizeHandle/>
          </div>
          <p className="font-medium mt-3 text-2xl text-black font-sans w-[700px]">I design and develop digital experiences that are fast, intelligent, and visually stunning — powered by creativity and automation.</p>
          <div className="flex items-center gap-5 mt-5">
                        <button className="group relative inline-flex h-[46px] items-center justify-center rounded-full bg-white py-1 pl-6 pr-14 font-medium text-black">
                          <span className="z-10 pr-2 font-bold font-sans transition-colors duration-300 group-hover:text-black">
                            Services
                          </span>
                          <div className="absolute right-1 inline-flex h-[40px] w-[40px] items-center justify-end rounded-full bg-[#c0c0c0] transition-[width] group-hover:w-[calc(100%-8px)]">
                            <div className="mr-3 flex items-center justify-center">
                              <FiArrowRight className="h-5 w-5 text-black" />
                            </div>
                          </div>
                        </button>
                        <button className="group relative inline-flex h-[46px] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
                          <span className="z-10 pr-2 font-bold font-sans transition-colors duration-300 group-hover:text-black">
                            Book A Call
                          </span>
                          <div className="absolute right-1 inline-flex h-[40px] w-[40px] items-center justify-end rounded-full bg-[#d5f139] transition-[width] group-hover:w-[calc(100%-8px)]">
                            <div className="mr-3 flex items-center justify-center">
                              <FiArrowRight className="h-5 w-5 text-black" />
                            </div>
                          </div>
                        </button>
                      
                      </div>
        </div> */}

        {/* right sight content */}
        {/* <div className="relative">
          <Image className="relative -bottom-20" src={my} width={700} height={800} alt="myPhoto"/>
          <div className="absolute flex shadow items-center gap-2 w-[280px] -left-16 bottom-20 h-[60px] bg-black rounded-full border">
            <Link href="https://www.ioxoraa.com" className="min-w-[50px] ml-1 h-[50px] flex items-center justify-center rounded-full bg-[#d5f139]">
              <Image src={log} width={40} height={40} alt="ioXora logo"/>
            </Link>
            <p className="font-mono text-white">Founder and Web Developer at ioXora</p>
          </div>
          <div className="absolute flex  items-center justify-center gap-2 w-[220px] -right-16 bottom-60 h-[40px] bg-white rounded-2xl shadow-2xl">
          <SiFsecure />
          <p className="font-mono text-black">100% Secure Work</p>
          </div>
        </div> */}
      </div>
    </div>
     </div>
      <div className="relative w-full">
       <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24
bg-gradient-to-t from-white via-white/50 to-transparent z-10">
</div>
       </div>
   </div>
    );
};

// px-10 z-50 flex items-center justify-between gap-20

export default Banner;