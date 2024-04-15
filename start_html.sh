#!/bin/bash

# Chemin vers le fichier HTML que vous souhaitez ouvrir
HTML_FILE="./html/index.html"

# Répertoire de base du serveur Apache (peut varier selon votre configuration)
APACHE_ROOT="."

# Copier le fichier HTML vers le répertoire du serveur Apache
cp "$HTML_FILE" "$APACHE_ROOT"

# Ouvrir le fichier HTML dans le navigateur par défaut
xdg-open "http://localhost/$(basename "$HTML_FILE")"
