import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Mode développement uniquement (`npm run dev`) : autorise l'ouverture du site depuis
   * l'adresse réseau du PC (téléphone, autre ordinateur du réseau local). Sans cela, Next.js
   * bloque ses ressources de développement (/_next/webpack-hmr) et la page ne démarre pas.
   * Sans effet sur le site en production (Vercel).
   *
   * - "192.168.70.163" : adresse actuelle du PC.
   * - "192.168.*.*" : toute adresse du réseau local 192.168.x.y, pour que ça marche encore si
   *   l'IP change. La doc de Next 16 ne montre que des jokers de sous-domaine, mais la
   *   vérification (next/dist/server/app-render/csrf-protection.js) compare l'adresse segment
   *   par segment, où « * » vaut un segment : le motif couvre donc bien 192.168.x.y.
   * Pour un autre réseau (ex. 10.x.y.z), ajouter son adresse ici, puis relancer `npm run dev`.
   */
  allowedDevOrigins: ["192.168.70.163", "192.168.*.*"],
};

export default nextConfig;
