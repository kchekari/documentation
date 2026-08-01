---
title: "Debian : Gestion des utilisateur"
tableOfContents: false
sidebar:
  label: "Debian – useradd"
date: 2025-12-19
slug: debian-useradd
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---

## Ajout d'un utilisateur

La commande useradd permet de créer un nouvel utilisateur.
Pour le faire, les droits root sont nécessaires.

```bash
useradd -m <user>
```

L’option -m permet de créer son repertoire personnel.

Pour définir son mot de passe, il faut ensuite utiliser la commande passwd

![alt text](./images/debian-useradd-1766155381274.png)

## Supprimer un utilisateur

Pour supprimer un utilisateur, on utilise la commande userdel

```bash
sudo deluser nom_utilisateur
```
