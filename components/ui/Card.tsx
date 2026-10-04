import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  as?: "div" | "article" | "li";
  /** Effet de survol pour les cartes cliquables */
  interactive?: boolean;
  /** false pour gérer le padding soi-même (ex. image pleine largeur) */
  padded?: boolean;
  className?: string;
};

export default function Card({
  children,
  as: Tag = "div",
  interactive = false,
  padded = true,
  className,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-card border border-border bg-card text-card-foreground shadow-card",
        padded && "p-6",
        interactive &&
          "transition hover:border-accent hover:shadow-card-hover motion-safe:hover:-translate-y-1",
        className
      )}
    >
      {children}
    </Tag>
  );
}
