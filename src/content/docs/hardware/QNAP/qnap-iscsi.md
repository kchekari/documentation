---
title: "QNAP - COnfiguration iSCSI"
tableOfContents: true
sidebar:
  label: "QNAP - iSCSI"
date: 2025-12-18
tags:
    - Proxmox
authors:
 - Karim
featured: true
---
Connexion sur le QNAP, on arrive sur l’interface de gestion.

![alt text](images/qnap-iscsi-1766046132613.png)

Dans Stockage et snapshots, on peut voir que les disques forment un volume de 60 To.

![alt text](images/qnap-iscsi-1766046138800.png)

On lance l’application Services iSCSI et Fibre Channel et on active les services.

![alt text](images/qnap-iscsi-1766046146186.png)

On peut utiliser l’assistant pour faire la configuration.

![alt text](images/qnap-iscsi-1766046155375.png)

On passe à l’écran suivant en utilisant le bouton Suivant :

![alt text](images/qnap-iscsi-1766046161327.png)

Il faut ensuite nommer la cible.

![alt text](images/qnap-iscsi-1766046167955.png)

On va ensuite activer l’authentification CHAP pour sécuriser la connexion.

![alt text](images/qnap-iscsi-1766046174219.png)

Puis, on choisit les adaptateurs Fibre Channel.

![alt text](images/qnap-iscsi-1766046180866.png)

Il ne reste plus qu’à appliquer la configuration.

![alt text](images/qnap-iscsi-1766046188322.png)

On va choisir ensuite le volume de stockage pour le LUN.

![alt text](images/qnap-iscsi-1766046195043.png)

Nous avons décidé d’allouer 40 To pour le LUN iSCSI (ce sera la destination des sauvegardes de notre Proxmox Backup Server).

![alt text](images/qnap-iscsi-1766046201219.png)

On termine l’installation.

![alt text](images/qnap-iscsi-1766046208119.png)

On peut voir la création du LUN dans le stockage iSCSI.

![alt text](images/qnap-iscsi-1766046215320.png)