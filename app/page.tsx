import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import {
  GitHubIcon,
  LinkedInIcon,
  BlueSkyIcon,
} from "@/components/SocialIcons";

import logoDenvr from "@/images/logos/denvr.webp";
import logoInveniaLabs from "@/images/logos/invenia-labs.jpg";
import logoInvenia from "@/images/logos/invenia-technical-computing.png";
import logoUofM from "@/images/logos/university-of-manitoba.png";
import logoNML from "@/images/logos/canada-nml.png";

import headworn from "@/images/photos/headworn-displays.png";
import impute from "@/images/photos/impute.png";
import neurogenesis from "@/images/photos/neurogenesis-paper.png";
import rag from "@/images/photos/RAG.svg";
import { type ArticleWithSlug, getAllArticles } from "@/lib/content";
import { formatDate } from "@/lib/formatDate";

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/content/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="invisible md:visible relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="w-8 h-fit rounded-full aspect-auto object-cover"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: "Denvr Dataworks",
      title: "Solutions Architect",
      logo: logoDenvr,
      start: "2024",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Invenia Labs",
      title: "Research Software Developer",
      logo: logoInveniaLabs,
      start: "2020",
      end: "2023",
    },
    {
      company: "Invenia Technical Computing",
      title: "Software Developer",
      logo: logoInvenia,
      start: "2016",
      end: "2020",
    },
    {
      company: "Invenia Technical Computing",
      title: "Jr. Software Developer",
      logo: logoInvenia,
      start: "2013",
      end: "2013",
    },
    {
      company: "HCI Lab, University of Manitoba",
      title: "Research Associate",
      logo: logoUofM,
      start: "2012",
      end: "2013",
    },
    {
      company: "National Microbiology Lab",
      title: "Analyst",
      logo: logoNML,
      start: "2012",
      end: "2012",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex font-semibold text-zinc-900 dark:text-zinc-100">
        {/* <BriefcaseIcon className="h-6 w-6 flex-none" /> */}
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="primary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[rag, impute, neurogenesis, headworn].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              // "relative aspect-[15/10] h-100 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-80 sm:rounded-2xl dark:bg-zinc-800",
              "relative aspect-[15/10] h-100 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-80 sm:rounded-2xl",
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 20rem, 14rem"
              className="absolute inset-0 h-full w-full object-left-top grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    <>
      <Container className="mt-16 sm:mt-32 mx-auto">
        <div className="max-w-3xl gap-y-6 lg:gap-y-24">
          <div className="flex">
            <div className="grow">
              <h1 className="font-bold text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Rory Finnegan
              </h1>
              <h2 className="mt-2 italic max-sm:hidden font-bold text-zinc-600 dark:text-zinc-400">
                Software spelunker, ex-researcher and outdoor enthusiast
              </h2>
            </div>
            <div className="flex flex-row-reverse gap-4 mx-4">
              <SocialLink
                href="https://linkedin.com/in/roryfinnegan"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/rofinn"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://bsky.app/profile/rofinn.bsky.social"
                icon={BlueSkyIcon}
                className="mt-4"
              >
                Follow on BlueSky
              </SocialLink>
            </div>
          </div>
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm a software developer and neuroscientist who enjoys working on
            complex interdisciplinary problems. My academic and vocational
            experience covers system administration, database management,
            software development, and research. Previously, I worked at Invenia,
            developing and deploying forecasting models for power flow
            optimization. I currently work at Denvr Dataworks, helping customers
            architect ML applications for Denvr's cloud platform.
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="grow space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            {/* <Newsletter /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
