export default function Contact() {
  return (
    <section className="px-6 py-24 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-4xl font-extrabold text-[#1A237E] dark:text-blue-400">
          Me contacter
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
            <h3 className="mb-6 text-2xl font-bold">Informations</h3>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>Email : ziad040901@gmail.com</p>
              <p>Téléphone : +212 7 67 30 71 04</p>
              <p>Localisation : Casablanca, Maroc</p>
              <p>LinkedIn : ajoute ton vrai lien ici</p>
              <p>GitHub : ajoute ton vrai lien ici</p>
            </div>
          </div>

          <form className="rounded-3xl border bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="rounded-xl border px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
              />

              <input
                type="email"
                placeholder="Votre email"
                className="rounded-xl border px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
              />

              <textarea
                placeholder="Votre message"
                rows={5}
                className="rounded-xl border px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
              />

              <button
                type="submit"
                className="rounded-xl bg-[#2979FF] px-6 py-3 font-semibold text-white transition hover:bg-[#1A237E]"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}