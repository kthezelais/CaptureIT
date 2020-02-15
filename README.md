# CaptureIT

L’application CaptureIT est une application mobile open source qui permet de capturer, de collectionner et d’exploiter ses expériences d’apprentissage. Par expérience, nous désignons toute situation dans laquelle une personne a découvert, appris, compris ou démontré une notion, un savoir-faire, un savoir-être...

## <b>Bien débuter</b>

Ce documents a pour objectif de présenter comment déployer une copie local de ce projet et son environnement sur une machine.

## <b>Prérequis</b>

Ce projet a été développé sous environnement Linux (distribution Ubuntu 18.04 LTS). Il nécessite les ressources suivantes :

* Un POD Solid ( <a href="https://solid.inrupt.com/get-a-solid-pod">Lien pour créer un POD en ligne </a>).
* Un éditeur de code compatible JavaScript (<a href="https://code.visualstudio.com/download"> VSCode pour notre part </a>).

## <b>Installations Préliminaires</b>

### <b><i> Sous distribution Linux :</i></b>

Dans cette partie, nous allons vous présenter les différentes étapes à respecter pour déployer ce projet sur votre machine locale sous environnement Linux. Les testes de déploiement ont été effectués avec la version 18.04 LTS de la distribution Linux (recommandé).

1. Installer npm
<pre>sudo apt-get install npm</pre>

2. Installer cordova
<pre>sudo npm install -g cordova</pre>

3. Installer apache ant
<pre>sudo apt-get install ant</pre>

4. Installer la sdk android
<pre>sudo snap install android-studio</pre>
Pour éviter tout problème lors de cette étape, nous recommandons d'installer l'IDE Android Studio qui permet de récupérer l'ensemble des outils de développement Android sans erreur. Cependant, il est possible de n'installer que la SDK d'android.

Il faut ensuite indiquer dans le <b>$PATH</b> où se trouve votre sdk :
<pre>export PATH=<b>{chemin vers votre dossier Android}</b>/Android/Sdk/tools:<b>{chemin vers votre dossier Android}</b>/Android/Sdk/platform-tools:<b>{chemin vers votre dossier Android}</b>/Android/Sdk/tools/bin:$PATH</pre>
<b>{chemin vers votre dossier Android}</b> doit être réplacé par le chemin absolu ou relatif de l'endroit où se trouve votre répertoire Android.
Pour éviter d'avoir à saisir cette commande à chaque fois, nous vous invitons à ajouter cette commande dans votre fichier .bashrc :
<pre>echo "export PATH=<b>{chemin vers votre dossier Android}</b>/Android/Sdk/tools:<b>{chemin vers votre dossier Android}</b>/Android/Sdk/platform-tools:<b>{chemin vers votre dossier Android}</b>/Android/Sdk/tools/bin:$PATH" >> ~/.bashrc"</pre>
Fermez puis ré-ouvrez votre terminale pour valider l'opération.

## <b>Installation de l'environnement de développement</b>

Dans cette partie, nous allons vous présenter l'environnement de développement que nous utilisons pour développer dans le cadre de ce projet.

### <b><i> Sous distribution Linux :</i></b>

1. <b><i>Visual Studio Code</b></i>
<pre>sudo snap install code --classic</pre>
<b>Visual Studio Code</b> ou <b>VScode</b> est un éditeur de texte très populaire et possède une communauté très active. Il est également composé d'un installateur de plugins qui ont été développés par sa communauté ce qui en fait un outil très pratique.

2. <b><i>Nodejs</b></i>
<pre>sudo apt-get install nodejs</pre>
Cet outil est indispensable pour pouvoir tester le projet en local (cf. étape 3).

3. <b><i>Le serveur local-web-server</b></i>
<pre>sudo npm install -g local-web-server</pre>
Le local web seveur est un outil très pratique pour tester ce projet. En effet, Cordova permet d'utiliser les languages du web pour pouvoir développer une application mobile cross-plateform. Pour éviter d'avoir à téléverser l'application pendant à chaque modification, nous nous servons du local web serveur pour pouvoir la tester en amont sur un navigateur web. Pour tester l'application, faire comme suit depuis un terminal à la racine du projet :
<pre>
git checkout dev
cd app/www/
ws
</pre>
Le serveur est maintenant actif. Rendez-vous sur le lien suivant avec votre navigateur web : http://127.0.0.1:8000

4. <b><i>Git Kraken</b></i>
<pre>sudo snap install gitkraken</pre>
Git Kreken propose une interface graphique très intuitive pour pouvoir gérer son dépôt git. Il permet également d'avoir une bonne visibilité sur la gestion des sources avec l'affichage de l'arborescence du projet en graphique.

## <b>Déployer l'application sur un Smartphone Android</b>
Dans cette partie, nous allons vous montrer la marche à suivre pour pouvoir déployer l'application CaptureIT sur un Smartphone Android (déploiement Iphone pas encore disponible).

### <b><i> Depuis une distribution Linux :</i></b>
Pour cela, positionnez vous à la racine du projet et saisissez les commandes suivantes :

1. Définir les plateforms (Android/IOS)
<pre>cordova platform add android</pre>

2. Tester l'état des dépendances / requirements du projet
<pre>cordova requirements</pre>
Cette commande doit vous envoyer le retour suivant :
<pre>

<pre>

2. Construire le projet
<pre>cordova build android</pre>

3.

4. Déployer l'application sur mobile
cordova run android



6. Lister les périphérique / devices détecté par adb (émulateur  / déployeur)
adb devices

## <b>Licence</b>

Ce projet est <strong>Open-Source</strong>, et sous licence BSD-2-clause. Pour en savoir plus, se référer à la <b>LICENCE</b>.