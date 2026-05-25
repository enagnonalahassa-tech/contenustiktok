#!/bin/bash

# Vérification du paramètre
if [ -z "$1" ]; then
  echo "❌ Erreur : Vous devez fournir le chemin vers le fichier Markdown."
  echo "💡 Utilisation : ./tools/generate_slides.sh content/section_1/lecon_1.1/slides_marp.md"
  exit 1
fi

FILEPATH="$1"
DIR=$(dirname "$FILEPATH")
FILENAME=$(basename "$FILEPATH")

echo "🚀 Génération des exports pour : $FILENAME"
echo "📂 Dossier cible : $DIR"

# Se déplacer dans le dossier cible pour que les exports y soient créés
cd "$DIR" || { echo "❌ Erreur : Impossible d'accéder au dossier $DIR"; exit 1; }

# Exécution silencieuse et propre de Marp
echo "➡️  Génération du PowerPoint (.pptx)..."
npx @marp-team/marp-cli@latest "$FILENAME" --pptx > /dev/null 2>&1

echo "➡️  Génération de la page Web (.html)..."
npx @marp-team/marp-cli@latest "$FILENAME" --html > /dev/null 2>&1

echo "➡️  Génération du PDF (.pdf)..."
npx @marp-team/marp-cli@latest "$FILENAME" --pdf > /dev/null 2>&1

echo "✅ Terminé avec succès ! Tous les formats sont disponibles dans $DIR."
