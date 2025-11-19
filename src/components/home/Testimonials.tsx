"use client";

import { FaQuoteRight, FaStar } from "react-icons/fa";
import ts1 from "../../../public/an3.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonialsData = [
    {
      id: 1,
      name: "Forward Monkey",
      title: "Software Starter",
      image: ts1,
      review:
        "The attention to detail and innovative features have completely transformed our workflow. The attention to detail and innovative.",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex Johnson",
      title: "Product Manager",
      image: ts1,
      review:
        "Amazing service! Highly recommended. It boosted our team's productivity instantly.",
      rating: 4,
    },
    {
      id: 3,
      name: "Sarah Parker",
      title: "UI/UX Designer",
      image: ts1,
      review:
        "A beautifully crafted tool with great attention to detail. Loved the experience.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Wilson",
      title: "Business Owner",
      image: ts1,
      review:
        "Helped our business reach the next level. Couldn't ask for more!",
      rating: 5,
    },
     {
      id: 5,
      name: "David Wilson",
      title: "Business Owner",
      image: ts1,
      review:
        "Helped our business reach the next level. Couldn't ask for more!",
      rating: 5,
    }
  ];

  return (
    <div className="pb-24 overflow-hidden">
       <div className="pointer-events-none absolute left-0 top-0 h-full w-[250px] bg-gradient-to-r from-[#ffffff8d] to-transparent z-10"></div>
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-[250px] bg-gradient-to-l from-[#ffffff8d] to-transparent z-10"></div>
      <Slider {...settings}>
        {testimonialsData.map((item) => (
          <div className="h-[300px]" key={item.id}>
            {/* SAME DESIGN — only h-auto added */}
            <div className="bg-white relative mt-9 w-[450px] p-5 rounded-2xl shadow-sm mx-auto min-h-[260px] h-auto">

              {/* image */}
              <div className="w-[80px] h-[80px] rounded-full absolute -top-8 right-6">
                <Image
                  className="rounded-full w-[80px] h-[80px] object-cover"
                  src={item.image}
                  width={80}
                  height={80}
                  alt={item.name}
                />
              </div>

              <h3 className="text-2xl font-bold text-[#3d3d3d] mt-6">
                {item.name}
              </h3>

              <p className="font-medium mb-2 text-xl text-[#3d3d3d]">
                {item.title}
              </p>

              <hr className="w-[200px] h-[1px]" />

              <p className="font-medium my-3 text-[#3d3d3d]">
                {item.review}
              </p>

              {/* rating */}
              <div className="w-[200px] flex items-center justify-center absolute bottom-0 left-0 h-[40px] bg-[#d5f139] rounded-bl-2xl rounded-tr-4xl">
                <div className="flex items-center text-xl gap-2">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              {/* quote icon */}
              <h3 className="text-[#d5f139] text-4xl font-bold absolute bottom-3 right-6">
                <FaQuoteRight />
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
