import { SiFsecure } from "react-icons/si";
import sa1 from "../../../public/services/ui1.avif"
import sa2 from "../../../public/services/ui2.avif"
import Image from "next/image";

const Services = () => {
    return (
        <div>
            <div className="container mx-auto px-10 py-24">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-[180px] gap-2 h-[50px] bg-white rounded-2xl shadow-2xl">
                        <SiFsecure />
                        <p className="font-mono text-[#3d3d3d] font-bold text-2xl">Services</p>
                      </div>
                
                      <div className="relative">
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-[250px] bg-gradient-to-r from-[#ffffff8d] to-transparent z-10"></div>
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-[250px] bg-gradient-to-l from-[#ffffff8d] to-transparent z-10"></div>
                        <h3 className="text-7xl font-bold my-3 text-[#3d3d3d] font-sans text-center">
                          What I do for you
                        </h3>
                      </div>
                </div>
                {/* cards */}
                <div className="mt-10 ">
                    {/* card1 */}
                    <div className="grid h-[530px] shadow-2xl sticky top-20 grid-cols-2 items-center mb-7 gap-16 border-y-8 rounded-2xl bg-white border-yellow-600 p-8">
                        <div>
                            <h3 className="text-2xl font-bold font-sans text-[#444444]">01</h3>
                              <div className="relative">
                                <div className="pointer-events-none absolute left-0 top-0 h-full w-[250px] bg-gradient-to-r from-[#ffffff8d] to-transparent z-10"></div>
                                <div className="pointer-events-none absolute right-0 top-0 h-full w-[250px] bg-gradient-to-l from-[#ffffff8d] to-transparent z-10"></div>
                                <h3 className="text-5xl font-bold my-3 text-[#3d3d3d] font-sans">
                               UI/UX Design
                                </h3>
                                <p className="font-medium text-xl text-[#3d3d3d] font-sans ">
                                    UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.UI/UX Design, App Design, Website Design, Dashboard Design
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <Image alt="ui" width={300} height={400} className="relative max-h-[400px] -top-8" src={sa1}/>
                            <Image alt="ui" width={300} height={400} src={sa2} className="max-h-[400px] relative -bottom-8"/>
                        </div>
                    </div>
                    <div className="grid sticky shadow-2xl top-[100px] z-10 h-[530px] grid-cols-2 items-center mb-7 gap-16 border-y-8 rounded-2xl bg-white border-amber-600 p-8">
                        <div>
                            <h3 className="text-2xl font-bold font-sans text-[#444444]">01</h3>
                              <div className="relative">
                                <div className="pointer-events-none absolute left-0 top-0 h-full w-[250px] bg-gradient-to-r from-[#ffffff8d] to-transparent z-10"></div>
                                <div className="pointer-events-none absolute right-0 top-0 h-full w-[250px] bg-gradient-to-l from-[#ffffff8d] to-transparent z-10"></div>
                                <h3 className="text-5xl font-bold my-3 text-[#3d3d3d] font-sans">
                               UI/UX Design
                                </h3>
                                <p className="font-medium text-xl text-[#3d3d3d] font-sans ">
                                    UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.UI/UX Design, App Design, Website Design, Dashboard Design
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <Image alt="ui" width={300} height={400} className="relative max-h-[400px] -top-8" src={sa1}/>
                            <Image alt="ui" width={300} height={400} src={sa2} className="max-h-[400px] relative -bottom-8"/>
                        </div>
                    </div>
                    <div className="grid sticky shadow-2xl top-[120px] z-40 h-[530px] grid-cols-2 items-center gap-16 border-y-8 rounded-2xl bg-white border-blue-600 mb-7 p-8">
                        <div>
                            <h3 className="text-2xl font-bold font-sans text-[#444444]">01</h3>
                              <div className="relative">
                                <div className="pointer-events-none absolute left-0 top-0 h-full w-[250px] bg-gradient-to-r from-[#ffffff8d] to-transparent z-10"></div>
                                <div className="pointer-events-none absolute right-0 top-0 h-full w-[250px] bg-gradient-to-l from-[#ffffff8d] to-transparent z-10"></div>
                                <h3 className="text-5xl font-bold my-3 text-[#3d3d3d] font-sans">
                               UI/UX Design
                                </h3>
                                <p className="font-medium text-xl text-[#3d3d3d] font-sans ">
                                    UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.UI/UX Design, App Design, Website Design, Dashboard Design
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <Image alt="ui" width={300} height={400} className="relative max-h-[400px] -top-8" src={sa1}/>
                            <Image alt="ui" width={300} height={400} src={sa2} className="max-h-[400px] relative -bottom-8"/>
                        </div>
                    </div>
                    <div className="grid sticky shadow-2xl top-[140px] z-40 h-[530px] grid-cols-2 items-center gap-16 border-y-8 rounded-2xl bg-white border-red-600 p-8">
                        <div>
                            <h3 className="text-2xl font-bold font-sans text-[#444444]">01</h3>
                              <div className="relative">
                                <div className="pointer-events-none absolute left-0 top-0 h-full w-[250px] bg-gradient-to-r from-[#ffffff8d] to-transparent z-10"></div>
                                <div className="pointer-events-none absolute right-0 top-0 h-full w-[250px] bg-gradient-to-l from-[#ffffff8d] to-transparent z-10"></div>
                                <h3 className="text-5xl font-bold my-3 text-[#3d3d3d] font-sans">
                               UI/UX Design
                                </h3>
                                <p className="font-medium text-xl text-[#3d3d3d] font-sans ">
                                    UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.UI/UX Design, App Design, Website Design, Dashboard Design
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <Image alt="ui" width={300} height={400} className="relative max-h-[400px] -top-8" src={sa1}/>
                            <Image alt="ui" width={300} height={400} src={sa2} className="max-h-[400px] relative -bottom-8"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;