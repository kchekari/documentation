---
title: "TrueNas CE : Changement du mot de passe administrateur"
tableOfContents: false
sidebar:
  label: "TrueNas CE : Changement root password"
date: 2026-09-2&
tags:
    - TrueNas CE
    - Security
    - Password
authors:
 - Karim
featured: true
---
:::note
Version 25.04 / 25.10
:::

## Configuration depuis le CLI
La configuration IP peut se faire depuis le CLI (ligne de commande) en utilisant le choix 4 `Change local administrator password`.

![alt text](images/truenas-config-password-1790001724141.png)

:::caution
Attention, le clavier est en QWERTY, donc pour taper le mot de passe, il faut faire attention à la disposition des touches.
:::

Il faut ensuite choisir l'utilisateur pour lequel on veut changer le mot de passe (ici `truenas_admin`) puis taper le nouveau mot de passe deux fois pour le confirmer.

![alt text](images/truenas-config-password-1790001992927.png)

## Configuration depuis l'interface web

Il est également possible de configurer le mot de passe administrateur depuis l'interface web. Pour cela, il faut se connecter à l'interface web de TrueNas CE et aller dans `Credentials` puis `Users`.

![alt text](images/truenas-config-password-1790002107266.png)

On va ensuite editer l'utilisateur puis changer le mot de passe en le tapant deux fois pour le confirmer.

![alt text](images/truenas-config-password-1790002176521.png)