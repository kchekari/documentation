---
title: "Proxmox - Droit d'accès aux ressources"
tableOfContents: false
sidebar:
  label: "PVE - Droit d'accès"
date: 2025-12-18
slug: pve-droit-pool
tags:
    - Proxmox
authors:
 - Karim
featured: true
---
Voici la procédure pour donner aux étudiants, uniquement accès à leurs ressources.

### Création d’un pool

Aller dans le centre de données > Pool puis créer

![alt text](images/pve-droit-pool-1766071507958.png)

Simplement lui donner un nom.

![alt text](images/pve-droit-pool-1766071515528.png)

Il apparaitra sur la gauche dans le menu « Vue Serveur ».

![alt text](images/pve-droit-pool-1766071526820.png)

Dans « Membres » il est possible de lui donner accès au stockage ou à des VM (une VM ne peut être que dans un pool).

![alt text](images/pve-droit-pool-1766071537711.png)

Dans notre cas, on va lui donner accès à DATASTORE-ISO et DATASTORE-VM.

Ensuite, il est possible de définir les permissions dans le pool ou dans le centre de données.

Pour chaque étudiant ou groupe d’étudiant, on va distribuer les droits suivants :

- Pool de l’étudiant : PVEPoolAdmin
- Pool de l’étudiant : PVEVMAdmin
- Sur son VLAN : PVESDNUser (Attention, il faut ajouter un /[NOM_DU_VLAN])
- Sur les datastores autorisés : PVEDatastoreUser

![alt text](images/pve-droit-pool-1766071562389.png)

Ainsi, il ne verra que ce qui est dans son pool avec les droits associés.

![alt text](images/pve-droit-pool-1766071587016.png)

Il n’aura accès qu’à son pool lors de la création d’une VM ou d’un conteneur.

![alt text](images/pve-droit-pool-1766071597139.png)

![alt text](images/pve-droit-pool-1766071603836.png)

L’étudiant ne voit que ses conteneurs ou VM.

![alt text](images/pve-droit-pool-1766071619451.png)