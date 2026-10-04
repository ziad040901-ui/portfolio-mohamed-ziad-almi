import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Lien interne secondaire avec flèche (« Voir tout… ») */
export default function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 font-semibold text-foreground underline-offset-4 hover:text-accent-strong hover:underline",
        className
      )}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform motion-safe:group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}
