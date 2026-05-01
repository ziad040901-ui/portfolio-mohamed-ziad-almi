export default function Contact() {
  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        
        {/* Infos */}
        <div className="rounded-3xl bg-slate-950 p-8 text-white">
          <h2 className="mb-6 text-2xl font-bold">Informations</h2>

          <p>Email : ziad040901@gmail.com</p>
          <p>Téléphone : +212 7 67 30 71 04</p>
          <p>Localisation : Casablanca, Maroc</p>
          <p>LinkedIn : Mohamed Ziad Almi</p>
        </div>

        {/* Formulaire */}
        <form
          action="https://formspree.io/f/xpqbwpwo"
          method="POST"
          className="rounded-3xl bg-slate-950 p-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows={6}
            required
            className="mb-6 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}