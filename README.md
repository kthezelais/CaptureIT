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

## <b>TRAX-LRS : exécuter le serveur en local avec Laravel</b>

Pour exécuter le serveur en local, se placer dans le dossier trax-lrs et saisir la commande suivante :
<code>
<pre>
php artisan serve
</pre>
</code>

Aller ensuite à l'adresse suivante : http://127.0.0.1:8000

TRAX-LRS est composé d'une interface web (GUI) permettant de gérer les accès à l'API. L'URL précédente permet d'accéder à cette page qui nécessite des droits d'accès particulier. Pour pouvoir générer un compte permettant de s'y connecter, saisit la commande suivante :
<code>
<pre>
php artisan user:create-admin <span style="color: green;">{# Saisir une adresse email valide #}</span>
</pre>
</code>

Entrez ensuite l'email que vous avez saisi, et le mot de passé généré par le serveur. Pour pouvoir visualiser ces informations, saisir la commande suivante :
<code>
<pre>
php artisan user:list
</pre>
</code>

Cette première interface vous permet donc de gérer les accès à votre API. Pour utiliser l'API TRAX-LRS (ce qui nous interesse ici), testez tout d'abord que celle-ci fonctionne en vous rendant sur cette adresse : http://127.0.0.1:8000/trax/ws/xapi/about

A partir d'ici, vous n'avez plus qu'à transmettre des requêtes en respect avec le standard xAPI pour pouvoir communiquer avec votre serveur. Pour plus d'information, rendez-vous sur ce dépôt officiel : https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Communication.md#partthree

## <b>API CaptureIT : Stockage d'image et redirection vers TRAX-LRS</b>

Dans cette partie, nous allons expliquer comment déployer l'API CatpureIT, et la connecter à votre serveur TRAX-LRS.


Tout d'abord, dans le dossier <b>api/</b>, créez un dossier <b>img/</b>, et données lui tous les droits avec la commande suivante :

<code>
<pre>
sudo chmod 777 img
</pre>
</code>