---
title: "Windows Server 2025 - Passer le clavier en français"
tableOfContents: false
sidebar:
  label: "Windows Server - Passer le clavier en français"
date: 2026-01-08
slug: win2025-kb-fr
tags:
    - Windows Server 2025
    - Windows Server
authors:
 - Karim
featured: true
---

## Par interface graphique

Pour passer le clavier en français sur Windows Server 2025, suivez les étapes ci-dessous :

1. Ouvrez les **Settings**.
2. Cliquez sur **Time & Language**.
3. Sélectionnez **Language & region**.

![alt text](./images/win2025-kb-fr-1767860474501.png)

4. Ajouter le **Français**.

![alt text](./images/win2025-kb-fr-1767860536993.png)

5. Nous pouvons maintenant basculer sur le clavier français en cliquant sur l'icône de langue dans la barre des tâches.

![alt text](./images/win2025-kb-fr-1767860654139.png)

## Par PowerShell

Vous pouvez également utiliser PowerShell pour ajouter la disposition de clavier française. Voici les commandes à exécuter :

```powershell
Set-WinUserLanguageList -LanguageList fr-FR
```

![alt text](./images/win2025-kb-fr-1767901028058.png)

Cette commande configure la langue de l'utilisateur en français (France) et ajoute la disposition de clavier française.
Il faut ensuite sortir de PowerShell pour bénéficier du clavier français.