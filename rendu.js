// Rendu JS - 3 Variantes Élégance Féminine
// Contenu entièrement réécrit pour une cible féminine qui veut s'affiner & s'affirmer
// Message central conservé : Motivation ≠ Système

// ─── CONTENU DES 3 VARIANTES ──────────────────────────────────────────────────

const VARIANTS = {

  // VARIANTE 1 : DOUCE ÉLÉGANCE (Soft Power - Rose & Champagne)
  // Tonalité : bienveillante, intime, en douceur, comme une confidente
  "soft-power": [
    {
      name: "ACCROCHE",
      time: "0-3s",
      screen: `Tu n'as pas\nun problème\nde <span class="highlight">motivation.</span>`,
    },
    {
      name: "PIVOT",
      time: "3-6s",
      screen: `Tu as un problème\nde <span class="highlight">système.</span>`,
    },
    {
      name: "LA VÉRITÉ",
      time: "6-15s",
      screen: `La motivation ?\nElle monte.\nElle descend.\nElle t'abandonne\nle matin où tu\nen as le plus besoin.`,
    },
    {
      name: "LA CLÉ",
      time: "15-30s",
      screen: `Un système, c'est différent.\nC'est construire un espace\noù <span class="highlight">l'action</span> devient\nnaturelle.\nMême les jours sans élan.`,
    },
    {
      name: "L'EXEMPLE",
      time: "30-40s",
      screen: `Tu veux bouger\nchaque matin ?\nLa motivation dit :\n"Lève-toi à 6h."\nLe système dit :\n"Prépare ta tenue <span class="highlight">la veille.</span>"`,
    },
    {
      name: "L'AFFIRMATION",
      time: "40-45s",
      screen: `<span class="highlight">S'affiner,</span>\nc'est bâtir\nune routine\nqui te ressemble.\nPas une discipline\nqui t'écrase.`,
    },
    {
      name: "CTA",
      time: "45-50s",
      screen: `Dis-moi :\nquel est <span class="highlight">ton premier pas</span>\ncette semaine ?\n💌 Je te réponds.`,
    },
  ],

  // VARIANTE 2 : FORCE ÉMERAUDE (Emerald Luxury - Vert Impérial & Or Rose)
  // Tonalité : puissante, affirmée, leadership féminin, coaching haut-de-gamme
  "emerald-luxury": [
    {
      name: "ACCROCHE",
      time: "0-3s",
      screen: `CE N'EST PAS\nTA <span class="highlight">MOTIVATION</span>\nLE PROBLÈME.`,
    },
    {
      name: "PIVOT",
      time: "3-6s",
      screen: `C'EST TON\n<span class="highlight">SYSTÈME.</span>`,
    },
    {
      name: "LA VÉRITÉ",
      time: "6-15s",
      screen: `LA MOTIVATION\nFLUCTUE.\n1 JOUR ON.\n3 JOURS OFF.\nC'EST POUR ÇA\nQUE 90% <span class="highlight">ABANDONNENT.</span>`,
    },
    {
      name: "LA CLÉ",
      time: "15-30s",
      screen: `UN SYSTÈME\nNE DÉPEND PAS\nDE TON HUMEUR.\nIL <span class="highlight">FONCTIONNE</span>\nMÊME QUAND TU\nN'EN AS PAS ENVIE.`,
    },
    {
      name: "L'EXEMPLE",
      time: "30-40s",
      screen: `SPORT QUOTIDIEN ?\nOUBLIE LA\n"VOLONTÉ".\n→ PRÉPARE TA TENUE\n→ BLOQUE LE CRÉNEAU\n→ <span class="highlight">ENGAGE-TOI</span>\nAUPRÈS D'UNE PAIRE.`,
    },
    {
      name: "L'AFFIRMATION",
      time: "40-45s",
      screen: `<span class="highlight">S'AFFIRMER,</span>\nC'EST CONSTRUIRE\nDES SYSTÈMES\nQUI TE PORTENT.\nJOUR APRÈS JOUR.`,
    },
    {
      name: "CTA",
      time: "45-50s",
      screen: `COMMENTE\n<span class="highlight">SYSTÈME</span>\nJE T'ENVOIE\nTA PREMIÈRE ÉTAPE. 👇`,
    },
  ],

  // VARIANTE 3 : NUIT SATINÉE (Satin Night - Violet Prune & Orchidée)
  // Tonalité : poétique, profonde, transformation intérieure, introspection
  "satin-night": [
    {
      name: "ACCROCHE",
      time: "0-3s",
      screen: `Et si ce n'était pas\nta <span class="highlight">motivation</span>\nqui te manquait ?`,
    },
    {
      name: "PIVOT",
      time: "3-6s",
      screen: `Mais un <span class="highlight">système</span>\nqui te soutient\nquand tu fléchis.`,
    },
    {
      name: "LA VÉRITÉ",
      time: "6-15s",
      screen: `La motivation est\nune flamme.\nElle brille.\nElle vacille.\nElle s'éteint parfois\nau mauvais moment.`,
    },
    {
      name: "LA CLÉ",
      time: "15-30s",
      screen: `Un système\nest une <span class="highlight">fondation.</span>\nIl ne te demande pas\nde te sentir inspirée.\nJuste de <span class="highlight">te présenter.</span>`,
    },
    {
      name: "L'EXEMPLE",
      time: "30-40s",
      screen: `Vouloir prendre\nsoin de toi chaque matin ?\nLa motivation dit :\n"Trouve la force."\nLe système dit :\n"<span class="highlight">Prépare l'espace</span>\nla veille."`,
    },
    {
      name: "L'AFFIRMATION",
      time: "40-45s",
      screen: `<span class="highlight">S'affiner,\ns'affirmer,</span>\nc'est créer\ndes rituels\nqui te rappellent\nqui tu deviens.`,
    },
    {
      name: "CTA",
      time: "45-50s",
      screen: `Quel rituel veux-tu\nconstruire cette semaine ?\n✨ Dis-le ici.\nJe <span class="highlight">t'accompagne.</span>`,
    },
  ],
};

