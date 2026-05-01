import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mb-4 flex justify-center gap-6">
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <p>© 2026 Mohamed Ziad Almi. Tous droits réservés.</p>
    </footer>
  );
}