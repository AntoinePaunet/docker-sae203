# Utiliser l'image Debian comme base
FROM debian:latest

RUN apt-get update && apt-get install -y apache2

COPY html/ /var/www/html/

# Exposer le port 80 pour le trafic HTTP
EXPOSE 80

# Commande pour démarrer Apache en mode démon
CMD ["apache2ctl", "-D", "FOREGROUND"]