"use client";

import React from "react";

import {
  Text,
  Heading,
  VStack,
  HStack,
  Flex,
  Spacer,
  Icon,
} from "@chakra-ui/react";

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
  SiChakraui,
} from "react-icons/si";

import { FaRProject } from "react-icons/fa";

const SIZES = ["0.75rem", "1rem", "1.5rem", "2rem", "2.5rem"];

const WEB_SKILLS = [
  { icon: SiCss3, name: "CSS", weight: 2 },
  { icon: SiHtml5, name: "HTML", weight: 3 },
  { icon: SiTypescript, name: "Typescript", weight: 1 },
  { icon: SiReact, name: "React", weight: 3 },
  { icon: SiNextdotjs, name: "NextJS", weight: 2 },
  { icon: SiChakraui, name: "Chakra", weight: 2 },
];

const DATA_SKILLS = [
  { icon: FaRProject, name: "R", weight: 1 },
  { icon: SiKeras, name: "Keras", weight: 2 },
  { icon: SiPython, name: "Python", weight: 5 },
  { icon: SiCplusplus, name: "C++", weight: 2 },
  { icon: SiJulia, name: "Julia", weight: 5 },
  { icon: SiPerl, name: "Perl", weight: 1 },
];

const SYSTEM_SKILLS = [
  { icon: SiAmazonaws, name: "AWS", weight: 4 },
  { icon: SiPostgresql, name: "Postgres", weight: 2 },
  { icon: SiLinux, name: "Linux", weight: 4 },
  { icon: SiGit, name: "Git", weight: 4 },
  { icon: SiDocker, name: "Docker", weight: 3 },
];

export default function SkillCloud() {
  return (
    <VStack w={[300, 400, 500]} spacing={8}>
      <HStack spacing={8}>
        {WEB_SKILLS.map(({ icon, name, weight }) => (
          <Icon key={name} as={icon} boxSize={SIZES[weight - 1]} />
        ))}
      </HStack>
      <HStack spacing={8}>
        {DATA_SKILLS.map(({ icon, name, weight }) => (
          <Icon key={name} as={icon} boxSize={SIZES[weight - 1]} />
        ))}
      </HStack>
      <HStack spacing={8}>
        {SYSTEM_SKILLS.map(({ icon, name, weight }) => (
          <Icon key={name} as={icon} boxSize={SIZES[weight - 1]} />
        ))}
      </HStack>
    </VStack>
  );
}
