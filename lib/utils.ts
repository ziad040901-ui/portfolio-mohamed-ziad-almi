type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Valeur aria-current d'un lien de navigation :
 * "page" sur la page exacte, "true" dans une sous-page de la section (ex. /projects/wms).
 */
export function ariaCurrent(pathname: string, href: string): "page" | "true" | undefined {
  if (pathname === href) return "page";
  if (href !== "/" && pathname.startsWith(`${href}/`)) return "true";
  return undefined;
}
