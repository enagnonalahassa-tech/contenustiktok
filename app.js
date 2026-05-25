// Antigravity Video Studio Engine

// Script par défaut en dur pour éviter les blocages CORS du protocole file:// en local
const DEFAULT_SCRIPT = `On y va pour la Vidéo 1 : "Tu n’as pas un problème de motivation. Tu as un problème de système"

Objectif : 45s, faceless, format 9:16. Ça doit claquer dès les 3 premières secondes.

Script voix-off + Texte à l’écran

0-3s - HOOK  
Voix-off : "Tu n’as pas un problème de motivation. Tu as un problème de système."  
Texte écran :  
MOTIVATION ≠ SYSTÈME  
[Texte en gros, gras, vert #22C55E sur fond bleu nuit #0F172A]

3-12s - LE PROBLÈME  
Voix-off : "La motivation, ça monte et ça descend. Un jour t’es chaud, le lendemain t’as envie de rien. C’est pour ça que 90% des gens abandonnent."  
Texte écran :  
La motivation = montagne russe 🎢  
1 jour ON / 3 jours OFF

12-28s - LA SOLUTION  
Voix-off : "Un système, c’est l’inverse. C’est mettre en place des trucs simples pour que l’action se fasse même quand t’as pas envie. Exemple : tu veux courir le matin ? La motivation dit ‘lève-toi à 6h’. Le système dit ‘prépare tes baskets la veille + mets une alarme à 6h + dis-le à un pote’."  
Texte écran :  
SYSTÈME =  
Préparer la veille  
Réduire la friction  
Rendre ça automatique

28-38s - L’APPLICATION  
Voix-off : "En business et en productivité, c’est pareil. Tu veux poster tous les jours ? Ne compte pas sur la motivation. Crée un bloc de 30 min chaque jour, même template, même heure."  
Texte écran :  
Applique ça à :  
Poste TikTok  
Sport  
Apprentissage

38-45s - CTA  
Voix-off : "Dis-moi en commentaire : sur quoi tu veux construire un système cette semaine ? Je te réponds avec la 1ère étape."  
Texte écran :  
Commente SYSTÈME  
Je te donne la 1ère étape 👇`;

// État de l'application
let appState = {
  isPlaying: false,
  currentTime: 0,
  duration: 45,
  isMuted: false,
  sequences: [],
  activeSequenceIndex: -1,
  speechSynth: window.speechSynthesis,
  currentUtterance: null,
  bgMusicNode: null,
  audioCtx: null,
  synthBeatInterval: null,
  lastFrameTime: 0
};

// Mots à mettre en valeur (Vert #22C55E)
const HIGHLIGHT_WORDS = [
  "MOTIVATION", "SYSTÈME", "MONTAGNE RUSSE", "1 JOUR ON", "3 JOURS OFF",
  "PRÉPARER LA VEILLE", "RÉDUIRE LA FRICTION", "RENDRE ÇA AUTOMATIQUE",
  "POSTE TIKTOK", "SPORT", "APPRENTISSAGE", "COMMENTE", "1ÈRE ÉTAPE"
];

// Initialisation au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  setupTabs();
  setupAccordion();
  setupChecklist();
  setupSimulator();
  setupPlayerControls();
  
  // Charger le script
  let scriptContent = DEFAULT_SCRIPT;
  try {
    const response = await fetch('script0.txt');
    if (response.ok) {
      const text = await response.text();
      if (text && text.trim().length > 10) {
        scriptContent = text;
        showToast("Script chargé avec succès depuis script0.txt");
      }
    }
  } catch (e) {
    console.log("CORS ou fichier absent, utilisation du script par défaut.");
  }
  
  document.getElementById('script-textarea').value = scriptContent;
  document.getElementById('editor-char-count').innerText = `${scriptContent.length} caractères`;
  
  // Analyser et charger le script dans le séquenceur
  parseScript(scriptContent);
  
  // Action d'appliquer le script
  document.getElementById('btn-apply-script').addEventListener('click', () => {
    const content = document.getElementById('script-textarea').value;
    parseScript(content);
    document.getElementById('editor-char-count').innerText = `${content.length} caractères`;
    showToast("Script mis à jour dans le previewer !");
    
    // Basculer sur l'onglet Séquences
    document.querySelector('.tab-btn[data-tab="tab-viewer"]').click();
  });

  // Action réinitialiser
  document.getElementById('btn-restart-guide').addEventListener('click', () => {
    appState.currentTime = 0;
    seekTo(0);
    showToast("Lecteur réinitialisé au début");
  });
}

