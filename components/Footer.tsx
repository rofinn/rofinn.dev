import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/Container";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="transition">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            {/* <div className="flex flex-col justify-between gap-6 sm:flex-row"> */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium">
              {/* <NavLink href="/about">About</NavLink> */}
              <NavLink href="/content">Content</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/tools">Tools</NavLink>
            </div>
            {/* <p className="text-sm">
                &copy; {new Date().getFullYear()} Rory Finnegan. All rights
                reserved.
              </p> */}
            {/* </div> */}
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
