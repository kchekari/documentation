---
title: "VMWare - Création VM Windows 11"
tableOfContents: false
sidebar:
  label: "Création VM Windows 11"
date: 2025-12-16
tags:
    - Windows
    - VMWare Workstation
authors:
 - Karim
featured: true
---
## Création d’une VM
Utiliser la barre de menu pour lancer la procédure de création d’une VM : File >New Virtual Machine …
![alt text](images/vmware-creation-win11-1765892049959.png)
La procédure « Custom » ajoute des options supplémentaires pour la création d’une nouvelle machine.
![alt text](images/vmware-creation-win11-1765892061982.png)
Choisir la compatibilité Workstation 17.x
![alt text](images/vmware-creation-win11-1765892073172.png)
Aller chercher l’iso du système d’exploitation à installer. l’OS est détecté automatiquement sinon il faut le préciser.
![alt text](images/vmware-creation-win11-1765894163246.png)
En fonction de la version de VMWare, il est possible de spécifier une clé produit, un utilisateur et un mot de passe, nous n’allons rien mettre.
Le nom et l’emplacement sont importants car vous serez plusieurs à utiliser l’ordinateur. La partition C: étant plus petite, il ne faut pas mettre de VM dessus.
Nommer la machine en commençant par votre nom.
Stocker la VM sur la deuxième partition D:  puis votre emplacement personnel.
![alt text](images/vmware-creation-win11-1765894182108.png)
Un répertoire sera automatiquement créé avec le nom de la VM.

### Configuration du vTPM

Windows 11 nécessite un processeur TPM.
VMWare Workstation a besoin de créer un vTPM encrypter afin de vous permettre de créer une VM Windows 11.
Utiliser l’option « generate » puis « copy ».
![alt text](images/vmware-creation-win11-1765894217944.png)

Sauvegarder la clé dans votre OneNote.

Le firmware de type UEFI permet de sécuriser le démarrage de la machine, car il nécessite un bootloader, un OS et des drivers signés.
![alt text](images/vmware-creation-win11-1765894227417.png)
L’option « Secure Boot » vous permet en plus de vous protéger contre les bootkits et les rootkits.
Afin d’éviter des restrictions inutiles pour une machine de test, restez sur un Bios traditionnel.
Il faut adapter la configuration aux caractéristiques de l’hôte et de la puissance requise par la VM.
Il faut laisser des ressources disponibles sur l’hôte pour la gestion de son système.
Avoir une cohérence de configuration pour optimiser la VM.
![alt text](images/vmware-creation-win11-1765894268025.png)
![alt text](images/vmware-creation-win11-1765894278896.png)
![alt text](images/vmware-creation-win11-1765894290045.png)
![alt text](images/vmware-creation-win11-1765894298073.png)
![alt text](images/vmware-creation-win11-1765894318868.png)
Créer un nouveau disque, il faut ensuite définir sa taille maximale en ne choisissant pas l’option « Allocate all disk space now ».
![alt text](images/vmware-creation-win11-1765894331569.png)
Choisir le stockage dans un seul fichier et une taille de disque de 100go.
![alt text](images/vmware-creation-win11-1765894369197.png)
![alt text](images/vmware-creation-win11-1765894384446.png)
Il est possible de modifier, ajouter d’autres composants avant de terminer la création de la VM (nous n’ajouterons rien).
![alt text](images/vmware-creation-win11-1765894391826.png)
![alt text](images/vmware-creation-win11-1765894421448.png)
La machine étant créé, il est maintenant possible de la démarrer en utilisant la barre de commande.
![alt text](images/vmware-creation-win11-1765894437149.png)
![alt text](images/vmware-creation-win11-1765894457301.png)

## Les Snapshots

Une mauvaise manipulation peut faire planter votre VM.
Les snapshots permettent de sauvegarder l’état d’une VM afin de pouvoir revenir en arrière.
![alt text](images/vmware-creation-win11-1765894472881.png)
![alt text](images/vmware-creation-win11-1765894481690.png)