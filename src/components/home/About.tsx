import React from 'react';
import im from "../../../public/an3.jpg"
import Image from 'next/image';


const About = () => {
    return (
        <div className='bg-gradient-to-r h-[700px] from-[#01120b] via-[#021a12] to-[#000000]'>
            <div className='container px-10 py-24 mx-auto'>
                <div className='relative'>

  <p className="text- font-bold text-white font-sans">
   Designer and Developer
  </p>
                <h3 className=" text-[90px]  font-bold text-white font-sans">
    ABOUT ME
  </h3>

            <Image className="rounded-2xl absolute h-[300px] text-white top-36 left-64" src={im} width={500} height={200} alt="myPhoto"/>
            <Image className="rounded-2xl absolute left-[700px] h-[200px] w-[400px] top-14 border-8 border-[#184809]" src={im} width={300} height={100} alt="myPhoto"/>
            <p className="absolute right-0 bottom-0 w-[500px] text- font-bold text-white font-sans">
   I’m Ahmed Antor — Full Stack Developer (MERN) and Founder of ioxora, a web design & development agency that helps businesses build .
  </p>
            </div>
        </div>
        </div>
    );
};

export default About;