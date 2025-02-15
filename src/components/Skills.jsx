"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";

import { Cover } from "./ui/cover";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { HoverEffect } from "./ui/card-hover-effect";

export function Skills() {
  const skills = [
    { text: "React", Icon: SiReact },
    { text: "NextJs", Icon: SiNextdotjs },
    { text: "Javascript", Icon: SiJavascript },
    { text: "Typescript", Icon: SiTypescript },
    { text: "Nodejs", Icon: SiNodedotjs },
    { text: "Expressjs", Icon: SiExpress },
    { text: "Tailwind", Icon: SiTailwindcss },
    { text: "Git", Icon: SiGit },
    { text: "Github", Icon: SiGithub },
    { text: "Python", Icon: SiPython },
    { text: "Mongodb", Icon: SiMongodb },
    { text: "Docker", Icon: SiDocker },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8" id="skills">
      <div className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-3xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight cursor-pointer">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans flex items-center justify-center">
          <Cover className="pr-12 pl-12">Skills</Cover>
        </h2>
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
