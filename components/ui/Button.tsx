import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline:
    "border border-border bg-transparent text-foreground hover:border-accent hover:bg-muted",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  /** Contour clair, pour les fonds bg-primary */
  inverse:
    "border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "size-10 [&_svg]:size-5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  React.ComponentProps<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<"a">, "href"> & {
    href: string;
    /** Ouvre dans un nouvel onglet (liens externes, PDF) */
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Route interne de l'app (pas un fichier statique comme /CV.pdf) */
function isInternalRoute(href: string) {
  return (href.startsWith("/") || href.startsWith("#")) && !/\.[a-z0-9]+$/i.test(href);
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    const { href, external, ...anchorProps } = rest as Omit<ButtonAsLink, keyof CommonProps>;

    if (!external && isInternalRoute(href)) {
      return <Link href={href} className={classes} {...anchorProps} />;
    }

    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...anchorProps}
      />
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return <button type={type} className={classes} {...buttonProps} />;
}
