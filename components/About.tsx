import { skills } from "@/lib/data";

const cursus = [
  {
    title: "Systèmes d’information & développement",
    items: [
      "Algorithmique & Programmation Python 1",
      "Algorithmique & Programmation Python 2",
      "Concepts des systèmes d’information",
      "Développement d’applications de bases de données E1",
      "Systèmes réseau & Cloud Networking",
      "Programmation 2 & Django",
      "Programmation Web / CMS",
      "E-commerce & web marchand",
    ],
  },
  {
    title: "Logistique interne",
    items: [
      "Logistique interne",
      "Notions générales de la logistique",
      "Outils logistiques",
      "Entreposage",
    ],
  },
  {
    title: "Logistique externe",
    items: [
      "Commerce international",
      "Gestion de la demande & prévision",
      "Logistique amont",
      "Transport",
      "Distribution",
    ],
  },
  {
    title: "Aide à la décision",
    items: [
      "Aide multicritère à la décision",
      "Recherche opérationnelle",
      "Statistique",
      "Outils d’aide à la décision",
    ],
  },
  {
    title: "Achats, planification & finance",
    items: [
      "E-sourcing & achats",
      "Planification S1",
      "Comptabilité générale & analytique",
      "Finance",
    ],
  },
  {
    title: "Langues",
    items: ["Anglais", "Espagnol"],
  },
  {
    title: "Soft skills & méthodologie",
    items: [
      "Study & Life Skills",
      "Entrepreneuriat & leadership",
      "Méthodologie de la recherche scientifique",
      "Cahier des charges",
    ],
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Mon parcours
          </p>

          <h1 className="mb-5 text-5xl font-extrabold text-slate-900">
            À propos de moi
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Étudiant en Master 1 E-Logistique à l’ESITH, je construis un profil
            hybride entre logistique, systèmes d’information, développement
            d’applications et optimisation des processus supply chain.
          </p>

          <a
            href="#cursus"
            className="mt-8 inline-flex rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Voir mon cursus académique
          </a>
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-lg">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white text-3xl font-extrabold text-blue-600">
              MZA
            </div>

            <h2 className="mb-3 text-3xl font-bold">Mohamed Ziad Almi</h2>

            <p className="text-blue-50">
              Master 1 E-Logistique — Logistique numérique
            </p>

            <div className="mt-8 space-y-3 text-blue-50">
              <p>📍 Casablanca, Maroc</p>
              <p>🎓 ESITH Casablanca</p>
              <p>📧 ziad040901@gmail.com</p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm lg:col-span-2">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Profil professionnel
            </h2>

            <p className="mb-5 text-lg leading-9 text-slate-700">
              Mon parcours m’a permis de découvrir plusieurs environnements
              liés à la supply chain, à la distribution et aux opérations
              logistiques. J’ai notamment travaillé sur l’optimisation des
              processus de distribution, le suivi des livraisons, la gestion des
              stocks, la traçabilité et les opérations portuaires.
            </p>

            <p className="text-lg leading-9 text-slate-700">
              Mon objectif est de développer des projets concrets qui combinent
              technologie, analyse de données, systèmes d’information et
              amélioration des processus logistiques.
            </p>
          </div>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              Expériences
            </h3>

            <ul className="space-y-3 text-slate-700">
              <li>COCA-COLA Agadir — Distribution & traçabilité</li>
              <li>Marsa Maroc — Stocks & pièces de rechange</li>
              <li>SMA Agadir — Opérations portuaires</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              Compétences
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              Certifications
            </h3>

            <ul className="space-y-3 text-slate-700">
              <li>Python for Data Science & AI</li>
              <li>Supply Chain Excellence</li>
              <li>HTML & CSS in Depth</li>
              <li>Django Web Framework</li>
            </ul>
          </div>
        </div>

        <div
          id="cursus"
          className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm"
        >
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Formation
            </p>

            <h2 className="text-3xl font-extrabold text-slate-900">
              Cursus académique — Master 1 E-Logistique
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cursus.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-blue-700">
                  {section.title}
                </h3>

                <ul className="space-y-2 text-slate-700">
                  {section.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}