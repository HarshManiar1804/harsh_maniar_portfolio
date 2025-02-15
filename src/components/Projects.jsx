"use client";
import React from "react";
import ProjectsList from "./ProjectsList";
import { Cover } from "./ui/cover";

export default function Projects() {
  return (
    <div className="w-full h-full py-10 " id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans flex items-center justify-center">
        <Cover className="pr-12 pl-12">Recent Projects</Cover>
      </h2>
      <div className="ml-8 p-16">
        <ProjectsList />
      </div>
    </div>
  );
}
