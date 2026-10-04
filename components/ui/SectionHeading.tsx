import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** id posé sur le titre, utilisé par aria-labelledby de la section */
  id?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  /** Supprime la marge basse (en-tête de page suivi d'un contenu propre) */
  flush?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  id,
  as: Heading = "h2",
  align = "left",
  flush = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        !flush && "mb-10 md:mb-14",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong">
          {eyebrow}
        </p>
      )}

      <Heading
        id={id}
        className={cn(
          "font-bold text-foreground",
          Heading === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl"
        )}
      >
        {title}
      </Heading>

      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
