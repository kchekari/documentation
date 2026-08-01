---
title: "Proxmox - TrueNas : Disks have duplicate serial numbers"
tableOfContents: false
sidebar:
  label: "PVE - Truenas Duplicate Serial"
date: 2026-03-06
slug: pve-duplicate-serial
tags:
    - Proxmox
    - TrueNas
authors:
 - Karim
featured: true
---

```bash
Disks have duplicate serial numbers: None (sda, sdb, sdc)
```

Si vous utilisez Proxmox VE avec TrueNAS, vous pourriez rencontrer une erreur indiquant que les disques ont des numéros de série en double. Cette erreur peut survenir lorsque Proxmox VE détecte plusieurs disques avec le même numéro de série, ce qui peut causer des problèmes de gestion des disques et de performance.

La veritable erreur est que lors de la création d'un disque, il n'y a pas de numéro de serie. Deux disques sans numéro de série sont considérés comme ayant des numéros de série en double. Pour résoudre ce problème, vous pouvez suivre les étapes suivantes :

1. Eteindre la machine virtuelle concernée.
2. Modifier le fichier de configuration de la machine virtuelle (généralement situé dans /etc/pve/qemu-server/).

```bash
nano /etc/pve/qemu-server/<vmid>.conf
```

3. Rechercher les lignes correspondant aux disques (par exemple, "scsi0", "scsi1", etc.) et ajouter un numéro de série unique pour chaque disque. Par exemple :

```bash
scsi0: local-lvm:vm-XXX-disk-0,serial=truenas-disk0
scsi1: local-lvm:vm-XXX-disk-1,serial=truenas-disk1
scsi2: local-lvm:vm-XXX-disk-2,serial=truenas-disk2
```

4. Enregistrez les modifications et redémarrez la machine virtuelle.

Si le serveur hôte est VMWare ESXi, vous pouvez également ajouter un numéro de série unique pour chaque disque dans la configuration de la machine virtuelle.

[https://knowledge.broadcom.com/external/article?legacyId=52815](https://knowledge.broadcom.com/external/article?legacyId=52815)

1. Click VM Options tab, and select Advanced.
2. Click Edit Configuration in Configuration Parameters.
3. Click Add parameter.
4. In the Key column, type disk.EnableUUID.
5. In the Value column, type TRUE.
6. Click OK and click Save.
7. 92.168.Power on the virtual machine
