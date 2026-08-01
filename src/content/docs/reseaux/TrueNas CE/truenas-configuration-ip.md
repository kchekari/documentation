---
title: "TrueNAS : Configuration IP"
sidebar:
  label: "Configuration IP"
---
:::note
Version 25.04
:::

## Configuration depuis le CLI
La configuration IP peut se faire depuis le CLI (ligne de commande) en utilisant le choix 1 "Configure Network Interfaces".

![alt text](images/image-4.png)

On va voir la liste des interfaces réseau disponibles.
on choisit l'interface à configurer (ici `ens18`).

![alt text](images/image-5.png)

On va passer par le DHCP, on choisit donc `n` pour ne pas utiliser le DHCP (appuyer sur la touche entrée pour valider).
Dans aliases, on va ajouter une adresse IP statique.
puis `save` pour valider les changements.

![alt text](images/image-6.png)

On applique la configuration avec "a" (attention, clavier QWERTY).
Puis "p" pour que la configuration soit persistante au redémarrage.
puis "q" pour quitter.

![alt text](images/image-7.png)

Dans le menu 2, on peut configurer la passerelle par défaut ainsi que les serveurs DNS.

![alt text](images/image-8.png)

## Configuration depuis l'interface web
On peut aussi configurer l'interface réseau depuis l'interface web.
Aller dans "Network" puis "Interfaces".
Cliquer sur l'interface à configurer (ici `ens18`).

Nous pouvons passer par le DHCP ou configurer une adresse IP statique.

![alt text](images/image-9.png)