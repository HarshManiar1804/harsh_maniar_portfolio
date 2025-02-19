import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiLinkedin, SiGithub, SiLinktree } from "react-icons/si";

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
    {
      link: "https://linktr.ee/harshmaniar",
      label: "Linktree",
      Icon: SiLinktree,
    },
  ];
  return (
    <footer className="p-16 flex justify-between items-center gap-3">
      <Image
        src="/images/logo.png"
        width={120}
        height={80}
        alt="logo"
        className="max-h-[80px] h-full object-contain object-center "
      />
      <div className="flex items-center gap-5 text-2xl">
        {socials.map((social, index) => {
          const { Icon, link, label } = social;
          return (
            <Link
              target="_blank"
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
