/**
 * Source unique de tout le contenu du site.
 * Aucun texte ne doit être écrit en dur dans les composants (voir CLAUDE.md).
 *
 * Convention : un champ texte vide ("") ou un tableau vide signifie
 * « pas encore renseigné » ; les composants ne l'affichent pas.
 */

// ===================================================================
// Types
// ===================================================================

/** Date au format ISO AAAA-MM-JJ */
export type DateISO = `${number}-${number}-${number}`;

/** Mois au format ISO AAAA-MM */
export type MoisISO = `${number}-${number}`;

export type Profil = {
  nom: string;
  titre: string;
  accroche: string;
  recherche: string;
  resume: string;
  localisation: string;
  email: string;
  telephone: string;
  linkedin: string;
  github: string;
  /** Chemin dans public/ */
  photo: string;
  /** Chemin dans public/ */
  cv: string;
};

export type TypeStage = "Stage d'application" | "Stage d'observation" | "Stage en alternance";

export type Experience = {
  slug: string;
  entreprise: string;
  /** Sigle ou entité affiché entre parenthèses, ex. « SNTL », « SBGS » */
  sigle?: string;
  /** « Logo » texte court affiché dans la timeline (4 caractères max.) */
  monogramme: string;
  lieu: string;
  type: TypeStage;
  debut: DateISO;
  fin: DateISO;
  domaine: string;
  missions: string[];
  resultats?: string[];
  competences: string[];
};

export type Formation = {
  slug: string;
  diplome: string;
  niveau: "Bac" | "Bac+3" | "Bac+5";
  etablissement: string;
  anneeDebut: number;
  anneeFin: number;
  enCours: boolean;
  /** Précision sur l'avancement, ex. « Master 2 » */
  precision?: string;
};

export type BlocCursus = {
  titre: string;
  matieres: string[];
};

export type CategorieCompetence = {
  slug: string;
  titre: string;
  items: string[];
};

/** 1 = débutant … 5 = langue maternelle */
export type ScoreLangue = 1 | 2 | 3 | 4 | 5;

export type Langue = {
  langue: string;
  niveau: string;
  score: ScoreLangue;
};

export type CategorieCertification =
  | "Supply Chain & Gestion"
  | "Data & Analyse"
  | "Développement"
  | "Intelligence artificielle"
  | "E-commerce & Marketing";

/**
 * "professionnel" : certificat professionnel (parcours de plusieurs cours, mis en avant) ;
 * "cours" : certificat d'un cours.
 */
export type TypeCertification = "professionnel" | "cours";

export type Certification = {
  titre: string;
  type: TypeCertification;
  organisme: string;
  plateforme: "Coursera";
  categorie: CategorieCertification;
  /** Mois d'obtention */
  date: MoisISO;
  /** Page de vérification (cours) ou badge (certificat professionnel) */
  lienVerification: string;
  competences: string[];
};

export type CategorieProjet = "Académique" | "Professionnel" | "Personnel";

export type EtapeProjet = {
  titre: string;
  description: string;
};

/** Bloc de détail complémentaire (ex. « Base de données », « Règles métier ») */
export type BlocProjet = {
  titre: string;
  items: string[];
};

/** Fiche technique courte (ex. Type : Application GUI) */
export type CaracteristiqueProjet = {
  label: string;
  valeur: string;
};

/**
 * Capture d'écran d'un projet. Facultatif : les images déposées dans
 * public/images/projets/<slug>/ sont détectées automatiquement (lib/images-projet.ts).
 * Les déclarer ici sert seulement à personnaliser alt et légende (prioritaire sur le dossier).
 */
export type ImageProjet = {
  /** Chemin dans public/, ex. "/images/projets/tms-sntl/01-tableau-de-bord.png" */
  src: string;
  alt: string;
  legende?: string;
};

/** Indicateur mesuré avant / après (section « Les chiffres clés ») */
export type ChiffreAvantApres = {
  label: string;
  avant: string;
  apres: string;
  /** Gain mis en valeur, ex. « −90 % » */
  gain: string;
};

/** Chiffre court affiché sur la carte du projet, ex. { valeur: "−90 %", label: "de temps de dispatch" } */
export type ChiffreCarte = {
  valeur: string;
  label: string;
};

/** Portail / espace d'une application (ex. Portail Client) */
export type PortailProjet = {
  titre: string;
  /** Public visé, ex. « Pour les clients de la SNTL » */
  public: string;
  items: string[];
  /** Rôles utilisateurs de cet espace (comptés dans le titre de section) */
  roles?: string[];
};

/** Groupe de fonctionnalités (accordéon « Fonctionnalités par module ») */
export type ModuleProjet = {
  titre: string;
  items: string[];
};

/** Processus métier affiché en frise */
export type ProcessusProjet = {
  titre: string;
  description?: string;
  etapes: string[];
};

export type PhasePDCA = {
  phase: "Plan" | "Do" | "Check" | "Act";
  titre: string;
  items: string[];
};

export type GroupeListe = {
  titre: string;
  items: string[];
};

export type Projet = {
  slug: string;
  titre: string;
  categorie: CategorieProjet;
  /** Cadre de réalisation, ex. « Stage SNTL — Agadir » */
  contexte?: string;
  /** Affiché sur l'accueil ; l'ordre du tableau = ordre de priorité */
  featured: boolean;
  /** Une phrase pour les cartes */
  resume: string;
  /** Introduction de la page détail */
  description: string;
  probleme: string;
  solution: string;
  resultat: string;
  fonctionnalites: string[];
  stack: string[];
  caracteristiques?: CaracteristiqueProjet[];
  blocs?: BlocProjet[];
  etapes: EtapeProjet[];
  competences: string[];
  /** Paragraphe « Ce projet m'a permis de… » */
  bilan: string;
  images: ImageProjet[];
  lienGithub: string;
  lienDemo: string;

  // ---- Étude de cas détaillée (facultatif : chaque section est masquée si le champ est absent ou vide)
  /** Rôle tenu, ex. « Chef de projet et développeur » */
  role?: string;
  /** Période, ex. « 23 juin – 31 juillet 2026 » */
  periode?: string;
  /** Points détaillés sous « Problème » */
  problemePoints?: string[];
  /** 2 chiffres affichés sur la carte du projet (accueil, /projects) */
  chiffresCarte?: ChiffreCarte[];
  chiffres?: ChiffreAvantApres[];
  portails?: PortailProjet[];
  modules?: ModuleProjet[];
  processus?: ProcessusProjet[];
  documents?: string[];
  kpis?: GroupeListe[];
  securite?: string[];
  pdca?: PhasePDCA[];
};

export type LienNavigation = {
  href: string;
  label: string;
};

export type ChiffreCle = {
  slug: "stages" | "certifications" | "langues" | "niveau";
  valeur: string;
  label: string;
  /** Précision affichée sous le libellé (ex. « dont 2 professionnelles ») */
  detail?: string;
};

// ===================================================================
// Profil
// ===================================================================

