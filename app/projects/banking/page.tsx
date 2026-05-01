export default function BankingProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 px-6 py-20">
      <section className="mx-auto max-w-6xl">
        <a href="/projects" className="font-semibold text-blue-600 hover:underline">
          ← Retour aux projets
        </a>

        <div className="mt-10 mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Projet académique
          </p>

          <h1 className="mb-5 text-5xl font-extrabold text-slate-900">
            Banking Management System
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-slate-700">
            Simulation d’un système bancaire permettant de créer et gérer des comptes,
            effectuer des dépôts, retraits, transferts, consulter l’historique des
            transactions et générer des relevés de compte.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-12">
          {["Python", "Tkinter", "JSON", "GUI"].map((tech) => (
            <div key={tech} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Technologie</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{tech}</h3>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Fonctionnalités
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>• Création et gestion des comptes</li>
              <li>• Dépôt et retrait d’argent</li>
              <li>• Transfert entre comptes</li>
              <li>• Historique des transactions</li>
              <li>• Relevés de compte</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Interface
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>• Dashboard avec statistiques</li>
              <li>• Total des comptes</li>
              <li>• Comptes actifs</li>
              <li>• Balance totale</li>
              <li>• Interface bancaire moderne</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">
              Compétences développées
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li>• Logique métier bancaire</li>
              <li>• Gestion des transactions</li>
              <li>• Sauvegarde JSON</li>
              <li>• Validation des données</li>
              <li>• Interface utilisateur</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Objectif du projet</h2>
          <p className="leading-8 text-slate-300">
            Ce projet m’a permis de développer une application interactive simulant
            les opérations principales d’un système bancaire, avec une interface
            claire, des données préchargées, un tableau de bord et une gestion
            complète des transactions.
          </p>
        </div>
      </section>
    </main>
  );
}