---
title: "Windows Server 2025 - Entra Connect"
tableOfContents: false
sidebar:
  label: "Windows Server - Entra connect"
date: 2025-12-17
tags:
    - Windows
authors:
 - Karim
featured: true
---
Aller sur le site Microsoft Entra pour télécharger le dernier client de synchronisation AzureADConnect.msi.

On commence par accepter les termes de la licence

![alt text](images/win2025-entra-1765995938626.png)

On va ensuite choisir la configuration rapide.

![alt text](images/win2025-entra-1765995954512.png)

On va nommer un utilisateur Administrateur

![alt text](images/win2025-entra-1765995961668.png)

Si vous avez l’erreur suivante :

![alt text](images/win2025-entra-1765995976675.png)

Il faut que l’authentification multifacteur soit activé sur le compte (rien à voir avec la version du navigateur) merci Microsoft 🙃

On va ensuite renseigner l’administrateur local

![alt text](images/win2025-entra-1765995986064.png)

On va continuer sans faire correspondre les suffixes UPN.

![alt text](images/win2025-entra-1765995993144.png)

Et on termine par lancer le processus de synchronisation.

![alt text](images/win2025-entra-1765996000513.png)

Voici les commandes PowerShell utile :

```bash
Lancer une synchro en delta :
Start-ADSyncSyncCycle -PolicyType Delta
 
Lancer une synchro complète :
Start-ADSyncSyncCycle -PolicyType Initial
 
Vérifier la dernière synchro :
Get-ADSyncScheduler
```

Une fois la configuration terminée, vous obtiendrez cette fenêtre
