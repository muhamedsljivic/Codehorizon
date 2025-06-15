FROM php:8.2-apache

# Postaviti radni direktorij
WORKDIR /var/www/html

# Kopiraj sve fajlove
COPY . /var/www/html/

# Postaviti ServerName da ukloni warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Instaliraj ekstenzije
RUN apt update && \
    apt install -y zip libzip-dev unzip && \
    docker-php-ext-install pdo_mysql zip

# Uključiti mod_rewrite za .htaccess
RUN a2enmod rewrite headers

# Instalirati Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    php -r "unlink('composer-setup.php');"

# Pokrenuti Composer
RUN composer install --prefer-dist --no-dev --no-interaction --optimize-autoloader --verbose

# Expose HTTP i HTTPS portove
EXPOSE 80
EXPOSE 443
