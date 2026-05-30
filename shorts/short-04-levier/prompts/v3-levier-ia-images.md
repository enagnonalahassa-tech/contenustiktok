# Prompts V3 — Short 04 : Le levier > le hustle
# Images IA (Midjourney v6 / Leonardo / Flux Pro) · dark-feminine · finance africaine

---

## BLOC CONFIGURATION

```yaml
SHORT_INFO:
  titre:        "Le levier bat le hustle"
  niche:        "finance / systèmes / business africain"
  public_cible: "entrepreneurs africains ambitieux, femmes business, dirigeantes 28-45 ans"
  ton:          "provocateur, direct, inspirant"
  langue:       "fr-FR"

SCRIPT:
  sc1_hook:        "En Afrique, on ne scale pas avec plus d'effort. On scale avec plus de levier."
  sc2_probleme:    "Tu travailles 14h par jour. Mais ton temps est plafonné — et ton argent aussi."
  sc3_solution:    "L'IA et les systèmes travaillent quand tu dors. C'est ça, le levier."
  sc4_application: "3 leviers concrets : prospection auto, follow-up auto, déléguer à l'IA."
  sc5_cta:         "Commente LEVIER. Je t'explique comment construire ton premier système."

  mot_cle_1:      "PLUS D'EFFORT"
  mot_cle_2:      "PLUS DE LEVIER"
  stat_chiffre:   "14H"
  element_cle_sc4:"3 leviers"
  cta_texte:      "Commente LEVIER 👇"

PERSONNAGE:
  description: "femme 30 ans, teint doré chaud lumineux, cheveux longs ondulés noirs ou
                chignon structuré, tailleur blazer noir architectural ou robe de soirée
                noire avec détails or, bijoux discrets en or, style editorial luxe
                africain contemporain, posture de dirigeante"
  genre:       "femme"

STYLE_PHOTO:
  preset:       "dark-feminine"
  notes_style:  "Ambiance bureau de direction panoramique africain la nuit, rooftop urbain
                 Abidjan / Lagos / Dakar avec vue sur la ville illuminée.
                 Inspiré Vogue Africa, éditoriaux Harper's Bazaar Afrique, W Magazine."
  sc1_couleurs: "violet-noir profond, halos or #FBBF24 + lavande #C084FC + rose #F43F5E"
  sc2_couleurs: "bordeaux-noir #150210, halos rouge-rose, tension épuisement"
  sc3_couleurs: "bleu nuit #060E1A, halos teal + or, connexions numériques"
  sc4_couleurs: "navy-violet #060818, halos or + lavande, action et momentum"
  sc5_couleurs: "mauve-noir #080212, explosion or champagne + rose gold, victoire"

VOIX:
  service:  "elevenlabs"
  voix_id:  "XB0fDUnXU5powFXDhCwa"   # Charlotte — élégante, posée
  langue:   "fr-FR"
  sc1: "En Afrique, on ne scale pas avec plus d'effort. On scale avec plus de levier."
  sc2: "Tu travailles 14 heures par jour. Tu t'épuises. Mais ton temps est plafonné — et ton argent aussi. Le hustle ne scale pas."
  sc3: "La différence ? L'IA et les systèmes travaillent quand tu dors. Un système tourne sans toi 24 heures sur 24. C'est ça, le levier."
  sc4: "Tes 3 leviers concrets : automatiser ta prospection, automatiser ton follow-up, et déléguer à l'IA tout ce qui ne crée pas de valeur. Mesure ce qui rapporte. Coupe le reste."
  sc5: "Dis-moi en commentaire quel système tu veux construire pour scaler cette semaine. Commente LEVIER. Je t'explique comment le construire."

PALETTE_UI:
  acc1: "#FBBF24"   # or champagne — finance
  acc2: "#C084FC"   # lavande
  acc3: "#F43F5E"   # rose électrique
  fond: "#0D0514"
```

---

## PROMPTS MIDJOURNEY — 5 IMAGES

Sauvegarder dans : `assets/images/sc1-hook.jpg` … `sc5-cta.jpg`
**Même seed** sur tous les prompts pour la cohérence : `--seed 8842`

---

### IMAGE SC1 — HOOK
```
Elegant Black African woman, 30 years old, warm golden luminous skin, long wavy black hair,
wearing a black structured blazer with gold details, standing at a floor-to-ceiling window
overlooking a glowing African city skyline at night — Lagos or Abidjan —
contemplative yet powerful pose, hand lightly resting on the glass, looking at the city.

Lighting: deep violet-black #0B0818 background —
strong gold #FBBF24 rim light from the right reflecting off the glass and her silhouette,
soft lavender #C084FC backlight creating a luminous halo around her,
warm rose-gold #F43F5E fill light from below, uplifting and aspirational.
The city lights below her glow in warm gold and white.

Background: deep violet-to-black gradient — skyscrapers and city lights visible through
the panoramic window, creating a sense of height and ambition.
Tiny gold and lavender particles float like sparks in the air.
Upper 40% of frame is atmospheric — deep violet sky.

Style: editorial fashion photography, luxury cinematic, Vogue Africa editorial,
high-end African creative direction, business empowerment aesthetic.
Photorealistic, 4K, sharp focus on subject, cinematic color grading.

Negative: green tones, white backgrounds, overexposed, cartoon, text in image, men, poverty aesthetic.

--ar 9:16 --v 6 --style raw --q 2 --s 750 --seed 8842
```

---

