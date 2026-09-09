---
title: "Debian : Ajouter un disque dur à un serveur Debian"
tableOfContents: false
sidebar:
  label: "Debian – Ajouter stockage"
date: 2026-09-09
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
Voici la procédure pour ajouter un disque dur à un serveur Debian.

:::note
Dans mon exemple, je vais rajouer un disque de 30 Go sur un serveur debian 13 virtualisé sous VMWare workstation.
:::

### Identifier le nouveau disque

Affichez les disques et partitions présents :

```bash
fdisk
```

![alt text](images/debian-add-disk-1788936074941.png)

Mon disque sera sdb, il est donc nécessaire de le formater et de le monter.

### Créer une partition sur le disque

Pour créer une partition sur le disque, utilisez la commande suivante :

```bash
fdisk /dev/sdb
```

![alt text](images/debian-add-disk-1788936344735.png)

Utiliser la commande `g` pour créer une nouvelle table de partitions GPT.
Il faut définir un numéro de partition puis renseigner le premier et le dernier secteur.

![alt text](images/debian-add-disk-1788936560031.png)

Il est possible de vérifier les modifications qui ont été faite pavec la commande `p`.

![alt text](images/debian-add-disk-1788936628778.png)

On enregistre ensuite les changements avec la commande w.

![alt text](images/debian-add-disk-1788936683907.png)

### Formater la partition

Pour formater la partition, utilisez la commande suivante :

```bash
mkfs.ext4 /dev/sdb1
```

![alt text](images/debian-add-disk-1788936752870.png)

### Monter la partition

Sous linux, il est nécessaire de créer un point de montage pour la partition. Pour cela, utilisez la commande suivante :

```bash 
mkdir /mnt/donnees
```

Montez /dev/sdb1 dans /mnt/donnees :

```bash
mount /dev/sdb1 /mnt/donnees
```

![alt text](images/debian-add-disk-1788936960473.png)

### Vérification

Pour voir la capacité disponible :

```bash
df -h /mnt/donnees
```

![alt text](images/debian-add-disk-1788937045256.png)