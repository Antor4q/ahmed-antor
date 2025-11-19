"use client";
import { motion } from "motion/react";
import { LayoutTextFlip } from "../ui/layout-text-flip";



const ResizeHandle = () => {
  

  return (
    <>
       <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center text-7xl justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text=""
          words={["Web Design", "Web Development", "Automation", "Ai Intrigated", "Dashboard Build"]}
        />
      </motion.div>
      
    </div>
    </>
  );
};

export default ResizeHandle;