### IMAGE SC2 — PROBLÈME
```
Elegant Black African woman, 30 years old, warm golden skin, long wavy black hair,
wearing a black structured blazer — seated at a minimalist luxury desk covered in
documents and laptop screens showing data, late at night, head slightly bowed,
one hand at her temple, posture of quiet exhaustion but remaining dignified and composed.
Expression: exhausted but elegant — not defeated, introspective struggle.

Lighting: bordeaux-noir #150210 moody atmosphere —
dominant deep crimson-rose from above, cold blue-gray ambient fill,
almost no highlights. A feeling of quiet, sophisticated fatigue.
Small rose-red particles fall slowly downward like falling embers.

Background: deep bordeaux-noir gradient with:
- Atmospheric crimson-rose fog, very soft, blurred
- Abstract sinusoidal wave curves barely visible in deep rose (like a stuck graph)
- The text "14H" as a massive ghost typography in the lower background
  (opacity 4%, deep rose colored, filling lower third — not legible as text, just atmospheric)

Style: same editorial series, darker and moodier, Vogue Italia influence.
Bordeaux-dominant color grading. Photorealistic, 4K.

Negative: happy expression, bright colors, green tones, men, text readable in image.

--ar 9:16 --v 6 --style raw --q 2 --s 750 --seed 8842
```

---

### IMAGE SC3 — SOLUTION
```
Elegant Black African woman, 30 years old, warm golden skin, long wavy black hair pulled
into a structured chignon, wearing a sleek black blazer — standing tall in a dark tech
environment surrounded by holographic data screens and glowing digital interfaces,
holding a sleek tablet, calm authoritative gaze directly into camera.
Expression: calm mastery, quiet power, in full control of her systems.

Lighting: deep blue-night #060E1A —
teal key light from above-left creating sharp professional shadows,
gold #FBBF24 rim light from the right creating a warm halo on her profile,
lavender #C084FC cool fill from below-right, suggesting digital precision.
Controlled gold particles float upward slowly.

Background: deep navy-teal gradient with:
- Very subtle geometric circuit board pattern in gold tones (opacity 5-7%)
  suggesting AI infrastructure, systems, automation
- Glowing holographic cards floating in bokeh: one labeled "IA", one "Système", one "Scale"
  (blurred, elegant, not readable as sharp text — just as visual metaphors)
- Interconnected network of light nodes in teal and gold, faint in the background

Style: same editorial series, structured and premium. Teal-gold dominant grading.
Photorealistic, 4K, cinematic.

Negative: chaotic elements, red dominant tones, messy styling, green natural tones, men.

--ar 9:16 --v 6 --style raw --q 2 --s 750 --seed 8842
```

---

### IMAGE SC4 — APPLICATION
```
Elegant Black African woman, 30 years old, warm golden skin, long wavy black hair,
wearing a sharp black blazer — walking purposefully through a luxury open-plan office
at night, phone in one hand, tablet in the other, earbuds in,
multiple screens visible in the background showing dashboards and graphs.
Expression: laser-focused, determined, in the zone — powerful stride.

Lighting: navy-violet #060818 —
strong lavender #C084FC backlight creating a momentum halo and rim light around her entire silhouette,
gold #FBBF24 fill light from front creating a warm aspirational glow,
subtle motion blur on her hair and clothing suggesting forward movement and speed.
Horizontal gold light streaks trail behind her like speed lines.

Background: deep navy gradient with:
- Speed line light trails in gold and lavender — horizontal, blurred
- Upward-trending glowing graph in gold tones visible on screens in background
- Faint calendar grid and KPI dashboard UI elements glowing in background

Style: dynamic editorial, forward momentum photography.
Navy-lavande-gold dominant grading. Photorealistic, 4K.

Negative: static poses, passive expression, green tones, white studio background, men.

--ar 9:16 --v 6 --style raw --q 2 --s 750 --seed 8842
```

---

### IMAGE SC5 — CTA
```
Elegant Black African woman, 30 years old, warm golden skin, long wavy black hair loose
and flowing, wearing a stunning structured evening gown with gold accents —
both arms raised high above her head in pure triumph,
head slightly tilted back, face expressing authentic euphoric joy and freedom.
Wide radiant smile, glowing eyes, absolutely victorious.

Lighting: deep mauve-noir #080212 —
explosive gold #FBBF24 backlight creating a full luminous halo around her entire silhouette,
warm rose-gold #F43F5E upward fill light (celebratory, triumphant),
lavender #C084FC rim light on both sides.
This is the most luminous, most radiant image of the series — a climax moment.

Background: deep mauve gradient with:
- Explosive burst of gold and lavender light radiating outward from behind her
- Multiple concentric glowing rings in #FBBF24 → #C084FC → #F43F5E expanding outward
- Gold coins 💰, stars ✦ and hearts ♥ floating upward in celebration
  (as subtle blurred bokeh elements, not cartoonish)
- The frame feels like a luxury music video finale, a rooftop celebration

Style: climax luxury editorial photography, maximum authentic joy and freedom.
Gold-dominant luminous color grading — the brightest image of the series.
Photorealistic, 4K.

Negative: sad or neutral expression, muted colors, green tones, corporate cold aesthetics, men, poverty aesthetic.

--ar 9:16 --v 6 --style raw --q 2 --s 750 --seed 8842
```

---

## NOMMAGE DES FICHIERS

```
assets/images/sc1-hook.jpg
assets/images/sc2-probleme.jpg
assets/images/sc3-solution.jpg
assets/images/sc4-application.jpg
assets/images/sc5-cta.jpg
```
