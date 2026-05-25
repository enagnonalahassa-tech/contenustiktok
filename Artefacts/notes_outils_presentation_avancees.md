# Rapport de Recherche : Outils et Frameworks de Présentation Avancés

*Ce document compile nos échanges et réflexions concernant les limites des outils de présentation actuels, les alternatives dynamiques, et les méthodes de génération de slides ou d'animations par le code.*

---

## 1. Le Framework Actuel : Marp (Markdown Presentation Ecosystem)

Marp est un outil redoutable pour générer rapidement des slides au design homogène directement depuis du Markdown. Cependant, pour un créateur de contenu technique cherchant un haut niveau de dynamisme, il présente des contraintes.

### Les Limites Majeures
*   **Export PPTX Statique :** Lors de l'export en PowerPoint, Marp convertit chaque slide en une image haute résolution (placée en fond d'écran). **Le texte n'est pas éditable** dans PowerPoint.
*   **Animations d'Objets :** Impossible de créer des animations séquentielles complexes par objet (ex: une image qui arrive de la gauche, puis un texte en fondu).
*   **Rendu Multimédia :** Les vidéos (balise `<video>`) et les GIFs animés complexes fonctionnent **uniquement dans l'export HTML**. Le PDF et le PPTX générés ne supportent pas la lecture vidéo.

### Gestion des Animations dans Marp (Export HTML Uniquement)
Bien que limité, Marp supporte 4 niveaux d'animation si l'on présente depuis le navigateur web :
1.  **Les Fragments :** L'apparition d'éléments (puces de liste) étape par étape au clic (syntaxe `* élément`).
2.  **Les Transitions :** L'effet de passage d'un slide à l'autre (ex: `<!-- transition: fade -->`).
3.  **Les Animations CSS :** Possibilité d'injecter du CSS pur (`@keyframes`) pour faire pulser un élément.
4.  **Les GIFs Animés :** La méthode la plus robuste pour montrer une interface dynamique.

### Intégration de Diagrammes (Mermaid)
Marp CLI ne rend pas les diagrammes Mermaid nativement par défaut. La meilleure pratique d'Architecture consiste à **exporter le diagramme (depuis l'éditeur web Mermaid ou via un script) en format `.png` ou `.svg`**, puis de l'insérer comme une image classique dans le Markdown.

---

## 2. L'Alternative Dynamique : Reveal.js

Reveal.js est un framework de présentation HTML ultra-complet, pensé pour les développeurs web. Contrairement à Marp (Markdown-first), Reveal.js est HTML/JS-first.

### Intégration Théorique (Processus de Pensée)
Si le projet devait migrer sur Reveal.js, l'architecture serait la suivante :
1.  **Installation :** Importation de la librairie via Node.js (`npm install reveal.js`).
2.  **Rétrocompatibilité Markdown :** Utilisation de la fonctionnalité native de Reveal.js permettant de lire des fichiers `.md` externes via l'attribut HTML `<section data-markdown="mon_cours.md">`. Cela évite d'avoir à réécrire les scripts.
3.  **Theming :** Conversion du CSS Marp actuel vers un thème Reveal.js.
4.  **Avantages majeurs :** Possibilité d'inclure des animations JavaScript complexes (GSAP, Anime.js), d'intégrer des iFrames interactives complètes, et d'utiliser une navigation spatiale en 2D (gauche/droite pour les chapitres, haut/bas pour approfondir un sujet).

---

## 3. Génération Programmatique : Coder ses Présentations

Est-il possible de générer des PowerPoints ou des animations avec du code pur (Python, JS) ? La réponse est oui, avec des distinctions importantes selon le format.

### A. Générer du PowerPoint par le code (`python-pptx`)
*   **La Librairie :** `python-pptx` est le standard de l'industrie en Python.
*   **Capacités :** Elle permet de créer des slides, dessiner des formes, placer du texte au pixel près et générer des graphiques de données complexes (très utilisé pour générer des rapports hebdomadaires automatiques).
*   **La Limite (Fatale) :** La librairie **ne gère pas les animations**. La structure XML d'une animation PowerPoint est si complexe qu'il est impossible de programmer un effet d'entrée ou de balayage via ce script.

### B. Le monde Apple (Keynote via AppleScript)
*   Sur Mac, Keynote peut être piloté par **AppleScript** (ou JavaScript for Automation).
*   Il est possible d'écrire un script qui simule des clics pour créer des slides et y appliquer des animations natives Keynote. Cependant, cette méthode est archaïque, lente, et très sensible aux mises à jour du logiciel. Ce n'est pas une solution de production fiable.

### C. Le Saint-Graal de l'Animation : Manim & Remotion
Pour un ingénieur cherchant à programmer des animations de diagrammes ou de flux de données sans logiciel de montage visuel, il existe deux frameworks ultimes :
1.  **Manim (Python) :** Créé par le YouTubeur de mathématiques *3Blue1Brown*. On écrit des formules Python (ex: `GrowArrow()`, `Create(circle)`), et le moteur calcule et rend une vidéo MP4 ultra-fluide. C'est l'outil parfait pour expliquer des concepts algorithmiques ou des diagrammes de séquence.
2.  **Remotion (React) :** Permet de créer des vidéos MP4 de haute qualité en écrivant du code React (HTML/CSS animés via des *frames*).

### La Création de GIFs et Vidéos (Le pont entre Vidéo et Slides)
Pour illustrer des présentations, la meilleure technique consiste à enregistrer son écran avec **Kap** (getkap.co).

#### Comparatif des formats Kap (validé par test réel le 18/05/2026)

| Format | Safari | Chrome / Edge | Firefox | Qualité | Poids |
|---|---|---|---|---|---|
| **GIF** | ✅ | ✅ | ✅ | ⭐⭐⭐ | Lourd |
| **WebM** | ❌ Non supporté | ✅ | ✅ | ⭐⭐⭐⭐⭐ | Léger |
| **MP4 (H264)** | ✅ | ✅ | ✅ | ⭐⭐⭐⭐⭐ | Moyen |

#### Recommandation pour ce projet
- **Pendant l'enregistrement vidéo** (Chrome/Edge) → **WebM** : qualité maximale, fichier léger.
- **Pour compatibilité universelle** (distribution aux apprenants) → **MP4 H264** : seul format vraiment universel incluant Safari.
- **Safari ne supporte PAS WebM** — choix délibéré d'Apple (format concurrent de Google).

