"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

const Technologies = () => {
  const tabs = [
    {
      title: "All",
      value: "all",
      content: (
        <TechGrid
          items={[
            "/tech/html.png",
            "/tech/css.png",
            "/tech/tailwind.png",
            "/tech/bootstrap.png",
            "/tech/react.png",
            "/tech/js.png",
            "/tech/ts.png",
            "/tech/angular.png",
            "/tech/vue.png",
            "/tech/framer.png",
            "/tech/next.png",
            "/tech/wix.png",
            "/tech/express.png",
            "/tech/nodejs.png",
            "/tech/postgre.png",
            "/tech/mysql.png",
            "/tech/mongodb.png",
            "/tech/firebsae.png",
            "/tech/openai.png",
            "/tech/gemini.png",
            "/tech/git.png",
          ]}
        />
      ),
    },
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <TechGrid
          items={[
            "/tech/html.png",
            "/tech/css.png",
            "/tech/tailwind.png",
            "/tech/bootstrap.png",
            "/tech/react.png",
            "/tech/js.png",
            "/tech/ts.png",
            "/tech/angular.png",
            "/tech/vue.png",
            "/tech/framer.png",
            "/tech/next.png",
            "/tech/wix.png",
          ]}
        />
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <TechGrid items={["/tech/nodejs.png", "/tech/express.png"]} />
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <TechGrid
          items={[
            "/tech/postgre.png",
            "/tech/mysql.png",
            "/tech/mongodb.png",
            "/tech/firebsae.png",
          ]}
        />
      ),
    },
    {
      title: "Tools",
      value: "tools",
      content: (
        <TechGrid
          items={[
            "/tech/openai.png",
            "/tech/gemini.png",
            "/tech/git.png",
          ]}
        />
      ),
    },
  ];

  return (
     <div className="container mx-auto my-40 px-4 flex flex-col items-center">
    
    {/* 🔥 HEADER SECTION (NEW ADD) */}
    <div className="text-center mb-10">
      <p className="font-bold font-sans text-lg md:text-xl">
        Technologies
      </p>

      <h3 className="font-sans font-bold text-5xl md:text-[90px] leading-none mt-2">
        TECHNOLOGIES
      </h3>
    </div>

    {/* TABS */}
    <Tabs tabs={tabs} />
  </div>
  );
};

export default Technologies;

/* 🔥 CENTERED LOGO CLOUD GRID */
const TechGrid = ({ items }: { items: string[] }) => {
  return (
    <div className="flex justify-center w-full">
  <div className="max-w-6xl w-full mx-auto flex flex-wrap justify-center gap-10">
    {items.map((item, i) => (
      <div
        key={i}
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition duration-300"
      >
        <Image
          src={item}
          alt="tech"
          width={100}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>
    ))}
  </div>
</div>
  );
};