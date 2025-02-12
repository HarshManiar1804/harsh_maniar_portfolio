import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function Resume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover> Crest Data</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">Nov 2023 - Dec 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Software Developer
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>B.Tech in Computer Science</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">
              Aug 2021 - June 2024
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Nirma University
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>Diploma in Computer Science</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">
              July 2018 - June 2021
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Darshan University
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="resume">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans ">
        <Cover className="pr-12 pl-12">Resume</Cover>
      </h2>
      <Timeline data={data} />
    </div>
  );
}
