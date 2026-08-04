---
title: "Windows 11 25H2 - Installation "
tableOfContents: false
sidebar:
  label: "Windows 25h2 - Installation"
date: 2026-08-03
lastUpdated: 2026-08-03
tags:
  - Windows
  - Windows 11
  - 25H2
  - Installation
authors:
  - Karim
featured: true
---
Après la création de la VM, Il faut la démarrer, n’ayant pas d’OS sur le disque, le démarrage est amorcé sur le lecteur CD/DVD.

Si le démarrage ne se fait pas automatiquement, il faut appuyer sur une touche du clavier (quand on est dans la VM).

![alt text](images/25h2-installation-1785835409467.png)

Astuce : Dans VMWare Workstation, pour sortir de la VM, vous pouvez appuyer sur CTRL + ALT sur le clavier.

Choisir la langue d’installation, Suivant

![alt text](images/25h2-installation-1785835444844.png)

Choisir le layout du clavier (Français)

![alt text](images/25h2-installation-1785835470962.png)

Choisir de réaliser une installation de Windows 11 et accepter de tout supprimer sur le disque dur.

![alt text](images/25h2-installation-1785835518194.png)

Vous arrivez sur le choix du système à installer, nous allons choisir Windows 11 Professionnel.

![alt text](images/25h2-installation-1785835546495.png)

Accepter le contrat de licence.

![alt text](images/25h2-installation-1785835566839.png)

L’espace de stockage non formaté est sélectionné, Suivant.

![alt text](images/25h2-installation-1785835586522.png)

On lance ensuite l’installation

![alt text](images/25h2-installation-1785835606326.png)

L’installation se lance.

![alt text](images/25h2-installation-1785835625964.png)

## Configuration post-installation

Après les redémarrages, il faut fournir les informations de personnalisation du système d’exploitation.

:::note
Les écrans varient en fonction des versions majeures de Windows 11.
:::

Choisir la région et la disposition du clavier.

![alt text](images/25h2-installation-1785837011665.png)

![alt text](images/25h2-installation-1785837031168.png)

![alt text](images/25h2-installation-1785837043413.png)

Nommer ensuite la machine (donnez-lui le même nom que votre VM).

![alt text](images/25h2-installation-1785837133614.png)

:::danger
Ne vous connectez pas à un compte Microsoft, il est fortement déconseillé d’utiliser un compte Microsoft pour des raisons de sécurité.
:::

Choisir l'option `Configurer pour le travail ou l'école` puis `Options de connexion`.

![alt text](images/25h2-installation-1785837281526.png)

![alt text](images/25h2-installation-1785837320702.png)

Sélectionner l'option `Joindre le domaine à la place` puis `Suivant`.

![alt text](images/25h2-installation-1785837365544.png)

Donner un nom d'utilisateur à la machine, puis un mot de passe.
Si vous ne renseignez pas de mot de passe, l’ouverture de session se fera directement sous Windows au démarrage (pas très sécurisé …).

![alt text](images/25h2-installation-1785837405124.png)

:::tip
Je vous conseille de tous créer un compte identique :
Login : `etudiant`
Mot de passe : `Etudiant_1234`
:::

![alt text](images/25h2-installation-1785837451567.png)

Il faut ensuite répondre aux questions de sécurité pour pouvoir récupérer le mot de passe si vous l’oubliez. (mettre toto à chaques réponses).

![alt text](images/25h2-installation-1785837472488.png)

Les questions servent à réinitialiser le mot de passe de l’utilisateur en cas d’oubli.

Plusieurs questions orientées sur la collecte de données s’enchainent, il faut sélectionner les plus restrictives :

![alt text](images/25h2-installation-1785837538056.png)

Le système va chercher des mises à jour et vous arriverez sur votre bureau.

![alt text](images/25h2-installation-1785838628972.png)