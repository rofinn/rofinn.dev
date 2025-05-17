"use client";

import clsx from "clsx";
import Link from "next/link";

// Icons we're want to use for our navbar
import { SiBluesky, SiGithub, SiLinkedin } from "react-icons/si";
import {
  PiCode,
  PiGearFill,
  PiReadCvLogoFill,
  PiRssSimpleBold,
} from "react-icons/pi";

import { usePathname } from "next/navigation";

const WAVE_SYMBOL = "\u223F";
const NAV_ICON_SIZE = "24";
const SOCIAL_ICON_SIZE = "20";

// Shared navigation items
const navItems = [
  {
    href: "/",
    name: "Home",
    color: "lavender",
    icon: <b className="text-4xl">{WAVE_SYMBOL}</b>,
    mobileIcon: <b className="pb-4 text-5xl">{WAVE_SYMBOL}</b>,
  },
  {
    href: "/cv",
    name: "CV",
    color: "blue",
    icon: <PiReadCvLogoFill size={NAV_ICON_SIZE} />,
  },
  {
    href: "/projects",
    name: "Projects",
    color: "green",
    icon: <PiCode size={NAV_ICON_SIZE} />,
  },
  {
    href: "/content",
    name: "Content",
    color: "peach",
    icon: <PiRssSimpleBold size={NAV_ICON_SIZE} />,
  },
  {
    href: "/tools",
    name: "Tools",
    color: "mauve",
    icon: <PiGearFill size={NAV_ICON_SIZE} />,
  },
];

// Shared social items
const socialItems = [
  {
    href: "https://github.com/rofinn",
    name: "GitHub",
    color: "white",
    icon: <SiGithub size={SOCIAL_ICON_SIZE} />,
  },
  {
    href: "https://bsky.app/profile/rofinn.bsky.social",
    name: "Bluesky",
    color: "white",
    icon: <SiBluesky size={SOCIAL_ICON_SIZE} />,
  },
  {
    href: "https://linkedin.com/in/roryfinnegan",
    name: "LinkedIn",
    color: "white",
    icon: <SiLinkedin size={SOCIAL_ICON_SIZE} />,
  },
];

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
          "flex group transition items-center justify-center my-2 mx-auto hover:brightness-125 hover:scale-125",
          colorMap[color],
          isActive
            ? "brightness-125 scale-125"
            : "hover:brightness-125 hover:scale-125",
        )}
      >
        {children}
        <span className="absolute w-auto top-0 left-8 text-xs rounded-md shadow-md scale-0 md:group-hover:scale-100 transition-all duration-100 origin-left">
          {name}
        </span>
      </Link>
    </li>
  );
}

function DesktopNavigation({ className }: { className: string }) {
  return (
    <nav
      className={`fixed top-0 left-0 h-screen flex flex-col w-8 lg:w-12 p-2 justify-center ${className}`}
    >
      <ul className="flex-grow space-y-4">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            name={item.name}
            color={item.color}
          >
            {item.icon}
          </NavItem>
        ))}
      </ul>
      <ul className="flex-none space-y-4 text-overlay2">
        {socialItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            name={item.name}
            color={item.color}
          >
            {item.icon}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavigation({ className }: { className: string }) {
  return (
    <nav className={`fixed z-50 bottom-0 h-16 w-full bg-crust ${className}`}>
      <ul className="flex flex-row items-center justify-center space-x-6">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            name={item.name}
            color={item.color}
          >
            {item.mobileIcon || item.icon}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

export function Nav() {
  return (
    <>
      <MobileNavigation className="md:hidden" />
      <DesktopNavigation className="invisible md:visible" />
    </>
  );
}
