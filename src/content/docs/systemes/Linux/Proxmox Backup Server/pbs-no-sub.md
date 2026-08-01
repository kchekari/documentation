---
title: "Proxmox Backup Server - Installation sans licence"
tableOfContents: false
sidebar:
  label: "PBS - Installation sans licence"
date: 2026-02-04
slug: pbs-no-sub
tags:
  - Proxmox
authors:
  - Karim
featured: true
---
Proxmox Backup Server (PBS) est un logiciel de sauvegarde open-source développé par Proxmox. Il est conçu pour fournir une solution de sauvegarde efficace et fiable pour les environnements virtualisés, en particulier ceux utilisant Proxmox VE. PBS offre des fonctionnalités avancées telles que la déduplication des données, la compression, le chiffrement, et la gestion centralisée des sauvegardes.

L'installation de Proxmox Backup Server sans licence est possible, mais certaines fonctionnalités avancées et le support officiel de Proxmox ne seront pas disponibles. Voici les étapes pour installer PBS sans licence :

![alt text](./images/pbs-no-sub-1770200248724.png)

Il existe différentes méthodes pour basculer le dépôt officiel vers le dépôt sans licence. 

Nous pouvons utiliser le script disponible sur le Github de la communauté Proxmox [https://community-scripts.github.io/ProxmoxVE/scripts?id=post-pbs-install&ref=belginux.com](https://community-scripts.github.io/ProxmoxVE/scripts?id=post-pbs-install&ref=belginux.com)

Lancer la commande :

```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/post-pbs-install.sh)"
```

![alt text](./images/pbs-no-sub-1770200740876.png)

Il faut répondre **Yes** à toutes les questions.

![alt text](./images/pbs-no-sub-1770200835545.png)

A la fin du script, il est demandé de redémarrer le serveur.