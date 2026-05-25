# Décision Architecture : Double-Framework de Présentation

**Date de validation :** 16 mai 2026
**Statut :** ✅ VALIDÉ

---

## Décision

Après expérimentation sur la Leçon 1.1, nous adoptons une stratégie **Double-Framework** :

| Outil | Usage | Quand l'utiliser |
|---|---|---|
| **Reveal.js** | Cours principaux (vidéos) | Toujours pour les présentations filmées. Offre transitions, fragments, `data-auto-animate`, typewriter, fonds animés. |
| **Marp** | Contenus simples | Slides de référence rapides, documentation technique interne, exports PDF/PPTX statiques pour les apprenants. |

---

## Architecture Technique Validée (Reveal.js)

### Fichiers du système
```
tools/revealjs/
├── template.html       # Coquille HTML + CDN Reveal.js (stand-alone, zéro dépendance)
├── course_theme.css    # Design System (Cyan #00D4FF / Violet #7C3AED, Glassmorphism, Watermark)
└── generate_reveal.sh  # Script de build : injecte MD + CSS → génère .html
```

### Workflow de production pour chaque leçon
```bash
# Écrire le contenu
# → lecon_X.Y/slides_reveal.md

# Générer la présentation
./tools/revealjs/generate_reveal.sh content/section_X/lecon_X.Y/slides_reveal.md

# Ouvrir dans Chrome en plein écran (F11) pour l'enregistrement
open content/section_X/lecon_X.Y/reveal_slides_reveal.html
```

---

## Patterns d'animation validés

Ces patterns sont approuvés et documentés pour être réutilisés sur toutes les leçons :

| Situation | Pattern Reveal.js |
|---|---|
| Slide titre (1ère impression) | `data-background-gradient` + `fragment fade-down/up` avec `data-fragment-index` |
| Comparaison en 2 colonnes | `.grid-2` + `fragment fade-right` (gauche) + `fragment fade-left` (droite) séquencé |
| Liste pédagogique (3 points) | `<li class="fragment highlight-current-blue">` |
| 4 cartes de projet | `.grid-2` + `fragment fade-up` avec `data-fragment-index="1"` à `"4"` |
| Transition titre → contenu | `data-auto-animate` + `data-id="titre-xxx"` sur deux `<section>` consécutives |
| Slide finale (CTA fort) | `.typewriter` CSS + `fragment fade-up` sur le titre principal |

---

## Notes de Migration

- Les fichiers `slides_marp.md` existants sont **conservés** (les slides générés Marp restent valides comme ressources PDF pour les apprenants).
- Pour chaque nouvelle leçon, **créer en priorité le fichier `slides_reveal.md`**.
- Le fichier de test de l'expérience (`content/experiment_animations.md`) peut être supprimé quand souhaité.
