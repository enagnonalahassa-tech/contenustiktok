# AI Architect - Cinematic Presentation Design System

Ce document agit comme un **System Prompt** et une **Rétrospective** des choix architecturaux, techniques et visuels définis ensemble pour la production des présentations "AI Automation Architect". 

Il encapsule toutes nos itérations et peut être fourni à n'importe quelle IA ou collaborateur futur pour garantir un standard de qualité "Keynote B2B Haut de Gamme" constant.

---

## 1. Le "System Prompt" (À copier-coller pour initialiser une IA)

> **Rôle :** Tu es un directeur artistique technique et expert en storytelling visuel. Nous allons créer des slides Reveal.js.
> **Mission :** Tu dois scrupuleusement respecter le "Cinematic Presentation Design System" détaillé ci-dessous. Interdiction stricte de produire des slides basiques (fond blanc, listes à puces simples). Je veux du glassmorphism, du storytelling fragmenté, des animations de flux de données CSS, et du texte animé en "live-typing". Assure-toi que chaque diapositive ressemble au lancement d'un produit SaaS haut de gamme.

---

## 2. Identité Visuelle et Vibe (La Règle d'Or)
* **Esthétique :** "Tech Haut de Gamme, Futuriste, Sombre, Professionnel".
* **Couleurs de base :** Fond global de la présentation très sombre (Slate 900 : `#0F172A`). Textes principaux en blanc pur ou gris très clair (`#F8FAFC`).
* **Accents de Lumière (Glow) :** Les éléments importants n'utilisent pas de couleurs plates, mais des dégradés et des ombres portées lumineuses (box-shadow). 
  * *Emeraude* (`#34D399`) pour valider, rassurer (l'humain, la réussite).
  * *Cyan/Diamant* (`#38BDF8`) pour le transfert de données, le code, l'API.
  * *Indigo/Violet* (`#8B5CF6` à `#6366F1`) pour la "magie" de l'IA et l'orchestration autonome.
* **Typographie "Academic Tech" (LaTeX) :** Contraste délibéré entre le visuel cyberpunk et une rigueur scientifique.
  * *Police globale :* `Computer Modern Serif` (la police par défaut des papiers de recherche académiques).
  * *Police des codes/prompts :* `Computer Modern Typewriter` pour donner une vraie sensation de terminal d'ordinateur old-school mélangée à l'esthétique futuriste.

---

## 3. Le Moteur de Fond : La Constellation Neurale
* **Bannissement des fonds fixes :** Nous utilisons un `<canvas>` Three.js en arrière-plan. L'animation retenue est le **Réseau Neuronal (Plexus)** : des particules connectées par des lignes de lumière calculées dynamiquement selon la distance.
* **Cinématique :** L'animation doit être lente, majestueuse (rotation globale extrêmement faible). Elle ne doit pas donner le vertige ni distraire l'audience de la voix off.
* **Transitions 3D (Cubic/Convex) :** La configuration `Reveal.initialize({ transition: 'convex', backgroundTransition: 'none' })` est utilisée. Ainsi, le fond 3D (canvas) reste fixe et fluide, tandis que les slides tournent en 3D cubique (comme dans les présentations premium de PowerPoint) pour donner une impression de profondeur structurelle.
* **Contraste :** Pour garantir la lisibilité, tous les conteneurs de texte doivent utiliser un effet "Glassmorphism" (`background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1);`).

---

## 4. Rétrospective des Animations Signatures (Nos Inventions)

Au cours de nos itérations, nous avons identifié et supprimé tout ce qui faisait "archaïque" (comme les émojis ➡️ ou ↔️) pour créer notre propre bibliothèque comportementale :

### A. Le "Live Typing" (Effet Terminal/Hacker)
* **Concept :** Ne jamais afficher un bloc de texte entier de façon brutale.
* **Technique :** Une classe `.live-typing` couplée à un moteur JavaScript sur-mesure. Au déclenchement du slide ou du fragment, le script découpe le texte et fait apparaître chaque caractère séquentiellement (toutes les 40ms) en gérant intelligemment son état caché. 
* **Automatisation :** Le moteur Javascript intercepte automatiquement tous les titres principaux des slides (`h1`, `h2`, `h3` de premier niveau) pour leur appliquer le Live Typing par défaut.
* **Avantage :** Maintient l'attention du spectateur (qui lit en même temps que le texte s'écrit) et respecte à 100% le formatage HTML (mots en gras, couleurs, etc.).



### B. Le Prompt Oblique (3D Tilted Box)
* **Concept :** Donner vie à une "punchline" ou à une requête IA en la transformant en véritable objet 3D flottant.
* **Technique :** Un conteneur manipulé via `perspective`, `rotateY`, `rotateX` et `rotateZ`. Une forte ombre portée simule la lévitation. Un pseudo-élément "masque blanc" recule pour simuler l'écriture, donnant l'impression viscérale d'une barre de recherche SaaS moderne.

### C. Le Split 50/50 Dynamique (Le Storytelling visuel)
* **Concept :** Pour expliquer un process ou un problème (ex: "Le Piège de 2026"), on divise l'écran. 
* **Technique :**
  * *Droite :* Une liste de points qui s'affichent un par un.
  * *Gauche :* Une superposition d'images (générées par IA en 8k, abstraites et cinématiques). On utilise la chorégraphie des classes Reveal.js (`fragment fade-out`, `current-visible`, `fade-in`) pour **changer l'image exactement au moment où le texte correspondant apparaît**.

### D. Le Cyber-Flux de Données
* **Concept :** Remplacer les flèches statiques par des lignes de vie de données.
* **Technique :** Des lignes horizontales semi-transparentes dans lesquelles voyage une "particule" lumineuse CSS (keyframe `left: 0` à `100%`).
  * *Chatbot Passif :* Le flux fait un aller-retour continu (`bidir`) pour montrer l'interaction humaine.
  * *Agent Autonome :* Le flux va dans un seul sens. Les boîtes des applications cibles (Notion, Emails) utilisent un `animation-delay` pour pulser *séquentiellement*, simulant un Agent qui exécute ses tâches l'une après l'autre.
