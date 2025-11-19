import Image from "next/image";
import { SiFsecure } from "react-icons/si";
import im from "../../../public/an3.jpg"
import i2 from "../../../public/an4Ex.png"

const MyStory = () => {
    return (
        <div className="container px-10 pb-24 mx-auto grid grid-cols-2 gap-16">
             <div className="flex relative">
                <Image className="relative -bottom-20 bg-center object-cover rounded-2xl" src={im} width={400} height={500} alt="myPhoto"/>
                <Image className="absolute bottom-0 w-[300px] object-cover bg-center h-[300px] border-8 border-white right-20 rounded-2xl" src={i2} width={300} height={400} alt="myPhoto"/>
            </div>

            <div className="">
                <div className="flex items-center justify-center w-[180px] gap-2 h-[50px] bg-white rounded-2xl shadow-2xl">
                        <SiFsecure />
                        <p className="font-mono text-[#3d3d3d] font-bold text-2xl">My Story</p>
                      </div>
                
                      <div className="relative">
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-[250px] bg-gradient-to-r from-[#ffffff8d] to-transparent z-10"></div>
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-[250px] bg-gradient-to-l from-[#ffffff8d] to-transparent z-10"></div>
                        <h3 className="text-7xl font-bold my-3 text-[#3d3d3d] font-sans">
                          Get to know me
                        </h3>
                      </div>
                
                      <p className="font-medium text-xl text-[#3d3d3d] font-sans w-[700px]">
                        Starting as a founder in 2017, I faced early setbacks but quickly pivoted to become a UX Designer at a top startup. My journey took me to a global design agency and later to a leading role in an Amsterdam-based company. Now, I channel my extensive experience into mentoring others in design, blending practical skills with innovative approaches. Join me in shaping experiences that captivate and inspire.
                      </p>
                      <hr className="w-full h-[2px] text-[#3d3d3d] my-8 bg-[#3d3d3d]" />
                      <div className="flex justify-between">
                        <div>
                            <h3 className="text-5xl font-bold my-3 text-[#3d3d3d] font-sans">
                         $5k+
                        </h3>
                        <p className="font-medium text-xl text-[#3d3d3d] font-sans">
                       Revenue
                      </p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold my-3 text-[#3d3d3d] font-sans">
                         2+
                        </h3>
                        <p className="font-medium text-xl text-[#3d3d3d] font-sans">
                       Years of experience
                      </p>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold my-3 text-[#3d3d3d] font-sans">
                         20+
                        </h3>
                        <p className="font-medium text-xl text-[#3d3d3d] font-sans">
                       Happy client
                      </p>
                        </div>
                      </div>
            </div>
           
        </div>
    );
};

export default MyStory;