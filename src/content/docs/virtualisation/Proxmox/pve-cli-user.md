---
title: "Proxmox CLI - Gestion des utilisateurs"
tableOfContents: false
sidebar:
  label: "PVE CLI - Les Utilisateurs"
date: 2025-12-17
tags:
    - Proxmox
authors:
 - Karim
featured: true
---

### Voir les utilisateurs

```bash
pveum user list
```

![alt text](images/pve-cli-user-1765995721113.png)

### Supprimer un utilisateur

```bash
pveum user delete utilisateur@realm
```

![alt text](images/pve-cli-user-1765995730888.png)

Ajouter un utilisateur :

```bash
pveum user add toto@pve --password votreMotDePasse
```
