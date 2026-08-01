---
title: "Proxmox - Installation 9.0"
tableOfContents: false
sidebar:
  label: "PVE - Installation 9.0"
date: 2025-12-17
slug: pve-install
tags:
    - Proxmox
authors:
 - Karim
featured: true
---
:::tip
Installation de Proxmox v9.0/9.1 sur serveur Dell PowerEdge
:::
Démarrer sur l'iso puis choisir Install Proxmox VE (Graphical).

![alt text](./images/pve-install-1766064281672.png)

Accepter le contrat de licence  (EULA)

![alt text](./images/pve-install-1766064326730.png)

On sélectionne ensuite le stockage

![alt text](./images/pve-install-1766064430360.png)

On passe maintenant aux paramètres régionaux.

![alt text](./images/pve-install-1766064437306.png)

On va ensuite définir le mot de passe root ainsi que le mail de contact.

![alt text](./images/pve-install-1766064443310.png)

On lui donne ensuite un nom (à créer sur l’AD) ainsi qu’une IP, un masque et une passerelle.
NB : Les informations sont reprises du DHCP si il y en a un sur le réseau.

![alt text](./images/pve-install-1766064449176.png)

On valide les informations pour lancer l’installation.

![alt text](./images/pve-install-1766064455003.png)

L’installation se lance

![alt text](./images/pve-install-1766064461285.png)

Une fois l’installation terminée et le redémarrage réalisé, on peut se connecter dans le shell

![alt text](./images/pve-install-1766064467351.png)