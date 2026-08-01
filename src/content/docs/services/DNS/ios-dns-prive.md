---
title: "IOS DNS Privé"
tableOfContents: false
sidebar:
  label: "IOS DNS Privé"
date: 2025-12-21
slug: ios-dns-prive
tags:
  - IOS
  - DNS
  - Iphone
authors:
  - Karim
featured: true
---
Dans cet article, nous allons explorer comment configurer un DNS privé sur un appareil iOS. Un DNS privé permet de sécuriser vos requêtes DNS en les chiffrant, ce qui empêche les tiers de surveiller votre activité en ligne.

Dans un premier temps, il faut disposé d'un serveur DNS (dans mon cas, AdGuard Home) et avoir un fichier `xxx.mobileconfig` pour configurer le DNS privé sur votre appareil iOS.

## Installation du profil de configuration

Pour installer le profil de configuration, vous devez d'abord transférer le fichier `xxx.mobileconfig` sur votre appareil iOS. Vous pouvez le faire via AirDrop, par e-mail ou en utilisant un service de stockage cloud.

Une fois que vous avez le fichier sur votre appareil, ouvrez-le.

Un message `Profil téléchargé` apparaîtra. Cliquez sur `Fermer`.

![alt text](images/ios-dns-prive-1781005353674.png)

Allez dans `Réglages` > `Général` > `VPN et gestion de l'appareil`.
Le profil téléchargé devrait apparaître dans la section `PROFIL Téléchargé`. Cliquez dessus.

![alt text](images/ios-dns-prive-1781005394742.png)

Puis cliquez sur `Installer` en haut à droite de l'écran.

![alt text](images/ios-dns-prive-1781005417650.png)

Validez l'installation du profil en entrant votre code de verrouillage si nécessaire, puis cliquez à nouveau sur `Installer` pour confirmer.

![alt text](images/ios-dns-prive-1781005449951.png)

Puis à nouveau sur `Installer` pour finaliser le processus.

![alt text](images/ios-dns-prive-1781005474928.png)

Le profil de configuration est maintenant installé.

![alt text](images/ios-dns-prive-1781005501604.png)

A vous un monde sans publicité et sans suivi !