export const profil: Profil = {
  nom: "Mohamed Ziad Almi",
  titre: "Étudiant en Master 2 E-Logistique — Supply Chain & Digital",
  accroche:
    "Je relie la logistique terrain et les outils numériques : du quai au tableau de bord.",
  recherche:
    "Stage de fin d'études (PFE) en supply chain, transport ou digitalisation logistique",
  resume:
    "Étudiant en 2e année de Master E-Logistique (Bac+5) à l'ESITH Casablanca. Alternance en cours chez La Voie Express (jumeau numérique 3D des entrepôts) après quatre stages en logistique portuaire, gestion des stocks, distribution et transport (SMA, Marsa Maroc, Coca-Cola, SNTL), dont le développement d'un TMS. Formation complémentaire en Excel, Power BI, Python et bases de données.",
  localisation: "Casablanca, Maroc",
  email: "mohamedziadalmi@gmail.com",
  telephone: "+212 7 67 30 71 04",
  linkedin: "https://www.linkedin.com/in/mohamed-ziad-almi/",
  github: "https://github.com/ziad040901-ui",
  photo: "/images/profile.jpg",
  cv: "/CV.pdf",
};

// ===================================================================
// Expériences (de la plus récente à la plus ancienne)
// ===================================================================

export const experiences: Experience[] = [
  {
    slug: "voie-express",
    entreprise: "La Voie Express Group",
    monogramme: "LVE",
    lieu: "Casablanca",
    type: "Stage en alternance",
    debut: "2026-10-30",
    fin: "2027-01-30",
    domaine: "Digitalisation entrepôt",
    missions: [
      "Développement d'un jumeau numérique 3D des entrepôts (React, Three.js)",
      "Vue 3D de l'occupation des emplacements avec code couleur en temps réel",
      "Simulation d'une journée : préparateurs, caristes et camions",
    ],
    resultats: [],
    competences: ["React", "Three.js", "Jumeau numérique", "Entreposage"],
  },
  {
    slug: "sntl",
    entreprise: "Société Nationale de Transport et de Logistique",
    sigle: "SNTL",
    monogramme: "SNTL",
    lieu: "Agadir",
    type: "Stage d'application",
    debut: "2026-06-23",
    fin: "2026-07-31",
    domaine: "Transport & digitalisation",
    missions: [
      "Développement d'un TMS (Transport Management System) et digitalisation des flux de transport",
      "Automatisation du suivi des commandes et du processus de transport",
    ],
    // TODO: résultats concrets (sans données confidentielles)
    resultats: [],
    competences: ["TMS", "Digitalisation", "Transport", "Suivi des commandes", "Automatisation"],
  },
  {
    slug: "coca-cola",
    entreprise: "Coca-Cola",
    sigle: "SBGS",
    monogramme: "CC",
    lieu: "Agadir",
    type: "Stage d'application",
    debut: "2025-03-03",
    fin: "2025-05-25",
    domaine: "Distribution",
    missions: [
      "Analyse et optimisation des processus de distribution",
      "Suivi et traçabilité des livraisons",
      "Gestion des tournées de livraison",
    ],
    // TODO: résultats concrets
    resultats: [],
    competences: ["Distribution", "Optimisation des processus", "Traçabilité", "Gestion des tournées"],
  },
  {
    slug: "marsa-maroc",
    entreprise: "Marsa Maroc",
    monogramme: "MM",
    lieu: "Agadir",
    type: "Stage d'application",
    debut: "2024-05-01",
    fin: "2024-06-01",
    domaine: "Gestion des stocks",
    missions: [
      "Gestion du stock des pièces de rechange",
      "Suivi de la réception des pièces de rechange",
      "Participation à la mise à jour des bases de données fournisseurs",
    ],
    // TODO: résultats concrets
    resultats: [],
    competences: ["Gestion des stocks", "Réception", "Pièces de rechange", "Bases de données fournisseurs"],
  },
  {
    slug: "sma",
    entreprise: "Société de Manutention d'Agadir",
    sigle: "SMA",
    monogramme: "SMA",
    lieu: "Agadir",
    type: "Stage d'observation",
    debut: "2023-03-27",
    fin: "2023-04-22",
    domaine: "Logistique portuaire",
    missions: [
      "Accostage et appareillage des navires",
      "Magasinage de marchandises conteneurisées ou diverses",
      "Chargement et fixation de conteneurs",
    ],
    resultats: [],
    competences: ["Manutention portuaire", "Opérations navires", "Magasinage", "Conteneurs"],
  },
];

// ===================================================================
// Formation
// ===================================================================

export const formations: Formation[] = [
  {
    slug: "master",
    diplome: "Master E-Logistique",
    niveau: "Bac+5",
    etablissement: "ESITH Casablanca",
    anneeDebut: 2025,
    anneeFin: 2027,
    enCours: true,
    precision: "Master 2",
  },
  {
    slug: "licence",
    diplome: "Licence professionnelle en Gestion de la chaîne logistique",
    niveau: "Bac+3",
    etablissement: "ESITH Casablanca",
    anneeDebut: 2022,
    anneeFin: 2025,
    enCours: false,
  },
  {
    slug: "bac",
    diplome: "Baccalauréat Sciences Physiques (PC)",
    niveau: "Bac",
    etablissement: "Lycée Complexe Scolaire Al Qalam, Agadir",
    anneeDebut: 2021,
    anneeFin: 2022,
    enCours: false,
  },
];

/** Cursus détaillé du Master E-Logistique */
export const cursusMaster: BlocCursus[] = [
  {
    titre: "Systèmes d'information & développement",
    matieres: [
      "Algorithmique & Programmation Python 1",
      "Algorithmique & Programmation Python 2",
      "Concepts des systèmes d'information",
      "Développement d'applications de bases de données E1",
      "Systèmes réseau & Cloud Networking",
      "Programmation 2 & Django",
      "Programmation Web / CMS",
      "E-commerce & web marchand",
    ],
  },
  {
    titre: "Logistique interne",
    matieres: [
      "Logistique interne",
      "Notions générales de la logistique",
      "Outils logistiques",
      "Entreposage",
    ],
  },
  {
    titre: "Logistique externe",
    matieres: [
      "Commerce international",
      "Gestion de la demande & prévision",
      "Logistique amont",
      "Transport",
      "Distribution",
    ],
  },
  {
    titre: "Aide à la décision",
    matieres: [
      "Aide multicritère à la décision",
      "Recherche opérationnelle",
      "Statistique",
      "Outils d'aide à la décision",
    ],
  },
  {
    titre: "Achats, planification & finance",
    matieres: [
      "E-sourcing & achats",
      "Planification S1",
      "Comptabilité générale & analytique",
      "Finance",
    ],
  },
  {
    titre: "Langues",
    matieres: ["Anglais", "Espagnol"],
  },
  {
    titre: "Soft skills & méthodologie",
    matieres: [
      "Study & Life Skills",
      "Entrepreneuriat & leadership",
      "Méthodologie de la recherche scientifique",
      "Cahier des charges",
    ],
  },
];

// ===================================================================
// Compétences
// ===================================================================

