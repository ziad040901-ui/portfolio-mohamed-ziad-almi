const projects = [
  {
    title: "Student Grade Management System",
    category: "Projet académique",
    description:
      "Application Python permettant de gérer les étudiants, les notes, les moyennes et le classement dynamique.",
    technologies: ["Python", "Tkinter", "JSON", "OOP"],
    link: "/projects/student-grade",
  },
  {
    title: "Warehouse Management System - WMS",
    category: "Projet académique",
    description:
      "Application WMS pour gérer les entrepôts, zones, articles, lots, réceptions, expéditions, mouvements internes et stock live.",
    technologies: ["Python", "Tkinter", "MySQL", "Merise", "Django"],
    link: "/projects/wms",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 px-6 py-20">
      <section className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Portfolio personnel
          </p>

          <h1 className="text-5xl font-extrabold text-slate-900">
            Mes projets
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {project.category}
              </p>

              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                {project.title}
              </h2>

              <p className="mb-6 text-lg leading-8 text-slate-700">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Voir les détails →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}