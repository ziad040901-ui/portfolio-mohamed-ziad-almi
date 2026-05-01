export default function CV() {
  return (
    <section className="px-6 py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-5 text-4xl font-extrabold text-[#2979FF]">
            Mon CV
          </h2>

          <p className="mb-8 text-lg leading-8 text-slate-300">
            Consultez mon CV complet avec mes expériences,
            formations, compétences et certifications.
          </p>

          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-[#2979FF] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1A237E] focus:outline-none focus:ring-0"
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="mb-5 text-2xl font-bold text-white">
            Aperçu du parcours
          </h3>

          <ul className="space-y-4 text-slate-300">
            <li>• Master E-Logistique — ESITH Casablanca</li>
            <li>• Licence professionnelle en gestion de la chaîne logistique</li>
            <li>• Stage COCA-COLA Agadir — Distribution & traçabilité</li>
            <li>• Stage Marsa Maroc — Gestion de stock</li>
            <li>• Certifications : Python, Supply Chain, HTML/CSS, Django</li>
          </ul>
        </div>
      </div>
    </section>
  );
}