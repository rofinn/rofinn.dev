// We need to make this a client component to pass our react icons around
"use client";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import dynamic from "next/dynamic";
import Link from "next/link";

const ThemeToggle = dynamic(() => import("./theme-toggle"));

const WAVE_SYMBOL = "\u223F";

const NAVLINKS = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const ICONLINKS = [
  {
    Icon: FaEnvelope,
    href: "mailto: hello@example.com",
  },
  {
    Icon: FaGithub,
    href: "https://github.com",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com",
  },
];

export function NavBar() {
  return (
    <nav className="flex justify-center items-center md:justify-between h-xl m-auto text-xl text-loosen p-6">
      <ul className="flex gap-6">
        {/* Logo */}
        <li>
          <Link className="text-xl font-bold" href="/">
            <i>{WAVE_SYMBOL}</i> rofinn
          </Link>
        </li>
        {/* Nav Links */}
        {NAVLINKS.map(({ name, href }) => (
          <li key={href}>
            <Link href={href} className="text-lg">
              {name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Desktop Accounts Navigation */}
      <ul className="hidden md:flex gap-4">
        {ICONLINKS.map(({ Icon, href }) => (
          <li key={href}>
            <Link href={href}>
              <Icon size="1.5rem" />
            </Link>
          </li>
        ))}
        <ThemeToggle />
      </ul>
    </nav>
  );
}

export default function Header() {
  // const theme = useTheme();
  return (
    <header>
      <NavBar />
    </header>
  );
}
