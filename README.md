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
<pre>sudo snap install android-studio --classic</pre>
Pour éviter tout problème lors de cette étape, nous recommandons d'installer l'IDE Android Studio qui permet de récupérer l'ensemble des outils de développement Android sans erreur. Cependant, il est possible de n'installer que la SDK d'android.

Pour installer la SDK, il faut lancer l'IDE Android Studio au moins une fois pour finir l'installation.

Il faut ensuite indiquer dans le <b>$PATH</b> où se trouve votre sdk :
<pre>export PATH=<b>{chemin vers votre dossier Android}</b>/Android/Sdk/tools:<b>{chemin vers votre dossier Android}</b>/Android/Sdk/platform-tools:<b>{chemin vers votre dossier Android}</b>/Android/Sdk/tools/bin:$PATH</pre>
<b>{chemin vers votre dossier Android}</b> doit être réplacé par le chemin absolu ou relatif de l'endroit où se trouve votre répertoire Android.
Pour éviter d'avoir à saisir cette commande à chaque fois, nous vous invitons à ajouter cette commande dans votre fichier .bashrc :
<pre>echo "export PATH=<b>{chemin vers votre dossier Android}</b>/Android/Sdk/tools:<b>{chemin vers votre dossier Android}</b>/Android/Sdk/platform-tools:<b>{chemin vers votre dossier Android}</b>/Android/Sdk/tools/bin:$PATH" >> ~/.bashrc"</pre>
Fermez puis ré-ouvrez votre terminale pour valider l'opération.

### <b><i> Sous Windows 10 :</i></b>

