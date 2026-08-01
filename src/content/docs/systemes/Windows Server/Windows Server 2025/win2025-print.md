---
title: "Windows Server - Serveur d'impression"
tableOfContents: false
sidebar:
  label: "Windows Server - Serveur d'impression"
date: 2025-12-21
slug: win2025-print-server
tags:
  - Windows
  - Active Directory
authors:
  - Karim
featured: true
---
Voilà ma problématique, j'ai reçu des nouvelles imprimantes pour mes salles de classe. Je souhaite les installer et les partager sur le réseau pour que les enseignants et les étudiants puissent les utiliser facilement. Comment puis-je configurer un serveur d'impression sur Windows Server 2025 pour gérer ces imprimantes et les partager avec les utilisateurs de mon domaine Active Directory ?

Pour configurer un serveur d'impression sur Windows Server 2025 et partager les imprimantes avec les utilisateurs de votre domaine Active Directory, suivez ces étapes :

## Configuration du rôle de serveur d'impression

Depuis le gestionnaire de serveur, cliquez sur "Ajouter des rôles et fonctionnalités". 

![alt text](./images/win2025-print-1779183273773.png)

Sélectionnez "Rôle basé ou installation de fonctionnalités" et choisissez votre serveur. Ensuite, cochez la case "Serveur d'impression et de numérisation de document" 

![alt text](./images/win2025-print-1779183371017.png)

Suivez les instructions pour installer le rôle et cocher uniquement `Serveur d'impression`

![alt text](./images/win2025-print-1779183461429.png)

Terminez par `Ìnstaller`.

Lorsque l'installation est terminée, cliquez sur "Fermer".

Depuis les outils d'administration, ouvrez "Gestion de l'impression".



## Ajout d'une imprimante

Dans la console de gestion de l'impression, nous allons configurer une première imprimante pour la rendre disponible sur le réseau.

Dans un premier temps,, nous allons ajouter l'imprimante à notre serveur d'impression. Cliquez sur "Ajouter une imprimante" dans le serveur d'impression.

![alt text](./images/win2025-print-1779183989125.png)

On va ensuite ajouter l'mprimante via son adresse IP.

![alt text](./images/win2025-print-1779184096592.png)

Il faut donc saisir l'adresse IP de l'imprimante, puis cliquer sur "Suivant".

![alt text](./images/win2025-print-1779184209624.png)

Nous allons ensuite choisir d'installer le pilote de l'imprimante. Si le pilote est disponible dans la liste, sélectionnez-le. Sinon, vous pouvez cliquer sur "Disque fourni" pour installer le pilote à partir d'un fichier.

![alt text](./images/win2025-print-1779184365390.png)

![alt text](./images/win2025-print-1779184550013.png)

Nommer ensuite l'imprimante et cliquer sur "Suivant".

![alt text](./images/win2025-print-1779184588990.png)

L'installation se lance puis vous pouvez imprimer une page de test pour vérifier que l'imprimante fonctionne correctement.

![alt text](./images/win2025-print-1779184633679.png)

L'imprimante est maintenant ajoutée à votre serveur d'impression et prête à être partagée avec les utilisateurs de votre domaine Active Directory.

![alt text](./images/win2025-print-1779184715210.png)

