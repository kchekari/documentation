---
title: "Moodle - Synchronisation Entra ID / Microsoft 365"
tableOfContents: false
sidebar:
  label: "Moodle - Synchronisation Entra ID"
date: 2026-09-20
tags:
    - Moodle
    - Linux
    - Update
authors:
 - Karim
featured: true
---

Moodle permet de synchroniser les utilisateurs et les groupes depuis Entra ID (anciennement Azure AD) vers Moodle. Cette synchronisation est particulièrement utile pour les établissements qui utilisent Microsoft 365, car elle permet de gérer les comptes utilisateurs de manière centralisée.

La solution Microsoft repose principalement sur deux plugins :

- auth_oidc [OpenID Connect Authentication](https://marketplace.moodle.com/plugins/auth_oidc) ;
- local_o365 → synchronisation Entra ID / Microsoft 365.

### Installation de OpenID Connect Authentication

Aller dans Administration du site > Plugins > Authentification > Installer un plugin. Rechercher le plugin OpenID Connect Authentication et cliquer sur Installer maintenant.

![alt text](images/synchro-m365-1789975425984.png)


