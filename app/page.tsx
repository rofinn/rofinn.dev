import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Divider } from "@/components/Divider";
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

function Experience() {
  let experience: Array<Role> = [
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
    <div className="flex flex-col p-6 justify-items-end">
      <ol className="mt-6 space-y-12">
        {experience.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <div className="flex">
        <div className="w-1/2 md:w-4/5" />
        <Button
          href="#"
          variant="primary"
          className="group mt-6 w-1/2 md:w-1/5"
        >
          More info
        </Button>
      </div>
    </div>
  );
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    // <div className="lg:flex lg:justify-between mt-16 lg:gap-4">
    <div className="lg:flex mx-auto w-full max-w-7xl">
      <Container className="lg:fixed top-0 left-20 lg:w-1/3 mt-12 md:mt-28 gap-y-6 lg:gap-y-24">
        <h1 className="text-3xl font-bold text-zinc-800 sm:text-4xl dark:text-zinc-100 lg:text-end">
          Rory Finnegan
        </h1>
        <h2 className="text-sm mt-2 italic sm:text-md sm:hidden font-bold text-zinc-600 dark:text-zinc-400 lg:text-end">
          Software spelunker, ex-researcher and outdoor enthusiast
        </h2>
        <ul className="text-sm mt-2 italic sm:text-md max-sm:hidden font-bold text-zinc-600 dark:text-zinc-400 lg:text-end">
          <li>Software spelunker</li>
          <li>ex-researcher and</li>
          <li>outdoor enthusiast</li>
        </ul>
        <div className="flex gap-4 mx-4 lg:justify-end">
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
      </Container>
      <Container className="lg:w-1/3 mt-12 md:mt-28 gap-y-6 lg:gap-y-24" />
      {/* <Photos /> */}
      <Container className="lg:w-2/3 mt-12 px-0">
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          I'm a software developer and neuroscientist who enjoys working on
          complex interdisciplinary problems. My academic and vocational
          experience covers system administration, database management, software
          development, and research. Previously, I worked at Invenia, developing
          and deploying forecasting models for power flow optimization. I
          currently work at Denvr Dataworks, helping customers architect ML
          applications for Denvr's cloud platform.
        </p>
        <Divider title="Content" />
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
        <Divider title="Experience" />
        <Experience />
      </Container>
    </div>
  );
}
