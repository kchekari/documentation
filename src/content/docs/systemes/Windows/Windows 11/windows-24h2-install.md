---
title: "Windows 11 24H2 : Installation"
tableOfContents: false
sidebar:
  label: "Windows 11 24H2 : Installation"
date: 2025-12-19
slug: windows-24h2-install
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
Après la création de la VM, Il faut la démarrer, n’ayant pas d’OS sur le disque, le démarrage est amorcé sur le lecteur CD/DVD.

Si le démarrage ne se fait pas automatiquement, il faut appuyer sur une touche du clavier (quand on est dans la VM)

![alt text](images/windows-24h2-install-1766155713440.png)

Astuce : Dans VMWare Workstation, pour sortir de la VM, vous pouvez appuyer sur CTRL + ALT sur le clavier.

Choisir la langue d’installation, Suivant

![alt text](images/windows-24h2-install-1766155733153.png)

Choisir le layout du clavier (Français)

![alt text](images/windows-24h2-install-1766155739027.png)

Choisir de réaliser une installation de Windows 11 et accepter de tout supprimer sur le disque dur.

![alt text](images/windows-24h2-install-1766155747132.png)

Vous arrivez sur le choix du système à installer, nous allons choisir Windows 11 Professionnel

![alt text](images/windows-24h2-install-1766155755001.png)

Accepter le contrat de licence.

![alt text](images/windows-24h2-install-1766155767241.png)

L’espace de stockage non formaté est sélectionné, Suivant

![alt text](images/windows-24h2-install-1766156719413.png)

On lance ensuite l’installation

![alt text](images/windows-24h2-install-1766156727805.png)

L’installation se lance

![alt text](images/windows-24h2-install-1766156764331.png)

## Configuration post-installation

Après les redémarrages, il faut fournir les informations de personnalisation du système d’exploitation.

Les écrans varient en fonction des versions majeures de Windows 11.

Choisir la région et la disposition du clavier.

![alt text](images/windows-24h2-install-1766156779794.png)
![alt text](images/windows-24h2-install-1766156790418.png)
![alt text](images/windows-24h2-install-1766156798813.png)

Nommer ensuite la machine (donnez-lui le même nom que votre VM).

![alt text](images/windows-24h2-install-1766156805099.png)

Choisir ensuite une configuration pour le travail ou l’école.

![alt text](images/windows-24h2-install-1766156812756.png)

:::caution
Par défaut, Windows propose une connexion depuis un compte Microsoft, ne surtout pas choisir cette option !!!!
:::

Sélectionner « option de connexion ».

![alt text](images/windows-24h2-install-1766156822011.png)

Puis, “Joindre un domaine à la place”.

![alt text](images/windows-24h2-install-1766156855451.png)

Puis donner un nom d’utilisateur « Etudiant »

![alt text](images/windows-24h2-install-1766156862096.png)

Windows vous demande un mot de passe, vous devez mettre « Etudiant_1234 » puis le taper une deuxième fois.

![alt text](images/windows-24h2-install-1766156877341.png)
![alt text](images/windows-24h2-install-1766156884966.png)

Si vous ne renseignez pas de mot de passe, l’ouverture de session se fera directement sous Windows au démarrage (pas très sécurisé …).

Vous devez ensuite répondre à trois questions de sécurité, sélectionner les trois premières et répondez « toto » à chaque fois.

![alt text](images/windows-24h2-install-1766156897077.png)
![alt text](images/windows-24h2-install-1766156904123.png)
![alt text](images/windows-24h2-install-1766156915880.png)

Les questions servent à réinitialiser le mot de passe de l’utilisateur en cas d’oubli.

Plusieurs questions orientées sur la collecte de données s’enchainent, il faut sélectionner les plus restrictives :

![alt text](images/windows-24h2-install-1766156930800.png)
![alt text](images/windows-24h2-install-1766156940412.png)
![alt text](images/windows-24h2-install-1766156949153.png)
![alt text](images/windows-24h2-install-1766156957530.png)
![alt text](images/windows-24h2-install-1766156966222.png)
![alt text](images/windows-24h2-install-1766156973228.png)

Le système va chercher des mises à jour et vous arriverez sur votre bureau.

![alt text](images/windows-24h2-install-1766156997098.png)

Vidéo d’installation de Windows 24h2

<iframe width="560" height="315" src="https://www.youtube.com/embed/vs0wKoWsTS4?si=kdHpLCdv89omQ0Vn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>