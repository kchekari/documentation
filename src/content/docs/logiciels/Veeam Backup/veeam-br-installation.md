---
title: "Veeam Backup & Replication - Windows"
tableOfContents: true
sidebar:
  label: "Veeam B&R"
date: 2025-12-11
tags:
    - Windows
    - Veeam
    - Veeam Agent
    - Sauvegarde
authors:
 - Karim
featured: true
---
![alt text](./images/image-41.png)
:::note
Fonctionnalité testée avec Windows Server 2025 et Veeam Backup & Replication 13
:::
<https://www.veeam.com/fr/products/free/backup-recovery.html>

Lien vers le fichier iso `version 13.0.1.180`

<https://download2.veeam.com/VBR/v13/VeeamBackup&Replication_13.0.1.180_20251130.iso>

## Installation

### Création d'un compte de service

Il est préférable de créer un compte de service pour l'utilisateur Veeam :

![alt text](./images/image-53.png)

Avec un mot de passe qui n'expire jamais.

![alt text](./images/image-54.png)

Monter l'iso sur votre système Windows et lancer le fichier `Setup.exe`
![alt text](./images/image-40.png)
Cliquer sur **INSTALL**
![alt text](./images/image-42.png)
Choisir d'installer **Veeam Backup & Réplication**
![alt text](./images/image-43.png)
Accepter le contrat de licence
![alt text](./images/image-44.png)
Nous allons utiliser la version CE (Community Edition) qui est limitée à 10 instances mais c'est largement suffisant pour nous **Next**.
![alt text](./images/image-45.png)
Le logiciel lance une verification des pré-requis.
![alt text](./images/image-46.png)
Personnaliser l'installation avec le compte de service créé.
![alt text](./images/image-55.png)
Un résumé s'affiche avant de lancer l'installation.
Il est possible de personnaliser la configuration.
Pour basculer sur le compte de service par exemple. Cliquer sur **Install** et patienter.
![alt text](./images/image-56.png)

:::caution
Si Veeam Azure Service ne veut pas démarrer, vous pouvez le faire manuellement depuis **services.msc**.
:::
![alt text](./images/image-48.png)

## Lancement de Veeam Backup & Replication

Un raccourci a été ajouté sur votre bureau.
Vous devez choisir de vous connecter sur localhost (la console vous permet de vous connecter également sur des serveurs distants).
![alt text](./images/image-51.png)
Il faut accepter le certificat SSL auto-signé.
![alt text](./images/image-52.png)
Connectez-vous avez un utilisateur qui a des droits `veeam.backup`.
![alt text](./images/image-57.png)

## Configuration de Veeam Backup & Replication

### Gestion des utilisateurs et des rôles

Menu > Users ans Roles
![alt text](./images/image-58.png)
Ajout d'un nouvel utilisateur pour voir les listes de rôles
![alt text](./images/image-59.png)

- Veeam Restore Operator : Restauration des sauvegardes ou des réplicats existants.
- Veeam Backup Viewer : Visualisation de toute l’infrastructure de sauvegarde (configuration et exécution des jobs).
- Veeam Backup Operator : Démarrage et arrêt des jobs existants.
- Veeam Backup Administrator : Exécution de toutes les opérations d’administration sur l’ensemble des composants.

### Ajout d'un repository NFS

Dans le menu **Backup Infrastructure**, cliquer sur **Backup Repositories**.
![alt text](./images/image-60.png)
Choisir un stockage réseau.
![alt text](./images/image-61.png)
Vous avez le choix entre un partage SMB ou NFS. Nous allons choisir NFS.
![alt text](./images/image-62.png)
Nommer le repertoire de sauvegarde.
![alt text](./images/image-63.png)
Donner le chemin NFS de l'emplacement de stockage, un test de connexion est fait.
![alt text](./images/image-64.png)
Si le test fonctionne, vous devez voir la capacité de stockage de votre partage.
![alt text](./images/image-65.png)
Ne rien changer > **Next**
![alt text](./images/image-66.png)
Ne rien changer > **Apply**
![alt text](./images/image-67.png)
Lancer la création
![alt text](./images/image-68.png)
Puis **Finish**
![alt text](./images/image-69.png)
Mettre le dépôt en dépôt principal
![alt text](./images/image-70.png)

### Ajouter un serveur à l'infrastructure