// 1. ANALYSEUR DE SCRIPT (Text to Scenes parser)
function parseScript(text) {
  const lines = text.split('\n');
  const sequences = [];
  
  let currentSeq = null;
  let voiceText = "";
  let screenText = [];
  let isReadingScreenText = false;
  
  // Regex pour attraper les plages de temps "X-Ys - NOM"
  const timeRangeRegex = /^(\d+)-(\d+)s\s*-\s*(.+)$/i;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const match = line.match(timeRangeRegex);
    if (match) {
      // Sauvegarder la séquence précédente
      if (currentSeq) {
        currentSeq.voice = voiceText.trim();
        currentSeq.screen = screenText.join('\n').trim();
        sequences.push(currentSeq);
      }
      
      currentSeq = {
        start: parseInt(match[1]),
        end: parseInt(match[2]),
        name: match[3],
        voice: "",
        screen: ""
      };
      voiceText = "";
      screenText = [];
      isReadingScreenText = false;
      continue;
    }
    
    if (currentSeq) {
      if (line.toLowerCase().startsWith('voix-off :')) {
        voiceText = line.substring(10).trim();
        isReadingScreenText = false;
      } else if (line.toLowerCase().startsWith('texte écran :')) {
        isReadingScreenText = true;
      } else if (line.startsWith('[') && line.endsWith(']')) {
        // Ignorer les commentaires de style entre crochets
        continue;
      } else {
        if (isReadingScreenText) {
          screenText.push(line);
        } else if (voiceText) {
          voiceText += " " + line;
        }
      }
    }
  }
  
  // Ajouter le dernier élément
  if (currentSeq) {
    currentSeq.voice = voiceText.trim();
    currentSeq.screen = screenText.join('\n').trim();
    sequences.push(currentSeq);
  }
  
  appState.sequences = sequences;
  
  // Déterminer la durée totale
  if (sequences.length > 0) {
    appState.duration = sequences[sequences.length - 1].end;
    document.getElementById('total-time').innerText = formatTime(appState.duration);
  }
  
  renderSequences();
}

// Affichage des séquences dans le panneau gauche
function renderSequences() {
  const container = document.getElementById('sequences-container');
  container.innerHTML = "";
  
  appState.sequences.forEach((seq, idx) => {
    const el = document.createElement('div');
    el.className = `seq-item ${idx === appState.activeSequenceIndex ? 'active' : ''}`;
    el.dataset.index = idx;
    
    el.innerHTML = `
      <div class="seq-meta">
        <span class="seq-title">${seq.name}</span>
        <span class="seq-time">${seq.start}s - ${seq.end}s</span>
      </div>
      <div class="seq-screen">
        <strong>Texte à l'écran :</strong>
        ${seq.screen.replace(/\n/g, '<br>')}
      </div>
      <div class="seq-voice">
        <strong>Voix off :</strong>
        "${seq.voice}"
      </div>
    `;
    
    el.addEventListener('click', () => {
      seekTo(seq.start);
      if (!appState.isPlaying) {
        togglePlayPause();
      }
    });
    
    container.appendChild(el);
  });
}

// 2. AUDIO SYNTHESIS & BEAT GENERATOR (Web Speech & Web Audio)
function speakVoice(text) {
  if (appState.isMuted || !appState.speechSynth) return;
  
  appState.speechSynth.cancel(); // Annuler toute parole en cours
  
  if (!text) return;
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 1.15; // Vitesse rapide demandée par le script (1.1x / 1.15x)
  utterance.pitch = 1.0;
  
  // Essayer de trouver une voix française masculine dynamique
  const voices = appState.speechSynth.getVoices();
  const frVoice = voices.find(v => v.lang.startsWith('fr') && v.name.toLowerCase().includes('thomas')) ||
                  voices.find(v => v.lang.startsWith('fr') && v.name.toLowerCase().includes('google')) ||
                  voices.find(v => v.lang.startsWith('fr'));
  
  if (frVoice) {
    utterance.voice = frVoice;
    document.getElementById('voice-track-info').innerText = `Voix : ${frVoice.name.split(' ')[0]} - Vitesse 1.15x`;
  }
  
  appState.currentUtterance = utterance;
  appState.speechSynth.speak(utterance);
}

