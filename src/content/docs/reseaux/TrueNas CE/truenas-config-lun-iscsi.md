---
title: "TrueNAS - Configuration LUN iSCSI"
tableOfContents: false
sidebar:
  label: "Configuration LUN iSCSI"
---
Un LUN (Logical Unit Number) iSCSI est une unité de stockage logique présentée par un serveur de stockage (comme TrueNAS) à un client (comme un serveur ou une machine virtuelle) via le protocole iSCSI. Il permet aux clients d'accéder à des ressources de stockage distantes comme s'il s'agissait de disques locaux.

## Ajout d'un volume de stockage pour iSCSI
Avant de créer un LUN iSCSI, il est nécessaire d'avoir un volume de stockage configuré sur TrueNAS. Nous allons créer un volume ZFS dédié à l'iSCSI.
Aller dans le menu Storage > Add zVol.
![alt text](images/image-26.png)
Nous allons créer un zVol nommé "LUN-ISCSI" avec une taille de 100 Go.
![alt text](images/image-27.png)
Nous sauvegardons la configuration.
Nous avons donc un volume ZFS prêt à être utilisé pour le LUN iSCSI.
![alt text](images/image-28.png)

## Configuration d'un LUN iSCSI sur TrueNAS
Nous allons aller dans le menu Shares > Block (iSCSI) > LUNs pour créer un nouveau LUN iSCSI en utilisant l'assistant.
![alt text](images/image-23.png)
On choisit de créer une nouvelle cible iSCSI.
![alt text](images/image-25.png)
Il faut ensuite lui donner un nom, sélectionner le zVol créé précédemment et définir la taille du LUN.
![alt text](images/image-29.png)
Créer un nouveau portail iSCSI. Lui donner son IPv4 (adresse IP de l'interface réseau de TrueNAS) et le port 3260 et laisser la partie initiator vide pour autoriser tous les initiators.
![alt text](images/image-30.png)
On démarre le service iSCSI dans le menu Services.

## Connexion au LUN iSCSI depuis un client Windows Server
Sur le client Windows Server, ouvrir le gestionnaire iSCSI (iSCSI Initiator).
![alt text](images/image-31.png)
Dans l'onglet Découverte, ajouter l'adresse IP de TrueNAS pour découvrir les cibles iSCSI disponibles.
![alt text](images/image-32.png)
Dans l'onglet Cibles, sélectionner la cible iSCSI découverte et cliquer sur Connexion.
![alt text](images/image-37.png)
![alt text](images/image-44.png)

Le LUN iSCSI est maintenant connecté au client Windows Server.

![alt text](images/image-45.png)

## Initialisation et formatage du LUN iSCSI sous Windows Server
Ouvrir le gestionnaire de disques (diskmgmt.msc) sur le client Windows Server.
Le nouveau disque iSCSI devrait apparaître comme un disque non initialisé.
![alt text](images/image-46.png)
Initialiser le disque en choisissant le style de partition GPT.
Créer un nouveau volume simple, formater le disque avec le système de fichiers NTFS et lui attribuer une lettre de lecteur.
Le LUN iSCSI est maintenant prêt à être utilisé sur le client Windows Server.


