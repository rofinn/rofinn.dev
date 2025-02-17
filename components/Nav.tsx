"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons we're want to use for our navbar
import { IconContext } from "react-icons";
import { SiBluesky, SiGithub, SiLinkedin, SiRss } from "react-icons/si";
import {
  PiFolderOpen,
  PiCode,
  PiGearFill,
  PiGearSixFill,
  PiReadCvLogoFill,
  PiRssSimpleBold,
} from "react-icons/pi";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import avatarImage from "@/images/avatar.jpg";

const WAVE_SYMBOL = "\u223F";

function NavItem({
  href,
  name,
  color,
  children,
}: {
  href: string;
  name: string;
  color: string;
  children: React.ReactNode;
}) {
  let isActive = usePathname() === href;
  const colorMap: { [key: string]: string } = {
    lavender: isActive ? "text-lavender" : "text-overlay2 hover:text-lavender",
    blue: isActive ? "text-blue" : "text-overlay2 hover:text-blue",
    green: isActive ? "text-green" : "text-overlay2 hover:text-green",
    peach: isActive ? "text-peach" : "text-overlay2 hover:text-peach",
    mauve: isActive ? "text-mauve" : "text-overlay2 hover:text-mauve",
    white: isActive ? "text-white" : "text-overlay2 hover:text-white",
  };

  return (
    <li>
      <Link
        href={href}
        aria-label={name}
        className={clsx(
          "relative block group transition my-2 mx-auto hover:brightness-125 hover:scale-125",
          colorMap[color],
          isActive
            ? "brightness-125 scale-125"
            : "hover:brightness-125 hover:scale-125",
        )}
      >
        {children}
        <span className="absolute w-auto top-0 left-8 text-xs rounded-md shadow-md scale-0 group-hover:scale-100 transition-all duration-100 origin-left">
          {name}
        </span>
      </Link>
    </li>
  );
}

export function Nav() {
  const navIconSize = "24";
  const socialIconSize = "20";

  return (
    <nav className="fixed top-0 left-0 h-screen flex flex-col w-8 items-center">
      <ul className="items-center justify-center flex-grow space-y-4">
        <NavItem href="/" name="Home" color="lavender">
          <b className="text-4xl">{WAVE_SYMBOL}</b>
        </NavItem>
        <NavItem href="/CV" name="CV" color="blue">
          <PiReadCvLogoFill size={navIconSize} />
        </NavItem>
        <NavItem href="/projects" name="Projects" color="green">
          <PiCode size={navIconSize} />
          {/* <PiFolderOpen size={navIconSize} /> */}
        </NavItem>
        <NavItem href="/content" name="Content" color="peach">
          <PiRssSimpleBold size={navIconSize} />
        </NavItem>
        <NavItem href="/tools" name="Tools" color="mauve">
          <PiGearFill size={navIconSize} />
        </NavItem>
      </ul>
      <ul className="flex-none space-y-4 text-overlay2">
        <NavItem href="https://github.com/rofinn" name="GitHub" color="white">
          <SiGithub size={socialIconSize} />
        </NavItem>
        <NavItem
          href="https://bsky.app/profile/rofinn.bsky.social"
          name="Bluesky"
          color="white"
        >
          <SiBluesky size={socialIconSize} />
        </NavItem>
        <NavItem
          href="https://linkedin.com/in/roryfinnegan"
          name="LinkedIn"
          color="white"
        >
          <SiLinkedin size={socialIconSize} />
        </NavItem>
      </ul>
    </nav>
  );
}
