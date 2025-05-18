import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Waves } from "@/components/Waves";

import logoDenvr from "@/images/logos/denvr.webp";
import logoInveniaLabs from "@/images/logos/invenia-labs.jpg";
import logoInvenia from "@/images/logos/invenia-technical-computing.png";
import logoUofM from "@/images/logos/university-of-manitoba.png";
import logoNML from "@/images/logos/canada-nml.png";

import { type ArticleWithSlug, getAllArticles } from "@/lib/content";
import { formatDate } from "@/lib/formatDate";

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
      <div className="invisible md:visible relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 dark:border dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="w-8 h-fit rounded-full aspect-auto object-cover"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium">{role.company}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs"
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
      </div>
    </div>
  );
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    <div className="home">
      <Waves />
      <SimpleLayout
        title="Rory Finnegan"
        intro="Software spelunker, ex-researcher and outdoor enthusiast"
        className="justify-center md:h-screen pb-20 md:pb-0"
      >
        <p className="my-12">
          I'm a software developer and neuroscientist who enjoys working on
          complex interdisciplinary problems. My academic and vocational
          experience covers system administration, database management, software
          development, and research. Previously, I worked at Invenia, developing
          and deploying forecasting models for power flow optimization. I
          currently work at Denvr Dataworks, helping customers architect ML
          applications for Denvr's cloud platform.
        </p>
      </SimpleLayout>
    </div>
  );
}