export const competences: CategorieCompetence[] = [
  {
    slug: "supply-chain",
    titre: "Supply Chain & Logistique",
    items: [
      "gestion des stocks",
      "réception",
      "suivi des commandes",
      "gestion des flux",
      "distribution",
      "gestion des tournées",
      "transport",
      "traçabilité",
      "analyse et optimisation des processus",
      "amélioration continue",
      "Lean Six Sigma",
      "manutention portuaire",
    ],
  },
  {
    slug: "data-digital",
    titre: "Data & Digital",
    items: ["SAP (ERP)", "TMS", "WMS", "Excel", "Power BI", "Python", "SQL / MySQL", "Merise", "Intelligence artificielle"],
  },
  {
    slug: "developpement",
    titre: "Développement",
    items: ["Python", "Django", "APIs REST", "JavaScript", "HTML/CSS", "Next.js", "Tkinter"],
  },
  {
    slug: "gestion",
    titre: "Gestion",
    items: [
      "gestion de projet",
      "travail d'équipe",
      "gestion du temps",
      "relations publiques",
      "créativité",
    ],
  },
];

// ===================================================================
// Langues
// ===================================================================

export const langues: Langue[] = [
  { langue: "Arabe", niveau: "Langue maternelle", score: 5 },
  { langue: "Français", niveau: "Courant", score: 4 },
  { langue: "Anglais", niveau: "Courant", score: 4 },
  { langue: "Espagnol", niveau: "Intermédiaire", score: 3 },
  { langue: "Chinois", niveau: "Débutant", score: 1 },
];

// ===================================================================
// Certifications (Coursera)
// ===================================================================

/** Ordre des filtres sur la page Certifications */
export const categoriesCertification: CategorieCertification[] = [
  "Supply Chain & Gestion",
  "Data & Analyse",
  "Développement",
  "Intelligence artificielle",
  "E-commerce & Marketing",
];

/** Données vérifiées depuis le compte Coursera */
export const certifications: Certification[] = [
  {
    titre: "Meta Back-End Developer",
    type: "professionnel",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2026-03",
    lienVerification: "https://www.coursera.org/account/accomplishments/badge/5u7OYVINRIquzmFSDbSKQg",
    competences: ["Développement back-end", "Python", "Django", "APIs REST", "Bases de données"],
  },
  {
    titre: "IBM AI Developer",
    type: "professionnel",
    organisme: "IBM",
    plateforme: "Coursera",
    categorie: "Intelligence artificielle",
    date: "2025-10",
    lienVerification: "https://www.coursera.org/account/accomplishments/badge/_m5k9TjRTAquZPU40fwKEA",
    competences: ["Intelligence artificielle", "Python", "Applications IA"],
  },
  {
    titre: "SAP Professional Fundamentals",
    type: "cours",
    organisme: "SAP",
    plateforme: "Coursera",
    categorie: "Supply Chain & Gestion",
    date: "2026-11",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/TFQ2KA2F7EO4",
    competences: ["SAP", "ERP", "Processus métier"],
  },
  {
    titre: "Lean Six Sigma - Yellow Belt",
    type: "cours",
    organisme: "Packt",
    plateforme: "Coursera",
    categorie: "Supply Chain & Gestion",
    date: "2026-11",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/ZML3AFI1F1WX",
    competences: ["Lean", "Six Sigma", "Amélioration continue", "Qualité"],
  },
  {
    titre: "Supply Chain Excellence",
    type: "cours",
    organisme: "Rutgers University",
    plateforme: "Coursera",
    categorie: "Supply Chain & Gestion",
    date: "2024-10",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/YNJZDZK5TCOV",
    competences: ["Supply chain", "Planification", "Optimisation"],
  },
  {
    titre: "Foundations of Project Management",
    type: "cours",
    organisme: "Google",
    plateforme: "Coursera",
    categorie: "Supply Chain & Gestion",
    date: "2024-10",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/J8BYCJBQJMI0",
    competences: ["Gestion de projet", "Planification"],
  },
  {
    titre: "Data Analysis and Visualization with Power BI",
    type: "cours",
    organisme: "Microsoft",
    plateforme: "Coursera",
    categorie: "Data & Analyse",
    date: "2026-09",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/PUPCHV0PNP6F",
    competences: ["Power BI", "Analyse de données", "Visualisation de données"],
  },
  {
    titre: "Analysis and Visualization of Data with Power BI",
    type: "cours",
    organisme: "Microsoft",
    plateforme: "Coursera",
    categorie: "Data & Analyse",
    date: "2026-09",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/QTK2580S44NS",
    competences: ["Power BI", "Visualisation de données", "Tableaux de bord"],
  },
  {
    titre: "Python for Data Science, AI & Development",
    type: "cours",
    organisme: "IBM",
    plateforme: "Coursera",
    categorie: "Data & Analyse",
    date: "2024-10",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/XV0OROHE74EM",
    competences: ["Python", "Data science", "Analyse de données"],
  },
  {
    titre: "Excel Skills for Business: Essentials",
    type: "cours",
    organisme: "Macquarie University",
    plateforme: "Coursera",
    categorie: "Data & Analyse",
    date: "2024-10",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/I730MBC5E63C",
    competences: ["Excel", "Formules", "Analyse de données"],
  },
  {
    titre: "APIs",
    type: "cours",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2026-04",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/T4LBXRKW3N71",
    competences: ["APIs REST", "Développement back-end"],
  },
  {
    titre: "Django Web Framework",
    type: "cours",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2026-04",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/UH5RYIJ7PII4",
    competences: ["Django", "Python", "Développement web"],
  },
  {
    titre: "Programming with JavaScript",
    type: "cours",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2026-03",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/KIYXP3FA67ZN",
    competences: ["JavaScript"],
  },
  {
    titre: "Introduction to Front-End Development",
    type: "cours",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2026-03",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/FQ7VG722L45M",
    competences: ["Développement front-end", "HTML", "CSS"],
  },
  {
    titre: "Introduction to Back-End Development",
    type: "cours",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2026-03",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/XAXO6NR4OK20",
    competences: ["Développement back-end", "Développement web"],
  },
  {
    titre: "HTML and CSS in depth",
    type: "cours",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2026-03",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/Q805WP898HDQ",
    competences: ["HTML", "CSS"],
  },
  {
    titre: "Programming in Python",
    type: "cours",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2025-11",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/T2UKCBOJ6B1D",
    competences: ["Python", "Programmation"],
  },
  {
    titre: "Introduction to Databases for Back-End Development",
    type: "cours",
    organisme: "Meta",
    plateforme: "Coursera",
    categorie: "Développement",
    date: "2025-10",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/9TJKEAXLZRZB",
    competences: ["Bases de données", "SQL", "MySQL"],
  },
  {
    titre: "Introduction to Artificial Intelligence (AI)",
    type: "cours",
    organisme: "IBM",
    plateforme: "Coursera",
    categorie: "Intelligence artificielle",
    date: "2025-10",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/LW8U2ZJYLTYJ",
    competences: ["Intelligence artificielle", "Notions d'IA"],
  },
  {
    titre: "Foundations of Digital Marketing and E-commerce",
    type: "cours",
    organisme: "Google",
    plateforme: "Coursera",
    categorie: "E-commerce & Marketing",
    date: "2024-10",
    lienVerification: "https://www.coursera.org/account/accomplishments/verify/T8XF64W5Y5TB",
    competences: ["Marketing digital", "E-commerce"],
  },
];