Pour installer Node.js

    * Allez sur le site nodejs.org
    * Cliquez sur "Install" (Cela installe automatiquement la version compatible avec votre système d'exploitation)
    * Ouvrez le fichier.exe téléchargé et cliquer plusieurs fois sur Next après install
    * Une fois l'installation finie, ouvrez le terminal pour installer cordova

Pour installer Cordova

    * Tapez dans le terminal la commande: npm install -g cordova et puis Entrée et laissez tourner
    * Pour vérifier la version installée, tapez: cordova --version

Pour installer le JDK:

    * Allez sur le site https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
    * Dans la liste qui s'affiche prenez la version qui correspond à votre système d'exploitation (dans mon cas c'est: Windows x64)
    * Double-cliquez sur le fichier téléchargé, après "next" jusqu'à la fin du téléchargement
    *Allez dans le dossier de téléchargement jusqu'au fichier bin et copier le chemin (Java\jdk..\bin par exemple) et l'ajouter à la variable PATH de votre système

Pour installer le SDK Android:

    * Le SDK tools package n'étant pas complet à l'adresse https://developer.android.com/studio, le plus simple est de télécharger android studio directement, car il intègre le SDK Manager.
    
    * Copiez les 2 chemins de "tools" et "platform-tools" (dans le dossier sdk) et rajoutez les à la variable PATH de votre système.

Pour installer Apache Ant:

    * Allez sur le site https://ant.apache.org/
    * Cliquez sur https://ant.apache.org/bindownload.cgi
    * Récupérez après le fichier .zip
    * Dé-zipper le fichier téléchargé, allez dans le dossier "bin" et ajouter son chemin au PATH du système


## <b>Installation de l'environnement de développement</b>

Dans cette partie, nous allons vous présenter l'environnement de développement que nous utilisons pour développer dans le cadre de ce projet.

### <b><i> Sous distribution Linux :</i></b>

1. <b><i>Visual Studio Code</b></i>
<pre>sudo snap install code --classic</pre>
<b>Visual Studio Code</b> ou <b>VScode</b> est un éditeur de texte très populaire et possède une communauté très active. Il est également composé d'un installateur de plugins qui ont été développés par sa communauté ce qui en fait un outil très pratique.

2. <b><i>Nodejs</b></i>
<pre>
wget https://nodejs.org/dist/v12.16.0/node-v12.16.0-linux-x64.tar.xz
</pre>
Cet outil est indispensable pour pouvoir tester le projet en local (cf. étape 3). Dans notre cas, nous aurons besoin d'une version supérieur à la 10.0.0. Si ce n'est pas le cas, l'étape 3 ne fonctionnera pas correctement. Une fois l'archive téléchargé via la commande précédente, décompressez là et ajoutez au PATH la localisation de nodejs de la manière suivante :
<pre>
export PATH=<b>{chemin vers l'archive décompressée}</b>/node-v12.16.0-linux-x64/bin:$PATH
</pre>

Vous pouvez également persister la commande dans le .basrc de cette manière :
<pre>
echo "export PATH=<b>{chemin vers l'archive décompressée}</b>/node-v12.16.0-linux-x64/bin:$PATH" >> ~/.bashrc
</pre>

3. <b><i>Le serveur local-web-server</b></i>
<pre>sudo npm install -g local-web-server</pre>
Le local web serveur est un outil très pratique pour tester ce projet. En effet, Cordova permet d'utiliser les languages du web pour pouvoir développer une application mobile cross-plateform. Pour éviter d'avoir à téléverser l'application à chaque modification, nous nous servons du local web serveur pour pouvoir la tester en amont sur un navigateur web. Pour tester l'application, faire comme suit depuis un terminal à la racine du projet :
<pre>
git checkout dev
cd app/www/
ws
</pre>
Le serveur est maintenant actif. Rendez-vous sur le lien suivant avec votre navigateur web : http://127.0.0.1:8000

4. <b><i>Java 8</b></i>
<pre>sudo apt-get install openjdk-8-jdk</pre>
Dans le cadre de ce projet, nous avons besoin de la version 8 de Java pour faire fonctionner la commande sdkmanager d'android. Si vous avez une version plus récente et que vous souhaiter passer vers la version 8, procéder de la manière suivante :
<pre>
sudo update-alternatives --config java
</pre>
Saisir la ligne correspondant à la version 8 de Java. Effectuer la même manipulatiob pour revenir à votre version normal.

5. <b><i>Git Kraken</b></i>
<pre>sudo snap install gitkraken</pre>
Git Kreken propose une interface graphique très intuitive pour pouvoir gérer son dépôt git. Il permet également d'avoir une bonne visibilité sur la gestion des sources avec l'affichage de l'arborescence du projet en graphique.

### <b><i> Sous Windows 10 :</i></b>
1. <b><i>Visual Studio Code</b></i>
<pre>sudo snap install code --classic</pre>
<b>Visual Studio Code</b> ou <b>VScode</b> est un éditeur de texte très populaire et possède une communauté très active. Il est également composé d'un installateur de plugins qui ont été développés par sa communauté ce qui en fait un outil très pratique.

2. <b><i>Git Kraken</b></i>
<pre>sudo snap install gitkraken</pre>
Git Kreken propose une interface graphique très intuitive pour pouvoir gérer son dépôt git. Il permet également d'avoir une bonne visibilité sur la gestion des sources avec l'affichage de l'arborescence du projet en graphique.





## <b>Déployer l'application sur un Smartphone Android</b>
Dans cette partie, nous allons vous montrer la marche à suivre pour pouvoir déployer l'application CaptureIT sur un Smartphone Android (déploiement IOS pas encore disponible).

### <b><i> Sous Windows 10 :</i></b>
Voir pour Linux, les commande cordova sont identiques.

### <b><i> Depuis une distribution Linux :</i></b>
Pour cela, positionnez vous à la racine du projet et saisissez les commandes suivantes :

1. <b><i>Définir les plateforms (Android/IOS)</b></i>
<pre>cordova platform add android</pre>

2. <b><i>Tester l'état des dépendances / requirements du projet</b></i>
<pre>cordova requirements</pre>
Cette commande doit vous retourner le message suivant :
<pre>
Requirements check results for android:
Java JDK: installed 1.8.0
Android SDK: installed true
Android target: installed android-29,android-28,android-27
Gradle: installed /usr/share/gradle/bin/gradle
</pre>

* Si vous aver une erreur au niveau de la JDK java, veuillez installer Java 8 qui est la version que nous avons utilisé dans le cadre de ce projet (voir les partie précédente sur l'installation de Java 8).

* Pour la partie SDK, vous ne devriez pas avoir de problème si vous êtes passés par l'installation d'Android Studio. Dans le cas contraire, nous vous conseillons de l'installer pour éviter tout problème.

* Pour la partie target, sois vous n'avez pas défini de plarefome android, dans ce cas, saisissez la commande à l'étape 1, sois vous n'êtes pas sur la bonne version de la plateform. Dans ce cas, saisissez la commande suivante :
<pre>sdkmanager "platforms;android-27"</pre>

* Pour gradle, l'installation d'Android Studio devrait également résoudre votre problème.

3. <b><i>Construire le projet</b></i>
<pre>cordova build android</pre>

4. <b><i>Branchez votre Smartphone Android et n'oubliez pas d'autoriser le partage de fichier entre votre mobile et votre PC.</b></i>

5. <b><i>Vérifiez que votre mobile est bien détecté par votre PC :</b></i>
<pre>adb devices</pre>
Si cela fonctionne, cette commande doit vous retourner un message avec une suite de chiffre. Si ce n'est pas le cas, vérifiez que votre Smartphone est bien connecté à votre PC et que vous avez bien autorisé votre ordinateur à accéder aux fichiers de votre Smartphone Android.

6. <b><i>Déployez l'application sur votre Smartphone Android</b></i>
<pre>cordova run android</pre>

Et voilà, l'application est déployée !

## <b>Licence</b>

Ce projet est <strong>Open-Source</strong>, et sous licence BSD-2-clause. Pour en savoir plus, se référer à la <b>LICENCE</b>.