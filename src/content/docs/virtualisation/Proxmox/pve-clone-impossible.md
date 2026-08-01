---
title: "Proxmox - Impossible de cloner sur un autre PVE"
tableOfContents: false
sidebar:
  label: "PVE - Clone impossible"
date: 2025-12-18
slug: pve-clone-impossible
tags:
    - Proxmox
authors:
 - Karim
featured: true
---
En voulant cloner une VM sur un autre PVE, je me suis aperçu que je n’ai pas le stockage DATASTORE-VM car il n’est pas partagé :

![alt text](./images/pve-clone-impossible-1766070149265.png)

Il faut editer le fichier /etc/pve/storage.cfg
```bash
nano /etc/pve/storage.cfg
 
lvmthin: datastore-vm
    thinpool thin_san
    vgname vg_san_md32xx
    content rootdir,images
    nodes pve11,pve12
    shared 1
```

Ajouter `shared 1`

Cette modification est appliquée sur les 3 serveurs en une seule modification.

Il faut ensuite redémarrer les services

```bash
systemctl restart pvedaemon
systemctl restart pveproxy
```

On réinitialise l’interface web et cela fonctionne.