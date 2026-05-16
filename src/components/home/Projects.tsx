import Project from "./Project";


const Projects = () => {
    return (
        <div className="bg-black ">
            <div className="container mx-auto pt-40 px-4">

            <p className="font-bold text-[#767676] font-sans text-lg md:text-xl">
        Featured Projects
      </p>

      <h3 className="font-sans text-[#767676] font-bold text-5xl md:text-[90px] leading-none mt-2">
        SELECTED PROJECTS
      </h3>
            </div>
            {/* cards */}

            <Project/>
            {/* card end */}
        </div>
    );
};

export default Projects;