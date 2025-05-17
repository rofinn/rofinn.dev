import { type Metadata } from "next";
import Link from "next/link";

import { SimpleLayout } from "@/components/SimpleLayout";
import { Waves } from "@/components/Waves";
import { projects, icons } from "@/app/data/projects";

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
                    {project.languages.map((l) => {
                      const Icon = icons[l];
                      return <Icon key={l} size={18} />;
                    })}
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
