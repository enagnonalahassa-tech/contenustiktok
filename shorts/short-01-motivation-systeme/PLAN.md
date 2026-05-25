# PLAN — Short 01 : "Motivation ≠ Système"

## Objectif
Créer un short TikTok vertical (9:16) de ~45s, faceless, sans voix-off codée.  
Le fichier HTML est le **storyboard interactif** : le contenu final avant enregistrement écran.

---

## Structure du projet

```
short-01-motivation-systeme/
  assets/
    images/    ← images IA à coller ici (prompts ci-dessous)
    audio/     ← voix-off MP3 / musique
    videos/    ← vidéos générées par IA (background loops)
  output/      ← export final (MP4, WebM)
  PLAN.md      ← ce fichier
  script.txt   ← script source
  short-01.html ← rendu HTML interactif (navigable à la flèche)
```

---

## Concept visuel

### Style global
- Format 9:16, fond très sombre `#0F172A`
- **Texte style Alex Hormozi** : grand, gras, centré, blanc pur avec mots-clés en vert `#22C55E`
- **Navigation manuelle uniquement** : flèche droite → / flèche gauche ← / clic
- Pas d'autoplay, pas de timer — l'utilisateur contrôle le rythme

### 5 scènes

| # | Nom | Texte principal | Background |
|---|-----|----------------|------------|
| 1 | HOOK | "Tu n'as pas un problème de MOTIVATION" + "Tu as un problème de SYSTÈME" | Particules électriques vertes, live-typing |
| 2 | LE PROBLÈME | "90% abandonnent" — montagne russe animée SVG | Vague oscillante rouge |
| 3 | LA SOLUTION | "SYSTÈME = Préparer / Réduire la friction / Automatiser" | Grille géométrique verte |
| 4 | APPLICATION | "30 min / Même template / Même heure" → TikTok / Sport / Apprentissage | Particules bleues |
| 5 | CTA | "Sur quoi tu veux construire un système ?" | Badge vert — Commente SYSTÈME |

---

## Effets techniques

### Live Typing (scène 1)
- Le mot "MOTIVATION" s'écrit lettre par lettre (60ms/char)
- Puis "SYSTÈME" après 400ms de pause
- Curseur clignotant vert qui disparaît après la fin

### Items séquentiels (scènes 3 & 4)
- Chaque item de liste apparaît avec un décalage de 350ms
- Animation: fade-in + slide-up

### Particules flottantes (toutes scènes)
- Petits points colorés qui montent lentement
- Donnent vie au fond sans distraire du texte

---

## Prompts pour génération d'images (à coller dans Midjourney / Leonardo AI)

> **Tous les prompts sont en format vertical 9:16 (aspect ratio 2:3)**

### Image 1 — HOOK (fond scène 1)
```
dark blue background, electric sparks and lightning bolts, neon green accents, 
cinematic, high contrast, minimal, no text, vertical format 9:16, 
ultra high quality, dramatic lighting, abstract energy
```

### Image 2 — PROBLÈME (fond scène 2)
```
roller coaster at night, dramatic red and orange lighting, motion blur, 
vertical format 9:16, cinematic, abstract, no text, dark background, 
emotional tension, high contrast photography style
```

### Image 3 — SOLUTION (fond scène 3)
```
geometric grid structure, green neon lines, dark background, futuristic, 
clean and structured, vertical format 9:16, minimal, no text, 
tech aesthetic, blueprint style
```

### Image 4 — APPLICATION (fond scène 4)
```
person taking action, running or working, blue hour lighting, 
cinematic vertical format 9:16, dark background, motion and energy, 
no face visible, silhouette style, motivational
```

### Image 5 — CTA (fond scène 5)
```
open arms invitation, warm green glow, dark background, 
welcoming energy, abstract human silhouette, vertical 9:16, 
cinematic, no text, community feeling
```

---

## Paramètres de mise en production

- **Résolution** : 1080 × 1920px (9:16)
- **FPS** : 25 ou 30
- **Enregistrement** : Kap → WebM (Chrome) ou MP4 H264 (universal)
- **Voix-off** : ElevenLabs (voix masculine calme) ou TikTok "Adam FR" — vitesse 1.1
- **Musique** : "Minimal Corporate" 15% volume (bibliothèque TikTok)

---

## Workflow de production

1. ✅ Créer structure dossier
2. ✅ Écrire PLAN.md
3. ✅ Coder `short-01.html`
4. ⬜ Valider visuellement dans le navigateur
5. ⬜ Générer les images IA avec les prompts → coller dans `assets/images/`
6. ⬜ Enregistrer la voix-off → coller dans `assets/audio/`
7. ⬜ Enregistrer l'écran avec Kap → sauvegarder dans `output/`
8. ⬜ Poster sur TikTok
