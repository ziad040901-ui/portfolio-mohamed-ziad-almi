"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Projets" },
  { href: "/cv.pdf", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 text-sm font-extrabold text-blue-400">
            MZA
          </span>
          <span className="font-extrabold text-[#2979FF]">
            Mohamed Ziad Almi
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-sm font-semibold transition ${
                  isActive
                    ? "text-[#2979FF]"
                    : "text-slate-200 hover:text-[#2979FF]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#2979FF]" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-white md:hidden"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}