// Générateur de musique de fond (Beat minimaliste dynamique via Web Audio API)
function initAudioContext() {
  if (appState.audioCtx) return;
  appState.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function startBackgroundMusic() {
  initAudioContext();
  if (!appState.audioCtx) return;
  
  if (appState.audioCtx.state === 'suspended') {
    appState.audioCtx.resume();
  }
  
  // Générer un battement rythmique en boucle (Minimal Corporate)
  let tempo = 120; // BPM
  let beatTime = 60 / tempo; // Durée d'un beat
  
  appState.synthBeatInterval = setInterval(() => {
    if (!appState.isPlaying || appState.isMuted) return;
    
    let now = appState.audioCtx.currentTime;
    
    // Kick Drum (Battement lourd en fond)
    let osc = appState.audioCtx.createOscillator();
    let gain = appState.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(appState.audioCtx.destination);
    
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.3);
    
    gain.gain.setValueAtTime(0.2, now); // Vol bas (15%) comme requis par le script
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    
    osc.start(now);
    osc.stop(now + 0.3);
    
    // Hi-Hat discret sur le contretemps
    setTimeout(() => {
      if (!appState.isPlaying || appState.isMuted) return;
      let hitNow = appState.audioCtx.currentTime;
      let oscNoise = appState.audioCtx.createOscillator();
      let gainNoise = appState.audioCtx.createGain();
      oscNoise.type = 'triangle';
      oscNoise.connect(gainNoise);
      gainNoise.connect(appState.audioCtx.destination);
      
      oscNoise.frequency.setValueAtTime(10000, hitNow);
      gainNoise.gain.setValueAtTime(0.02, hitNow);
      gainNoise.gain.exponentialRampToValueAtTime(0.001, hitNow + 0.05);
      
      oscNoise.start(hitNow);
      oscNoise.stop(hitNow + 0.05);
    }, beatTime * 500); // 0.5 beat plus tard
    
  }, beatTime * 1000);
}

function stopBackgroundMusic() {
  if (appState.synthBeatInterval) {
    clearInterval(appState.synthBeatInterval);
    appState.synthBeatInterval = null;
  }
}

// 3. LECTEUR DE PRÉVISUALISATION
function setupPlayerControls() {
  const btnPlay = document.getElementById('btn-play-pause');
  const btnBack = document.getElementById('btn-backward');
  const btnFwd = document.getElementById('btn-forward');
  const btnMute = document.getElementById('btn-mute');
  const timeline = document.getElementById('timeline-slider-bar');
  
  btnPlay.addEventListener('click', togglePlayPause);
  
  btnBack.addEventListener('click', () => {
    seekTo(Math.max(0, appState.currentTime - 3));
  });
  
  btnFwd.addEventListener('click', () => {
    seekTo(Math.min(appState.duration, appState.currentTime + 3));
  });
  
  btnMute.addEventListener('click', () => {
    appState.isMuted = !appState.isMuted;
    btnMute.innerText = appState.isMuted ? "🔇" : "🔊";
    showToast(appState.isMuted ? "Audio coupé" : "Audio activé");
    if (appState.isMuted) {
      if (appState.speechSynth) appState.speechSynth.cancel();
      stopBackgroundMusic();
    } else {
      startBackgroundMusic();
      // Relancer la voix off pour la séquence active
      if (appState.activeSequenceIndex !== -1) {
        speakVoice(appState.sequences[appState.activeSequenceIndex].voice);
      }
    }
  });
  
  // Cliquer sur la timeline pour naviguer
  timeline.addEventListener('click', (e) => {
    const rect = timeline.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clickX / rect.width;
    seekTo(ratio * appState.duration);
  });
}

