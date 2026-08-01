---
title: "Ubuntu - Connexion à distance"
tableOfContents: true
sidebar:
  label: "Connexion à distance"
date: 2025-12-16
tags:
    - Windows Server
    - Virtualisation
authors:
 - Karim
featured: true
---
Comme pour Windows, il est possible d’activer l’accès à distance à la console.

Il faut installer le paquet openssh-server avec la commande :
```bash
carriat@B1-UBUNTU2:~$ sudo apt install openssh-server
```
Il faut ensuite ouvrir le logiciel PuTTy et saisir l’IP de la machine distante.
![alt text](./images/ubuntu-connexion-distant-1765896966188.png)
Lancer ensuite le logiciel PuTTy sur le PC hôte .
Saisir l’IP de votre machine virtuelle
![alt text](./images/ubuntu-connexion-distant-1765896973897.png)
Accepter la clé SSH
![alt text](./images/ubuntu-connexion-distant-1765896982943.png)
Vous pouvez vous identifier avec le compte créé précédemment.
![alt text](./images/ubuntu-connexion-distant-1765897015327.png)