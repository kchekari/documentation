---
title: "Synology : Création d’un LUN pour ESXi"
tableOfContents: true
sidebar:
  label: "Création LUN iSCSI"
date: 2025-12-19
slug: syno-iscsi
tags:
  - Proxmox
authors:
  - Karim
featured: true
---
Sur mon serveur, j’ai un disque SSD de 2To, c’est très bien mais je n’en ai qu’un. En cas de panne, je vais donc perdre mes VMs. Sur mon réseau, j’ai un NAS Synology 920+ avec 4 disques en RAID. L’idée est donc de créer une LUN iSCSI sur mon NAS pour pouvoir stocker les VMs afin de bénéficier du RAID pour la protection des données.

## Création du LUN sur le Synology

Il faut installer le paquet iSCSI Manager, ce paquet existe sur tous les synology depuis au moins 10 ans. Lors du lancement, il faut aller dans l’onglet Target :

![alt text](images/syno-iscsi-1766152819735.png)

On va ensuite lancer le processus de création d’une nouvelle cible

Modifier le nom de la iSCSI Target

![alt text](images/syno-iscsi-1766152830951.png)

Choisir de créer un nouveau iSCSI LUN

![alt text](images/syno-iscsi-1766152847820.png)

On va ensuite lui donner son nom, son emplacement ainsi que sa capacité

![alt text](images/syno-iscsi-1766152864211.png)

Et on valide tout çà pour terminer la création du LUN.

![alt text](images/syno-iscsi-1766152887672.png)

Notre LUN est maintenant créé et disponible.

![alt text](images/syno-iscsi-1766152909220.png)

![alt text](images/syno-iscsi-1766152919980.png)

## Configuration dans l’ESXi

### Création du lien entre le NAS et l’ESXi

Il faut se rendre sur le serveur ESXi (7.0 dans mon cas) et aller dans la partie stockage.

![alt text](images/syno-iscsi-1766152942133.png)

Il faut activer le service et renseigner l’IP du Synology dans les cibles statiques et dynamique.

![alt text](images/syno-iscsi-1766152951439.png)

Dans l’onglet « périphériques », en cliquant sur « Réanalyser », une nouvelle ligne apparait. Elle correspond au LUN que nous avons mis en place.

![alt text](images/syno-iscsi-1766152967409.png)

### Création de la banque de données

Maintenant que le NAS est monté, nous allons ajouter une banque de données à notre serveur.

Le processus est une nouvelle fois très simple, il faut suivre l’assistant.

Nommer la nouvelle banques de données.

![alt text](images/syno-iscsi-1766152991937.png)

Choisir le Synology.

![alt text](images/syno-iscsi-1766153007339.png)

Dimensionner le stockage à utiliser.

![alt text](images/syno-iscsi-1766153021293.png)

Valider le processus de création.

![alt text](images/syno-iscsi-1766153070359.png)

La banque de données est maintenant accessible dans l’ESXi

![alt text](images/syno-iscsi-1766153090294.png)

## Déplacement des VMs

Dans le navigateur de banque de données, il est possible de déplacer les repertoires.

Sélectionner le dossier

![alt text](images/syno-iscsi-1766153124932.png)

Puis sa destination

![alt text](images/syno-iscsi-1766153134049.png)

Chargement depuis VMWare Workstation :

Lors de l’upload d’une machine sur l’ESXi, il est maintenant possible de sélectionner le datastore également.

![alt text](images/syno-iscsi-1766153147359.png)

![alt text](images/syno-iscsi-1766153158179.png)

![alt text](images/syno-iscsi-1766153166029.png)

Les VMs sont donc maintenant stockées sur le NAS et j’ai un SSD de 2 To inutile.

![alt text](images/syno-iscsi-1766153186189.png)