Dans la section **Backup Infrastructure** > **Microsoft Windows** > **Add**
![alt text](./images/image-71.png)
Saisir le nom DNS ou l'IP du serveur
![alt text](./images/image-72.png)
Renseigner l'identifiant et le mot de passe du compte à privilège
![alt text](./images/image-73.png)
La configuration se lance
![alt text](./images/image-75.png)
Un résumé des opérations s'affiche.
![alt text](./images/image-76.png)

### Sauvegarde de la configuration

Dans le menu **Backup Configuration**
![alt text](./images/image-78.png)

- Dans la fenêtre Configuration Backup Settings
- Cochez la case **Enable** configuration backup to the following repository pour activer la fonction.
- Dans le champ Backup repository, sélectionnez le Backup Repository sur lequel enregistrer les sauvegardes de la configuration, si possible en dehors du Backup Server lui-même.
- Indiquez le nombre de points de restauration à garder, ou laissez 10 par défaut.
- Cliquez sur le bouton Schedule... pour personnaliser la planification de la sauvegarde.
- Cliquez sur le bouton Backup now pour démarrer la sauvegarde immédiatement.
- Cochez la case Encrypt configuration backup pour activer le chiffrement du fichier de sauvegarde.
Dans la liste du champ Password, sélectionnez un mot de passe à utiliser pour le chiffrement/déchiffrement du fichier de sauvegarde.
![alt text](./images/image-77.png)
 Si nécessaire, cliquez sur le bouton Add... pour ouvrir le gestionnaire de mot de passe et pour ajouter un mot de passe spécifique.
Si un mot de passe est présent dans le gestionnaire de mot de passe mais que le chiffrement est désactivé, alors la sauvegarde de la configuration sera automatiquement désactivée. Cette obligation résulte d’une contrainte de sécurité : s’il y a un mot de passe dans le gestionnaire de mot de passe, c’est qu’un job de sauvegarde utilise le chiffrement des données traitées par Veeam (autrement dit des données sensibles). Un fichier de sauvegarde de configuration sans chiffrement peut être ouvert par n’importe quel Backup Server. Ce qui présente donc un risque de sécurité. Il est donc recommandé de toujours activer le chiffrement de la sauvegarde de la configuration.

### Restauration de la configuration

Sur la page Restore Mode, sélectionnez l’option Restore si vous souhaitez restaurer la configuration d’un Backup Server suite à un dysfonctionnement, ou bien sélectionnez Migrate dans le cas d’une migration planifiée vers un nouveau Backup Server.
![alt text](./images/image-79.png)
Sur la page Configuration Backup, dans la liste de choix du champ Backup repository, sélectionnez le Backup Repository où se trouve le fichier de sauvegarde.

- Cliquez sur le bouton Browse... pour ouvrir l’explorateur de fichiers et indiquer à Veeam l’emplacement du fichier de sauvegarde.
- Cliquez sur le bouton Analyze pour analyser le contenu du fichier.
 ![alt text](./images/image-80.png)
Sur la page Backup Contents, Veeam affiche les paramètres du fichier de sauvegarde. Cliquez sur le bouton **Next** .
![alt text](./images/image-81.png)
Sur la page Password, indiquez le mot de passe renseigné à la création de la sauvegarde.
Cliquez sur le bouton Validate > pour vérifier le mot de passe et déchiffrer ainsi le fichier de sauvegarde.
![alt text](./images/image-82.png)
Sur la page Target Database, indiquez les informations de la base de données où écrire/réécrire les données contenues dans le fichier de sauvegarde.
![alt text](./images/image-83.png)
Veeam désactive toujours l’ensemble des jobs après une restauration de la configuration pour éviter une exécution à un moment inopportun. Pensez donc à les réactiver une fois que toute l’infrastructure est opérationnelle.

### Configuration d'un compte mail pour les alertes

Aller dans le menu > **Options**
![alt text](./images/image-84.png)
Dans l'onglet **Email Settings**, renseigner les informations de connexion.
![alt text](./images/image-85.png)

## Utilisation de Veeam Backup & Réplication

### Création d'un job de sauvegarde

Nous allons configurer un job pour sauvegarder un ordinateur Windows.
**Backup Job** > **Windows Computer**

### Restauration de fichier

### Restauration d'une machine complète

### Sauvegarde VM Hyper-V

### Restauration VM Hyper-V
