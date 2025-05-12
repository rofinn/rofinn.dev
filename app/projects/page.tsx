import { type Metadata } from "next";
import Link from "next/link";

import { SimpleLayout } from "@/components/SimpleLayout";
import { Waves } from "@/components/Waves";

import {
  SiGnubash,
  SiJinja,
  SiJulia,
  SiMarkdown,
  SiPython,
  SiTypescript,
  SiYaml,
} from "react-icons/si";

const iconSize = "16";
const icons: { [key: string]: JSX.Element } = {
  Bash: <SiGnubash key="Bash" size={iconSize} />,
  Jinja: <SiJinja key="Jinja" size={iconSize} />,
  Julia: <SiJulia key="Julia" size={iconSize} />,
  Markdown: <SiMarkdown key="Markdown" size={iconSize} />,
  Python: <SiPython key="Python" size={iconSize} />,
  Typescript: <SiTypescript key="Typescript" size={iconSize} />,
  YAML: <SiYaml key="YAML" size={iconSize} />,
};

const projects = [
  {
    name: "Boltzmann.jl",
    description: "Restricted Boltzmann Machines in Julia",
    link: {
      href: "https://github.com/rofinn/Boltzmann.jl",
      label: "Boltzmann.jl",
    },
    owner: "Andrei Zhabinski ",
    contribution: "Contributor",
    languages: ["Julia"],
  },
  {
    name: "denvrpy",
    description: "A Python SDK for interacting with Denvr Cloud",
    link: { href: "https://github.com/denvrdata/denvrpy", label: "denvrpy" },
    owner: "Denvr",
    contribution: "Author",
    languages: ["Python", "Jinja"],
  },
  {
    name: "denvrdemos",
    description: "A collection of sample applications to run on Denvr Cloud",
    link: {
      href: "https://github.com/denvrdata/denvrdemos",
      label: "denvrdemos",
    },
    owner: "Denvr",
    contribution: "Author",
    languages: ["Markdown", "Bash", "YAML"],
  },
  {
    name: "FilePathsBase.jl",
    description:
      "A type based approach to working with filesystem paths in Julia",
    link: {
      href: "https://github.com/rofinn/FilePathsBase.jl",
      label: "FilePathsBase.jl",
    },
    owner: "Rory Finnegan",
    contribution: "Author",
    languages: ["Julia"],
  },
  {
    name: "FilePaths.jl",
    description: "Extensions for working with filesystem paths in Julia",
    link: {
      href: "https://github.com/rofinn/FilePaths.jl",
      label: "FilePaths.jl",
    },
    owner: "Rory Finnegan",
    contribution: "Author",
    languages: ["Julia"],
  },
  {
    name: "Impute.jl",
    description: "Imputation methods for missing data in julia",
    link: {
      href: "https://github.com/invenia/Impute.jl",
      label: "Impute.jl",
    },
    owner: "Invenia",
    contribution: "Author",
    languages: ["Julia"],
  },
  {
    name: "Intervals.jl",
    description: "Non-iterable ranges in julia",
    link: {
      href: "https://github.com/invenia/Intervals.jl",
      label: "Impute.jl",
    },
    owner: "Invenia",
    contribution: "Contributor",
    languages: ["Julia"],
  },
  {
    name: "JLSO.jl",
    description:
      "Julia Serialized Object (JLSO) file format for storing checkpoint data. ",
    link: {
      href: "https://github.com/invenia/JLSO.jl",
      label: "JLSO.jl",
    },
    owner: "Invenia",
    contribution: "Author",
    languages: ["Julia"],
  },
  {
    name: "Memento.jl",
    description: "A flexible logging library for Julia",
    link: {
      href: "https://github.com/invenia/Memento.jl",
      label: "Memento.jl",
    },
    owner: "Invenia",
    contribution: "Author",
    languages: ["Julia"],
  },
  {
    name: "Playground.jl",
    description: "A julialang environment builder (like python's virtualenv)",
    link: {
      href: "https://github.com/rofinn/Playground.jl",
      label: "Playground.jl",
    },
    owner: "Rory Finnegan",
    contribution: "Author",
    languages: ["Julia"],
  },
  {
    name: "rofinn.dev",
    description: "My personal website",
    link: {
      href: "https://github.com/rofinn/rofinn.dev",
      label: "rofinn.dev",
    },
    owner: "Rory Finnegan",
    contribution: "Author",
    languages: ["Typescript"],
  },
  {
    name: "shepherd",
    description:
      "A provider independent framework for managing collections of cloud resources. ",
    link: {
      href: "https://github.com/invenia/shepherd",
      label: "shepherd",
    },
    owner: "Invenia",
    contribution: "Author",
    languages: ["Python"],
  },
  {
    name: "StatsBase.jl",
    description: "Basic statistics for Julia",
    link: {
      href: "https://github.com/JuliaStats/StatsBase.jl",
      label: "StatsBase.jl",
    },
    owner: "Julia Stats",
    contribution: "Contributor",
    languages: ["Julia"],
  },
  {
    name: "Syslogs.jl",
    description: "Julia syslog interface",
    link: {
      href: "https://github.com/invenia/Syslogs.jl",
      label: "Syslogs.jl",
    },
    owner: "Invenia",
    contribution: "Author",
    languages: ["Julia"],
  },
  {
    name: "TimeZones.jl",
    description:
      "Olson Timezone Database Access for the Julia Programming Language",
    link: {
      href: "https://github.com/invenia/TimeZones.jl",
      label: "TimeZones.jl",
    },
    owner: "Rory Finnegan",
    contribution: "Contributor",
    languages: ["Julia"],
  },
  // TODO: Add rofinn.dev and fuzzydin to list when they're released
];

export const metadata: Metadata = {
  title: "Projects",
  description: "Cause making things is my favourite way to learn.",
};

export default function Projects() {
  return (
    <div className="projects">
      <Waves />
      <SimpleLayout
        title="Things I've worked on"
        intro="Contributing to OSS has been one of my favourite ways to learn"
        className=""
      >
        <table className="table-auto w-full text-left text-sm">
          <thead className="text-md md:text-lg font-bold border-b border-overlay0">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Description</th>
              <th className="p-2 hidden md:table-cell">Languages</th>
              <th className="p-2 hidden lg:table-cell">Owner</th>
              <th className="p-2 hidden lg:table-cell">Contribution</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.name}>
                <td className="p-2">
                  <Link href={project.link.href}>
                    <h2 className="text-md lg:text-lg">{project.name}</h2>
                  </Link>
                </td>
                <td className="p-2">{project.description}</td>
                <td className="p-2 hidden md:table-cell">
                  <div className="flex flex-row gap-2">
                    {project.languages.map((l) => icons[l])}
                  </div>
                </td>
                <td className="p-2 hidden lg:table-cell">{project.owner}</td>
                <td className="p-2 hidden lg:table-cell">
                  {project.contribution}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SimpleLayout>
    </div>
  );
}
