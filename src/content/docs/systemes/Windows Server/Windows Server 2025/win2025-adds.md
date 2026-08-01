---
title: "Windows Server 2025 - Ajout le rôle AD-DS"
tableOfContents: true
sidebar:
  label: "Windows Server - Rôle AD-DS"
date: 2025-12-17
tags:
    - Windows
authors:
 - Karim
featured: true
---
Dans le gestionnaire de serveur, cliquer sur Ajouter des rôles et fonctionnalités.

Avant d’installer le rôle AD-DS, **il faut bien s’assurer d’avoir mis la bonne configuration IP et le bon nom du serveur. Ils ne pourront plus être modifié après.**

## Ajout du rôle

![alt text](images/win2025-adds-1765997392633.png)

On valide l’étape, Suivant.

![alt text](images/win2025-adds-1765997416434.png)

On laisse ensuite l’option par défaut.

![alt text](images/win2025-adds-1765997428505.png)

On vérifie ensuite que notre serveur est bien dans la liste.

![alt text](images/win2025-adds-1765997437891.png)

On va ensuite cocher Services de domaine Active Directory.

![alt text](images/win2025-adds-1765997449401.png)

Pas de fonctionnalités supplémentaires.

![alt text](images/win2025-adds-1765997457615.png)

On termine par valider les écrans suivants

![alt text](images/win2025-adds-1765997466188.png)

Installer

![alt text](images/win2025-adds-1765997473981.png)

## Configuration Post-installation

Dans le gestionnaire de serveur, il faut maintenant promouvoir le serveur en tant que contrôleur de domaine.

![alt text](images/win2025-adds-1765997502466.png)

Dans le premier écran, nous allons choisir de créer une nouvelle forêt.

![alt text](images/win2025-adds-1765997509715.png)

Pour plus de sécurité, nous allons choisir le niveau fonctionnel Windows Server 2025.

Il faut également saisir le mot de passe de restauration des services d’annuaire (à conserver impérativement).

On valide ensuite les écrans suivants :

![alt text](images/win2025-adds-1765997515263.png)

![alt text](images/win2025-adds-1765997536078.png)

![alt text](images/win2025-adds-1765997561983.png)

![alt text](images/win2025-adds-1765997582433.png)

La vérification de la configuration permet de s’assurer que le serveur a bien les prérequis pour être un contrôleur de domaine.

![alt text](images/win2025-adds-1765997602895.png)

La vérification faite, nous pouvons lancer l’installation.

![alt text](images/win2025-adds-1765997611362.png)

Une fois installé, le serveur va redémarrer et l’administrateur local deviendra administrateur du domaine.

![alt text](images/win2025-adds-1765997621308.png)
