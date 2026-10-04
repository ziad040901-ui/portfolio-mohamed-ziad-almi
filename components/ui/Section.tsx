import { cn } from "@/lib/utils";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Apparition from "@/components/motion/Apparition";

type SectionProps = {
  /** Ancre de la section (ex. "projets" → /#projets) */
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** "muted" pour alterner les fonds entre sections */
  tone?: "default" | "muted";
  align?: "left" | "center";
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  eyebrow,
  tone = "default",
  align = "left",
  children,
  className,
}: SectionProps) {
  const titleId = `${id}-titre`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        "scroll-mt-header py-section",
        tone === "muted" && "bg-muted",
        className
      )}
    >
      <Container>
        <Apparition>
          <SectionHeading
            id={titleId}
            title={title}
            subtitle={subtitle}
            eyebrow={eyebrow}
            align={align}
          />
        </Apparition>
        {children}
      </Container>
    </section>
  );
}
