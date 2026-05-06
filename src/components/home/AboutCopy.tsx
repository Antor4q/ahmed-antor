import Image from "next/image";
import ab from "../../../public/an3.jpg"
import arrow from "../../../public/curved-arrow.png"
import { TiWorldOutline } from "react-icons/ti";
import { SiPolestar } from "react-icons/si";
import { FaRegCirclePlay } from "react-icons/fa6";


const AboutCopy = () => {
    // style={{ backgroundImage: "url('https://i.ibb.co.com/xqSjcKgV/gredient-bg.png')" }}
    return (
        <div 
  className="h-[750px] bg-cover bg-center bg-[#000804]"
  
  
>
<div className="container px-10 py-24 mx-auto grid grid-cols-8 gap-20">
    <div className="col-span-3">
        <p className="text- font-bold text-white font-sans">
   Designer and Developer
  </p>
                <h3 className=" text-[90px]  font-bold text-white font-sans">
    ABOUT ME
  </h3>
  <p className="font-medium text-white font-sans">
   I’m Ahmed Antor — Full Stack Developer (MERN) and Founder of ioxora, a web design & development agency that helps businesses build and manage web applications efficiently, delivering user-friendly solutions that support growth.
  </p>
  <Image alt="ab" src={arrow} width={200} height={200} className="w-full mt-10 rounded-2xl bg-cover bg-center h-[200px]" />
    </div>
   <div className="h-[550px] col-span-2 rounded-2xl 
  bg-white/40 
  backdrop-blur-xl 
  border border-white/20 
  shadow-[0_8px_32px_rgba(0,0,0,0.25)] 
  p-6
  text-white
">
    <div className="w-[50px] h-[50px] rounded-full bg-white p-2 flex items-center justify-center">
        <TiWorldOutline className="text-black text-4xl" />
    </div>
      <h3 className=" text-[50px]  font-bold text-black font-sans">
    120%
  </h3>
  <p className="my-3">ioxora, a web design & development agency that helps businesses build</p>
  <Image alt="ab" src={ab} width={200} height={200} className="w-full rounded-2xl bg-cover bg-center h-[280px]" />
</div>
    <div className="col-span-3 relative">
      <div className="w-full flex justify-center relative">
  <Image
    alt="ab"
    src={ab}
    width={200}
    height={200}
    className="rounded-2xl object-cover w-[220px] opacity-60 h-[220px]"
  />

  <FaRegCirclePlay className="text-5xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
</div>
      <div className="absolute bottom-0">
        <div className="flex justify-start gap-3">
        <div className="bg-white flex justify-center mt-5 items-center rounded-full min-w-[30px] h-[30px]">
          <SiPolestar className="text-xl font-bold" />
        </div>

       <p className="font-medium mt-5 text-white font-sans">
   I’m Ahmed Antor — Full Stack Developer (MERN) and Founder of ioxora, a web design & development agency that helps businesses efficiently.
  </p>
      </div>
      <div className="flex justify-start gap-3">
        <div className="bg-white flex justify-center mt-5 items-center rounded-full min-w-[30px] h-[30px]">
          <SiPolestar className="text-xl font-bold" />
        </div>

       <p className="font-medium mt-5 text-white font-sans">
   I’m Ahmed Antor — Full Stack Developer (MERN) and Founder of ioxora, a web design & development agency that helps businesses efficiently.
  </p>
      </div>
      </div>

 
    </div>

</div>
</div>
    );
};

export default AboutCopy;