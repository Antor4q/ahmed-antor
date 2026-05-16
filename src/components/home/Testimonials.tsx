"use client";

import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import VideoCard from "../shared/VideoCard";
import { FollowerPointerCard } from "../ui/following-pointer";

type CardType = {
  id: number;
  type?: string;
  title: string;
  description: string;
  company?: string;
  logo?: string;
  thumbnail?: string;
  video?: string;
  image?: string;
  position?: string;
};

const Testimonials = () => {
  const cards: CardType[] = [
    {
      id: 1,
      type: "video",
      title: "Luxury Mortgage Experience",
      description:
        "Working with Ioxora completely transformed our digital presence. The experience felt premium from start to finish.",
      company: "Ravsin",
      logo: "/an3.jpg",
      thumbnail: "/an3.jpg",
      video: "/testimon.mp4",
    },
    {
      id: 2,
      title: "Sarah Mitchell",
      position: "Product Designer",
      description:
        "The team delivered an exceptional experience with modern UI and smooth interactions.The team delivered an exceptional experience with modern UI and smooth interactions.The team delivered an exceptional experience with modern UI and smooth interactions.",
      image: "/an3.jpg",
    },
    {
      id: 3,
      title: "James Carter",
      position: "CEO at Nova",
      description:
        "Clean development process and premium communication throughout the project. Clean development process and premium communication throughout the project. Clean development process and premium communication throughout the project.",
      image: "/an3.jpg",
    },
    {
      id: 4,
      title: "Emily Watson",
      position: "Marketing Lead",
      description:
        "One of the best creative teams we’ve worked with for branding and web experiences.One of the best creative teams we’ve worked with for branding and web experiences.One of the best creative teams we’ve worked with for branding and web experiences.",
      image: "/an3.jpg",
    },
    {
      id: 5,
      title: "Michael Brown",
      position: "Startup Founder",
      description:
        "The final result exceeded expectations. Everything feels polished and premium. The final result exceeded expectations. Everything feels polished and premium. The final result exceeded expectations. Everything feels polished and premium.",
      image: "/an3.jpg",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f8fafc] py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* heading */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-5xl">
           
            <p className="font-bold text-[#161616] font-sans text-lg md:text-xl">
              Featured Projects
            </p>

            <h3 className="font-sans text-[#161616] font-bold text-5xl md:text-[90px] leading-none mt-2">
              WHAT THEY SAY
            </h3>
          </div>

          <p className="max-w-md font-bold text-black font-sans">
            Real feedback from clients who trusted us to build premium digital
            experiences for their brands.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 auto-rows-[260px]">
          {/* Video Card */}
          <VideoCard card={cards[0]} />

          {/* Static Cards */}
{cards.slice(1).map((card) => (
  <div
    key={card.id}
    className="md:col-span-3"
  >
    <FollowerPointerCard
      title={
        <div className="flex items-center gap-2">
          <Image
            src={card.image || ""}
            alt={card.title}
            width={24}
            height={24}
            className="h-6 w-6 rounded-full border border-white object-cover"
          />

          <div className="flex flex-col leading-none">
            <p className="text-sm font-semibold text-white">
              {card.title}
            </p>

            <p className="text-[11px] text-white/70">
              {card.position}
            </p>
          </div>
        </div>
      }
    >
      <div className="group h-full rounded-[30px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-full flex-col">
          {/* quote */}
          <p className="font-medium font-sans leading-7 text-black">
            “{card.description}”
          </p>
        </div>
      </div>
    </FollowerPointerCard>
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;