/** Certificats de cours affichés sur l'accueil (en plus des certificats professionnels), dans cet ordre */
export const certificationsCoursAccueil = [
  "SAP Professional Fundamentals",
  "Lean Six Sigma - Yellow Belt",
  "Supply Chain Excellence",
  "Data Analysis and Visualization with Power BI",
];

// ===================================================================
// Projets (ordre du tableau = ordre de priorité)
// ===================================================================

/** Ordre des filtres sur la page Projets */
export const categoriesProjet: CategorieProjet[] = ["Professionnel", "Académique", "Personnel"];

export const projets: Projet[] = [
  {
    slug: "tms-sntl",
    titre: "TMS — Transport Management System",
    categorie: "Professionnel",
    contexte: "Stage d'application — SNTL, Agadir",
    role: "Chef de projet et développeur (conception, développement, tests, mise en production)",
    periode: "23 juin – 31 juillet 2026",
    featured: true,
    resume:
      "TMS web qui digitalise tout le flux de transport de la SNTL Agadir, de la commande client jusqu'au règlement.",
    description:
      "Conception et développement d'un TMS web complet qui digitalise tout le flux de transport de la SNTL Agadir, de la commande client jusqu'au règlement, avec suivi en temps réel, documents générés automatiquement et pilotage par KPI.",
    chiffresCarte: [
      { valeur: "−90 %", label: "de temps de dispatch" },
      { valeur: "12", label: "documents automatisés" },
    ],
    probleme:
      "Un processus de transport 100 % manuel, sans suivi en temps réel ni mesure de la performance.",
    problemePoints: [
      "Commandes reçues par mail et WhatsApp, Bons de Transport remplis à la main puis ressaisis au retour des chauffeurs.",
      "Volume : 30 camions par jour (jusqu'à 70 en pic), 900 à 1 000 BT par mois, 29 chauffeurs, 10 transporteurs, 24 destinations du Sud du Maroc.",
      "Aucun suivi en temps réel, retour documentaire non tracé, affectation des camions calculée de tête, KPIs officiels impossibles à mesurer.",
    ],
    solution:
      "Une application web avec 3 portails connectés à une base de données unique : chaque acteur (client, chauffeur, équipe SNTL) travaille sur les mêmes données, à jour en temps réel, du dépôt de la commande jusqu'au règlement.",
    resultat: "",
    chiffres: [
      { label: "Dispatch d'une commande", avant: "15-20 min", apres: "< 2 min", gain: "−90 %" },
      { label: "Création d'un BT", avant: "20-40 s", apres: "< 2 s, automatique", gain: "−95 %" },
      { label: "Ressaisie des BT", avant: "Systématique", apres: "Supprimée (scan QR)", gain: "0 ressaisie" },
      { label: "Traçabilité des BT", avant: "0 %", apres: "100 %", gain: "100 %" },
      { label: "Documents générés automatiquement", avant: "0", apres: "12 sur 12", gain: "12 / 12" },
      { label: "Recherche d'une information", avant: "> 5 min", apres: "< 3 s", gain: "−99 %" },
      { label: "KPIs officiels mesurables", avant: "0", apres: "4 sur 4", gain: "4 / 4" },
      { label: "Étapes du processus digitalisées", avant: "0", apres: "8 sur 8", gain: "8 / 8" },
      { label: "Types de véhicules gérés", avant: "2", apres: "9", gain: "+7" },
    ],
    portails: [
      {
        titre: "Portail Client",
        public: "Pour les clients de la SNTL",
        items: [
          "Commande en ligne",
          "Suivi en temps réel, étape par étape",
          "Confirmation de réception : conforme ou anomalie avec photos",
          "Évaluation de la livraison",
          "Annulation et déclaration de paiement",
          "Statistiques et recommande en un clic",
        ],
      },
      {
        titre: "Portail Chauffeur",
        public: "Bilingue français / arabe, interface RTL",
        items: [
          "Missions et cycle de transport en 8 étapes",
          "Signalement d'incident et scan du QR code",
          "Itinéraire : distance, pauses et heure d'arrivée estimée",
          "Météo de la destination",
          "Mode hors ligne et historique",
        ],
      },
      {
        titre: "Espace Collaborateurs",
        public: "Pour les équipes SNTL, avec permissions par rôle",
        items: [
          "Accès et actions limités selon le rôle",
          "Gestion des codes PIN d'accès aux portails Client et Chauffeur",
        ],
        roles: [
          "Centre Trafic",
          "Agent Transport",
          "Assistant Commercial",
          "Directeur Régional",
          "Direction Exploitation",
        ],
      },
    ],
    modules: [
      {
        titre: "Commandes et dispatch automatique",
        items: [
          "Calcul du nombre de camions selon la capacité (20 T, 12 T, 30 T)",
          "Présélection des chauffeurs disponibles et répartition du tonnage",
          "Coût et marge estimés avant validation : carburant, péages, frais de mission",
          "Avis de non-réalisation d'une commande (FOR 030)",
        ],
      },
      {
        titre: "Bons de Transport",
        items: [
          "Génération automatique en 1 clic",
          "QR code enrichi : BL, quantité, transporteur, véhicule, date, FR, BCH",
          "11 statuts suivis et retour documentaire",
          "Calcul de distance et d'heure d'arrivée, alerte de retard",
          "Empreinte carbone du trajet sur la Feuille de Route (CO₂ aller chargé et retour à vide)",
        ],
      },
      {
        titre: "Suivi et pilotage",
        items: [
          "Tableau de bord temps réel (actualisé toutes les 10 s) avec score de performance /100",
          "Carte interactive des camions (Leaflet / OpenStreetMap)",
          "Vue Kanban par glisser-déposer",
          "Planning hebdomadaire et historique complet des opérations",
          "Rendement opérationnel : jauge du mois, saturation de la capacité, performance sur 4 semaines",
        ],
      },
      {
        titre: "Partenaires",
        items: [
          "Référentiel transporteurs avec statuts",
          "Évaluation trimestrielle des transporteurs sur 5 critères",
          "Comparateur de transporteurs avec score /100",
          "Réclamations par niveau de gravité",
          "Classement des chauffeurs",
        ],
      },
      {
        titre: "Finance",
        items: [
          "Grilles tarifaires par destination",
          "Facturation mensuelle automatique (commissions, TVA)",
          "Valorisation et marge par BT",
          "Suivi des créances clients et des dettes transporteurs",
          "Validation des paiements",
        ],
      },
      {
        titre: "Contrôle",
        items: ["Checklist de 6 points par BT avant clôture"],
      },
      {
        titre: "Outils",
        items: [
          "OCR des BT papier (Tesseract.js) avec score de confiance",
          "Scanner QR (caméra ou image)",
          "Export Excel",
          "Recherche globale Ctrl+K et raccourcis clavier",
          "Notifications temps réel et chat interne d'équipe",
          "Mode sombre et guides d'aide intégrés",
        ],
      },
    ],
    processus: [
      {
        titre: "Processus métier digitalisé",
        description: "Les 8 étapes du traitement d'une commande, de sa réception à son règlement.",
        etapes: [
          "Réception",
          "Intégration",
          "Affectation",
          "Retour documentaire",
          "Valorisation",
          "Mise en lot",
          "Contrôle",
          "Règlement",
        ],
      },
      {
        titre: "Cycle chauffeur",
        description: "Les 8 étapes validées par le chauffeur depuis son téléphone.",
        etapes: [
          "Début chargement",
          "Chargement terminé",
          "Départ",
          "Arrivée",
          "Déchargement transporteur",
          "Réception client",
          "Déchargement terminé",
          "Livré",
        ],
      },
    ],
    documents: [
      "Bon de Transport (avec QR code)",
      "Feuille de Route (avec empreinte carbone)",
      "Demande de Transport",
      "Lettre de voiture CMR",
      "État de répartition des transports",
      "PV de constat d'incident",
      "Déclaration d'assurance",
      "Avis de non-réalisation",
      "Facture mensuelle client",
      "Rapport mensuel d'exploitation",
      "Rapport mensuel des réclamations",
      "Fiche d'évaluation transporteur",
    ],
    kpis: [
      {
        titre: "KPIs officiels",
        items: [
          "Taux de réalisation des commandes",
          "Optimisation des flux",
          "Taux de recouvrement",
          "Délai de règlement",
        ],
      },
      {
        titre: "Indicateurs complémentaires",
        items: ["Délai moyen de dispatch", "Commandes en retard", "Coût carburant", "Anomalies"],
      },
    ],
    securite: [
      "Sessions signées (cookie httpOnly)",
      "API protégée",
      "Mots de passe et codes PIN hachés (bcrypt)",
      "Blocage après 5 tentatives",
      "Secrets en variables d'environnement",
      "Journal d'audit",
    ],
    pdca: [
      {
        phase: "Plan",
        titre: "Planifier",
        items: ["Charte de projet", "QQOQCP", "Diagnostic de l'existant", "Cahier des charges"],
      },
      {
        phase: "Do",
        titre: "Réaliser",
        items: ["Développement des 3 portails et des modules", "Mise en production cloud"],
      },
      {
        phase: "Check",
        titre: "Vérifier",
        items: [
          "Comparaison avant / après",
          "10 scénarios de test de bout en bout validés",
          "Vérification de chaque rôle et de chaque document",
          "Correction des anomalies",
        ],
      },
      {
        phase: "Act",
        titre: "Améliorer",
        items: [
          "Standardisation du processus",
          "Plan d'amélioration : GPS embarqué, notifications SMS / WhatsApp, application mobile, prévision de la demande par IA, connexion ERP",
        ],
      },
    ],
    fonctionnalites: [],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Vercel",
      "Vercel Blob",
      "Leaflet / OpenStreetMap",
      "Tesseract.js (OCR)",
      "SheetJS (Excel)",
      "html5-qrcode / qrcode",
      "bcrypt",
      "API Open-Meteo",
      "GitHub (déploiement continu)",
    ],
    etapes: [],
    competences: [
      "Analyse de processus logistiques",
      "Modélisation d'un flux de transport",
      "Conduite de projet (PDCA)",
      "Développement full-stack",
      "Bases de données relationnelles",
      "Sécurité applicative",
      "Mise en production cloud",
      "Conception de KPI",
    ],
    bilan: "",
    images: [
      {
        src: "/images/projets/tms-sntl/01-tableau-de-bord.webp",
        alt: "Tableau de bord du TMS : score de performance globale de 78 sur 100 (taux de livraison, zéro anomalie, automatisation, réalisation des commandes) et barre de progression des Bons de Transport",
        legende: "Tableau de bord temps réel : score de performance /100 et progression des Bons de Transport",
      },
      {
        src: "/images/projets/tms-sntl/02-vue-kanban.webp",
        alt: "Vue Kanban des Bons de Transport en colonnes Créés, En transit, Livrés, Validés et Anomalies, avec deux BT validés pour Atlas Transport et ANZA Logistique",
        legende: "Vue Kanban : le statut d'un BT se met à jour par glisser-déposer",
      },
      {
        src: "/images/projets/tms-sntl/03-historique.webp",
        alt: "Historique des opérations : chronologie des étapes d'un BT (chargement terminé, départ, arrivée sur site, déchargements) avec filtres par type, période et transporteur, et bouton d'export Excel",
        legende: "Historique : traçabilité complète des opérations, filtrable et exportable en Excel",
      },
    ],
    lienGithub: "",
    lienDemo: "",
  },
  {
    slug: "wms",
    titre: "Warehouse Management System (WMS)",
    categorie: "Académique",
    featured: true,
    resume:
      "Application WMS pour gérer les entrepôts, zones, articles, lots, réceptions, expéditions, mouvements internes et stock live.",
    description:
      "Développement d'une application WMS complète pour la gestion de l'entreposage : entrepôts, zones, articles, lots, réceptions, expéditions, transferts internes, stock live, inventaire physique et historique des opérations.",
    probleme:
      "Concevoir un WMS fonctionnel pour maîtriser la gestion physique et logique d'un entrepôt.",
    solution:
      "Le projet couvre la modélisation Merise, la création d'une base de données relationnelle, le développement d'une interface utilisateur et l'application de règles métier liées aux stocks.",
    resultat:
      "Le projet a d'abord été développé en Python avec une interface graphique et une base de données. Ensuite, le même concept WMS a été transformé en version web avec Django afin d'améliorer la structure, la navigation et l'accessibilité de l'application.",
    fonctionnalites: [
      "Gestion des entrepôts et zones",
      "Gestion des articles et lots",
      "Réceptions de marchandises",
      "Expéditions documentées",
      "Mouvements internes entre zones",
      "Stock live et recherche",
    ],
    stack: ["Python", "Tkinter", "MySQL", "Merise", "Django"],
    blocs: [
      {
        titre: "Base de données",
        items: [
          "Modélisation MCD avec Merise",
          "Transformation en MLD",
          "Tables relationnelles",
          "Contraintes PK / FK",
          "Contrôles UNIQUE, CHECK, NOT NULL",
        ],
      },
      {
        titre: "Règles métier",
        items: [
          "Quantités strictement positives",
          "Refus si stock insuffisant",
          "Suivi des lots expirés",
          "Traçabilité des opérations",
          "Audit log et facturation",
        ],
      },
    ],
    etapes: [
      {
        titre: "Analyse",
        description:
          "Étude du cahier des charges et identification des règles de gestion liées à l'entreposage.",
      },
      {
        titre: "Modélisation",
        description:
          "Création du MCD et du MLD avec les entités entrepôt, zone, article, lot et cycle count.",
      },
      {
        titre: "Développement",
        description:
          "Développement de l'application Python avec interface, base de données et règles de validation.",
      },
      {
        titre: "Migration Django",
        description:
          "Transformation du projet en application web Django avec une structure plus professionnelle.",
      },
    ],
    competences: [
      "Modélisation de bases de données",
      "Merise",
      "SQL",
      "Python",
      "Interface graphique",
      "Logique métier supply chain",
      "Gestion des stocks",
      "Traçabilité",
      "Django",
    ],
    bilan:
      "Ce projet m'a permis de renforcer mes compétences en modélisation de bases de données, Merise, SQL, développement Python, interface graphique, logique métier supply chain, gestion des stocks, traçabilité et développement web avec Django.",
    // TODO: captures d'écran (interface, MCD) dans public/images/projets/wms/
    images: [],
    // TODO: lien du dépôt GitHub et éventuelle démo en ligne
    lienGithub: "",
    lienDemo: "",
  },
  {
    slug: "student-grade",
    titre: "Student Grade Management System",
    categorie: "Académique",
    featured: false,
    resume:
      "Application Python permettant de gérer les étudiants, les notes, les moyennes et le classement dynamique.",
    description:
      "Application interactive développée pour gérer les dossiers étudiants, enregistrer les notes par matière, calculer automatiquement les moyennes et générer un classement dynamique avec badges.",
    probleme:
      "L'objectif de ce projet était de créer une application complète de gestion des notes des étudiants.",
    solution:
      "Le système permet de centraliser les informations des étudiants, d'ajouter leurs notes dans différentes matières, de calculer automatiquement leurs moyennes et de générer un classement clair. Le projet met aussi l'accent sur l'expérience utilisateur avec une interface colorée, lisible et interactive.",
    resultat:
      "Le résultat est une application fonctionnelle avec des données préchargées, un système de classement en temps réel, des badges gold/silver/bronze, une sauvegarde persistante avec JSON et une validation des entrées pour éviter les erreurs utilisateur.",
    fonctionnalites: [
      "Ajouter et supprimer des étudiants",
      "Enregistrer les notes par matière",
      "Calculer automatiquement les moyennes",
      "Afficher un classement dynamique",
      "Sauvegarder et charger les données",
    ],
    stack: ["Python", "Tkinter", "JSON", "OOP", "Error Handling", "GUI"],
    caracteristiques: [
      { label: "Type", valeur: "Application GUI" },
      { label: "Langage", valeur: "Python" },
      { label: "Stockage", valeur: "JSON" },
      { label: "Interface", valeur: "Tkinter / Qt" },
    ],
    blocs: [
      {
        titre: "Données préchargées",
        items: [
          "5 étudiants : Alice, Bob, Carol, David, Emma",
          "Plusieurs matières avec notes",
          "Classement avec badges 🥇🥈🥉",
          "Moyennes colorées selon performance",
        ],
      },
    ],
    etapes: [
      {
        titre: "Analyse",
        description:
          "Identification des besoins : gestion étudiants, notes, moyennes, classement et sauvegarde des données.",
      },
      {
        titre: "Développement",
        description:
          "Création des classes, logique de calcul, gestion des fichiers JSON et interface graphique interactive.",
      },
      {
        titre: "Amélioration",
        description:
          "Ajout du classement, des badges, de la validation des entrées et d'une interface plus lisible.",
      },
    ],
    competences: [
      "Programmation Python",
      "Programmation orientée objet",
      "Gestion de données JSON",
      "Interfaces graphiques",
      "Gestion des erreurs",
    ],
    bilan:
      "Ce projet m'a permis de renforcer mes compétences en programmation Python, en programmation orientée objet, en gestion de données avec JSON, en création d'interfaces graphiques et en structuration d'une application complète avec gestion des erreurs.",
    images: [],
    // TODO: lien du dépôt GitHub
    lienGithub: "",
    lienDemo: "",
  },
  {
    slug: "banking",
    titre: "Banking Management System",
    categorie: "Académique",
    featured: false,
    resume:
      "Simulation d'un système bancaire avec gestion des comptes, dépôts, retraits, transferts, historique des transactions et dashboard.",
    description:
      "Simulation d'un système bancaire permettant de créer et gérer des comptes, effectuer des dépôts, retraits, transferts, consulter l'historique des transactions et générer des relevés de compte.",
    probleme:
      "Simuler les opérations principales d'un système bancaire dans une application interactive.",
    solution:
      "Une application Python avec interface graphique, gestion des comptes et des transactions, sauvegarde JSON et validation des données.",
    resultat:
      "Une interface claire, des données préchargées, un tableau de bord et une gestion complète des transactions.",
    fonctionnalites: [
      "Création et gestion des comptes",
      "Dépôt et retrait d'argent",
      "Transfert entre comptes",
      "Historique des transactions",
      "Relevés de compte",
    ],
    stack: ["Python", "Tkinter", "JSON", "GUI"],
    blocs: [
      {
        titre: "Interface",
        items: [
          "Dashboard avec statistiques",
          "Total des comptes",
          "Comptes actifs",
          "Balance totale",
          "Interface bancaire moderne",
        ],
      },
    ],
    etapes: [],
    competences: [
      "Logique métier bancaire",
      "Gestion des transactions",
      "Sauvegarde JSON",
      "Validation des données",
      "Interface utilisateur",
    ],
    bilan:
      "Ce projet m'a permis de développer une application interactive simulant les opérations principales d'un système bancaire, avec une interface claire, des données préchargées, un tableau de bord et une gestion complète des transactions.",
    images: [],
    // TODO: lien du dépôt GitHub
    lienGithub: "",
    lienDemo: "",
  },
  {
    slug: "portfolio",
    titre: "Portfolio personnel",
    categorie: "Personnel",
    featured: false,
    resume:
      "Site portfolio moderne pour présenter mon parcours, mes projets, mon CV et mes informations de contact.",
    description:
      "Ce site : un portfolio statique en Next.js pour présenter mon profil Supply Chain × Digital aux recruteurs.",
    probleme:
      "Présenter un profil hybride, entre logistique et développement, de façon claire et vérifiable.",
    solution:
      "Un site Next.js statique dont tout le contenu est centralisé dans un fichier de données typé, avec un design system en mode clair et sombre.",
    // TODO: à compléter une fois la refonte en ligne
    resultat: "",
    fonctionnalites: [
      "Contenu centralisé dans un fichier de données typé",
      "Mode clair / sombre",
      "Design responsive",
      "Formulaire de contact",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    etapes: [],
    competences: ["Next.js", "TypeScript", "Tailwind CSS", "Accessibilité"],
    bilan: "",
    images: [],
    lienGithub: "https://github.com/ziad040901-ui/portfolio-mohamed-ziad-almi",
    // TODO: URL de production (Vercel)
    lienDemo: "",
  },
];

