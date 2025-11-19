"use client"
import { SiFsecure } from "react-icons/si";
import con from "../../../public/an4Ex.png"
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form"

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const Contact = () => {

     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)


    return (
         <div className="container bg-black p-16 rounded-2xl mx-auto grid grid-cols-2 gap-32">
            

            <div className="">
                <div className="flex items-center justify-center w-[180px] gap-2 h-[50px] bg-white rounded-2xl shadow-2xl">
                        <SiFsecure />
                        <p className="font-mono text-[#3d3d3d] font-bold text-2xl">My Story</p>
                      </div>
                
                      <div className="relative">
                       
                        <h3 className="text-7xl font-bold my-3 text-[#3d3d3d] font-sans">
                          Get to know me
                        </h3>
                      </div>
                
                      <p className="font-medium text-xl text-[#3d3d3d] font-sans">
                        Starting as a founder in 2017, I faced early setbacks but quickly pivoted to become a UX Designer at a top startup. My journey took me to a global design agency and later.
                      </p>
                      <hr className="w-full h-[2px] text-[#3d3d3d] my-8 bg-[#3d3d3d]" />
                      
                     <Image className="relative w-[200px] h-[200px] bg-center object-cover rounded-2xl" src={con} width={200} height={200} alt="myPhoto"/>
                     <h3 className="text-2xl font-bold text-[#3d3d3d] mt-2">
                Ahmed Antor
              </h3>
               <p className="font-medium mb-4 text-x text-[#3d3d3d]">
                {"Founder and web developer(MERN)"}
              </p>

               <p className="font-medium text-xl text-[#3d3d3d]">
                +8801568606376
              </p>
              <h3 className="text-2xl font-bold text-[#3d3d3d]">
                Book A Call
              </h3>
            </div>
            {/* form here */}
            <div className="mt-12">
                 <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-white text-lg mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Dae"
            {...register("fullName")}
            className="text-white text-xl p-3 w-full h-14 border-0 border-b border-white focus:outline-none focus:border-[#d5f139] hover:border-b"
          />
        </div>
        <div className="flex my-8 flex-col">
        
            <label htmlFor="email" className="text-white text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="ioxora@gmail.com"
              {...register("email", { required: "Email is required" })}
              className="text-white text-xl p-3 w-full h-14 border-0 border-b border-white focus:outline-none focus:border-[#d5f139] hover:border-b"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
            )}
          
        </div>
        <div className="flex flex-col">
        
            <label htmlFor="email" className="text-white text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="ioxora@gmail.com"
              {...register("email", { required: "Email is required" })}
              className="text-white text-xl p-3 w-full h-14 border-0 border-b border-white focus:outline-none focus:border-[#d5f139] hover:border-b"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
            )}
          
        </div>

       

      

        <div className="flex flex-col mt-8">
          <label htmlFor="message" className="text-white text-lg mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows={3}
            {...register("message", { required: "Message is required" })}
            className="text-white text-xl p-3 w-full border-0 border-b border-white bg-transparent focus:outline-none focus:border-[#d5f139] hover:border-b resize-none"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="group flex mt-7 items-center flex-row gap-2 bg-[#d5f139] text-black fill-[#9b9999] px-4 py-2 pl-3 rounded-[15px] font-bold text-[20px] border-none cursor-pointer active:scale-95 transition-transform duration-300 ease-in-out hover:bg-[#d5f139] whitespace-nowrap"
        >
          <div className="transition-transform duration-500 ease-linear group-hover:scale-125">
            {/* <MdArrowOutward className="block transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-110 group-hover:fill-black" size={24} /> */}
          </div>
          <span className="block ml-1 whitespace-nowrap transition-all duration-500 ease-linear group-hover:opacity-0">
            Submit
          </span>
        </button>
        {/* <ToastContainer/> */}
      </form>
            </div>
           
        </div>
    );
};

export default Contact;