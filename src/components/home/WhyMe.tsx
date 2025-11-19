import { SiFsecure } from "react-icons/si";
import VideoComponent from "./VideoComponent";

const WhyMe = () => {
  return (
    <div className="flex flex-col bg-white z-[500] pt-10 items-center">
      <div className="flex items-center justify-center w-[180px] gap-2 h-[50px] bg-white rounded-2xl shadow-2xl">
        <SiFsecure />
        <p className="font-mono text-[#3d3d3d] font-bold text-2xl">Why Me?</p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[250px] bg-gradient-to-r from-[#ffffff8d] to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[250px] bg-gradient-to-l from-[#ffffff8d] to-transparent z-10"></div>
        <h3 className="text-7xl font-bold my-3 text-[#3d3d3d] font-sans text-center">
          Because Your Growth Is My Mission
        </h3>
      </div>

      <p className="font-medium text-xl text-center text-[#3d3d3d] font-sans w-[700px]">
        See the difference thoughtful design makes. Our works highlight the
        dedication we bring to every client partnership.
      </p>

      {/* 🟢 20px gap before video */}
      <div className="mt-[2px] w-full">
        <VideoComponent />
      </div>
    </div>
  );
};

export default WhyMe;
