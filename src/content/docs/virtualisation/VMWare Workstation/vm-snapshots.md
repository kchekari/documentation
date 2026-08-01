---
title: "VMWare Workstation - Gestion des snapshots"
tableOfContents: false
sidebar:
  label: "Les Snapshots"
date: 2025-12-16
tags:
    - Windows
authors:
 - Karim
featured: true
---
Dans un environnement virtuel comme VMware Workstation, les snapshots sont des points de sauvegarde instantanés d’une machine virtuelle à un moment donné. Ils enregistrent l’état complet du système (disque, mémoire, configuration), ce qui permet de revenir facilement en arrière si un test ou une manipulation provoque un problème. L’intérêt est particulièrement fort dans un cadre pédagogique ou de test : les étudiants peuvent expérimenter des installations de logiciels, des configurations réseau ou des manipulations système sans crainte d’endommager définitivement la machine. En cas d’erreur, il suffit de restaurer le snapshot pour retrouver la machine dans son état initial. C’est donc un outil idéal pour apprendre, tester et valider des scénarios en toute sécurité.

Faire un Snapshot du système actuel
![alt text](images/vm-snapshots-1765900417509.png)
En bas à gauche, vous pouvez voir l’avancement du Snapshot.
Ajouter un logiciel (exemple firefox) et copier un fichier sur la VM (un iso par exemple).
![alt text](images/vm-snapshots-1765900433994.png)
Restaurer le Snapshot au point de sauvegarde précédent.
![alt text](images/vm-snapshots-1765900448367.png)
Le fichier et Firefox ont disparus.