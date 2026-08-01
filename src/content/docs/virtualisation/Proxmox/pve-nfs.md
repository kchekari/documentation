---
title: "Proxmox - Ajout d’un stockage NFS"
tableOfContents: false
sidebar:
  label: "PVE - Stockage NFS"
date: 2025-12-19
slug: pve-nfs
tags:
  - Proxmox
authors:
  - Karim
featured: true
---
L’idée est de pouvoir monter un partage NFS disponible sur le NAS afin de mettre à disposition des fichiers iso.

Dans un premier temps, pensez bien à vérifier que l’hôte est autorisé à se connecter au partage NFS.

![alt text](./images/pve-nfs-1766151822355.png)

On va ensuite dans "Centre de données" > Stockage > Ajouter > NFS

![alt text](./images/pve-nfs-1766151830076.png)

On va renseigner un nom, une IP, un dossier et enfin, un type de contenu disponible.

![alt text](./images/pve-nfs-1766151854497.png)

Dans un VM, le stockage permet bien de sélectionner un iso.

![alt text](./images/pve-nfs-1766151860773.png)

On notera toutefois que sur le NAS, un dossier template > iso a été créé (les iso doivent être dedans).

![alt text](./images/pve-nfs-1766151867026.png)