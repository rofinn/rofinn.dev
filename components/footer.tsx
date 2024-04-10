"use client";

import React from "react";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex sticky top-[100vh] justify-center p-6">
      Made with{" "}
      <div className="p-2">
        <SiNextdotjs />
      </div>{" "}
      and{" "}
      <div className="p-2">
        <SiTailwindcss />
      </div>
    </footer>
  );
}
