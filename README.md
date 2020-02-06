# CaptureIT

L’application CaptureIT est une application mobile open source qui permet de capturer, de collectionner et d’exploiter ses expériences d’apprentissage. Par expérience, nous désignons toute situation dans laquelle une personne a découvert, appris, compris ou démontré une notion, un savoir-faire, un savoir-être...

## <b>Bien débuter</b>

Ce documents a pour objectif de présenter comment déployer une copie local de ce projet et son environnement sur une machine.

## <b>Prérequis</b>

Ce projet a été développé sous environnement Linux (distribution Ubuntu 18.04 LTS). Il nécessite les ressources suivantes :

* Un POD Solid ( <a href="https://solid.inrupt.com/get-a-solid-pod">Lien pour créer un POD en ligne </a>).
* Un éditeur de code compatible JavaScript (<a href="https://code.visualstudio.com/download"> VSCode pour notre part </a>).

## <b>Getting started</b>

Dans cette partie, nous allons vous expliquer comment déployer localement un script JavaScript permettant de créer un répertoire, d'uploader et downloader une image sur votre POD distant solid inrupt (via un serveur en local : en cours de développement).<br>
Ce script permet de proposer un exemple pratique de l'utilisation des librairies <i><b>solid-auth-client</b></i> et <i><b>solid-file-client</b></i>.

1. Installer npm
<pre>sudo apt-get install npm</pre>

2. Installer un serveur local avec npm
<pre>sudo npm install -g local-web-server</pre>

3. Cloner le dépôt git du projet
<pre>git clone https://github.com/kthezelais/CaptureIT.git</pre>

4. Aller sur la branch "push-and-pull-a-picture"
<pre>
cd CaptureIT/
git checkout push-and-pull-a-picture
</pre>

5. Lancer le serveur web en local
<pre>
cd src/
ws
</pre>

Le serveur est maintenant actif. Rendez-vous sur le lien suivant avec votre navigateur web :
* http://127.0.0.1:8000

## <b>Application mobile "Proof of concept"</b>

Un POC de la futur application mobile est disponible sur la branch <b>"p-403-poc-ihm"</b> du projet. Pour installer son environnement, suivre les étapes du <b>README</b> associé à cette branche :
<pre>git checkout p-403-poc-ihm</pre>

## <b>LICENCE</b>

Ce projet est <strong>Open-Source</strong>, et sous licence BSD-2-clause. Pour en savoir plus, se référer à la <b>LICENCE</b>.