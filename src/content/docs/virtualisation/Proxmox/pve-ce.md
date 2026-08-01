---
title: "Proxmox - Passer en version CE (Community edition)"
tableOfContents: false
sidebar:
  label: "PVE - Community edition"
date: 2025-12-19
slug: pve-ce
tags:
  - Proxmox
authors:
  - Karim
featured: true
---
Lors d’une installation « standard », Proxmox configure automatiquement les dépôts entreprise.

Pour passer sur une solution Community Edition (gratuite, mais hors maintenance) il faut modifier les dépôts.

Allez sur le serveur > Mises à jour > Dépôts.

![alt text](./images/pve-ce-1766152122798.png)

On va commencer par désactiver les dépôts Proxmox VE Entreprise.

![alt text](./images/pve-ce-1766152133216.png)

On va ensuite ajouter un dépôt « No-Subscription ».

![alt text](./images/pve-ce-1766152142316.png)

Le dépôt est automatiquement activé.

Vous avez noté qu’une alerte vous prévient qu’il n’est pas recommandé de l’utiliser en production.

![alt text](./images/pve-ce-1766152152667.png)