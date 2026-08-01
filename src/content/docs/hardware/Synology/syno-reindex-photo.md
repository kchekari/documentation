---
title: "Synology - Réindexation des photos"
tableOfContents: false
sidebar:
  label: "Synology - Réindexation des photos"
date: 2025-12-17
tags:
    - Synology
authors:
 - Karim
featured: true
---
Dans Synology Photos, si vous souhaitez relancer l’indexation des photos, il faut se connecter en SSH puis lancer les commandes suivantes :

```bash
actraiser@TRUNKS:~$ cd /var/packages/SynologyPhotos/target/usr/bin
actraiser@TRUNKS:/var/packages/SynologyPhotos/target/usr/bin$ sudo ./synofoto-bin-index-tool -t reindex -i /var/services/homes/actraiser/Photos/
```

Voilà les options :

```bash
synofoto-bin-index-tool -i [path] -t [type] -o [operation]
path must start by /var/services/homes/ or other share volume path
type is one of
  [clear_missing, update_metadata, basic_reindex, reindex, repair_undone, basic, ]
operation is type of [rating, motion_photo]
 
Examples
=============
- Index missing directory or files
        synofoto-bin-index-tool -t basic -i /var/services/homes/admin/Photos/
        synofoto-bin-index-tool -t basic -i /volume1/photo
 
- Re-Index files will only scan file existance, do undone index stages and keep done indexed data
        synofoto-bin-index-tool -t basic_reindex -i /var/services/homes/admin/Photos/
 
- Re-Index files with clear all data like geocoding and face
        synofoto-bin-index-tool -t reindex -i /var/services/homes/admin/Photos/
 
- Repair undone index stage
        synofoto-bin-index-tool -t repair_undone -i /var/services/homes/admin/Photos/
 
- Update metadata which given by -o
        synofoto-bin-index-tool -t update_metadata -i /var/services/homes/admin/Photos/ -o rating
 
- Clear missing unit/folder
        synofoto-bin-index-tool -t clear_missing -i /var/services/homes/admin/Photos/
```