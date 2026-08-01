---
title: "Windows Server 2025 - Sauvegarde avec TrueNas iSCSI LUN"
tableOfContents: true
sidebar:
  label: "Windows Server - Sauvegarde"
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
Fonctionnalité testé avec un LUN iSCSI TrueNAS 13.0-U6.8
:::

## Pré-requis
- Un serveur Windows Server 2025
- Un serveur TrueNAS avec un LUN iSCSI configuré et accessible depuis le serveur Windows Server 2025
- Droits administrateurs sur le serveur Windows Server 2025 

## Étapes de configuration
1. Ouvrez le **Gestionnaire de serveur** sur votre serveur Windows Server 2025.
2. Cliquez sur **Ajouter des rôles et des fonctionnalités**.
3. Suivez l'assistant jusqu'à la section **Sélection des fonctionnalités**.
4. Cochez la case **Sauvegarde Windows Server** et cliquez sur **Suivant**.

![alt text](images/image.png)

5. Cliquez sur **Installer** pour ajouter la fonctionnalité.
6. Une fois l'installation terminée, redémarrez le serveur si nécessaire.

## Configuration de la sauvegarde
1. Ouvrez le **Gestionnaire de Sauvegarde Windows Server** depuis le menu Démarrer.

![alt text](images/image-1.png)
2. Cliquez sur **Planification de sauvegarde** dans le panneau de droite.
![alt text](images/image-2.png)
3. Choisir la configuration de sauvegarde souhaitée (ex: Sauvegarde complète, Sauvegarde différentielle).
![alt text](images/image-3.png)
4. Mettre une fréquence de sauvegarde (ex: quotidienne, hebdomadaire).
![alt text](images/image-4.png)
5. Choisir une sauvegarde vers un disque dur dédié aux sauvegardes.
:::caution
Assurez-vous que le LUN iSCSI est monté et accessible avant de continuer.
Il ne doit pas être partitionné ou formaté.
:::
![alt text](images/image-5.png)
6. Choisir le LUN iSCSI TrueNAS comme destination de sauvegarde.
![alt text](images/image-6.png)
Puis, terminer l'assistant de configuration.
![alt text](images/image-7.png)
Un message de confirmation s'affiche.
![alt text](images/image-8.png)

Au bout de quelques jours, vous devriez voir les sauvegardes planifiées s'exécuter automatiquement selon la fréquence définie.
![alt text](images/image-12.png)

## Faire une sauvegarde manuelle
Pour faire une sauvegarde unitaire, dans le **Gestionnaire de Sauvegarde Windows Server**, cliquez sur **Sauvegarde unique** dans le panneau de droite.
Vous pouvez choisir d'utiliser les options de sauvegarde planifiée ou de configurer une nouvelle sauvegarde manuelle.
![alt text](images/image-9.png)
Cela permet de lancer immédiatement une sauvegarde sans attendre la prochaine planification.
![alt text](images/image-10.png)
:::note
Le disque n'apparait plus dans l'explorateur de fichiers une fois utilisé pour les sauvegardes.
![alt text](images/image-11.png)
:::

## Restauration des données (fichiers)
Nous avons vu comment faire une sauvegarde, mais il est aussi important de savoir comment restaurer les données en cas de besoin.
Le premier scénario est la restauration de fichiers individuels.
Ouvrez le **Gestionnaire de Sauvegarde Windows Server**.
Cliquez sur **Récupérer** dans le panneau de droite.
![alt text](images/image-13.png)

Choisir la date de sauvegarde à restaurer.
![alt text](images/image-14.png)

Il existe plusieurs options de restauration. Pour restaurer des fichiers individuels, sélectionnez **Fichiers et dossiers**.
![alt text](images/image-15.png)

Il faut maintenant parcourir les sauvegardes pour trouver les fichiers à restaurer.
Sélectionnez les fichiers ou dossiers souhaités et cliquez sur **Suivant**.
![alt text](images/image-16.png)

Il est possible de choisir l'emplacement de restauration : emplacement d'origine ou un autre emplacement.
Sélectionnez l'option souhaitée et cliquez sur **Suivant**.
![alt text](images/image-17.png)

Puis, **Récupérer**
![alt text](images/image-18.png)

Le fichier est restauré.
![alt text](images/image-19.png)

## Restauration des données sur un autre serveur

Pour restaurer des données sur un autre serveur, vous devez d'abord vous assurer que le serveur cible a accès au LUN iSCSI contenant les sauvegardes.

![alt text](images/image-20.png)

Ouvrez le **Gestionnaire de Sauvegarde Windows Server** sur le serveur cible.
Cliquez sur **Récupérer** dans le panneau de droite.

Choisir un autre emplacement de restauration.
![alt text](images/image-21.png)

Puis, lecteur locaux.

![alt text](images/image-22.png)

On voit apparaitre le LUN iSCSI avec les sauvegardes.
![alt text](images/image-23.png)

Choisir le serveur dont on souhaite restaurer les données.
![alt text](images/image-24.png)

Choisir la date de sauvegarde à restaurer.
![alt text](images/image-25.png)

L'étape suivante est de choisir le type de restauration.
- Sélectionnez **Fichiers et dossiers** pour restaurer des fichiers individuels.
- **Volumes** pour restaurer des volumes entiers.
- **Applications** pour restaurer des applications spécifiques.
- **Etat du système** pour restaurer l'état complet du système.

Nous allons choisir **Fichiers et dossiers**.
![alt text](images/image-26.png)

Séléctionner les fichiers ou dossiers à restaurer.
![alt text](images/image-27.png)

Vous avez la possibilité de choisir l'emplacement de restauration : emplacement d'origine ou un autre emplacement.
Sélectionnez l'option souhaitée et cliquez sur **Suivant**.
![alt text](images/image-28.png)

Confirmer pour lancer la restauration.
![alt text](images/image-29.png)

Les fichiers sont restaurés sur le serveur cible.
![alt text](images/image-30.png)

## Restauration complète d'un serveur

Pour restaurer complètement un serveur, vous devez démarrer à partir du support d'installation de Windows Server et choisir l'option de récupération.
Sinon, vous pouvez redémarrer en mode DSRM (Directory Services Restore Mode) si vous restaurez un contrôleur de domaine.
- Lancer msconfig
- Choisir un boot normal
- Cocher l'option DSRM
- Redémarrer le serveur

![alt text](images/image-31.png)
Le redémarrage se fait en mode sans echec
![alt text](images/image-32.png)
Nous allons lancer la restauration à partir du stockage iSCSI.
![alt text](images/image-33.png)
Pour restaurer le système complet, avec la fonctionnalité AD DS, il faut choisir l'option **Etat du système**.
![alt text](images/image-34.png)
Pour que la partie AD DS soit restaurée correctement, il faut cocher **Effectuer une restauration faisant autorité des fichiers Active Directory**.
![alt text](images/image-35.png)
On coche le redé&marrage automatique après la restauration.
![alt text](images/image-36.png)
On dit oui à tous les messages d'avertissement.
![alt text](images/image-37.png)
Attention ! la restauration complète va écraser toutes les données actuelles du serveur cible.
Et après, le redémarrage du serveur, le mode DRSM est toujours actif.
Il faut se connecter en mode administrateur DSRM.
![alt text](images/image-38.png)
Et la restauration doit s'être déroulée correctement.
![alt text](images/image-39.png)
Rebasculer en mode normal avec msconfig.
Redémarrer le serveur.
![alt text](images/image-40.png)

Le serveur est restauré et contient les infos du serveur source (Nom, IP, module, domaine …)
![alt text](images/image-42.png)