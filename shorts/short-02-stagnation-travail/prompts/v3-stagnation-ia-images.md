# Prompts V3 — Short 02 : Stagnation au Travail
# Images IA pour backgrounds (Midjourney v6 / Leonardo / Flux Pro)

---

## BLOC CONFIGURATION

```yaml
SHORT_INFO:
  titre:        "La vraie raison pour laquelle tu stagnes au travail"
  niche:        "coaching / leadership / carrière"
  public_cible: "femmes ambitieuses, managers, cadres, dirigeantes 28-45 ans"
  ton:          "inspirant, direct, élégant"
  langue:       "fr-FR"

SCRIPT:
  sc1_hook:        "Tu stagnes au travail. Pas parce que tu manques de talent."
  sc2_probleme:    "80% des cadres sont prisonniers de l'exécution."
  sc3_solution:    "Piloter, c'est prendre du recul pour décider où aller."
  sc4_application: "1h par semaine suffit : revue, priorités, leviers."
  sc5_cta:         "Commente PILOTE. Je te donne la 1ère étape."

  mot_cle_1:      "TALENT"
  mot_cle_2:      "PILOTER"
  stat_chiffre:   "80%"
  element_cle_sc4:"1h / semaine"
  cta_texte:      "Commente PILOTE 👇"

PERSONNAGE:
  description: "femme 32 ans, teint doré chaud, cheveux longs ondulés noirs,
                tailleur élégant sombre ou robe de soirée structurée,
                style editorial luxe africain, posture assurée et élégante"
  genre:       "femme"

STYLE_PHOTO:
  preset:       "dark-feminine"
  notes_style:  "Ambiance bureau de direction luxe ou rooftop urbain nocturne.
                 Inspiré des éditoriaux Vogue Afrique, Allure, W Magazine."
  sc1_couleurs: "violet profond #0B0818, halos rose #F43F5E + lavande #C084FC + or #FBBF24"
  sc2_couleurs: "bordeaux-noir #150210, halos rouge-rose, tension émotionnelle"
  sc3_couleurs: "bleu nuit #060E1A, halos teal + lavande, clarté et structure"
  sc4_couleurs: "navy-violet #060818, halos lavande + or, énergie en action"
  sc5_couleurs: "mauve-noir #080212, halos rose gold + explosion lumineuse, victoire"

VOIX:
  service:  "elevenlabs"
  voix_id:  "XB0fDUnXU5powFXDhCwa"
  langue:   "fr-FR"
  sc1: "Tu stagnes au travail. Pas parce que tu manques de talent. Mais parce que tu n'as jamais appris à piloter."
  sc2: "80% des cadres sont coincés dans l'exécution. Tu t'agites. Tu t'épuises. Mais tu ne prends jamais le recul pour décider où tu vas vraiment."
  sc3: "Piloter, c'est apprendre à regarder ton travail d'en haut. Identifier tes vrais leviers. Déléguer ce qui t'épuise sans t'apporter de valeur. Et poser 3 priorités non-négociables chaque semaine."
  sc4: "Tu n'as pas besoin de plus de temps. 1 heure par semaine : tu reviews ta semaine, tu poses tes 3 priorités, tu identifies une chose à arrêter, et tu actives un levier d'impact. C'est ça, piloter."
  sc5: "Dis-moi en commentaire sur quoi tu veux gagner en clarté cette semaine. Commente PILOTE. Je te réponds avec la première étape."

PALETTE_UI:
  acc1: "#F43F5E"
  acc2: "#C084FC"
  acc3: "#FBBF24"
  fond: "#0D0514"
```

---

## PROMPTS MIDJOURNEY — 5 IMAGES À GÉNÉRER

### IMAGE SC1 — HOOK
```
Elegant Black African woman, 32 years old, warm golden skin, long wavy black hair,
wearing a sleek dark blazer, standing in a luxury penthouse office at night —
contemplative pose, hand lightly touching chin, looking slightly off-camera.

Lighting: violet #0B0818 deep background — strong rose #F43F5E rim light from the left,
soft lavender #C084FC backlight creating a halo behind the head,
warm gold #FBBF24 fill light from below — uplifting and regal.

Background: deep violet-black gradient — left side has abstract electric rose sparks
and sinusoidal energy waves in #F43F5E (suggesting untapped potential),
right side has a soft structured gold geometric glow in #FBBF24.
Tiny luminous particles (rose and lavender) floating in the air.
Upper 40% of frame is clear atmospheric space with no heavy elements.

Style: editorial fashion photography, luxury cinematic, Vogue Africa editorial,
high-end African creative direction, Eugenio Recuero influence.
Photorealistic, 4K, sharp focus on subject, cinematic color grading.

Negative: green tones, white backgrounds, overexposed, cartoon, text in image, men.

--ar 9:16 --v 6 --style raw --q 2 --s 750
```

