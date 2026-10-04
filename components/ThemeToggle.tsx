"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ui } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  // Les deux icônes sont rendues et masquées en CSS via la classe .dark :
  // pas de différence entre rendu serveur et client, donc pas d'erreur d'hydratation.
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={ui.themeToggle}
      title={ui.themeToggle}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={className}
    >
      <Sun aria-hidden="true" className="dark:hidden" />
      <Moon aria-hidden="true" className="hidden dark:block" />
    </Button>
  );
}
