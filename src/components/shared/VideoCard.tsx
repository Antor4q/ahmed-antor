"use client";

import Image from "next/image";
import { useRef } from "react";
import { ProgressiveBlur } from "../ui/progressive-blur";

type CardType = {
  title: string;
  description: string;
  company?: string;
  logo?: string;
  thumbnail?: string;
  video?: string;
};

const VideoCard = ({ card }: { card: CardType }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    if (videoRef.current) {
      await videoRef.current.play().catch(() => {});
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      className="group relative min-h-[540px] overflow-hidden rounded-[32px] md:col-span-6 md:row-span-2"
    >
      {/* Thumbnail */}
      <Image
        src={card.thumbnail || ""}
        alt={card.title}
        fill
        className="object-cover"
      />

      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        src={card.video}
        muted
        loop
        playsInline
      />

      {/* Overlay (also hide on hover) */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />

      {/* Progressive Blur (HIDE on hover) */}
      <div className="absolute bottom-0 left-0 w-full transition-opacity duration-500 group-hover:opacity-0">
        <ProgressiveBlur height="400px" position="bottom" />
      </div>

      {/* CONTENT (HIDE on hover) */}
      <div className="absolute bottom-0 left-0 w-full transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-10">
        <div className="relative z-10 p-6 md:p-8">
          
          <p className="mt-6 text-xl leading-relaxed text-white md:text-2xl">
            “{card.description}”
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div>
              <h5 className="font-semibold text-white">
                Sarah Mitchell
              </h5>
              <p className="text-sm text-white/70">
                CEO of {card.company}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default VideoCard;