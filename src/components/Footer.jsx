import Link from "next/link";
import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/harshmaniar210/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/HarshManiar1804",
      label: "GitHub",
      Icon: SiGithub,
    },
  ];
  return (
    <footer className="p-16 flex justify-between items-center gap-3">
      <h1 className="text-2xl font-bold underline underline-offset-4 decoration-slate-600 text-white">
        Harsh maniar 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5 text-2xl">
        {socials.map((social, index) => {
          const { Icon, link, label } = social;
          return (
            <Link
              key={index}
              href={link}
              aria-label={label}
              className="text-gray-400"
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
