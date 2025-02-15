import React from "react";
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
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
const ProjectsList = () => {
  const projects = [
    {
      title: "BookMyDoctor",
      tech: [
        SiReact,
        SiNodedotjs,
        SiExpress,
        SiMongodb,
        SiTypescript,
        SiTailwindcss,
      ],
      link: "https://github.com/HarshManiar1804/BookMyDoctor",
      cover: "/images/moneymap.png",
      background: "bg-indigo-500",
    },
    {
      title: "BookMyDoctor",
      tech: [
        SiReact,
        SiNodedotjs,
        SiExpress,
        SiMongodb,
        SiTypescript,
        SiTailwindcss,
      ],
      link: "https://github.com/HarshManiar1804/BookMyDoctor",
      cover: "/images/moneymap.png",
      background: "bg-indigo-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto py-6 p-5">
      {projects.map((project, index) => (
        <Link key={index} href={project.link} className="w-full">
          <div className={cn("p-5 rounded-md h-full", project.background)}>
            <DirectionAwareHover
              imageUrl={project.cover}
              className="w-full space-y-5 cursor-pointer"
            >
              <h1 className="text-2xl font-bold">{project.title}</h1>
              <div className="flex items-center gap-5 ">
                {project.tech.map((Icon, index) => (
                  <Icon key={index} className="w-7 h-7" />
                ))}
              </div>
            </DirectionAwareHover>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsList;