function togglePlayPause() {
  appState.isPlaying = !appState.isPlaying;
  
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const disc = document.querySelector('.disc-spin');
  
  if (appState.isPlaying) {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    if (disc) disc.style.animationPlayState = 'running';
    
    appState.lastFrameTime = performance.now();
    requestAnimationFrame(updatePlayerFrame);
    
    // Activer l'audio
    if (!appState.isMuted) {
      startBackgroundMusic();
      // Parler la voix de la séquence active
      if (appState.activeSequenceIndex !== -1) {
        speakVoice(appState.sequences[appState.activeSequenceIndex].voice);
      }
    }
    
    document.getElementById('status-text').innerText = "Lecture du test en cours...";
  } else {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    if (disc) disc.style.animationPlayState = 'paused';
    
    if (appState.speechSynth) appState.speechSynth.cancel();
    stopBackgroundMusic();
    
    document.getElementById('status-text').innerText = "Lecteur en pause";
  }
}

function seekTo(timeSeconds) {
  appState.currentTime = timeSeconds;
  updateUIForTime(timeSeconds);
  
  // Si en lecture, relancer la voix
  if (appState.isPlaying && !appState.isMuted) {
    const newSeqIdx = findSequenceIndexAtTime(timeSeconds);
    if (newSeqIdx !== appState.activeSequenceIndex) {
      appState.activeSequenceIndex = newSeqIdx;
      highlightSequence(newSeqIdx);
      if (newSeqIdx !== -1) {
        speakVoice(appState.sequences[newSeqIdx].voice);
      }
    }
  }
}

function findSequenceIndexAtTime(time) {
  return appState.sequences.findIndex(s => time >= s.start && time < s.end);
}

function updatePlayerFrame(timestamp) {
  if (!appState.isPlaying) return;
  
  const delta = (timestamp - appState.lastFrameTime) / 1000;
  appState.lastFrameTime = timestamp;
  
  appState.currentTime += delta;
  
  if (appState.currentTime >= appState.duration) {
    appState.currentTime = 0;
    seekTo(0);
    togglePlayPause(); // Pause automatique à la fin
    showToast("Vidéo terminée !");
    return;
  }
  
  updateUIForTime(appState.currentTime);
  requestAnimationFrame(updatePlayerFrame);
}

function updateUIForTime(time) {
  // Mettre à jour les labels temporels
  document.getElementById('current-time').innerText = formatTime(time);
  
  // Progress Bar et Handle
  const ratio = (time / appState.duration) * 100;
  document.getElementById('timeline-fill').style.width = `${ratio}%`;
  document.getElementById('timeline-thumb').style.left = `${ratio}%`;
  
  // Progress Ring
  const circle = document.getElementById('progress-circle');
  const circumference = 2 * Math.PI * 16;
  const offset = circumference - (time / appState.duration) * circumference;
  circle.style.strokeDashoffset = offset;
  
  const secondsLeft = Math.ceil(appState.duration - time);
  document.getElementById('progress-circle-text').innerText = `${secondsLeft}s`;
  
  // Déterminer la séquence en cours
  const seqIdx = findSequenceIndexAtTime(time);
  if (seqIdx !== appState.activeSequenceIndex) {
    appState.activeSequenceIndex = seqIdx;
    highlightSequence(seqIdx);
    
    if (seqIdx !== -1) {
      const activeSeq = appState.sequences[seqIdx];
      updateVideoText(activeSeq.screen);
      
      // Parler s'il y a du son
      if (appState.isPlaying && !appState.isMuted) {
        speakVoice(activeSeq.voice);
      }
    } else {
      updateVideoText("");
    }
  }
}

function highlightSequence(idx) {
  const items = document.querySelectorAll('.seq-item');
  items.forEach((item, i) => {
    if (i === idx) {
      item.classList.add('active');
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      item.classList.remove('active');
    }
  });
}

