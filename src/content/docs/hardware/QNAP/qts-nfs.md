---
title: "QNAP - Création d'un partage NFS"
tableOfContents: true
sidebar:
  label: "QNAP - NFS"
date: 2025-12-18
tags:
    - Proxmox
authors:
 - Karim
featured: true
---
Dans notre cas, nous allons avoir besoin de créer un partage NFS 4 afin que Proxmox puisse stocker les fichiers iso sur le NAS.

Dans le dossier Panneau de configuration, on va dans les dossiers partagés.

On va ensuite ajouter un partage « iso ».

![alt text](./images/qts-nfs-1766045726549.png)

On ne va pas créer de compte spécifique, l’authentification se fera par l’IP.

![alt text](./images/qts-nfs-1766045749350.png)

On termine par valider.

![alt text](./images/qts-nfs-1766045764038.png)

On va ensuite dans les autorisations du dossier partagé et on va définir, l’IP, un réseau ou tout le monde.

![alt text](./images/qts-nfs-1766045781638.png)

Par exemple :

![alt text](./images/qts-nfs-1766045792842.png)

Dans le panneau de configuration, nous allons activer le NFSv4.
Réseau et services > Win/Mac/NFS …
On active le service NFS et on sélectionne la v4.

![alt text](./images/qts-nfs-1766045802111.png)