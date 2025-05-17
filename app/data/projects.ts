import { IconType } from "react-icons";
import {
  SiGnubash,
  SiJinja,
  SiJulia,
  SiMarkdown,
  SiPython,
  SiTypescript,
  SiYaml,
} from "react-icons/si";

export const icons: { [key: string]: IconType } = {
  Bash: SiGnubash,
  Jinja: SiJinja,
  Julia: SiJulia,
  Markdown: SiMarkdown,
  Python: SiPython,
  Typescript: SiTypescript,
  YAML: SiYaml,
};

export interface Project {
  name: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  owner: string;
  contribution: string;
  languages: string[];
}

export const projects: Project[] = [
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
