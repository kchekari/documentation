---
title: "Installation rôle Hyper-V 2025"
tableOfContents: true
sidebar:
  label: "Hyper-V Installation"
date: 2025-12-10
tags:
    - Windows Server
authors:
 - Karim
featured: true
---
:::note
Fonctionnalité testé Windows Server 2025
:::

:::caution
Il est déconseillé d'installer le role Hyper-V sur un controleur de domaine.
:::

Dans le **gestionnaire de serveur**
Ajouter des rôles et fonctionnalités
![alt text](./images/image.png)
Valider avec **Suivant** jusqu'à la selection des rôles :
![alt text](./images/image-1.png)
Cocher **Hyper-V**
![alt text](./images/image-2.png)
N'ajoutez pas de fonctionnalités supplémentaires.
![alt text](./images/image-3.png)
Choisir de créer un commutateur virtuel
![alt text](./images/image-4.png)
La migration d'ordinateur virtuel est utile uniquement si vous avez plusieurs Hyper-V
![alt text](./images/image-5.png)
Choisir maintenant l'emplacement de stockage des VM et des disques virtuels
![alt text](./images/image-6.png)
L'installation se lance
![alt text](./images/image-7.png)

Une fois l'installation terminée, vous avez accès au gestionnaire Hyper-V.
