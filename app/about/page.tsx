import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  BlueSkyIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";
// import portraitImage from "@/images/avatar-blue.png";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-sky-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "I’m Rory. I enjoy writing software at the intersection of data science, statistics and machine learning.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 grayscale"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Rory Finnegan
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              With over a decade of experience in software development and
              research,&nbsp; I am an end-to-end generalist who excels in
              solving complex and interdisciplinary problems.&nbsp; My
              neuroscience and computer science background gives me a unique
              perspective and skill set to tackle challenging optimization,
              machine learning and data analysis problems.
              <br />
              <br />
            </p>
            <p>
              At Invenia, I focused on accelerating the process of getting
              research proposals into tested production-ready solutions.&nbsp;
              Daily, I mentored colleagues, guided long-term projects, and
              developed and deployed new predictive models.&nbsp; While I gained
              experience leading teams and projects alike, I found I'm most at
              home as a "solver" in an org.&nbsp; Identifying and addressing
              blocking issues is my bread and butter.&nbsp; It doesn't matter if
              that's mitigating model overfitting, cutting memory consumption in
              half, or improving data fetching performance by an order of
              magnitude.
              <br />
              <br />
            </p>
            <p>
              When not learning about new technologies, I'm skiing, hiking, and
              canoeing around beautiful British Columbia.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://linkedin.com/in/roryfinnegan"
              icon={LinkedInIcon}
              className="mt-4 justify-center"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/roryfinnegan"
              icon={GitHubIcon}
              className="mt-4 justify-center"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://bsky.app/profile/rofinn.bsky.social"
              icon={BlueSkyIcon}
              className="mt-4 justify-center"
            >
              Follow on Bluesky
            </SocialLink>
            {/* <SocialLink
              href="mailto:contact@rofinn.net"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@rofinn.net
            </SocialLink> */}
          </ul>
        </div>
      </div>
    </Container>
  );
}
