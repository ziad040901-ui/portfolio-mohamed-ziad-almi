export default function CV() {
  return (
    <section className="px-6 py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        
        {/* Partie gauche */}
        <div>
          <h2 className="mb-5 text-4xl font-extrabold text-[#1A237E] dark:text-blue-400">
            Mon CV
          </h2>

          <p className="mb-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Consultez mon CV complet avec mes expériences, formations,
            compétences et certifications.
          </p>

          {/* ✅ BOUTON CORRIGÉ */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-[#2979FF] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1A237E]"
          >
            Télécharger mon CV
          </a>
        </div>

        {/* Partie droite */}
        <div className="rounded-3xl border bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="mb-5 text-2xl font-bold">Aperçu du parcours</h3>

          <ul className="space-y-4 text-slate-700 dark:text-slate-300">
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