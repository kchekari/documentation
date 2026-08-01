---
title: "pfSense - Installation sur Proxmox VE"
tableOfContents: false
sidebar:
  label: "pfSense - Installation"
---
:::note
Installation en utilisant Netgate pfSense Community Edition 2.8.1-RELEASE (amd64)
:::
![alt text](images/image-175.png)
Nous allons charger l’iso de NetGate Installer
![alt text](images/image-176-1024x568.png)
On accepte le contrat de licence
![alt text](images/image-177-1024x571.png)
Choisir l’installation
![alt text](images/image-178-1024x571.png)
Il faut configurer la connexion réseau
![alt text](images/image-179-1024x572.png)
On retrouve les deux cartes avec leur adresses mac correspondant dans Proxmox
![alt text](images/image-180-1024x571.png)
- La net0 (em0) sera l’interface WAN
- La net1 (em1) sera l’interface LAN
Nous allons tout laisser en DHCP car je suis en train de créer un modèle et nous pourrons le faire à la fin de l’installation.
:::caution
Le programme a besoin d’avoir Internet sur l’interface WAN.
:::
![alt text](images/image-181-1024x568.png)
On selectionne l’interface LAN
![alt text](images/image-182-1024x571.png)
On peut laisser le LAN en static
![alt text](images/image-183-1024x568.png)
On peut confirmer le paramétrage.
![alt text](images/image-184-1024x569.png)
pfSense se connecte sur les serveurs de Netgate et propose l’installation.
![alt text](images/image-185-1024x573.png)
On reste sur la configuration du système de fichier par défaut
![alt text](images/image-186-1024x569.png)
Sans rédondance, je n’ai mis qu’un disque de 32 go.
![alt text](images/image-187-1024x571.png)
![alt text](images/image-188-1024x570.png)
On efface tout
![alt text](images/image-189-1024x570.png)
On va sélectionner la version à installer
![alt text](images/image-190-1024x570.png)
Il ne nous reste plus qu’à attendre.
![alt text](images/image-191-1024x571.png)
L’installation est terminée
![alt text](images/image-192-1024x571.png)
![alt text](images/image-193-1024x571.png)