---
title: "Windows Core - Renommer"
tableOfContents: false
sidebar:
  label: "Windows Core - Renommer"
date: 2025-12-21
slug: wincore-rename
tags:
  - Windows
authors:
  - Karim
featured: true
---

Pour renommer un serveur Windows Core, depuis l'interface SConfig, sélectionnez l'option **2) Computer Name**.

![alt text](./images/wincore-rename-1767902008889.png)

Puis, nommer le serveur.

![alt text](./images/wincore-rename-1767902044151.png)

Il faudra ensuite redémarrer le serveur pour que le changement de nom prenne effet.

Sinon, vous pouvez utiliser la commande PowerShell suivante :

```powershell
Rename-Computer -NewName "NOUVEAU_NOM_DU_SERVEUR" -Restart
```

Remplacez `"NOUVEAU_NOM_DU_SERVEUR"` par le nom souhaité pour votre serveur. L'option `-Restart` redémarrera automatiquement le serveur après le changement de nom pour que la modification prenne effet.
Après le redémarrage, vous pouvez vérifier que le nom du serveur a bien été modifié en utilisant la commande suivante :

```powershell
$env:COMPUTERNAME
```

Cela affichera le nom actuel du serveur.