// ===================================================================
// Chiffres clés (accueil) — calculés pour rester synchronisés
// ===================================================================

const formationEnCours = formations.find((f) => f.enCours);
const nombreCertificatsProfessionnels = certifications.filter((c) => c.type === "professionnel").length;

export const chiffresCles: ChiffreCle[] = [
  { slug: "stages", valeur: String(experiences.length), label: "expériences", detail: "dont 4 stages" },
  {
    slug: "certifications",
    valeur: String(certifications.length),
    label: "certifications",
    detail: `dont ${nombreCertificatsProfessionnels} professionnelle${nombreCertificatsProfessionnels > 1 ? "s" : ""}`,
  },
  { slug: "langues", valeur: String(langues.length), label: "langues" },
  { slug: "niveau", valeur: formationEnCours?.niveau ?? "Bac+5", label: "en cours" },
];

// ===================================================================
// Formulaire de contact
// ===================================================================

export const formulaireContact = {
  /** Endpoint Formspree (envoi en fetch, réponse JSON) */
  action: "https://formspree.io/f/xpqbwpwo",
  /** Objet de l'email reçu */
  sujet: "Nouveau message depuis le portfolio",
};

// ===================================================================
// Navigation principale (navbar et footer)
// ===================================================================

export const navigation: LienNavigation[] = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "Parcours" },
  { href: "/projects", label: "Projets" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

// ===================================================================
// SEO (metadata du layout et des pages)
// ===================================================================

export const site = {
  /** URL de production (Vercel). À changer ici en cas de nom de domaine personnalisé. */
  url: "https://portfolio-mohamed-ziad-almi.vercel.app",
  depotGithub: "https://github.com/ziad040901-ui/portfolio-mohamed-ziad-almi",
};

/** École actuelle (données structurées JSON-LD) */
export const ecole = {
  sigle: "ESITH",
  nom: "École Supérieure des Industries du Textile et de l'Habillement",
  ville: "Casablanca",
  pays: "MA",
};

export const seo = {
  titreSite: `${profil.nom} — Supply Chain & Digital`,
  /** %s = titre de la page */
  modeleTitre: `%s | ${profil.nom}`,
  motsCles: [
    "supply chain",
    "e-logistique",
    "logistique",
    "TMS",
    "WMS",
    "transport",
    "digitalisation logistique",
    "stage PFE",
    "stage supply chain",
    "Casablanca",
    "Maroc",
    "ESITH",
    "Power BI",
    "Python",
    "Django",
    profil.nom,
  ],
  /** Poste affiché dans les données structurées (JSON-LD) */
  poste: "Étudiant en Master 2 E-Logistique",
  imagePartage: {
    alt: `${profil.nom} — Étudiant en Master 2 E-Logistique, Supply Chain × Digital`,
    signature: "Supply Chain × Digital",
    recherche: "Disponible pour un PFE de 4 mois — février 2027",
  },
  description:
    "Portfolio de Mohamed Ziad Almi, étudiant en Master 2 E-Logistique : supply chain, transport et digitalisation logistique. À la recherche d'un stage PFE.",
  pages: {
    contact: {
      titre: "Contact",
      description:
        "Contacter Mohamed Ziad Almi pour un stage PFE en supply chain, transport ou digitalisation logistique : email, téléphone, LinkedIn ou formulaire.",
    },
    projets: {
      titre: "Mes projets",
      description:
        "Projets de Mohamed Ziad Almi : WMS, TMS et digitalisation des flux de transport, applications Python et développement web, présentés en études de cas.",
    },
    certifications: {
      titre: "Certifications",
      description:
        "Certifications Coursera de Mohamed Ziad Almi : certificats professionnels Meta Back-End Developer et IBM AI Developer, supply chain, gestion de projet, data (Excel, Power BI, Python), développement web et intelligence artificielle, avec liens de vérification.",
    },
    parcours: {
      titre: "Mon parcours",
      description:
        "Expériences en logistique portuaire, stocks, distribution et transport, formation à l'ESITH Casablanca, cursus du Master E-Logistique, compétences et langues de Mohamed Ziad Almi.",
    },
  },
};

// ===================================================================
// Libellés d'interface (boutons, aria-label…)
// ===================================================================

export const ui = {
  themeToggle: "Basculer entre thème clair et sombre",
  photoAlt: `Photo de profil de ${profil.nom}`,
  cvNomFichier: `CV-${profil.nom.replaceAll(" ", "-")}.pdf`,
  linkedin: `Profil LinkedIn de ${profil.nom} (nouvel onglet)`,
  github: `Profil GitHub de ${profil.nom} (nouvel onglet)`,
  voirProjet: "Voir le projet",
  email: `Envoyer un e-mail à ${profil.nom}`,
  allerAuContenu: "Aller au contenu",

  navbar: {
    navigationPrincipale: "Navigation principale",
    accueil: `${profil.nom} — accueil`,
    ouvrirMenu: "Ouvrir le menu",
    fermerMenu: "Fermer le menu",
    cv: "CV",
    cvAriaLabel: "CV (PDF, nouvel onglet)",
  },

  footer: {
    navigation: "Navigation du pied de page",
    reseaux: "Réseaux et contact",
    droits: "Tous droits réservés.",
  },

  /** « 5 semaines » */
  duree: (semaines: number) => `${semaines} semaine${semaines > 1 ? "s" : ""}`,

  parcours: {
    entete: {
      eyebrow: "Parcours",
      titre: "Mon parcours",
      contact: "Me contacter",
      cv: "Télécharger mon CV",
    },
    experiences: {
      eyebrow: "Expériences",
      titre: "Expériences professionnelles",
      sousTitre:
        "Quatre stages entre 2023 et 2026 et une alternance en cours, du terminal portuaire à la digitalisation du transport.",
      missions: "Missions",
      competences: "Compétences mobilisées",
      resultats: "Résultats",
    },
    formation: {
      eyebrow: "Formation",
      titre: "Diplômes",
      sousTitre: "Un parcours entièrement orienté logistique et supply chain depuis 2022.",
      enCours: "En cours",
    },
    cursus: {
      eyebrow: "Master E-Logistique",
      titre: "Cursus du Master",
      sousTitre:
        "Les matières du Master regroupées par domaine : dépliez un bloc pour voir son contenu.",
      nombreMatieres: (n: number) => `${n} matière${n > 1 ? "s" : ""}`,
    },
    competences: {
      eyebrow: "Savoir-faire",
      titre: "Compétences",
      sousTitre:
        "Des opérations logistiques aux outils numériques qui les pilotent.",
    },
    langues: {
      eyebrow: "International",
      titre: "Langues",
      sousTitre: "Cinq langues, dont trois pratiquées couramment.",
      score: (score: number) => `Niveau ${score} sur 5`,
    },
  },

  contact: {
    eyebrow: "Stage PFE",
    titre: "Contact",
    sousTitre:
      "Vous recrutez un stagiaire PFE en supply chain, transport ou digitalisation logistique ? Écrivez-moi ou appelez-moi pour échanger sur votre besoin : je vous enverrai volontiers mon CV et des détails sur mes projets.",
    coordonnees: "Coordonnées",
    email: "Email",
    telephone: "Téléphone",
    linkedin: "LinkedIn",
    github: "GitHub",
    localisation: "Localisation",
    nouvelOnglet: "(nouvel onglet)",
    copier: {
      copier: "Copier l'email",
      copie: "Email copié ✓",
      erreur: "Copie impossible : sélectionnez l'adresse manuellement",
    },
    formulaire: {
      titre: "Envoyer un message",
      champsObligatoires: "Les champs marqués d'un astérisque (*) sont obligatoires.",
      nom: "Nom complet",
      email: "Email",
      entreprise: "Entreprise (facultatif)",
      message: "Message",
      envoyer: "Envoyer le message",
      envoi: "Envoi en cours…",
      succes: "Message envoyé ✓ Merci, je vous réponds dès que possible.",
      erreur: `Erreur lors de l'envoi, réessayez. Vous pouvez aussi m'écrire directement à ${profil.email}.`,
      erreurs: {
        nom: "Indiquez votre nom.",
        emailRequis: "Indiquez votre adresse email.",
        emailInvalide: "Adresse email invalide (exemple : nom@entreprise.com).",
        message: "Votre message doit contenir au moins 10 caractères.",
      },
    },
  },

  projets: {
    eyebrow: "Réalisations",
    titre: "Mes projets",
    sousTitre:
      "Des outils numériques construits pour des problèmes concrets : entreposage, transport, gestion de données.",
    filtresLabel: "Filtrer par catégorie",
    tous: "Tous",
    resultatSingulier: "projet affiché",
    resultatPluriel: "projets affichés",

    // Page détail (étude de cas)
    retour: "Tous les projets",
    stack: "Technologies",
    github: "Code source",
    demo: "Voir la démo",
    lienExterneAriaLabel: (libelle: string, titre: string) => `${libelle} — ${titre} (nouvel onglet)`,
    apercu: "Aperçu du projet",
    enBref: "Le projet en bref",
    probleme: "Problème",
    solution: "Solution",
    resultat: "Résultat",
    fonctionnalites: "Fonctionnalités",
    ficheTechnique: "Fiche technique",
    etapes: "Déroulement du projet",
    etape: (n: number) => `Étape ${n}`,
    competences: "Compétences développées",
    navigation: "Navigation entre projets",

    // Étude de cas détaillée
    role: "Rôle",
    periode: "Période",
    problemeSolution: "Du problème à la solution",
    chiffresCles: "Les chiffres clés",
    chiffresSousTitre: "Mesurés lors des tests, avant et après la mise en place de l'application.",
    avant: "Avant",
    apres: "Après",
    gain: "Gain",
    portails: (portails: number, roles: number) =>
      roles > 0 ? `${portails} portails, ${roles} rôles` : `${portails} portails`,
    rolesTitre: "Rôles",
    modules: "Fonctionnalités par module",
    nombreFonctionnalites: (n: number) => `${n} fonctionnalité${n > 1 ? "s" : ""}`,
    processus: "Processus digitalisés",
    etapeSur: (n: number, total: number) => `Étape ${n} sur ${total}`,
    documentsKpisSecurite: "Documents, KPIs et sécurité",
    documents: (n: number) => `${n} documents générés automatiquement`,
    kpis: "KPIs pilotés",
    securite: "Sécurité",
    pdca: "Méthodologie PDCA",
    pdcaSousTitre: "Planifier, réaliser, vérifier, améliorer : la démarche d'amélioration continue appliquée au projet.",
    chiffresCarte: "Chiffres clés du projet",
    precedent: "Projet précédent",
    suivant: "Projet suivant",

    // Galerie de captures et affichage plein écran
    galerie: {
      /** Légende par défaut si le nom de fichier ne contient qu'un numéro (ex. « 01.png ») */
      captureParDefaut: (titre: string, n: number) => `${titre} — capture ${n}`,
      agrandir: (legende: string, n: number, total: number) =>
        `Agrandir la capture ${n} sur ${total} : ${legende}`,
      dialogue: (titre: string) => `Captures d'écran — ${titre}`,
      fermer: "Fermer l'affichage plein écran",
      precedente: "Capture précédente",
      suivante: "Capture suivante",
      compteur: (n: number, total: number) => `${n} / ${total}`,
      compteurLecteur: (n: number, total: number) => `Capture ${n} sur ${total}`,
    },
  },

  certifications: {
    eyebrow: "Formation continue",
    titre: "Certifications",
    sousTitre:
      "Des formations en ligne qui complètent mon Master E-Logistique : analyse de données, intelligence artificielle, développement et gestion de projet, au service de la supply chain.",
    professionnels: {
      titre: "Certificats professionnels",
      sousTitre: "Des parcours complets de plusieurs cours, délivrés par Meta et IBM.",
    },
    cours: {
      titre: "Certificats de cours",
      sousTitre: "Du plus récent au plus ancien.",
    },
    badgeProfessionnel: "Certificat professionnel",
    filtresLabel: "Filtrer par catégorie",
    toutes: "Toutes",
    /** Annonce lecteur d'écran après un changement de filtre */
    resultatSingulier: "certification affichée",
    resultatPluriel: "certifications affichées",
    verifier: "Vérifier le certificat",
    voirBadge: "Voir le badge",
    /** « Vérifier le certificat Supply Chain Excellence sur Coursera (nouvel onglet) » */
    lienAriaLabel: (action: string, titre: string, plateforme: string) =>
      `${action} ${titre} sur ${plateforme} (nouvel onglet)`,
    nouvelOnglet: "(nouvel onglet)",
    obtenue: (date: string) => `Obtenue en ${date}`,
  },

  pageIntrouvable: {
    code: "Erreur 404",
    titre: "Ce colis s'est perdu en transit",
    texte:
      "La page demandée n'existe pas ou a été déplacée. Vérifiez l'adresse, ou reprenez la route depuis l'accueil.",
    suivi: "Statut : introuvable · Dernier scan : quai inconnu",
    retour: "Retour à l'accueil",
  },

  accueil: {
    disponibilite: "Disponible pour un PFE de 4 mois — février 2027",
    voirProjets: "Voir mes projets",
    telechargerCv: "Télécharger mon CV",
    chiffresCles: "Chiffres clés",

    experiences: {
      eyebrow: "Parcours",
      titre: "Expériences terrain",
      sousTitre:
        "Quatre stages (SMA, Marsa Maroc, Coca-Cola, SNTL) et une alternance en cours chez La Voie Express.",
      lien: "Voir tout mon parcours",
    },
    projets: {
      eyebrow: "Réalisations",
      titre: "Projets phares",
      sousTitre: "Des outils numériques construits pour des problèmes logistiques concrets.",
      lien: "Tous les projets",
    },
    competences: {
      eyebrow: "Savoir-faire",
      titre: "Compétences",
      sousTitre: "Un profil hybride : opérations logistiques, data et développement.",
    },
    certifications: {
      eyebrow: "Formation continue",
      titre: "Certifications",
      sousTitre: "Certifications en ligne suivies sur Coursera, en complément du Master.",
      lien: `Voir les ${certifications.length} certifications`,
    },
    cta: {
      titre: "Vous recrutez un stagiaire PFE en supply chain ?",
      contact: "Me contacter",
      cv: "Télécharger mon CV",
    },
  },
};
