---
title: "Proxmox VE 8.3 - Installation"
tableOfContents: true
sidebar:
  label: "PVE - Installation 8.3"
date: 2025-12-16
tags:
    - Proxmox
authors:
 - Karim
featured: true
---
:::note
Fonctionnalité testé avec Proxmox VE 8.3
:::
Voici un guide d’installation pour Proxmox VE 8.3
Booter sur le média d’installation

Choisir **Install** Proxmox VE (Graphical)
![alt text](./images/pve-install-8-1765889591797.png)
Si votre machine est sur un serveur DHCP, elle va automatiquement récupérer sa configuration IP.
On commence par accepter les termes d’utilisation (EULA)
![alt text](./images/pve-install-8-1765889706257.png)
On sélectionne ensuite le stockage
![alt text](./images/pve-install-8-1765889768210.png)
On passe maintenant aux paramètres régionaux.
![alt text](./images/pve-install-8-1765889775086.png)
On va ensuite définir le mot de passe root ainsi que le mail de contact.
![alt text](./images/pve-install-8-1765889781884.png)
On lui donne ensuite un nom (à créer sur l’AD) ainsi qu’une IP, un masque et une passerelle.
NB : Les informations sont reprises du DHCP si il y en a un sur le réseau.
![alt text](./images/pve-install-8-1765889789041.png)
On valide les informations pour lancer l’installation.
![alt text](./images/pve-install-8-1765889825285.png)
L’installation se lance
![alt text](./images/pve-install-8-1765889866769.png)
Une fois l’installation terminée et le redémarrage réalisé, on peut se connecter dans le shell
![alt text](./images/pve-install-8-1765889878861.png)
ou depuis le navigateur.
![alt text](./images/pve-install-8-1765889887973.png)