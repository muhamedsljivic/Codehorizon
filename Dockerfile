FROM php:8.2-apache

WORKDIR /var/www/html

COPY . .

# Common extensions
RUN apt update && \
    apt install -y zip libzip-dev unzip && \
    docker-php-ext-install pdo_mysql zip

# Enable mod_rewrite for images with apache
RUN a2enmod rewrite headers

# Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    php -r "unlink('composer-setup.php');"

# Use Composer to install dependencies
RUN composer install --prefer-dist --no-dev --no-interaction --optimize-autoloader --verbose

EXPOSE 80
EXPOSE 443