---

### IMAGE SC2 — PROBLÈME
```
Elegant Black African woman, 32 years old, warm golden skin, long wavy black hair,
wearing a sleek dark blazer — seated at a desk buried in files and screens,
head slightly bowed, posture showing exhaustion but still dignified.
Expression: exhausted but elegant, introspective struggle.

Lighting: bordeaux-noir #150210 moody atmosphere — dominant deep red from above,
cold blue-gray ambient fill, almost no highlights.
A feeling of quiet, sophisticated struggle. Small #F43F5E particles fall downward.

Background: deep bordeaux-noir gradient with:
- Atmospheric crimson-rose fog, very soft and blurred
- Abstract sinusoidal wave curves in deep rose tones (like a stuck rollercoaster)
- The number "80%" as a massive ghost typography in the lower background
  (opacity 4%, rose-red colored, filling the lower third of the frame)

Style: same editorial series, darker and moodier. Bordeaux-dominant color grading.
Vogue Italia dark editorial influence. Photorealistic, 4K.

Negative: happy expression, bright colors, green tones, men, text legible in image.

--ar 9:16 --v 6 --style raw --q 2 --s 750
```

---

### IMAGE SC3 — SOLUTION
```
Elegant Black African woman, 32 years old, warm golden skin, long wavy black hair,
wearing a sharp dark blazer — standing tall, holding a sleek clipboard or tablet,
calm direct gaze into camera. Expression: quiet authority, in control.

Lighting: deep blue-night #060E1A — clean teal key light from above,
lavender #C084FC cool rim light from one side,
warm fill from below. Light feels organized and precise.
Controlled particles of lavender float slowly upward.

Background: deep navy-teal gradient with:
- Very subtle geometric light grid in lavender tones (opacity 6-8%)
  suggesting blueprint, strategy, executive structure
- Three faint holographic card elements floating in bokeh (lavender / teal / gold)
- Atmosphere of calm, elegant strategic thinking

Style: same editorial series, structured and premium. Teal-lavande dominant grading.
Photorealistic, 4K, cinematic.

Negative: chaotic elements, strong red tones, messy styling, green tones, men.

--ar 9:16 --v 6 --style raw --q 2 --s 750
```

---

### IMAGE SC4 — APPLICATION
```
Elegant Black African woman, 32 years old, warm golden skin, long wavy black hair,
walking purposefully through a luxury office corridor at night, phone and notebook in hand,
earbuds in. Expression: determined, focused, in the zone.

Lighting: navy-violet #060818 — strong lavender #C084FC backlight creating momentum halo
behind the subject, gold #FBBF24 fill light from front-side,
subtle motion blur on hair suggesting forward movement.
Horizontal lavender light streaks trailing behind subject.

Background: deep navy-violet gradient with:
- Speed line light trails in lavender — horizontal, blurred, trailing from subject
- Faint glowing calendar and priority list UI in background (barely visible)
- Upward-trending abstract graph glow in gold tones, subtle

Style: dynamic editorial, forward momentum feel. Navy-lavande dominant grading.
Photorealistic, 4K.

Negative: static passive poses, green tones, white studio background, men.

--ar 9:16 --v 6 --style raw --q 2 --s 750
```

---

### IMAGE SC5 — CTA
```
Elegant Black African woman, 32 years old, warm golden skin, long wavy black hair,
wearing an elegant structured evening dress or tailored gown — both arms raised high
above head, head slightly tilted back, expression of pure authentic joy and triumph.
Wide glowing smile, eyes bright.

Lighting: mauve-noir #080212 — explosive rose gold #F43F5E backlight creating full
luminous halo around entire silhouette, warm gold #FBBF24 upward fill light (triumphant),
lavender #C084FC rim light on both sides.
The lighting feels like a climax — most luminous image of the series.

Background: deep mauve-noir gradient with:
- Explosive burst of rose and lavender light radiating from behind subject
- Multiple concentric glowing rings in #F43F5E → #C084FC → #FBBF24 expanding outward
- Hearts ♥ and stars ✦ floating upward (rose, gold, lavande)
- The frame feels like a music video finale moment, luxury celebration

Style: climax editorial, luxury celebration photography, maximum authentic joy.
Rose gold dominant but luminous. Photorealistic, 4K.

Negative: sad or neutral expression, muted colors, green tones, corporate cold aesthetics, men.

--ar 9:16 --v 6 --style raw --q 2 --s 750
```

---

## NOMMAGE DES FICHIERS

Sauvegarder les 5 images générées dans :
```
assets/images/sc1-hook.jpg
assets/images/sc2-probleme.jpg
assets/images/sc3-solution.jpg
assets/images/sc4-application.jpg
assets/images/sc5-cta.jpg
```
