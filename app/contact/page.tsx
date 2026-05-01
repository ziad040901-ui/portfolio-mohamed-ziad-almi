export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 px-6 py-16">
      <section className="max-w-4xl mx-auto text-center">

        <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>

        <h1 className="text-5xl font-bold text-slate-900 mb-6">
          Me contacter
        </h1>

        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          N'hésitez pas à me contacter pour toute opportunité de stage,
          collaboration ou projet en logistique ou développement.
        </p>

        {/* CARTES CONTACT */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* EMAIL */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Email
            </h2>
            <p className="text-slate-600">
              ziad040901@gmail.com
            </p>
          </div>

          {/* TELEPHONE */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Téléphone
            </h2>
            <p className="text-slate-600">
              +212 7 67 30 71 04
            </p>
          </div>

          {/* LINKEDIN */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              LinkedIn
            </h2>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Voir mon profil
            </a>
          </div>

          {/* LOCALISATION */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Localisation
            </h2>
            <p className="text-slate-600">
              Casablanca, Maroc
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}