# Guide : Animation "3D Tilted Typing" (Barre de Recherche 3D)

Ce document explique comment réutiliser et intégrer le composant de barre de recherche/prompt avec un effet 3D oblique et une animation d'écriture en direct (Typing Effect) dans vos présentations Reveal.js.

## Aperçu Visuel
Le composant ressemble à une barre de recherche ou d'invite (prompt) d'IA, flottant dans un espace 3D (légèrement penchée). Lorsque le slide ou le fragment est activé, le texte s'écrit dynamiquement lettre par lettre.

## Code CSS (À inclure dans votre thème ou balise `<style>`)

```css
/* Composant Réutilisable : 3D Tilted Prompt/Search Box */
.tilted-prompt-container {
    perspective: 1500px; /* Crée la profondeur 3D */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    width: 100%;
}

.tilted-prompt-box {
    background: #FFFFFF;
    /* Inclinaison 3D */
    transform: rotateY(-15deg) rotateX(8deg) rotateZ(-1deg);
    transform-style: preserve-3d;
    padding: 20px 40px;
    border-radius: 50px; /* Forme de pilule */
    box-shadow: 
        -15px 25px 40px rgba(0,0,0,0.5),
        inset 0 0 0 1px rgba(226, 232, 240, 1); /* Légère bordure intérieure */
    display: flex;
    align-items: center;
    width: auto;
    max-width: 100%;
    transition: transform 0.5s ease-out;
}

/* Effet interactif au survol (Optionnel mais premium) */
.tilted-prompt-box:hover {
    transform: rotateY(-8deg) rotateX(4deg) rotateZ(0deg) translateZ(10px);
}

.tilted-prompt-icon {
    font-size: 32px;
    margin-right: 20px;
    opacity: 0.6;
}

.tilted-prompt-text {
    position: relative;
    font-family: 'Inter', sans-serif;
    font-size: 30px;
    font-weight: 600;
    color: #0F172A;
    display: inline-block;
    white-space: nowrap;
    padding-right: 5px;
}

/* Animation Fragment Reveal.js */
.typing-fragment {
    opacity: 1 !important; /* Force la visibilité par défaut de Reveal.js */
    visibility: visible !important;
}

/* Le "Masque" blanc qui recouvre le texte au début */
.typing-fragment::after {
    content: '';
    position: absolute;
    right: 0;
    top: -5px;
    height: calc(100% + 10px);
    width: 100%;
    background: #FFFFFF; /* Doit correspondre à la couleur de la box */
    border-left: 3px solid #0F172A; /* Le Curseur clignotant */
    animation: promptBlink 0.75s step-end infinite;
}

/* L'animation se déclenche quand Reveal ajoute la classe .visible */
.typing-fragment.visible::after {
    animation: 
        promptReveal 2.5s steps(50, end) forwards,
        promptBlink 0.75s step-end infinite;
}

/* Keyframes */
@keyframes promptReveal {
    0% { width: 100%; }
    100% { width: 0%; } /* Le masque se réduit à zéro, révélant le texte */
}

@keyframes promptBlink {
    0%, 100% { border-color: transparent; }
    50% { border-color: #0F172A; }
}
```

## Structure HTML

Pour utiliser ce composant dans un slide, copiez-collez cette structure HTML. Vous pouvez remplacer l'emoji `🔍` par `✨` ou une icône SVG, et modifier le texte.

```html
<div class="tilted-prompt-container">
    <div class="tilted-prompt-box">
        <span class="tilted-prompt-icon">🔍</span>
        <span class="tilted-prompt-text fragment custom typing-fragment">Votre texte à animer s'écrit ici.</span>
    </div>
</div>
```

### Remarques Techniques :
1. **La classe `fragment custom`** : Très importante. Elle indique à Reveal.js de traiter cet élément comme une étape (fragment) sans appliquer l'effet de fondu (`fade`) par défaut qui cacherait la boîte entière.
2. **Synchronisation** : Ajustez la durée `2.5s` et le nombre de `steps(50, end)` dans l'animation `.typing-fragment.visible::after` en fonction de la longueur de votre phrase pour que le rendu reste naturel. Le nombre de "steps" doit idéalement être proche du nombre de caractères de votre phrase.
