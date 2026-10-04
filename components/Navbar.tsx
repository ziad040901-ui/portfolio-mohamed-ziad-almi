"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, X } from "lucide-react";
import { navigation, profil, ui } from "@/lib/data";
import { initiales } from "@/lib/format";
import { ariaCurrent, cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ThemeToggle";

const MENU_ID = "menu-mobile";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOuvert, setMenuOuvert] = useState(false);
  const boutonMenuRef = useRef<HTMLButtonElement>(null);
  const t = ui.navbar;

  // Échap ferme le menu et rend le focus au bouton
  useEffect(() => {
    if (!menuOuvert) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOuvert(false);
        boutonMenuRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOuvert]);

  const fermerMenu = () => setMenuOuvert(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-header items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={t.accueil}
          onClick={fermerMenu}
          className="flex min-w-0 items-center gap-2.5 rounded-button"
        >
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xs font-bold text-primary-foreground ring-2 ring-accent"
          >
            {initiales(profil.nom)}
          </span>
          <span aria-hidden="true" className="truncate font-heading text-sm font-semibold text-foreground sm:text-base">
            {profil.nom}
          </span>
        </Link>

        <nav aria-label={t.navigationPrincipale} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((lien) => {
              const courant = ariaCurrent(pathname, lien.href);
              return (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    aria-current={courant}
                    className={cn(
                      "relative rounded-button px-3 py-2 text-sm font-medium transition-colors",
                      "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full",
                      courant
                        ? "text-foreground after:bg-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {lien.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <ThemeToggle />

          {/* Conteneur dédié : `hidden` sur le Button entrerait en conflit avec son inline-flex */}
          <div className="ml-1 hidden lg:block">
            <Button href={profil.cv} external variant="outline" size="sm" aria-label={t.cvAriaLabel}>
              <FileText aria-hidden="true" />
              {t.cv}
            </Button>
          </div>

          <Button
            ref={boutonMenuRef}
            variant="ghost"
            size="icon"
            aria-expanded={menuOuvert}
            aria-controls={MENU_ID}
            aria-label={menuOuvert ? t.fermerMenu : t.ouvrirMenu}
            onClick={() => setMenuOuvert((ouvert) => !ouvert)}
            className="lg:hidden"
          >
            {menuOuvert ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </Container>

      <div
        id={MENU_ID}
        hidden={!menuOuvert}
        className="border-t border-border bg-background shadow-card-hover lg:hidden"
      >
        <Container className="py-4">
          <nav aria-label={t.navigationPrincipale}>
            <ul className="flex flex-col gap-1">
              {navigation.map((lien) => {
                const courant = ariaCurrent(pathname, lien.href);
                return (
                  <li key={lien.href}>
                    <Link
                      href={lien.href}
                      aria-current={courant}
                      onClick={fermerMenu}
                      className={cn(
                        "flex items-center rounded-button border-l-4 px-4 py-3 font-medium transition-colors",
                        courant
                          ? "border-accent bg-muted text-foreground"
                          : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {lien.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Button
            href={profil.cv}
            external
            variant="outline"
            aria-label={t.cvAriaLabel}
            onClick={fermerMenu}
            className="mt-4 w-full"
          >
            <FileText aria-hidden="true" />
            {t.cv}
          </Button>
        </Container>
      </div>
    </header>
  );
}
