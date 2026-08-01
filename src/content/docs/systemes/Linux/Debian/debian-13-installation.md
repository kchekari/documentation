---
title: "Debian 13 - Installation"
sidebar:
  label: "Debian 13 - Installation"
---
## PRÉPARATION DE L’INSTALLATION
Télécharger l’image ISO de Debian 13 depuis le site officiel : https://www.debian.org/distrib/
Graver l’image ISO sur un DVD ou créer une clé USB bootable avec un logiciel comme Rufus (https://rufus.ie/).
Insérer le DVD ou la clé USB dans la machine où vous souhaitez installer Debian 13 et démarrer dessus. Il peut être nécessaire de modifier l’ordre de démarrage dans le BIOS/UEFI de la machine.
## INSTALLATION DE DEBIAN 13
Lors que la machine démarre sur le DVD, vous arrivez sur le menu d’installation, choisir Graphical Install
![alt text](images/image-92.png)
Choisir ensuite la langue française
![alt text](images/image-93.png)
Ainsi que la situation géographique : France
![alt text](images/image-94.png)
Configurer le clavier : Français
![alt text](images/image-95.png)
Nommer la machine
![alt text](images/image-96.png)
Passer l’étape du domaine
![alt text](images/image-97.png)
Si votre machine a un serveur DHCP sur son réseau, elle sera configurée automatiquement.
Saisir le mot de passe de l’utilisateur root deux fois pour confirmation
![alt text](images/image-98-1.png)
Créer un utilisateur
![alt text](images/image-99.png)
Son login
![alt text](images/image-100.png)
Et lui définir son mot de passe
![alt text](images/image-101.png)
Pour la configuration du disque, nous choisissons le disque entier
![alt text](images/image-102.png)
Et on sélectionne le disque dur
![alt text](images/image-103.png)
On valide le partitionnement par défaut
![alt text](images/image-104.png)
On accepter l’organisation proposée
![alt text](images/image-105.png)
Il faut accepter le changement oui
![alt text](images/image-106.png)
L’installation se lance.

## CONFIGURATION DU GESTIONNAIRE DE PAQUETS
On choisit de ne pas analyser un autre média.
![alt text](images/image-107.png)
Il faut bien lui demander d’analyser un miroir sur le réseau, sinon, le sources.list sera vide.
![alt text](images/image-108.png)
Du coup, nous allons choisir des dépôts proches, France
![alt text](images/image-109.png)
Sur les dépôts officiel
![alt text](images/image-110.png)
Si le réseau n’a pas de proxy, passez l’étape
![alt text](images/image-111.png)
Nous choisissons de ne pas participé à la collecte de statistiques, surtout sur une machine de test.
![alt text](images/image-112.png)

## CHOIX DES PAQUETS
En fonction de la puissance de la machine, Debian vous propose d’installer plusieurs paquets, nous allons nous contenter des utilitaires usuels du système.
![alt text](images/image-113.png)
NB : Sur une installation sans interface graphique, il faut appuyer sur [ESPACE] pour sélectionner/désélectionner un répertoire.
On choisit d’installer GRUB comme programme de démarrage
![alt text](images/image-114.png)
On sélectionne sda pour l’installation de GRUB
![alt text](images/image-115.png)
L’installation est terminée, on peut retirer le média et redémarrer !
![alt text](images/image-116.png)