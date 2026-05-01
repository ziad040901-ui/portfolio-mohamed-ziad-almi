"use client";

import { projects, type ProjectCategory } from "@/lib/data";
import { useState } from "react";

type Filter = "Tous" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("Tous");

  const filteredProjects =
    filter === "Tous"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="px-6 py-24 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-[#1A237E] dark:text-blue-400">
          Mes projets
        </h2>

        <div className="mb-10 flex justify-center gap-3">
          {(["Tous", "Académique", "Personnel"] as Filter[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === item
                  ? "bg-[#2979FF] text-white"
                  : "bg-white text-slate-700 hover:bg-blue-50 dark:bg-slate-800 dark:text-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
            >
              <p className="mb-3 text-sm font-semibold text-[#2979FF]">
                {project.category}
              </p>

              <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

              <p className="mb-5 leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm text-[#1A237E] dark:bg-slate-800 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                aria-label={`Voir le projet ${project.title}`}
                className="font-semibold text-[#2979FF] hover:underline"
              >
                Voir le projet →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}