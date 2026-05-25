# Guide d'utilisation — Templates Short TikTok

Ce dossier contient 3 templates système génériques pour créer n'importe quel short TikTok
de type éducatif/coaching. Chaque template est un system prompt à donner à une IA.

---

## Comment utiliser un template

1. **Ouvre** le template de ton choix (V1, V2 ou V3)
2. **Remplis** le bloc `CONFIGURATION` en haut du fichier
3. **Copie-colle** le fichier entier dans l'IA cible
4. **L'IA produit** le livrable (HTML, SVGs, ou prompts images)

---

## Les 3 versions

| Template | Rendu visuel | IA cible | Effort |
|----------|-------------|----------|--------|
| **V1** — CSS Animations | Fond animé CSS/JS pur, zéro image | IA Coding | ⭐ Simple |
| **V2** — SVG Illustrations | 5 illustrations SVG customisées | IA Coding | ⭐⭐ Moyen |
| **V3** — Images IA | 5 vraies photos/illustrations IA | IA Images + IA Coding | ⭐⭐⭐ Complet |

---

## Structure d'un Short TikTok — Le Framework 5 Scènes

Tout short éducatif/coaching efficace suit cette structure :

```
SCÈNE 1 — HOOK       (2-4s) : Affirmation choc ou question dérangeante
SCÈNE 2 — PROBLÈME   (3-5s) : Le problème auquel ton audience s'identifie
SCÈNE 3 — SOLUTION   (3-5s) : La révélation / le pivot
SCÈNE 4 — APPLICATION(3-5s) : Comment appliquer concrètement
SCÈNE 5 — CTA        (2-3s) : Appel à l'action (commenter, s'abonner)
```

**Variantes acceptées :**
- 3 scènes : Hook → Solution → CTA
- 4 scènes : Hook → Problème → Solution → CTA
- 6 scènes : ajouter une scène "Preuve / Stat" entre Solution et Application

---

## Palettes disponibles (à choisir dans la configuration)

### `dark-feminine` *(défaut)*
Violet-noir · Rose électrique · Lavande · Or champagne
> Audience : femmes, coaching, lifestyle, bien-être, empowerment

### `dark-masculine`
Navy-noir · Bleu électrique · Orange · Blanc cassé
> Audience : hommes, business, fitness, performance, finance

### `minimal-premium`
Noir profond · Blanc · Or unique
> Audience : entrepreneur, luxe, personal branding, B2B

### `vibrant-genz`
Fond très sombre · Néon vert/rose/violet · Gradient explosif
> Audience : Gen Z, gaming, tech, créateurs de contenu

### `nature-organic`
Vert forêt profond · Crème · Terre · Or doux
> Audience : bien-être, yoga, alimentation, écologie

### `custom`
Tu définis toi-même les 3 couleurs accent + le fond

---

## Exemple de configuration remplie (pour un short finance)

```yaml
SHORT_INFO:
  titre: "Tu n'as pas un problème d'argent"
  niche: finance personnelle
  public: femmes 25-40 ans, salariées
  ton: direct et bienveillant

SCRIPT:
  hook: "Tu ne manques pas d'argent. Tu manques de STRUCTURE."
  probleme: "85% des gens dépensent avant d'épargner. Et ils s'étonnent de finir à zéro chaque mois."
  solution: "Les femmes riches font l'inverse. Elles SE paient en premier. Dès le virement de salaire."
  application: "Le jour du salaire → virement automatique vers épargne → ENSUITE tu dépenses ce qui reste."
  cta: "Commente STRUCTURE et je t'envoie le tableau de bord gratuit."

AESTHETIQUE:
  style: dark-feminine
  couleur_accent_1: "#F43F5E"
  couleur_accent_2: "#C084FC"
  couleur_accent_3: "#FBBF24"

VOIX:
  service: elevenlabs
  voix_id: "EXAVITQu4vr4xnSDxMaL"
  langue: fr-FR
```

---

## Niches testées et validées avec ce framework

✅ Coaching personnel / productivité
✅ Finance personnelle / épargne
✅ Fitness / sport / nutrition
✅ Entrepreneuriat / business
✅ Relations / développement personnel
✅ Parentalité
✅ Marketing digital / création de contenu
✅ Cuisine / lifestyle

---

## Organisation recommandée des fichiers

```
contenustiktok/
├── templates/                    ← Templates génériques (ce dossier)
│   ├── README-GUIDE.md
│   ├── TEMPLATE-v1-css.md
│   ├── TEMPLATE-v2-svg.md
│   └── TEMPLATE-v3-ia-images.md
│
└── shorts/
    ├── short-01-motivation-systeme/
    ├── short-02-[ton-sujet]/
    │   ├── PLAN.md
    │   ├── script.txt
    │   ├── short-02-v1.html       ← Produit par V1 template
    │   ├── short-02-v2.html       ← Produit par V2 template
    │   ├── short-02-v3.html       ← Produit par V3 template
    │   └── assets/
    │       ├── images/
    │       ├── audio/
    │       └── videos/
    └── ...
```
