// We need to make this a client component to pass our react icons around
"use client";

import React, { PropsWithChildren } from "react";
import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  Stack,
  Text,
  Spacer,
  Icon,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";

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
    icon: FaEnvelope,
    href: "mailto: hello@example.com",
  },
  {
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com",
  },
];

export function NavLogo() {
  const style = {
    borderRadius: "50%",
  };

  return (
    <Box as={Link} href="/" display="block" pr={8}>
      <Stack spacing={2} direction="row">
        {/* <Image src='/wave.png' height='30' width='40' alt='logo' style={ style } /> */}
        <Text fontSize="3xl">
          <b>
            <i>{WAVE_SYMBOL}</i> rofinn
          </b>
        </Text>
      </Stack>
    </Box>
  );
}

export function NavItem(props: { name: string; href: string }) {
  return (
    <Text as={Link} href={props.href} display="block" fontSize="2xl">
      {props.name}
    </Text>
  );
}

export function NavIcon(props: { icon: IconType; href: string }) {
  return (
    <Box
      as={Link}
      href={props.href}
      display="block"
      key={props.href}
      fontSize="2xl"
    >
      <Icon as={props.icon} />
    </Box>
  );
}

export function NavColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box onClick={toggleColorMode} display="block" fontSize="2xl">
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Box>
  );
}

export function NavBar(props: PropsWithChildren<{}>) {
  return (
    <Box
      display={{ base: "block", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack spacing={8} direction={["column", "row", "row", "row"]}>
        {props.children}
      </Stack>
    </Box>
  );
}

export default function Header() {
  const theme = useTheme();
  return (
    <header>
      <Flex
        as="nav"
        position="fixed"
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        wrap="wrap"
        w="100%"
        p="1em"
        zIndex={1}
        opacity={1}
        boxShadow="xs"
        bg={theme.__cssMap["colors.chakra-body-bg"].value}
      >
        <NavLogo />
        <NavBar>
          {NAVLINKS.map(({ name, href }) => (
            <NavItem key={href} name={name} href={href} />
          ))}
        </NavBar>
        <Spacer />
        <NavBar>
          {ICONLINKS.map(({ icon, href }) => (
            <NavIcon key={href} icon={icon} href={href} />
          ))}
          <NavColorMode />
        </NavBar>
      </Flex>
    </header>
  );
}
