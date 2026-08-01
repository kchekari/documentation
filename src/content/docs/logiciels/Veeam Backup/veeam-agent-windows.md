---
title: "Veeam Agent pour Windows"
tableOfContents: true
sidebar:
  label: "Veeam Agent - Windows"
date: 2025-12-08
tags:
    - Windows
    - Veeam
    - Veeam Agent
    - Sauvegarde
authors:
 - Karim
featured: true
---
:::note
Fonctionnalité testé avec Windows Server 2025 et Veeam Agent for Windows 13.0
:::
La sauvegarde des postes de travail et des serveurs Windows est une tâche essentielle pour garantir la continuité des opérations et la protection des données critiques. Pour cela, la solution Veeam Agent for Microsoft Windows  propose de faire la sauvegarde aussi bien d’un ordinateur (client ou serveur) gratuitement !

https://www.veeam.com/send_license/backup-agent-windows-free/

La solution Veeam Agent for Microsoft Windows permet de sauvegarder avec trois méthodes :
    • L’ordinateur / serveur complétement y compris des périphériques USB.
    • Des disques de données entièrement. 
    • Des fichiers et/ou dossiers spécifiques présents sur la machine.
La restauration peut être complète ou pour simplement certains fichiers.

Les destinations des sauvegardes :
    • Stockage local (interne) de l’ordinateur / serveur protégé (non recommandé)
    • Stockage USB, eSATA ou Firewire, et les volumes RDM (Raw Device Mapping)
    • NAS via un partage SMB
    • SAN, tels que les volumes connectés iSCSI
    • Backup repository de Veeam Backup & Replication 11 
Stockage Microsoft OneDrive (à partir de Windows 7 SP1 et +)

## Installation de Veeam Agent for Windows :
### Téléchargement de Veeam Agent for Windows
https://www.veeam.com/send_license/backup-agent-windows-free/
![alt text](./images/image-1.png)
### Installation de Veeam Agent for Windows
Lancez le programme d’installation téléchargé et suivez les étapes ci-dessous :
Cliquez sur "Next" pour commencer l'installation.
![alt text](./images/image-2.png)
Acceptez le contrat de licence et cliquez sur "Next".
![alt text](./images/image-3.png)
L'installation se lance.
![alt text](./images/image-4.png)
Ne pas lancer la création du Recovery Media pour le moment.
![alt text](./images/image-5.png)

## Configuration de la sauvegarde avec Veeam Agent for Windows
Lancez Veeam Agent for Windows depuis la barre d'état ou le menu Démarrer.
![alt text](./images/image-6.png)
Nous utilisons la version gratuite sans licence donc choisir "No"
![alt text](./images/image-7.png)
Dans le menu, ajouter un job dans "Add new job…"
![alt text](./images/image-8.png)
Nommer le job de sauvegarde.
![alt text](./images/image-9.png)
Il faut maintenant choisir le mode de sauvegarde :
- La première étape (recommandée) est la sauvegarde intégrale de l'ordinateur.
- La seconde permet de sauvegarder une disque complet.
- La troisième réalise la sauvegarde de certains fichiers et dossiers.

Nous allons choisir la troisième option pour sauvegarder uniquement des fichiers et dossiers spécifiques.
![alt text](./images/image-10.png)
Ensuite, il faut choisir les fichiers et dossiers à sauvegarder.
![alt text](./images/image-11.png)
Il faut ensuite sélectionner la destination de la sauvegarde, on doit éviter le stockage sur un disque dur local, mais cette option permet aussi d'utiliser une clé USB ou un disque iSCSI.
Le Shared folder correspond à un partage réseau Samba
Le Veeam Backup Repository permet de lier l'agent au logiciel Veeam Backup & Replication.
Si vous avez un Onedrive de configuré, une option sera rajoutée.![alt text](./images/image-12.png)
Il faut maintenant renseigner le chemin du partage SMB.
![alt text](./images/image-13.png)
Dans les options avancées, on peut accéder à plus de paramètres comme le jour pour réaliser la sauvegarde complète, la compression, la vérification ou encore la défragmentation des sauvegardes.
![alt text](./images/image-14.png)
La dernière page permet de régler la planification de la sauvegarde.
![alt text](./images/image-15.png)
Sur la page de résumé, il est possible de lancer le job juste après sa création.
![alt text](./images/image-16.png)

## Gestion des sauvegardes
### Informations sur les sauvegardes
La sauvegarde se lance et affiche la progression.
![alt text](./images/image-17.png)
Une fois la sauvegarde terminée, on peut voir le rapport de sauvegarde.
Il est possible de confgigurer des alertes par email.
![alt text](./images/image-18.png)
![alt text](<images/image-166.png>)
La sauvegarde est bien stockée sur le NAS
![alt text](./images/image-19.png)
Nous pouvons voir les détails d'une sauvegarde en cliquant dessus :
![alt text](./images/image-21.png)
Lancer la sauvegarde trois fois et observer les fichiers créés sur le NAS.
![alt text](./images/image-20.png)
- Extension vbk : Sauvegarde Full
- Extension vib : Sauvegarde Incrémentielle
- Extension vbm : Fichier des metadatas est mis à jour à chaque session de tâche de sauvegarde. Il contient des informations sur l'ordinateur sur lequel la sauvegarde a été créée, chaque point de restauration de la chaîne de sauvegarde, la manière dont les points de restauration sont liés les uns aux autres, etc.

Le fichier de métadonnées de sauvegarde est requis pour effectuer des opérations de restauration au niveau du fichier et du volume.

### Restauration des fichiers avec Veeam Agent for Windows
Pour restaurer des fichiers, cliquez sur "Restore" dans le menu principal.
![alt text](./images/image-22.png)
Choisir la sauvegarde à restaurer.
![alt text](./images/image-23.png)
Puis, **OPEN** pour accéder aux fichiers sauvegardés.
![alt text](./images/image-24.png)
Nous avons accès aux fichiers sauvegardés et pouvons les restaurer.
![alt text](./images/image-25.png)