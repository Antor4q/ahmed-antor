import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";
import project1 from "../../../public/project1.png"


const Project = () => {
    return (
     <div className="container mx-auto px-4 py-14">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

    {/* CARD 1 */}
    <WobbleCard
      containerClassName="group lg:col-span-6 min-h-[420px] rounded-[36px] overflow-hidden relative"
    >
      {/* Background Image */}
      <Image
        src={project1}
        alt="project"
        fill
        className="object-cover scale-100 group-hover:scale-105 transition duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* Orange Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff5a1f]/30 via-transparent to-transparent z-10" />

      {/* Bottom Blur Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <div className="backdrop-blur-2xl bg-black/20 border border-white/10 rounded-[30px] p-6 flex items-end justify-between">
          
          {/* Text */}
          <div>
            <p className="text-neutral-200 text-sm mb-3">
              Mobile App Design
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
              X-direct Mobile
            </h2>

            <button className="mt-5 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm backdrop-blur-xl">
              May 2024
            </button>
          </div>

          {/* Arrow Button */}
          <button className="group/btn w-24 h-24 rounded-[28px] border border-white/10 bg-black/20 backdrop-blur-2xl flex items-center justify-center overflow-hidden relative">
            
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition duration-500" />

            <span className="text-white text-4xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition duration-300">
              ↗
            </span>
          </button>
        </div>
      </div>
    </WobbleCard>

    {/* CARD 2 */}
    <WobbleCard
      containerClassName="group lg:col-span-6 min-h-[420px] rounded-[36px] overflow-hidden relative"
    >
      <Image
        src={project1}
        alt="project"
        fill
        className="object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <div className="backdrop-blur-2xl bg-black/20 border border-white/10 rounded-[30px] p-6 flex items-end justify-between">
          
          <div>
            <p className="text-neutral-200 text-sm mb-3">
              Branding Design
            </p>

            <h2 className="text-white text-4xl font-semibold">
              Creative Studio
            </h2>

            <button className="mt-5 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm">
              UI / UX
            </button>
          </div>

          <button className="group/btn w-24 h-24 rounded-[28px] border border-white/10 bg-black/20 backdrop-blur-2xl flex items-center justify-center relative overflow-hidden">
            
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition duration-500" />

            <span className="text-white text-4xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition duration-300">
              ↗
            </span>
          </button>
        </div>
      </div>
    </WobbleCard>

    {/* CARD 3 LARGE */}
    <WobbleCard
      containerClassName="group lg:col-span-8 min-h-[520px] rounded-[40px] overflow-hidden relative"
    >
      <Image
        src={project1}
        alt="project"
        fill
        className="object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/45 z-10" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#ff5a1f]/40 via-transparent to-transparent z-10" />

      <div className="absolute bottom-0 left-0 right-0 z-20 p-7">
        <div className="backdrop-blur-2xl bg-black/20 border border-white/10 rounded-[32px] p-7 flex items-end justify-between">
          
          <div>
            <p className="text-orange-100 text-sm mb-4">
              Web Experience
            </p>

            <h2 className="text-white text-5xl md:text-6xl font-semibold leading-[1.1] max-w-xl">
              Immersive 3D Product Experience
            </h2>

            <button className="mt-6 px-6 py-3 rounded-full bg-orange-500 text-white">
              Explore Project
            </button>
          </div>

          <button className="group/btn w-28 h-28 rounded-[32px] border border-white/10 bg-black/20 backdrop-blur-2xl flex items-center justify-center relative overflow-hidden">
            
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition duration-500" />

            <span className="text-white text-5xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition duration-300">
              ↗
            </span>
          </button>
        </div>
      </div>
    </WobbleCard>

    {/* CARD 4 SMALL */}
    <WobbleCard
      containerClassName="group lg:col-span-4 min-h-[520px] rounded-[40px] overflow-hidden relative"
    >
      <Image
        src={project1}
        alt="project"
        fill
        className="object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/45 z-10" />

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <div className="backdrop-blur-2xl bg-black/20 border border-white/10 rounded-[30px] p-6">
          
          <p className="text-neutral-200 text-sm mb-3">
            Dashboard
          </p>

          <h2 className="text-white text-4xl font-semibold leading-tight">
            Analytics System
          </h2>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-neutral-300 text-sm">
                Revenue Growth
              </p>

              <h3 className="text-white text-3xl font-semibold mt-1">
                +84%
              </h3>
            </div>

            <button className="group/btn w-20 h-20 rounded-[24px] border border-white/10 bg-black/20 backdrop-blur-2xl flex items-center justify-center overflow-hidden relative">
              
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition duration-500" />

              <span className="text-white text-3xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition duration-300">
                ↗
              </span>
            </button>
          </div>
        </div>
      </div>
    </WobbleCard>

   {/* CENTER CARD */}
<div className="lg:col-span-12 flex justify-center">
  <WobbleCard
    containerClassName="group lg:w-[70%] min-h-[520px] rounded-[40px] overflow-hidden relative"
  >
    <Image
      src={project1}
      alt="project"
      fill
      className="object-cover group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/45 z-10" />

    <div className="absolute inset-0 bg-gradient-to-t from-[#ff5a1f]/40 via-transparent to-transparent z-10" />

    <div className="absolute bottom-0 left-0 right-0 z-20 p-7">
      <div className="backdrop-blur-2xl bg-black/20 border border-white/10 rounded-[32px] p-7 flex items-end justify-between">
        
        <div>
          <p className="text-orange-100 text-sm mb-4">
            Collaboration
          </p>

          <h2 className="text-white text-5xl md:text-6xl font-semibold leading-[1.1] max-w-xl">
            Let’s build something futuristic together.
          </h2>

          <button className="mt-6 px-6 py-3 rounded-full bg-orange-500 text-white hover:scale-105 transition duration-300">
            Start Project
          </button>
        </div>

        <button className="group/btn w-28 h-28 rounded-[32px] border border-white/10 bg-black/20 backdrop-blur-2xl flex items-center justify-center relative overflow-hidden">
          
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition duration-500" />

          <span className="text-white text-5xl group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition duration-300">
            ↗
          </span>
        </button>
      </div>
    </div>
  </WobbleCard>
</div>
  </div>
</div>
    );
};

export default Project;