#!/bin/bash

# Script générateur de présentation Reveal.js
# Usage: ./generate_reveal.sh <chemin_vers_fichier.md>

if [ -z "$1" ]; then
  echo "Usage: $0 path/to/fichier.md"
  exit 1
fi

INPUT_FILE="$1"
DIR=$(dirname "$INPUT_FILE")
BASENAME=$(basename "$INPUT_FILE" .md)
OUTPUT_FILE="$DIR/reveal_${BASENAME}.html"

# Chemins absolus vers les assets Reveal
TEMPLATE_FILE="/Users/galahassa/Dev/ai_architect_course/tools/revealjs/template.html"
CSS_FILE="/Users/galahassa/Dev/ai_architect_course/tools/revealjs/course_theme.css"

if [ ! -f "$INPUT_FILE" ]; then
  echo "Erreur: Le fichier $INPUT_FILE n'existe pas."
  exit 1
fi

echo "🚀 Génération de la présentation Reveal.js pour : $BASENAME.md"

# Copie du template
cp "$TEMPLATE_FILE" "$OUTPUT_FILE"

# Injection du CSS (BSD sed pour macOS)
sed -i '' -e "/{{CUSTOM_CSS}}/{r $CSS_FILE" -e 'd;}' "$OUTPUT_FILE"

# Injection du Markdown
sed -i '' -e "/{{MARKDOWN_CONTENT}}/{r $INPUT_FILE" -e 'd;}' "$OUTPUT_FILE"

echo "✅ Fichier Reveal.js généré avec succès : $OUTPUT_FILE"
echo "👉 Vous pouvez l'ouvrir directement dans votre navigateur web."
