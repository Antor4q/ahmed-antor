"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/utils";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center gap-3 flex-wrap w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-5 py-2 rounded-full border border-gray-300 dark:border-zinc-700",
              tabClassName
            )}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", duration: 0.4 }}
                className={cn(
                  "absolute inset-0 bg-orange-500 rounded-full",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative text-sm font-medium text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      <FadeInDiv
        tabs={tabs}
        hovering={hovering}
        className={cn("mt-10", contentClassName)}
      />
    </>
  );
};

const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  tabs: Tab[];
  hovering?: boolean;
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full">
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            style={{
              opacity: idx === 0 ? 1 : 0,
              position: idx === 0 ? "relative" : "absolute",
            }}
            animate={{
              y: idx === 0 ? [0, 20, 0] : 0,
            }}
            className={cn("w-full", className)}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};