// ─── ÉTAT GLOBAL ──────────────────────────────────────────────────────────────
let currentVariant = "soft-power";
let currentSlideIndex = 0;

// ─── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  setupVariantSelector();
  setupNavigation();
  setupHintTimer();
  loadVariant("soft-power");
});

// ─── 1. CHARGEMENT D'UNE VARIANTE ─────────────────────────────────────────────
function loadVariant(variantKey) {
  currentVariant = variantKey;
  currentSlideIndex = 0;

  const slides = VARIANTS[variantKey];
  const container = document.getElementById('presentation-container');
  container.innerHTML = "";

  slides.forEach((slide, idx) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = `slide ${idx === 0 ? 'active' : ''}`;
    slideDiv.id = `slide-${idx}`;

    slideDiv.innerHTML = `
      <div class="slide-content">
        <h1 class="main-text">${slide.screen}</h1>
      </div>
    `;
    container.appendChild(slideDiv);
  });

  // Mise à jour footer
  updateFooter(0);
}

// ─── 2. NAVIGATION ────────────────────────────────────────────────────────────
function goToSlide(index, direction = 'next') {
  const slides = VARIANTS[currentVariant];
  if (index < 0 || index >= slides.length) return;

  const oldSlide = document.getElementById(`slide-${currentSlideIndex}`);
  const newSlide = document.getElementById(`slide-${index}`);

  if (oldSlide && newSlide && oldSlide !== newSlide) {
    oldSlide.className = 'slide ' + (direction === 'next' ? 'exit' : 'back-exit');
    newSlide.className = 'slide back-enter';
    newSlide.offsetHeight; // Force reflow
    newSlide.classList.remove('back-enter');
    newSlide.classList.add('active');
  } else if (newSlide) {
    newSlide.className = 'slide active';
  }

  currentSlideIndex = index;
  updateFooter(index);
}

function navigate(dir) {
  const slides = VARIANTS[currentVariant];
  if (dir === 'next') {
    if (currentSlideIndex < slides.length - 1) {
      goToSlide(currentSlideIndex + 1, 'next');
    } else {
      showToast("Fin de la présentation.");
    }
  } else {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1, 'prev');
    } else {
      showToast("Début de la présentation.");
    }
  }
}

function updateFooter(index) {
  const slides = VARIANTS[currentVariant];
  const slide = slides[index];
  document.getElementById('scene-badge').innerText = `${index + 1} / ${slides.length}`;
  if (slide) {
    document.getElementById('scene-duration').innerText = `${slide.time} • ${slide.name}`;
  }
}

// ─── 3. SÉLECTEUR DE VARIANTES ────────────────────────────────────────────────
function setupVariantSelector() {
  const pills = document.querySelectorAll('.variant-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const variant = pill.dataset.variant;
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      document.body.className = `theme-${variant}`;
      loadVariant(variant);

      const labels = {
        "soft-power":     "🌸 Douce Élégance — pour la force tranquille",
        "emerald-luxury": "✨ Force Émeraude — pour l'affirmation audacieuse",
        "satin-night":    "🔮 Nuit Satinée — pour la transformation intérieure",
      };
      showToast(labels[variant]);
    });
  });
}

// ─── 4. LISTENERS NAVIGATION ──────────────────────────────────────────────────
function setupNavigation() {
  document.getElementById('btn-prev').addEventListener('click', e => { e.stopPropagation(); navigate('prev'); });
  document.getElementById('btn-next').addEventListener('click', e => { e.stopPropagation(); navigate('next'); });

  document.body.addEventListener('click', e => {
    if (e.target.closest('.variant-selector-bar') || e.target.closest('.presentation-footer') || e.target.closest('.toast')) return;
    navigate(e.clientX < window.innerWidth * 0.35 ? 'prev' : 'next');
  });

  document.addEventListener('keydown', e => {
    if (['ArrowRight', ' ', 'Enter'].includes(e.key)) navigate('next');
    else if (e.key === 'ArrowLeft') navigate('prev');
  });
}

// ─── 5. HINT TEMPORAIRE ───────────────────────────────────────────────────────
function setupHintTimer() {
  const hint = document.getElementById('nav-hint');
  setTimeout(() => {
    if (hint) {
      hint.classList.add('fade-out');
      setTimeout(() => hint.classList.add('hidden'), 1000);
    }
  }, 5000);
}

// ─── 6. TOAST ─────────────────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 3000);
}
