---
title: "Ubuntu : configuration de l’adresse IP"
tableOfContents: false
sidebar:
  label: "Ubuntu - Config IP"
date: 2026-01-19
slug: ubuntu-config-ip
tags:
  - Linux
  - Ubuntu
authors:
  - Karim
featured: true
---
Cette documentation explique comment configurer une adresse IP statique sur un système Ubuntu. La configuration d'une adresse IP statique est essentielle pour les serveurs et les dispositifs qui nécessitent une adresse IP fixe pour assurer une connectivité réseau stable.

Aller dans le menu "Paramètres" d'Ubuntu en haut à droite de l'écran. **Filaire** vers la section "Réseau" puis **Paramètres filaires**.

![alt text](images/ubuntu-config-ip-1768816527818.png)

Aller dans les options réseaux

![alt text](images/ubuntu-config-ip-1768816562750.png)

Dans l'onglet "IPv4", sélectionner "Manuel" dans le menu déroulant "Méthode". Ensuite, entrer l'adresse IP souhaitée, le masque de sous-réseau et la passerelle.

![alt text](images/ubuntu-config-ip-1768816712556.png)

Il est possible d'activer/désactiver la carte réseau pour que les changements soient pris en compte.

![alt text](images/ubuntu-config-ip-1768816790760.png)

Si on retourne sur les paramètres réseau, on peut voir que l'adresse IP a bien été modifiée.

![alt text](images/ubuntu-config-ip-1768816816680.png)