CaptureIT
=========

L’application CaptureIT est une application mobile open source qui permet de capturer, de collectionner et d’exploiter ses expériences d’apprentissage. Par expérience, nous désignons toute situation dans laquelle une personne a découvert, appris, compris ou démontré une notion, un savoir-faire, un savoir-être...

# TRAX LRS : installation & configuration

## <b>Composer : installation de TRAX LRS</b>

<pre>
sudo apt-get install composer
composer create-project --prefer-dist --stability rc trax/lrs traxlrs
</pre>

## <b>Apache2 : configuration</b>

Ajoutez dans le fichier <b>/etc/apache2/sites-available/000-default.conf</b> (le contenu entre {# #} est à remplacer) :
<code>
<pre>
&#60;VirtualHost *:5000>

	ServerAdmin <span style="color: green;">{# Votre adresse e-mail #}</span>
	DocumentRoot <span style="color: green;">{# Chemin vers CaptureIT #}</span>/CaptureIT/traxlrs/public

	ErrorLog ${APACHE_LOG_DIR}/error_traxlrs.log
	CustomLog ${APACHE_LOG_DIR}/access_traxlrs.log combined

&#60;/VirtualHost>
</pre>
</code>

Ajoutez dans le fichier <b>/etc/apache2/ports.conf</b> :
<code>
<pre>
Listen 5000
</pre>
</code>

Ajouter dans le fichier <b>/etc/apache2/apache2.conf</b> :
<code>
<pre>
&#60;Directory <span style="color: green;">{# Chemin vers CaptureIT #}</span>/CaptureIT/traxlrs/storage>
	Options Indexes FollowSymLinks
	AllowOverride None
	Require all granted
&#60;/Directory>

&#60;Directory <span style="color: green;">{# Chemin vers CaptureIT #}</span>/CaptureIT/traxlrs/bootstrap/cache>
	Options Indexes FollowSymLinks
	AllowOverride None
	Require all granted
&#60;/Directory>

&#60;Directory <span style="color: green;">{# Chemin vers CaptureIT #}</span>/CaptureIT/traxlrs/public>
	Options Indexes FollowSymLinks
	AllowOverride None
	Require all granted
&#60;/Directory>
</pre>
</code>

## <b>MySQL : configuration</b>

Dans un navigateur : http://localhost/phpmyadmin<br>
Créer une base de données :
* <b>Nom :</b> captureit
* <b>Type :</b> utf8mb4_unicode_ci

Complétez le fichier <b>.env</b> dans le repertoire <b>traxlrs/</b> à la racine du projet par :
<code>
<pre>
APP_NAME="TRAX LRS"
APP_ENV=local
APP_KEY=<span style="color: green;">{# Conserver la valeur par défaut #}</span>
APP_DEBUG=true
APP_URL=http://trax.test

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=captureit
DB_USERNAME=<span style="color: green;">{# User de votre base de données MYSQL #}</span>
DB_PASSWORD=<span style="color: green;">{# Password de votre base de données MYSQL #}</span>
DB_MARIADB=0

SESSION_DRIVER=database
SESSION_CONNECTION=mysql
SESSION_LIFETIME=120
</pre>
</code>

Saisir ensuite la commande suivante dans le dossier <b>traxlrs/</b> à la racine du projet (crée les éléments dans la base de données) :
<code>
<pre>
php artisan migrate
</pre>
</code>