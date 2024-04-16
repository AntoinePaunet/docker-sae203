# Utiliser l'image Debian comme base
FROM debian:latest

RUN apt-get update && apt-get install -y apache2
RUN apt-get update && apt-get install -y socket.io
RUN apt-get update && apt-get install -y express


COPY html/ /var/www/html/

# Exposer le port 80 pour le trafic HTTP
EXPOSE 3000

# Commande pour démarrer Apache en mode démon
CMD ["apache2ctl", "-D", "FOREGROUND"]