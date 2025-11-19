"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const VideoComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

 
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, 0]);
  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["70%", "100%", "100%"]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => console.log("Autoplay blocked"));
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <motion.div
        style={{ scale }}
        className="sticky top-0 flex justify-center items-center h-screen"
      >
        <motion.button
          style={{ borderRadius, width }}
          className="relative cursor-pointer overflow-hidden h-[80vh] md:h-screen shadow-2xl"
          onClick={toggleSound}
        >
          <video
            ref={videoRef}
            src="/presentation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Sound toggle */}
          {/* <button
            onClick={toggleSound}
            className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white bg-black/30 hover:bg-black/50 transition-all"
          >
            {isMuted ? "🔊 Watch Video" : "🔇 Mute"}
          </button> */}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default VideoComponent;
