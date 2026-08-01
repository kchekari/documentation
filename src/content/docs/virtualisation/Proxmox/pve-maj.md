---
title: "Proxmox - Mise à jour"
tableOfContents: false
sidebar:
  label: "PVE - Mise à jour"
date: 2025-12-19
slug: pve-maj
tags:
  - Proxmox
authors:
  - Karim
featured: true
---
Proxmox VE est un hyperviseur basé sur un système Linux Debian.

Pour faire une mise à jour, il faut donc, dans un premier temps, mettre à jour la liste des paquets. Puis mettre à jour ceux qui disposent d’une version plus récente.

À noter que si vous n’avez pas d’abonnement, il faut désactiver les dépôts payant et ajouter le No-Subscription.

Dans un premier temps, nous allons sur notre serveur > Mises à jour > Rafraîchir.

![alt text](./images/pve-maj-1766151981071.png)

![alt text](./images/pve-maj-1766151987159.png)

On peut voir qu’il y a des différences entre la version actuelle et la version nouvelle. On peut lancer la mise à jour en cliquant sur le bouton « Mettre à jour ».

![alt text](./images/pve-maj-1766151994731.png)

Une fenêtre bien connue des Linuxiens vous demande de valider l’installation des paquets.

![alt text](./images/pve-maj-1766152000770.png)

On valide avec Y

La mise à jour, c’est bien terminé.

![alt text](./images/pve-maj-1766152008242.png)

Et il n’y a plus de mise à jour de proposée.

![alt text](./images/pve-maj-1766152014369.png)