import React from "react";
import { Skills } from "@/components/Skills";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full  overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
        <a href="/">
          <Image
            src="/images/logo.png"
            width={120}
            height={80}
            alt="logo"
            className="max-h-[80px] h-full object-contain object-center"
          />
        </a>
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-[#4e69e0] font-[600]">It's Me</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight cursor-pointer">
            Harsh Maniar, <br /> Web <Cover>Developer</Cover>.
          </h2>
        </div>
      </div>

      <div className="w-full h-full flex items-end bg-[#0d0d0e]">
        <Image
          src="/images/harsh.png"
          width={800}
          height={1200}
          className="w-full max-h-[90vh] object-contain object-bottom"
          alt="model"
        />
      </div>

      <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
        <div className="flex items-center mt-[60px]">
          <div>
            <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight mt-[100px] mr-auto">
              About Me
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px] ">
              I'm Harsh, a Web Developer based in Ahmedabad, India, with a
              background in Software Development. I work with modern
              technologies like JavaScript and React.js to build user-friendly
              web applications.
            </p>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px] ">
              I also focus on improving my skills in Data Structures and
              Algorithms. Keeping up with web development trends and exploring
              new technologies helps me create efficient and scalable solutions.
            </p>
          </div>
        </div>
      </div>

      <ShootingStars className="z-[-1]" />
      <StarsBackground className="z-[-1]" />
    </div>
  );
};

export default HeroSection;
