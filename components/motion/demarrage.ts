/**
 * Démarrage des animations : le contenu reste VISIBLE tant que les animations ne sont pas prêtes.
 *
 * framer-motion écrit l'état initial des éléments animés (opacity: 0…) directement dans le HTML
 * serveur. Si le JavaScript ne se charge pas, échoue ou tarde, ce contenu resterait invisible.
 * D'où trois verrous, tous inline dans le <head> (indépendants des fichiers CSS et JS) :
 *
 * 1. STYLE_DEMARRAGE force l'affichage des éléments [data-apparition] tant que <html> n'a pas
 *    la classe CLASSE_ANIM (et toujours si l'utilisateur réduit les animations).
 * 2. SCRIPT_DEMARRAGE ajoute CLASSE_ANIM avant le premier affichage (sauf si l'utilisateur
 *    réduit les animations) : l'état caché ne s'applique donc qu'avec JavaScript actif.
 * 3. Filet de sécurité : si React / framer-motion n'ont pas signalé qu'ils sont prêts
 *    (CLASSE_PRETES, ajoutée par MotionProvider) au bout de DELAI_SECOURS_MS, le script retire
 *    CLASSE_ANIM : tout le contenu s'affiche, sans animation.
 *
 * Sans JavaScript, le script ne s'exécute pas : la classe n'est jamais ajoutée, tout est visible.
 */

export const CLASSE_ANIM = "anim";
export const CLASSE_PRETES = "anim-pretes";
const DELAI_SECOURS_MS = 2000;

export const STYLE_DEMARRAGE = [
  `html:not(.${CLASSE_ANIM}) [data-apparition]{opacity:1!important;transform:none!important}`,
  `@media (prefers-reduced-motion:reduce){[data-apparition]{opacity:1!important;transform:none!important}}`,
].join("");

export const SCRIPT_DEMARRAGE = `(function(){try{
var h=document.documentElement;
if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
h.classList.add("${CLASSE_ANIM}");
setTimeout(function(){if(!h.classList.contains("${CLASSE_PRETES}"))h.classList.remove("${CLASSE_ANIM}");},${DELAI_SECOURS_MS});
}catch(e){}})();`;
