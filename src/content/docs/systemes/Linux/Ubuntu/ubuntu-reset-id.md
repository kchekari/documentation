---
title: "Ubuntu : Réinitialiser l'id du système"
tableOfContents: false
sidebar:
  label: "Ubuntu - Réinitialiser ID"
date: 2026-01-19
slug: ubuntu-reset-id
tags:
  - Linux
  - Ubuntu
authors:
  - Karim
featured: true
---

Cette documentation explique comment réinitialiser l'id du système Ubuntu en utilisant la ligne de commande. La réinitialisation de l'id du système est utile lorsqu'il est nécessaire de restaurer les identifiants du système à leur valeur par défaut.

Ouvrir un terminal sur votre système Ubuntu. Vous pouvez le faire en appuyant sur `Ctrl + Alt + T` ou en recherchant "Terminal" dans le menu des applications.

Exécuter la commande suivante pour réinitialiser l'id du système :

```bash
sudo truncate -s 0 /etc/machine-id
sudo rm -f /var/lib/dbus/machine-id
sudo ln -s /etc/machine-id /var/lib/dbus/machine-id
```

Au prochain redémarrage, un nouvel id sera généré automatiquement. Pour redémarrer le système, utilisez la commande suivante :

```bash
sudo reboot
```