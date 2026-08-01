---
title: "TrueNAS Legacy - LUN iSCSI"
tableOfContents: false
sidebar:
  label: "TrueNas 13.0 - LUN iSCSI"
date: 2025-12-02
tags:
  - TrueNAS
  - iSCSI
  - Windows Server
  - Windows Server 2025
authors:
 - Karim
featured: true
---
:::note
Installation version 13.0-U6.8
:::
Dans un dataset existant ou nouvellement créé, nous allons créer un volume iSCSI (LUN) afin de le partager avec un client.
Aller dans **Storage > Pools** puis sélectionner le pool dans lequel vous souhaitez créer le zVol.
- Donner un nom
- Une taille
- Compression Level : LZ4
- ZFS De-duplication : Désactivée
- Block size : 16K

![alt text](./images/image-3.png)

Le pool apparait maintenant avec le zVol créé.
![alt text](./images/image-4.png)

Aller dans **Sharing > Block Shares (iSCSI)** puis dans lancer le **Wizard**.
![alt text](./images/image-5.png)

Dans la première étape :
- Donner un nom au Target
- Définir le type sur Device
- Selectionner le zVol créé précédemment
- Sharing Plateforme : Modern OS car nous allons partager ce LUN avec une machine virtuelle récente.
Faire ensuite **Next**.

![alt text](./images/image-6.png)

Créer un nouveau portail en spécifiant l’IP de votre serveur TrueNas.
![alt text](./images/image-7.png)
Faire ensuite **Next**.

Faire Next à l’étape des initiateurs puis valider le résumé.

![alt text](./images/image-8.png)

Démarrer le service iSCSI dans **Services > iSCSI**.

![alt text](./images/image-10.png)

## Connexion depuis Windows Server 2025
Sur la machine Windows Server 2025, ouvrir le gestionnaire iSCSI (iSCSI Initiator) > Onglet Découverte.
![alt text](./images/image-9.png)

Connecter ensuite la cible iSCSI

![alt text](./images/image-11.png)

Dans le gestionnaire des disques, nous voyons maintenant le nouveau disque disponible.
![alt text](./images/image-12.png)
Il faut initialiser en créant une partition GPT avant de pouvoir l’utiliser.
Puis nous allons créér un nouveau volume simple que nous allons formater et lui affecter une lettre.

Le stockage apparait bien comme un disque local.

![alt text](./images/image-13.png)