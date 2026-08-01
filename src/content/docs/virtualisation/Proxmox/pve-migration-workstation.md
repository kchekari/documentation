---
title: "Proxmox VE - Conversion VM Workstation"
tableOfContents: false
sidebar:
  label: "PVE - Conversion VM Workstation"
date: 2025-12-17
tags:
    - Réseaux
    - VLAN
    - Huawei
authors:
 - Karim
featured: true
---
Le principe pour basculer une VM d’un environnement VMWare dans un environnement Proxmox est de créer une machine sans disque dur, migrer le disque puis l’attacher à la VM de destination.

Commencer par :
- Transférer le fichier VMDK sur le serveur PVE.
- Créer la VM de destination, sans disque dur.

### Conversion du disque dur VMDK

Utiliser la commande suivante :
```bash
qm importdisk 100 &lt;fichier_vmdk> &lt;datastore> --format qcow2

# Exemple :
qm importdisk 100 /tmp/SRV-SOPHOS-disk1.vmdk PROFS --format qcow2
```

![alt text](images/proxmox-migration-workstation-1765967130487.png)

Une fois converti, il faut l’attacher à la VM.

### Configuration de la VM

Le disque non utilisé apparait.

Il faut aller sur la VM et faire Add.

![alt text](images/proxmox-migration-workstation-1765967150428.png)

Dans le doute (car il s’agit d’une VM Sophos), nous allons choisir SATA pour le Bus/Device
![alt text](images/proxmox-migration-workstation-1765967160890.png)
Dans les Options > Boot Order, nous allons mettre le disque dans la séquence de boot.
![alt text](images/proxmox-migration-workstation-1765967170014.png)
Le VM démarre.
