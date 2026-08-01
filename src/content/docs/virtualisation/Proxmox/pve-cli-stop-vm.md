---
title: "Proxmox - Arreter une VM"
tableOfContents: false
sidebar:
  label: "PVE CLI - Arrêt d'une VM"
date: 2025-12-18
slug: pve-cli-stop-vm
tags:
    - Proxmox
authors:
 - Karim
featured: true
---
J’ai eu un souci, impossible de stopper une VM (ID 100).

Du coup, dans le shell, vous pouvez essayer ses commandes :

```bash
qm shutdown 100
```

![alt text](./images/pve-cli-stop-vm-1766072257804.png)

Si ça ne fonctionne pas, on peut tenter un arrêt brutal.

```bash
qm stop 100 --skiplock
```

La machine s’arrête bien.

On peut vérifier le statut de la VM avec la commande :

```bash
qm status 100
```

Si nécessaire, on peut supprimer le fichier lock

```bash
rm -f /var/lock/qemu-server/lock-100.conf
```