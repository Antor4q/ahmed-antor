import Image from "next/image";
import ab from "../../../public/an3.jpg"
import { TiWorldOutline } from "react-icons/ti";


const AboutCopy = () => {
    // style={{ backgroundImage: "url('https://i.ibb.co.com/xqSjcKgV/gredient-bg.png')" }}
    return (
        <div 
  className="h-[800px] bg-cover bg-center bg-[#000804]"
  
  
>
<div className="container px-10 py-24 mx-auto grid grid-cols-8 gap-20">
    <div className="col-span-3">
        <p className="text- font-bold text-white font-sans">
   Designer and Developer
  </p>
                <h3 className=" text-[90px]  font-bold text-white font-sans">
    ABOUT ME
  </h3>
  <p className="text-[18px] font-bold text-white font-sans">
   I’m Ahmed Antor — Full Stack Developer (MERN) and Founder of ioxora, a web design & development agency that helps businesses build and manage web applications efficiently, delivering user-friendly solutions that support growth.
  </p>
    </div>
   <div className="h-[600px] col-span-2 rounded-2xl 
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
  <Image alt="ab" src={ab} width={200} height={200} className="w-full rounded-2xl bg-cover bg-center h-[330px]" />
</div>
    <div className="col-span-3">
        <Image alt="ab" src={ab} width={200} height={200} className="w-full rounded-2xl bg-cover bg-center h-[300px]" />

       <p className="text-[18px] font-bold mt-5 text-white font-sans">
   I’m Ahmed Antor — Full Stack Developer (MERN) and Founder of ioxora, a web design & development agency that helps businesses build and manage web applications efficiently, delivering user-friendly solutions that support growth.
  </p>
  <p className="text-[18px] text-white font-sans">
   I’m Ahmed Antor — Full Stack Developer (MERN) and Founder of ioxora, a web design & development agency that helps businesses build and manage web applications
  </p>
    </div>

</div>
</div>
    );
};

export default AboutCopy;