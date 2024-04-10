"use client";

import React from "react";

import {
  SiPython,
  SiJulia,
  SiAmazonaws,
  SiPostgresql,
  SiKeras,
  SiLinux,
  SiGit,
  SiDocker,
  SiCplusplus,
  SiPerl,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

import { FaRProject } from "react-icons/fa";

const SIZES = ["0.75rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem", "3.5rem"];

const WEB_SKILLS = [
  { Icon: SiCss3, name: "CSS", weight: 2 },
  { Icon: SiHtml5, name: "HTML", weight: 3 },
  { Icon: SiTypescript, name: "Typescript", weight: 1 },
  { Icon: SiReact, name: "React", weight: 3 },
  { Icon: SiNextdotjs, name: "NextJS", weight: 2 },
  { Icon: SiTailwindcss, name: "Chakra", weight: 2 },
];

const DATA_SKILLS = [
  { Icon: FaRProject, name: "R", weight: 1 },
  { Icon: SiKeras, name: "Keras", weight: 2 },
  { Icon: SiPython, name: "Python", weight: 5 },
  { Icon: SiCplusplus, name: "C++", weight: 2 },
  { Icon: SiJulia, name: "Julia", weight: 5 },
  { Icon: SiPerl, name: "Perl", weight: 1 },
];

const SYSTEM_SKILLS = [
  { Icon: SiAmazonaws, name: "AWS", weight: 4 },
  { Icon: SiPostgresql, name: "Postgres", weight: 2 },
  { Icon: SiLinux, name: "Linux", weight: 4 },
  { Icon: SiGit, name: "Git", weight: 4 },
  { Icon: SiDocker, name: "Docker", weight: 3 },
];

export default function SkillCloud() {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 lg:w-full lg: max-w-lg">
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8">
        {WEB_SKILLS.map(({ Icon, name, weight }) => (
          <Icon key={name} size={SIZES[weight + 1]} />
        ))}
      </div>
      <div className="flex flex-row gap-4 md:gap-8 lg:gap-10">
        {DATA_SKILLS.map(({ Icon, name, weight }) => (
          <Icon key={name} size={SIZES[weight + 1]} />
        ))}
      </div>
      <div className="flex flex-row gap-2 md:gap-6 lg:gap-8">
        {SYSTEM_SKILLS.map(({ Icon, name, weight }) => (
          <Icon key={name} size={SIZES[weight + 1]} />
        ))}
      </div>
    </div>
  );
}
