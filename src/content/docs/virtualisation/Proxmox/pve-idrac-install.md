---
title: "Proxmox : Installation depuis iDRAC"
tableOfContents: false
sidebar:
  label: "PVE - iDRAC Installation"
slug: pve-idrac-install
---

Voici la procédure détailler pour installer ProxMox 9.0.1 depuis une iDRAC sur un serveur DELL PowerEdge R660xs.

Lorsque vous vous connectez sur l’iDRAC, vous avez accès à une console virtuelle en bas à droite.
![alt text](images/pve-idrac-install-1765879851457.png)
Lorsqu’on lance la console virtuelle, nous allons charger le fichier iso depuis notre poste de travail.

On va cliquer sur Média Virtuel (1) puis sélectionner l’iso (2) et enfin, on mappe le périphérique (3).
![alt text](images/pve-idrac-install-1765879896352.png)
Si tout c’est bien passé, nous devons voir le fichier iso de monté
![alt text](images/pve-idrac-install-1765879912282.png)
Pour l’installation d’un OS, il est préférable de l’installer en lançant le Lifecycle Controller afin de charger les pilotes du serveur.

Vous pouvez le lancer depuis le Boot Manager :
![alt text](images/pve-idrac-install-1765879937229.png)
Soit depuis le menu Démarrer en choisissant un démarrage sur le Lifecycle Controller
![alt text](images/pve-idrac-install-1765879962542.png)
Puis, on redémarre avec le menu puissance
![alt text](images/pve-idrac-install-1765879998388.png)
L’ordinateur redémarre sur le Lifecycle Controller
![alt text](images/pve-idrac-install-1765880011515.png)
On arrive sur un assistant d’installation, choisir le clavier Français
![alt text](images/pve-idrac-install-1765880027652.png)
On va ensuite valider l’étape suivante.
![alt text](images/pve-idrac-install-1765880036363.png)
Puis nous allons définir la configuration IP de l’OS.
![alt text](images/pve-idrac-install-1765880047910.png)
On termine par valider la configuration
![alt text](images/pve-idrac-install-1765880056550.png)
Dans le menu Lifecycle Controller, nous allons séléctionner l’option OS Deployment
![alt text](images/pve-idrac-install-1765880066145.png)
On ne s’occupe pas du RAID et on passe au déploiement.
![alt text](images/pve-idrac-install-1765880077804.png)
On laisse les premières options par défaut et on sélectionne Any Other Operating System
![alt text](images/pve-idrac-install-1765880094661.png)
Nous choisissons ensuite une installation manuelle.
![alt text](images/pve-idrac-install-1765880105420.png)
On va ensuite choisir le média que nous avons monté
![alt text](images/pve-idrac-install-1765880118014.png)
On termine l’assistant et l’installation se lance.
![alt text](images/pve-idrac-install-1765880127327.png)
On arrive sur une installation »classique » de Proxmox.
![alt text](images/pve-idrac-install-1765880138950.png)
Proxmox est installé.
![alt text](images/pve-idrac-install-1765880158189.png)