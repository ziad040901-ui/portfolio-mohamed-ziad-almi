export default function WMSProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 px-6 py-20">
      <section className="mx-auto max-w-6xl">
        <a href="/projects" className="text-blue-600 font-semibold hover:underline">
          ← Retour aux projets
        </a>

        <div className="mt-10 mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Projet académique
          </p>

          <h1 className="mb-5 text-5xl font-extrabold text-slate-900">
            Warehouse Management System - WMS
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Développement d’une application WMS complète pour la gestion de
            l’entreposage : entrepôts, zones, articles, lots, réceptions,
            expéditions, transferts internes, stock live, inventaire physique
            et historique des opérations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-12">
          {["Python", "Tkinter", "MySQL", "Django"].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-500">Technologie</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{item}</h3>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Objectif du projet
            </h2>
            <p className="leading-8 text-slate-700">
              L’objectif était de concevoir un WMS fonctionnel pour maîtriser la
              gestion physique et logique d’un entrepôt. Le projet couvre la
              modélisation Merise, la création d’une base de données relationnelle,
              le développement d’une interface utilisateur et l’application de
              règles métier liées aux stocks.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Évolution du projet</h2>
            <p className="leading-8 text-blue-50">
              Le projet a d’abord été développé en Python avec une interface
              graphique et une base de données. Ensuite, le même concept WMS a été
              transformé en version web avec Django afin d’améliorer la structure,
              la navigation et l’accessibilité de l’application.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Fonctionnalités
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>• Gestion des entrepôts et zones</li>
              <li>• Gestion des articles et lots</li>
              <li>• Réceptions de marchandises</li>
              <li>• Expéditions documentées</li>
              <li>• Mouvements internes entre zones</li>
              <li>• Stock live et recherche</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Base de données
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>• Modélisation MCD avec Merise</li>
              <li>• Transformation en MLD</li>
              <li>• Tables relationnelles</li>
              <li>• Contraintes PK / FK</li>
              <li>• Contrôles UNIQUE, CHECK, NOT NULL</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Règles métier
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>• Quantités strictement positives</li>
              <li>• Refus si stock insuffisant</li>
              <li>• Suivi des lots expirés</li>
              <li>• Traçabilité des opérations</li>
              <li>• Audit log et facturation</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Déroulement du projet
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-slate-900">1. Analyse</h3>
              <p className="text-slate-600">
                Étude du cahier des charges et identification des règles de gestion
                liées à l’entreposage.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-slate-900">2. Modélisation</h3>
              <p className="text-slate-600">
                Création du MCD et du MLD avec les entités entrepôt, zone, article,
                lot et cycle count.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-slate-900">3. Développement</h3>
              <p className="text-slate-600">
                Développement de l’application Python avec interface, base de données
                et règles de validation.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-slate-900">4. Migration Django</h3>
              <p className="text-slate-600">
                Transformation du projet en application web Django avec une structure
                plus professionnelle.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Compétences développées</h2>
          <p className="leading-8 text-slate-300">
            Ce projet m’a permis de renforcer mes compétences en modélisation de
            bases de données, Merise, SQL, développement Python, interface graphique,
            logique métier supply chain, gestion des stocks, traçabilité et
            développement web avec Django.
          </p>
        </div>
      </section>
    </main>
  );
}