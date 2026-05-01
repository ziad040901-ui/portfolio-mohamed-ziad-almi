import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 pt-24">
      <div className="absolute left-10 top-32 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-24 right-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">
        <h1 className="mb-10 text-5xl font-extrabold text-blue-400 md:text-7xl">
          Portfolio personnel
        </h1>

        <div className="mx-auto mb-10 max-w-4xl rounded-3xl border border-blue-500/40 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <p className="mb-6 inline-block rounded-full bg-blue-600/20 px-5 py-2 text-sm font-semibold text-blue-300">
            🎓 Master E-Logistique · Casablanca
          </p>

          <p className="mx-auto max-w-3xl text-xl font-semibold text-white">
            Étudiant en Master E-Logistique.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Passionné par la logistique numérique et le développement
            d’applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Voir mes projets →
          </Link>

          <Link
            href="/cv.pdf"
            className="rounded-2xl border-2 border-blue-500 px-7 py-4 font-semibold text-blue-300 transition hover:-translate-y-1 hover:bg-blue-950"
          >
            Télécharger mon CV ↓
          </Link>
        </div>

        <div className="mt-12 animate-bounce text-3xl text-blue-400">
          ↓
        </div>
      </div>
    </section>
  );
}