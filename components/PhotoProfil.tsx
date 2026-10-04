import Image from "next/image";
import { profil, ui } from "@/lib/data";
import { initiales } from "@/lib/format";
import { fichierPublicExiste } from "@/lib/fichiers";
import { cn } from "@/lib/utils";

type PhotoProfilProps = {
  /** Classes de taille (ex. "size-40 lg:size-60") */
  className?: string;
  /** Valeur `sizes` de next/image, cohérente avec className */
  sizes: string;
  preload?: boolean;
};

/** Photo ronde du profil, ou monogramme tant que public/images/profile.jpg est absent */
export default function PhotoProfil({ className, sizes, preload = false }: PhotoProfilProps) {
  const aUnePhoto = fichierPublicExiste(profil.photo);

  return (
    <div
      className={cn(
        "shrink-0 rounded-full ring-4 ring-accent ring-offset-4 ring-offset-background",
        className
      )}
    >
      {aUnePhoto ? (
        <Image
          src={profil.photo}
          alt={ui.photoAlt}
          width={480}
          height={480}
          sizes={sizes}
          preload={preload}
          className="size-full rounded-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={ui.photoAlt}
          className="flex size-full items-center justify-center rounded-full bg-primary font-heading text-4xl font-bold text-primary-foreground sm:text-5xl"
        >
          {initiales(profil.nom)}
        </div>
      )}
    </div>
  );
}
