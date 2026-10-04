// Motif décoratif : quadrillage d'entrepôt + réseau de sites reliés par des flux.
// Couleurs via tokens (currentColor) → s'adapte au thème clair / sombre.

const sites = [
  { x: 120, y: 140 },
  { x: 380, y: 80 },
  { x: 290, y: 340 },
  { x: 620, y: 210 },
  { x: 540, y: 500 },
  { x: 880, y: 110 },
  { x: 950, y: 410 },
  { x: 1110, y: 250 },
  { x: 160, y: 520 },
];

const routes: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [2, 8],
  [3, 5],
  [3, 6],
  [4, 6],
  [5, 7],
  [6, 7],
];

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      // Mobile : motif limité au haut (zone photo), fondu avant le texte.
      // Desktop : centre dégagé pour la lisibilité, motif visible sur les bords.
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_40%)] md:[mask-image:radial-gradient(ellipse_at_center,transparent_35%,black_95%)]"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hero-quadrillage" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hero-quadrillage)" className="text-border" opacity="0.55" />

        <g className="text-accent" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4">
          {routes.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={sites[a].x}
              y1={sites[a].y}
              x2={sites[b].x}
              y2={sites[b].y}
              strokeDasharray="6 6"
              className="motion-safe:animate-flow"
            />
          ))}
        </g>

        <g className="text-primary dark:text-accent" opacity="0.6">
          {sites.map((site) => (
            <g key={`${site.x}-${site.y}`}>
              <circle cx={site.x} cy={site.y} r="10" fill="currentColor" opacity="0.15" />
              <circle cx={site.x} cy={site.y} r="4" fill="currentColor" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