function updateVideoText(text) {
  const container = document.getElementById('video-main-text');
  if (!text) {
    container.innerHTML = "";
    return;
  }
  
  // Remplacer les retours à la ligne par des balises <br>
  let html = text.replace(/\n/g, '<br>');
  
  // Mettre en vert et grand les mots-clés configurés
  HIGHLIGHT_WORDS.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    html = html.replace(regex, `<span class="highlight">${word}</span>`);
  });
  
  container.innerHTML = html;
  
  // Reset de l'animation CSS text-pop
  container.style.animation = 'none';
  container.offsetHeight; // Déclencher le reflow
  container.style.animation = null;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// 4. ONGLETS ET ACCORDÉONS (Tabs & Accordions)
function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const tabId = tab.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      document.getElementById(tabId).classList.remove('hidden');
    });
  });
}

function setupAccordion() {
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.dataset.target;
      const target = document.getElementById(targetId);
      const parent = trigger.parentElement;
      
      const isActive = parent.classList.contains('active');
      
      // Fermer tous les accordéons
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').classList.add('hidden');
        item.querySelector('.arrow').innerText = "▶";
      });
      
      // Ouvrir le sélectionné s'il n'était pas actif
      if (!isActive) {
        parent.classList.add('active');
        target.classList.remove('hidden');
        trigger.querySelector('.arrow').innerText = "▼";
      }
    });
  });
}

// 5. CHECKLIST INTERACTIVE DE SYSTÈME
function setupChecklist() {
  const checkboxes = document.querySelectorAll('.system-checklist input');
  checkboxes.forEach(c => {
    c.addEventListener('change', updateChecklistProgress);
  });
}

function updateChecklistProgress() {
  const checkboxes = document.querySelectorAll('.system-checklist input');
  const checked = document.querySelectorAll('.system-checklist input:checked').length;
  const ratio = (checked / checkboxes.length) * 100;
  
  const fill = document.getElementById('system-check-progress');
  const label = document.getElementById('system-check-label');
  
  fill.style.width = `${ratio}%`;
  label.innerText = `${Math.round(ratio)}% complété`;
  
  if (ratio === 100) {
    showToast("Félicitations ! Votre premier système de création est prêt !");
  }
}

// 6. SIMULATEUR DE PERFORMANCE (IA insights)
function setupSimulator() {
  const btn = document.getElementById('btn-simulate');
  btn.addEventListener('click', () => {
    const comp = parseInt(document.getElementById('sim-completion').value) || 0;
    const comm = parseInt(document.getElementById('sim-comments').value) || 0;
    const output = document.getElementById('simulation-output');
    
    output.classList.remove('hidden', 'warning');
    
    let advice = "";
    
    if (comp < 35) {
      output.classList.add('warning');
      advice = `⚠️ <strong>Taux de complétion faible (${comp}%):</strong><br>
      Les utilisateurs décrochent trop vite. Pour la Vidéo 2 :<br>
      1. Raccourcissez le HOOK à 2.5s au lieu de 3s.<br>
      2. Mettez le texte écran en entrée ultra-rapide (Pop) sans aucun fondu.<br>
      3. Accélérez le rythme de la voix à 1.2x.`;
    } else if (comp >= 35 && comm < 5) {
      output.classList.add('warning');
      advice = `⚠️ <strong>Bon visionnage (${comp}%) mais peu d'interaction:</strong><br>
      Le script intéresse mais le CTA n'engage pas assez. Pour la Vidéo 2 :<br>
      1. Ajoutez une question visuelle intrigante en plein milieu du script (ex: "Tu fais ça la veille ?").<br>
      2. Augmentez la taille du texte du CTA final et mettez-le sur fond clignotant.`;
    } else {
      advice = `🎉 <strong>Performances optimales (${comp}% complétion, ${comm} commentaires) !</strong><br>
      Votre système de script fonctionne. Pour la Vidéo 2, nous allons doubler la mise :<br>
      <strong>Sujet : "Pourquoi ton alarme de 6h ne marche pas (et comment le système bat la volonté)"</strong>.<br>
      Nous garderons exactement le même template visuel vert/bleu nuit.`;
    }
    
    output.innerHTML = advice;
    showToast("Script Ajusté avec succès !");
  });
}

// Toast notification helper
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
