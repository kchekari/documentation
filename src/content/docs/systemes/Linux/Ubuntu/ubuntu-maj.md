---
title: "Ubuntu : Mise à jour du système"
tableOfContents: false
sidebar:
  label: "Ubuntu - Mise à jour"
date: 2026-01-19
slug: ubuntu-maj
tags:
  - Linux
  - Ubuntu
authors:
  - Karim
featured: true
---

Cette documentation explique comment mettre à jour un système Ubuntu en utilisant la ligne de commande. La mise à jour régulière du système est essentielle pour garantir la sécurité, la stabilité et l'accès aux dernières fonctionnalités.

Ouvrir un terminal sur votre système Ubuntu. Vous pouvez le faire en appuyant sur `Ctrl + Alt + T` ou en recherchant "Terminal" dans le menu des applications.

Mettre à jour la liste des paquets disponibles en exécutant la commande suivante :

```bash
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
``` 