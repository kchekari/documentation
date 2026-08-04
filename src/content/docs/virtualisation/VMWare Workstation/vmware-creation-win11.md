---
title: "VMWare - Création VM Windows 11"
tableOfContents: false
sidebar:
  label: "Création VM Windows 11"
date: 2025-12-16
lastUpdated: 2026-08-03
tags:
    - Windows
    - VMWare Workstation
authors:
 - Karim
featured: true
---
## Création d'une machine virtuelle Windows 11 sur VMWare Workstation

Utiliser la barre de menu pour lancer la procédure de création d’une VM : File >New Virtual Machine …

![alt text](images/vmware-creation-win11-1785834988644.png)

La procédure « Custom » ajoute des options supplémentaires pour la création d’une nouvelle machine, nous allons rester sur "Typical".

![alt text](images/vmware-creation-win11-1785835012483.png)

Ne pas insérer l'iso immédiatement afin d'éviter les options de configuration automatique.

![alt text](images/vmware-creation-win11-1785835025455.png)

Choisir ensuite le système d'exploitation qui sera utilisé.

![alt text](images/vmware-creation-win11-1785835048837.png)

Le nom et l’emplacement sont importants car vous serez plusieurs à utiliser l’ordinateur. **La partition C: étant plus petite, ne mettez pas de VM dessus.**

- Nommer la machine en commençant par votre nom.
- Stocker la VM sur la deuxième partition D:  puis votre emplacement personnel.

Un répertoire sera automatiquement créé avec le nom de la VM.

![alt text](images/vmware-creation-win11-1785835084858.png)

## Configuration du vTPM

Windows 11 nécessite un processeur TPM.

VMWare Workstation a besoin de créer un vTPM encrypter afin de vous permettre de créer une VM Windows 11.

Utiliser l’option « generate » puis « copy ».

:::note
Sauvegarder la clé dans votre OneNote.
:::

![alt text](images/vmware-creation-win11-1785835189080.png)

Créer un nouveau disque, il faut ensuite définir sa taille maximale en ne choisissant pas l’option « Allocate all disk space now ».

Choisir le stockage dans un seul fichier et **une taille de disque de 100go**.

![alt text](images/vmware-creation-win11-1785835210521.png)

Il est possible de modifier, ajouter d’autres composants avant de terminer la création de la VM (nous n’ajouterons rien).

![alt text](images/vmware-creation-win11-1785835235362.png)

- Augmenter le nombre de CPU à 4.
- Augmenter la RAM à 6 Go.
- Charger le fichier ISO de Windows 11.

![alt text](images/vmware-creation-win11-1785835269674.png)

La machine étant créée, il est maintenant possible de la démarrer grâce à la barre de commande.

![alt text](images/vmware-creation-win11-1785835288127.png)

![alt text](images/vmware-creation-win11-1785835299864.png)

## Les Snapshots

Une mauvaise manipulation peut faire planter votre VM.

Les snapshots permettent de sauvegarder l’état d’une VM afin de pouvoir revenir en arrière.

![alt text](images/vmware-creation-win11-1785835321668.png)

![alt text](images/vmware-creation-win11-1785835328463.png)

![alt text](images/vmware-creation-win11-1785835335082.png)