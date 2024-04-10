FROM httpd
COPY ./html /usr/local/apache2/htdocs/
EXPOSE 80