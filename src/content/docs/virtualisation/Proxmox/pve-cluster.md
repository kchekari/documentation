---
title: "Proxmox - Création d'un cluster"
tableOfContents: false
sidebar:
  label: "PVE - Cluster"
date: 2025-12-19
slug: pve-cluster
tags:
  - Proxmox
authors:
  - Karim
featured: true
---
Pour créer un cluster, il faut disposer d'au moins deux machines sous Proxmox VE (dans une version similaire si possible) et qu’elles soient capables de se joindre à travers le réseau auquel elles sont connectées. L’idéal est d’en avoir au moins trois : si l’une tombe, les deux autres disposent d’un « quorum » suffisant pour décider que faire.

Pour commencer, aller dans le Datacenter (centre de données) > Cluster > Create Cluster.

![alt text](./images/pve-cluster-1766150107429.png)

Dans cette fenêtre, il suffit de lui donner un nom et choisir la carte réseau pour la jonction.

Lorsque tout est validé, le cluster apparait, vous pouvez alors demander à voir ses « Join Information ».

![alt text](./images/pve-cluster-1766150123627.png)

Elles prennent la forme d'une clé qui est une forme encodée de l’adresse IP du serveur et de son empreinte, utilisées pour la connexion.

Dans l’interface des autres serveurs, on sélectionne Join Cluster et on peut simplement copier la clé pour remplir les champs automatiquement, ou le faire manuellement. Il faudra néanmoins connaitre le mot de passe administrateur (root) du serveur ayant initié le cluster pour finaliser la procédure.

![alt text](./images/pve-cluster-1766150144985.png)

Si tout s’est bien passé, après avoir rechargé la page (et une reconnexion), tous les serveurs (nœuds) apparaissent dans chaque interface, au sein de la section Datacenter du menu de gauche. On peut alors les gérer de manière unifiée, depuis l’un ou l’autre membre du cluster, sans distinction.

![alt text](./images/pve-cluster-1766150158779.png)

La section Summary affichera également les ressources de manière globale : stockage, mémoire, CPU, VM et conteneurs des nœuds y sont additionnés.
