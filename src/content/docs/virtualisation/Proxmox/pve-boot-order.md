---
title: "Proxmox VE - VM Boot Order Configuration"
tableOfContents: true
sidebar:
  label: "PVE - Boot Order"
date: 2026-01-19
slug: pve-boot-order
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
Comme pour un ordinateur physique, il est possible de configurer l'ordre de démarrage (boot order) des machines virtuelles dans Proxmox VE. Cela permet de définir quel périphérique la VM doit tenter de démarrer en premier, que ce soit un disque dur virtuel, une image ISO, ou un périphérique réseau.

Par exemple, si nous souhaitons démarrer une VM à partir d'une image ISO pour installer un système d'exploitation ou démarrer sur un serveur PXE, nous devons configurer l'ordre de démarrage en conséquence.

Il faut aller dans les options de la VM, puis dans l'onglet "Options".

![alt text](./images/pve-boot-order-1768834258472.png)

Ensuite, nous sélectionnons "Boot Order" pour modifier l'ordre des périphériques de démarrage.

![alt text](./images/pve-boot-order-1768834319765.png)

Pour que le changement soit pris en compte, il est nécessaire d'arrêter la VM avant de modifier l'ordre de démarrage.

En démarrant la VM, elle tentera de démarrer sur le réseau si le PXE est configuré, puis sur le CD-ROM (image ISO), et enfin sur le disque dur virtuel.

![alt text](./images/pve-boot-order-1768835678214.png)

![alt text](./images/pve-boot-order-1768835749440.png)