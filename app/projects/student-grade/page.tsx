export default function StudentGradeProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-6 py-16">
      <section className="max-w-6xl mx-auto">
        <a href="/projects" className="text-blue-600 font-medium hover:underline">
          ← Retour aux projets
        </a>

        <div className="mt-8 mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
            Projet académique
          </p>

          <h1 className="text-5xl font-extrabold text-slate-900 mb-5">
            Student Grade Management System
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl leading-8">
            Application interactive développée pour gérer les dossiers étudiants,
            enregistrer les notes par matière, calculer automatiquement les moyennes
            et générer un classement dynamique avec badges.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-12">
          <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-2">Type</p>
            <h3 className="text-lg font-bold text-slate-900">Application GUI</h3>
          </div>

          <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-2">Langage</p>
            <h3 className="text-lg font-bold text-slate-900">Python</h3>
          </div>

          <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-2">Stockage</p>
            <h3 className="text-lg font-bold text-slate-900">JSON</h3>
          </div>

          <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm">
            <p className="text-sm text-slate-500 mb-2">Interface</p>
            <h3 className="text-lg font-bold text-slate-900">Tkinter / Qt</h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Objectif du projet
            </h2>

            <p className="text-slate-700 leading-8">
              L’objectif de ce projet était de créer une application complète de
              gestion des notes des étudiants. Le système permet de centraliser les
              informations des étudiants, d’ajouter leurs notes dans différentes
              matières, de calculer automatiquement leurs moyennes et de générer un
              classement clair. Le projet met aussi l’accent sur l’expérience
              utilisateur avec une interface colorée, lisible et interactive.
            </p>
          </div>

          <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Résultat final
            </h2>

            <p className="text-blue-50 leading-8">
              Le résultat est une application fonctionnelle avec des données
              préchargées, un système de classement en temps réel, des badges
              gold/silver/bronze, une sauvegarde persistante avec JSON et une
              validation des entrées pour éviter les erreurs utilisateur.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              Technologies utilisées
            </h2>

            <div className="flex flex-wrap gap-3">
              {["Python", "Tkinter", "JSON", "OOP", "Error Handling", "GUI"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              Fonctionnalités
            </h2>

            <ul className="space-y-3 text-slate-700">
              <li>• Ajouter et supprimer des étudiants</li>
              <li>• Enregistrer les notes par matière</li>
              <li>• Calculer automatiquement les moyennes</li>
              <li>• Afficher un classement dynamique</li>
              <li>• Sauvegarder et charger les données</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              Données préchargées
            </h2>

            <ul className="space-y-3 text-slate-700">
              <li>• 5 étudiants : Alice, Bob, Carol, David, Emma</li>
              <li>• Plusieurs matières avec notes</li>
              <li>• Classement avec badges 🥇🥈🥉</li>
              <li>• Moyennes colorées selon performance</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            Déroulement du projet
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-slate-900 mb-2">1. Analyse</h3>
              <p className="text-slate-600">
                Identification des besoins : gestion étudiants, notes, moyennes,
                classement et sauvegarde des données.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-slate-900 mb-2">2. Développement</h3>
              <p className="text-slate-600">
                Création des classes, logique de calcul, gestion des fichiers JSON
                et interface graphique interactive.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-slate-900 mb-2">3. Amélioration</h3>
              <p className="text-slate-600">
                Ajout du classement, des badges, de la validation des entrées et
                d’une interface plus lisible.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Compétences développées
          </h2>

          <p className="text-slate-300 leading-8">
            Ce projet m’a permis de renforcer mes compétences en programmation
            Python, en programmation orientée objet, en gestion de données avec
            JSON, en création d’interfaces graphiques et en structuration d’une
            application complète avec gestion des erreurs.
          </p>
        </div>
      </section>
    </main>
  );
}