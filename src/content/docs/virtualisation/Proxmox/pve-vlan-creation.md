---
title: "Proxmox - Création VLAN"
tableOfContents: false
sidebar:
  label: "PVE - Création VLAN"
date: 2025-12-18
slug: pve-vlan-creation
tags:
    - Proxmox
    - VLAN
authors:
 - Karim
featured: true
---
Pour créer un VLAN pour un étudiant par exemple, on peut aller sur un nœud de serveur et dans Système > Réseau > Créer Linux Bridge.

![alt text](./images/pve-vlan-creation-1766071710101.png)

Mettre le nom à votre VLAN.
En ports du pont, mettre le nom de la carte réseau puis le numéro de votre VLAN (séparé par un point).
Si vous voulez faire passer plusieurs VLAN sur ce bridge, vous devez cocher « Gère les VLAN ».

![alt text](./images/pve-vlan-creation-1766071717543.png)

On peut voir que le VLAN a été créé et le fichier /etc/network/interfaces a été mis à jour.

![alt text](./images/pve-vlan-creation-1766071732100.png)